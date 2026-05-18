# EMAIL-SEQUENCE — Cold-Outreach oder Nurture-Sequenz (verkaufbares Deliverable)

Produces a complete multi-email sequence: cold outreach (B2B
prospecting), lead nurture (post-signup before sales call), onboarding
(post-purchase activation), or re-engagement (dormant users). Includes
subject-line variants, send timing, and reply-handling rules.

**Realistic engagement price: €1 000 – 5 000 per sequence.**

---

## How to use

Paste the block below, then on the next line:

    TYPE: <COLD_OUTREACH | NURTURE | ONBOARDING | RE_ENGAGEMENT>
    AUDIENCE: <ICP — role, company, awareness stage, pain>
    OFFER: <what you want them to do at the end of the sequence>
    SENDER: <name, role, company, voice>
    LENGTH: <number of emails — typically 4–7>
    CONSTRAINTS: <DSGVO / CASL / CAN-SPAM compliance notes>
    PROOF: <verbatim case studies, metrics, testimonials available>

---

## The prompt (copy from here)

```
You are producing a complete email sequence. Three deliverables:
§7 SEQUENCE (the emails), §8 SUBJECT-LINE BANK (variants for A/B
testing), §9 REPLY-HANDLING PLAYBOOK.

Three rules:

(1) Subject line decides open. Body decides reply. CTA decides
    conversion. Optimise each layer independently.
(2) Specificity beats personalisation theatre. "Hi {{FirstName}},
    I noticed you work at {{Company}}" is the worst pattern in 2026.
    A single sentence proving you actually researched them beats
    every variable merge.
(3) Compliance is binary. EU outreach needs lawful basis (DSGVO);
    Canada needs explicit consent (CASL); US needs unsubscribe +
    physical address (CAN-SPAM). Get this wrong and the sender
    domain gets blacklisted.

1. STRATEGY PER TYPE
   - COLD_OUTREACH: low-volume, high-personalisation; the goal of
     email 1 is a reply, not a meeting. Sequence value is in
     consistent useful touch over 3–6 weeks.
   - NURTURE: post-signup, pre-buy. Teach, build trust, prove
     credibility. Soft conversion at the end.
   - ONBOARDING: post-purchase. Activation moments — get them to
     value as fast as possible. Each email maps to one product
     action.
   - RE_ENGAGEMENT: dormant users. Acknowledge absence, reset
     expectations, offer one clear path back.

2. SEQUENCE ARCHITECTURE
   Standard 5-email sequences:

   COLD_OUTREACH (over 3–4 weeks):
     1. Day 1 — Personalised opener, soft ask (low commitment)
     2. Day 4 — Value-add (insight, asset, framework) with no ask
     3. Day 10 — Case study (named result for similar buyer)
     4. Day 18 — Different angle, harder ask (calendar link)
     5. Day 28 — Breakup ("If now isn't right, when should I follow
        up?")

   NURTURE (over 2 weeks):
     1. Day 0 — Welcome + the one thing they should do first
     2. Day 2 — Education content matching their stated interest
     3. Day 5 — Social proof (case study, customer story)
     4. Day 9 — Objection-handling (FAQ-style)
     5. Day 14 — Conversion ask + risk reversal

   ONBOARDING (timed to product milestones, not days):
     1. Within 1h — Welcome + first action (the AHA moment)
     2. After first action — Reinforce + next action
     3. Day 2 if no action — Help / re-activate
     4. Day 7 — Use-case expansion (what else can they do)
     5. Day 14 — Power-user tips OR upgrade prompt

   RE_ENGAGEMENT (over 1 week):
     1. Day 0 — "It's been a while" + remind value
     2. Day 3 — New thing since they last used it
     3. Day 7 — Final ask / unsubscribe option

3. PERSONALISATION DEPTH  (especially COLD_OUTREACH)
   Variables that work in 2026:
     - Specific recent action (blog post they wrote, podcast they
       appeared on, hire they made, funding they raised, customer
       they signed)
     - Specific observation about their product (a feature, a UX
       choice, a pricing position)
     - Specific reference to a mutual connection or shared context
   Variables that DON'T work anymore:
     - {{FirstName}} alone
     - Generic compliments
     - "I'd love to learn more about your business"
   Cite the source of any personalisation variable.

4. SUBJECT LINES
   - 4–8 words ideal (mobile preview cuts longer)
   - Lowercase often outperforms title case (feels personal)
   - Question or curiosity > statement
   - Numbers and specifics > vague benefits
   - Avoid: ALL CAPS, multiple punctuation, emoji unless audience
     uses them, spam-trigger words ("free", "urgent", "100%
     guarantee" — go to spam folder)
   - Generate 5 variants per email — A/B test programs need ammo

5. EMAIL BODY DISCIPLINE
   - Open with the personalisation hook (§3) — not "I hope this
     finds you well"
   - 50–125 words ideal for COLD; 100–250 for NURTURE
   - One idea per email
   - Single, clear ask
   - P.S. line where it earns ("P.S. — In case timing's bad now,
     reply with a quarter and I'll circle back")
   - No links in email 1 of COLD_OUTREACH (spam-filter signal +
     ask too early)
   - Plain-text-feeling formatting (avoid heavy HTML, big images,
     header banners — these trigger promotional-tab routing)

6. CTAs
   - Specific verb + outcome ("Book a 20-minute walkthrough" not
     "Let me know")
   - One CTA per email
   - Low-commitment ladder (reply → calendar link → demo → buy)
   - Calendar links: use directly only when they've expressed
     interest; otherwise "reply with a time" feels more human

7. SEQUENCE  ← deliverable (a)
   --- SEQUENCE START ---

   ## Email 1 — [Title for client reference]
   **Send timing:** <…>
   **Subject line:** <primary>
   **Preview text:** <30–80 chars that appear next to subject>

   <Body>

   <Signature>

   ---

   ## Email 2 — [Title]
   [continue per §2]

   ---

   [continue for LENGTH emails]
   --- SEQUENCE END ---

8. SUBJECT-LINE BANK  ← deliverable (b)
   5 variants per email for A/B testing. Per variant: predicted
   open-rate driver (curiosity / personalisation / value / urgency).

9. REPLY-HANDLING PLAYBOOK  ← deliverable (c)
   For each likely reply category, the next-action template:
     - "Interested — tell me more" → discovery question + calendar
     - "Wrong person" → ask for warm intro to right person
     - "Bad timing" → ask when to follow up, log
     - "Not interested" → polite acknowledgment, exit sequence,
       log
     - "Unsubscribe" → immediate removal + suppression-list add
     - Bounce / OOO → pause, retry per OOO rules
     - "How did you get my email?" → DSGVO-compliant honest answer
       referencing lawful basis (legitimate interest, public-source
       collection)

10. COMPLIANCE NOTES
    Per CONSTRAINTS / target jurisdiction:
      - DSGVO (EU): document lawful basis for cold outreach; provide
        Art. 14 information; honour opt-out immediately
      - CASL (Canada): no cold outreach without express or implied
        consent; harsh penalties
      - CAN-SPAM (US): unsubscribe link required, physical address
        required, no deceptive subject lines
      - PECR (UK): cold B2B email is legal with opt-out; B2C
        requires opt-in
    Include unsubscribe footer + physical address in every email.

HARD RULES
- Personalisation variables in COLD_OUTREACH cite the source URL /
  evidence the agent used to find them. No generic {{FirstName}}
  theatre.
- Every email has a single CTA. Stacking CTAs reduces overall
  conversion.
- §10 compliance notes are visible in the sequence — not buried in
  the playbook.
- Subject-line bank has 5 distinct angles per email, not 5
  variations of the same line.
- Respond in the language of the AUDIENCE input.

TYPE:
AUDIENCE:
OFFER:
SENDER:
LENGTH:
CONSTRAINTS:
PROOF:
```

---

## What the buyer gets

A complete sequence ready to load into the client's ESP / CRM
(Mailchimp, HubSpot, Customer.io, ConvertKit, Apollo, Lemlist),
plus a subject-line bank for ongoing A/B testing, plus a reply
playbook the sales team uses without re-deriving every response.
