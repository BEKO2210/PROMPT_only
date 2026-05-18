# FORM-OPTIMIZER — Form-Audit (verkaufbares Deliverable)

Audit of every form on a website (signup, contact, checkout, lead-gen,
support). Every additional field drops conversion ~3–7%. Most forms
have 2–5 fields too many, sub-optimal labels, no validation, broken
mobile keyboards. This finds the leaks fast.

**Realistic engagement price: €500 – 2 500.**

---

## How to use

Paste the block below, then on the next line:

    URL: <site / specific forms — list URLs>
    FORMS: <which forms in scope: signup / contact / checkout / etc.>
    GOAL: <what conversion the forms drive>
    CLIENT: <client name>

---

## The prompt (copy from here)

```
You are producing a Form Audit. The §8 REPORT is the deliverable.
Three rules:

(1) Every field has a justification or it gets cut. "We collect it
    because we always have" is not a justification — it's a 3–7%
    conversion tax per field.
(2) Label clarity beats clever phrasing. Forms are utility, not
    marketing.
(3) Mobile defaults matter. Wrong input type = wrong keyboard =
    abandoned form.

1. FORM INVENTORY
   Walk in-scope forms. Per form:
     - URL + form name / purpose
     - Field list (label, type, required/optional, validation,
       placeholder, help-text)
     - Submit button label
     - Where submission goes (next page, modal, success state)
     - Whether the form is the page's primary conversion or
       secondary

2. FIELD-COUNT AUDIT  (the most-leveraged finding)
   Per form, walk each field:
     - Is it strictly necessary to complete the GOAL?
     - Can it be deferred to AFTER signup (progressive profiling)?
     - Can it be inferred (geo-IP for country, browser language)?
     - Can it be combined (single "Full name" vs "First" + "Last")?
   Recommend the minimum viable form. Typical wins:
     - Signup: email-only (vs email+name+company+role) often lifts
       conversion 20–50%
     - Contact: name + email + message (vs name + email + company
       + role + phone + message + "how did you hear about us")
     - Checkout: skip phone if shipping doesn't require it

3. LABEL & PLACEHOLDER AUDIT
   - Labels ABOVE fields, not floating-placeholder-only (a11y +
     completion-rate fail)
   - Placeholders for FORMAT EXAMPLES, not for labels ("Email" is
     a label; "you@company.com" is a placeholder)
   - Required fields marked clearly (asterisk or explicit "(required)")
   - Optional fields marked too (asymmetry tells users which to
     skip)

4. VALIDATION AUDIT
   - Inline validation on blur (not on submit only)
   - Error messages helpful ("Email needs an @" not "Invalid")
   - Format examples in placeholders
   - Soft validation for ambiguous fields (warn, don't block, on
     phone number formats)
   - Loose phone-number / postal-code parsing (international users)

5. MOBILE INPUT-TYPE AUDIT  (often-overlooked, easy wins)
   For each field, the right HTML5 type / inputmode:
     - `type="email"` for email (triggers @ keyboard)
     - `type="tel"` for phone (numeric keypad)
     - `inputmode="numeric"` for numeric fields
     - `type="password"` for passwords
     - `type="date"` (native date picker; sometimes worse than
       three selects — test)
     - `autocomplete` attributes: `email`, `given-name`,
       `family-name`, `street-address`, `postal-code`, `country`,
       `cc-number`, `tel`, etc.
   Missing autocomplete attributes are a major mobile-conversion
   tax.

6. SUBMIT-BUTTON AUDIT
   - Verb + outcome ("Get my report" / "Create my account") not
     "Submit"
   - Visually prominent
   - Disabled state when form invalid (with helpful tooltip)
   - Loading state on submit (prevents double-click duplicate
     submissions)
   - Single submit button (no competing "Cancel" of equal weight)

7. POST-SUBMISSION AUDIT
   - Confirmation visible immediately
   - Next-step clear ("Check your inbox" / "We'll respond within
     2 business hours")
   - No data loss on failure (preserve fields on validation error)
   - No double-submission risk

8. PRIVACY / COMPLIANCE  (DSGVO / CASL / CAN-SPAM)
   - Privacy reassurance near submit ("We never share your email")
   - Marketing-consent checkbox (unticked by default — DSGVO opt-in)
   - Link to privacy policy
   - Cookie banner not blocking form

9. REPORT  ← the deliverable
   --- REPORT START ---
   # Form Audit — <Client>
   **Date:** <…>   **Forms audited:** <…>

   ## Executive Summary             (≤250 words: top 3 fixes by
                                     expected lift, total field
                                     reductions recommended)
   ## Form Inventory                (§1, table)
   ## Field-Count Recommendations   (§2 — per form, before/after
                                     field count + expected lift)
   ## Labels & Placeholders         (§3)
   ## Validation                    (§4)
   ## Mobile Input Types            (§5 — quick-win list)
   ## Submit Button                 (§6)
   ## Post-Submission UX            (§7)
   ## Privacy & Compliance          (§8)
   ## Prioritised Fix List          (each: form + field + current +
                                     recommended + effort)
   ## Limitations                   (§10, verbatim)
   --- REPORT END ---

10. LIMITATIONS & DISCLAIMER  (mandatory, verbatim with substitutions)
    "This audit was produced by an AI agent on <date> from analysis
     of <URLs> as visible at audit time. Form completion-rate lift
     estimates apply industry benchmarks (~3–7% lift per field
     removed, ~10–20% lift from common UX fixes); actual lifts
     vary with audience, form context, and traffic source.
     Field-removal recommendations assume the data is genuinely
     unnecessary for the GOAL — verify with business owners before
     removing fields that may be required for downstream processes
     (CRM segmentation, sales qualification, regulatory record-
     keeping)."

HARD RULES
- Every field-removal recommendation has an expected lift estimate
  with reasoning.
- Mobile input-type / autocomplete-attribute findings are listed
  separately (they're quick wins — devs implement in an afternoon).
- Privacy / consent recommendations flag the specific regulation
  triggering them (DSGVO Art. 7, CASL §6.6, etc.).
- Respond in the language of the AUDIENCE / CLIENT input.

URL:
FORMS:
GOAL:
CLIENT:
```

---

## What the buyer gets

A focused 10–15 page audit with a prioritised fix list. The
field-removal recommendations are the single largest lift; the
autocomplete-attribute additions are the easiest wins (one-line code
changes, 5–10% mobile conversion lift typical). Together: usually a
20–40% form-completion improvement at typical sites.
