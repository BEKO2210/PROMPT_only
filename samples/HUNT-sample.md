# Sample: HUNT applied to a recurring data-corruption bug

**Source prompt:** `HUNT.md`
**BUG input:** *"Some user orders show line items with quantity = 0
in the order-confirmation email, but the database shows the correct
quantity. Customer support has logged 47 tickets in 6 weeks."*

This is the artefact the agent produced. The discipline: no fix
until the bug is reproduced deterministically.

---

## 1. SYMPTOM

Customer complaint (verbatim from ticket #4-1187, redacted):
> "I ordered 3 of the wireless headphones but my confirmation
> email says quantity 0 next to them. I called and you said the
> order is fine — but I want to know what you actually charged me."

The on-call confirms: in the affected orders, `orders.lineitems`
table shows `quantity: 3`, but the email rendered shows `0`.

## 2. REPRO

The bug doesn't reproduce on demand. After tracing 12 of the 47
ticketed orders, all share:
- Order created via the mobile app (not web)
- Cart contained ≥ 2 distinct items
- Customer applied a promo code mid-checkout
- Email sent within 60 seconds of order placement

Reproducer (`tests/integration/test_email_quantity.py::test_promo_race`):

```python
def test_promo_race():
    cart = create_cart(items=[(SKU_A, 3), (SKU_B, 1)])
    order_promise = async_place_order(cart)
    apply_promo_code(cart, "SUMMER20")  # races with order placement
    order = order_promise.result()
    email = await render_confirmation_email(order.id)
    assert email.line_items[0].quantity == 3  # FAILS: shows 0
```

Running it:
```
$ pytest tests/integration/test_email_quantity.py::test_promo_race
FAILED — expected 3, got 0
```

Reproducer is green-fails. Proceeding.

## 3. ISOLATE

`git bisect` against the failing test, between last-green tag
`v3.4.1` and `main`:

```
$ git bisect start main v3.4.1
$ git bisect run pytest tests/integration/test_email_quantity.py::test_promo_race
...
bisect found: a1f3c8d "Refactor: extract promo application
from order placement (#1812)"
```

PR #1812 split a single transaction into two: order placement
inserts the order, then a separate goroutine applies the promo.
The email render fires on the order-placement completion, not
after promo application.

## 4. CAUSE

When the email-render reads `lineitems`, the promo-application
goroutine has already written a *pending revision* of the line
items with `quantity: 0` (a marker for "promo is recalculating
this line"), but hasn't yet finished and overwritten with the
final quantity. The email reads the pending row.

This is a read-during-write race, not a stale-cache or a logic
bug.

## 5. PROBE

Add an instrumentation log to verify the hypothesis:

```python
# services/order/lineitems.py:78
def get_lineitems_for_email(order_id):
    rows = db.query("SELECT * FROM lineitems WHERE order_id=?", order_id)
    for row in rows:
        if row.status == "pending_promo_recalc":
            log.warn("EMAIL_READING_PENDING_LINEITEM",
                     order_id=order_id, sku=row.sku, qty=row.quantity)
    return rows
```

Re-run the §2 reproducer 10 times:

```
$ pytest tests/integration/test_email_quantity.py::test_promo_race --count=10
9 of 10 runs logged EMAIL_READING_PENDING_LINEITEM with qty=0.
```

Hypothesis confirmed. The fix isn't "don't render the email yet"
(that creates a different bug — delayed emails). The fix is
"render against the final state."

## 6. FIX

Minimal diff in `services/order/lineitems.py:78`:

```python
def get_lineitems_for_email(order_id):
    # Wait for any pending promo recalculation before reading
    wait_for_lineitem_settlement(order_id, timeout=2.0)
    rows = db.query("SELECT * FROM lineitems WHERE order_id=? "
                    "AND status='settled'", order_id)
    return rows
```

`wait_for_lineitem_settlement` already exists in the codebase
(used by the invoice-generator for the same reason). Reusing it,
not adding new abstraction.

## 7. RE-REPRO

```
$ pytest tests/integration/test_email_quantity.py::test_promo_race --count=20
20 of 20 PASS.

$ pytest tests/integration/test_email_quantity.py::test_promo_race \
    --count=100 --workers=4
100 of 100 PASS.
```

Original failing reproducer now passes consistently under
concurrency.

## 8. REGRESSION

Test was already added in §2 — keeping it permanently in the
CI suite. Plus a stricter version:

```python
def test_promo_race_with_email_render():
    """Regression: rendered email must reflect settled line items."""
    cart = create_cart(items=[(SKU_A, 3), (SKU_B, 1)])
    order = place_order_with_promo(cart, "SUMMER20")
    email = render_confirmation_email(order.id)
    for line in email.line_items:
        assert line.quantity > 0, \
            f"Email shows qty=0 for {line.sku}; lineitems table shows " \
            f"{db_get_qty(order.id, line.sku)}"
```

Both tests added to `tests/integration/`, both green on `main`.

---

*Total agent time: ~40 minutes wall-clock, ~32 tool calls.
Result: 0 new tickets matching the symptom in the 8 weeks
following the fix. The 47 prior tickets were resolved by a
batch re-render of the affected emails (separate ticket).*
