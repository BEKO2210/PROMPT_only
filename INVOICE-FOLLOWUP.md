# INVOICE-FOLLOWUP — Eskalierende Mahnungs-Sequenz (interner Hebel)

Generates the right reminder at the right tone at the right time for
unpaid invoices: gentle at +7 days, firmer at +14, final-notice at
+21, legal-trigger at +30. Most consultants either nag too early
(annoy clients) or wait too long (cash-flow crisis). This calibrates.

**Leverage value: prevents AR write-offs and cash-flow gaps.
For consultants with €10–50k/month outstanding, properly handled AR
is the difference between viable and not.**

---

## How to use

Paste the block below, then on the next line:

    INVOICE: <invoice number, amount, original date, due date>
    CLIENT: <legal entity + AP contact + commercial contact>
    HISTORY: <prior reminders sent if any; client communications>
    RELATIONSHIP: <STRONG (long-term client) | NEUTRAL | TRANSACTIONAL>
    JURISDICTION: <governing law of the engagement>

---

## The prompt (copy from here)

```
You are producing an invoice-followup message. The §6 MESSAGE is
the deliverable. Three rules:

(1) ASSUME GOODWILL FIRST. Most late payments are administrative
    (lost invoice, AP queue, approval bottleneck), not intent.
    Tone in early stages reflects this.
(2) ESCALATE PREDICTABLY. Tone hardens on a schedule. Both
    parties know what week 4 looks like by week 1.
(3) DOCUMENT FOR LEGAL. Every message becomes evidence if it
    escalates. Phrase accordingly.

1. DAYS-PAST-DUE CALCULATION
   - Original invoice date
   - Due date per terms (NET 14 / 30 / 45)
   - Today's date
   - Days past due = today - due date
   This drives the §3 stage selection.

2. STAGE SELECTION
   - DAY 0 (day invoice is due — proactive reminder):
     Friendly heads-up. Often unnecessary if relationship is
     strong but warranted with new clients.
   - DAY +3 to +7 (gentle):
     Assume admin oversight. Soft check-in.
   - DAY +10 to +14 (firm but warm):
     Direct request, confirm receipt, offer help routing
     internally.
   - DAY +18 to +21 (formal):
     Cite invoice, terms, days past due. State next step.
   - DAY +25 to +30 (final notice):
     Pre-legal language. Cite consequences (statutory interest,
     suspension of services, debt-collection escalation per
     contract terms).
   - DAY +30 (collection escalation):
     Hand off to debt-collection / lawyer. This is a separate
     document.

3. RELATIONSHIP CALIBRATION
   - STRONG: tone softer one step longer at each stage. Reach out
     personally (phone or in-person) at DAY +14.
   - NEUTRAL: standard escalation timeline
   - TRANSACTIONAL: tighter escalation. Standard timeline minus
     3–5 days per stage.

4. PRIOR-COMMUNICATION CHECK
   From HISTORY, identify:
     - Has client acknowledged the invoice?
     - Has client raised any dispute or question?
     - Has client committed to a payment date that's now passed?
   Each affects tone. A client who promised "Friday" and is now
   on the following Wednesday gets a different message than one
   who has been silent.

5. PAYMENT-FRICTION REMOVAL
   Every reminder offers maximum convenience:
     - Re-attach the invoice (admin loss is the #1 cause of "late")
     - Pre-populated payment link if available (Stripe, GoCardless,
       SEPA, Wise)
     - Bank details with reference number (for wire transfer)
     - Alternative payment methods if relevant (card, BNPL, split
       payment)
   Friction in paying = excuses to delay.

6. MESSAGE  ← the deliverable
   Per §2 stage, the appropriate message:

   --- STAGE: GENTLE (DAY +3 to +7) ---
   **Subject:** Invoice <#> — quick check-in

   Hi <name>,

   Just a friendly follow-up on invoice <#> for <€X>, originally
   due on <date>. I want to make sure it didn't get lost.

   Re-attaching for convenience. Payment details:
   - Bank: <…>
   - IBAN: <…>
   - Reference: <invoice number>
   - Or pay by card: <link>

   Let me know if there's anything I can help with — happy to
   re-send to a different contact or split the payment if helpful.

   <signature>

   --- STAGE: FIRM (DAY +10 to +14) ---
   **Subject:** Invoice <#> — action needed

   Hi <name>,

   Following up on invoice <#> for <€X>, which is now <X> days
   past its <date> due date.

   Could you confirm receipt and the expected payment date?
   If there's an internal approval step pending, point me to the
   right contact and I'll route the invoice directly.

   Invoice re-attached. Payment details as before.

   <signature>

   --- STAGE: FORMAL (DAY +18 to +21) ---
   **Subject:** Invoice <#> overdue — please confirm payment date

   Hi <name>,

   Invoice <#> for <€X>, dated <date>, was due on <due date> per
   our agreement of <engagement reference>. It is now <X> days
   past due.

   Could you please confirm by <date + 3 business days>:
   1. That the invoice has been received and processed
   2. The expected payment date

   Per our standard terms, statutory default interest accrues
   from the due date. We prefer not to apply it — a quick
   resolution avoids that step.

   Please reply to confirm.

   <signature>

   --- STAGE: FINAL NOTICE (DAY +25 to +30) ---
   **Subject:** Final notice — invoice <#>

   <name>,

   Invoice <#> for <€X>, due <due date>, is now <X> days past
   due. Despite our previous reminders on <date 1> and <date 2>,
   payment has not been received and no payment date has been
   confirmed.

   If payment or a confirmed payment plan is not received by
   <date + 7 days>, we will:
   - Apply statutory default interest from the original due date
     (per JURISDICTION law)
   - Suspend further work on <engagement>
   - Escalate to <our collection partner / legal counsel> per
     our engagement terms

   We would much rather resolve this directly with you. Please
   reply today with the expected payment date or to discuss any
   issue blocking payment.

   <signature>

   --- END MESSAGES ---

7. PARALLEL ACTIONS
   - DAY +14: phone call (if RELATIONSHIP allows) — humans pay
     humans faster than systems pay systems
   - DAY +21: cc commercial contact (not just AP)
   - DAY +30: hand to collection / legal partner

HARD RULES
- Tone calibrated to STAGE × RELATIONSHIP. Don't send DAY +3
  GENTLE if the client has been silent for 30 days.
- Every message removes friction (invoice attached, payment
  details, alternative methods).
- Reference statutory default interest per JURISDICTION accurately
  — for EU consultants, this is Late Payment Directive 2011/7/EU;
  for UK, Late Payment of Commercial Debts Act; for US, varies
  by state.
- Phone call at DAY +14 is a separate suggested action, not in
  the email itself.
- Respond in the language of the CLIENT input.

INVOICE:
CLIENT:
HISTORY:
RELATIONSHIP:
JURISDICTION:
```

---

## What you get

A stage-appropriate reminder ready to send. Run on each unpaid
invoice the day it crosses its next escalation threshold. Most
consultants under-collect 5–15% of invoiced revenue per year through
weak follow-up; structured escalation closes that gap.
