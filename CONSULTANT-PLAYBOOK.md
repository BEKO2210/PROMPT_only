# CONSULTANT-PLAYBOOK — From this library to €10k MRR in 90 days

The operational manual for turning the 78-prompt library into a
sustainable consulting practice. No new prompts here — this document
sequences the existing ones into a concrete business workflow.

## Honest expectations (read this first)

- This is not get-rich-quick. It is a realistic 12-month path to
  €60–150k year one, €150–300k year two — **if you commit**.
- The library is necessary but not sufficient. Library + positioning +
  90 days of consistent action = traction. Library alone = nothing.
- "10x consultant" stories exist; they took 5+ years. This playbook is
  the foundation for that, not a shortcut around it.
- You need 4–8 hours / day on this for the first 90 days. Less than
  that and the math doesn't work.

---

## Phase 1 — Position (week 1)

### Pick ONE specialism

Recherche-Erkenntnis aus PromptBase / Side-Hustle-Daten 2026: **top
earners dominate one niche.** Generalists earn 2–3× less per hour.

Ranked by market urgency × supply gap (early 2026):

| Specialism | Engagement size | Why now |
|---|---|---|
| **EU AI Act compliance** | €3 000 – 15 000 | High-risk obligations enforceable Aug 2026, almost no consultancy ramped up yet |
| **Schrems-II / DSGVO** | €2 000 – 10 000 | DACH market vast; every EU SaaS using OpenAI / Anthropic needs TIA |
| **LLM application security** | €3 000 – 15 000 | Brand-new market, OWASP LLM Top 10 just established, no certifications yet |
| **M&A Technical DD** | €10 000 – 100 000+ | Highest single-engagement value; PE / VC always buying |
| **PCI-DSS v4.0.1** | €3 000 – 15 000 | Mandatory since March 2025, recurring annually |
| **DORA (EU finance)** | €5 000 – 30 000 | Enforceable since Jan 2025, finance sector still scrambling |
| **E-commerce checkout / CRO** | €1 500 – 7 500 | Fast wins, easier first-engagement sale, recurring retainer potential |

**Anti-pattern**: trying to be "the AI consultant" or "the compliance
consultant." Too broad to position. Pick ONE specialism above, master it
for 90 days, expand laterally only after revenue.

### Set up the stack (parallel — same week)

| Need | Tool | Notes |
|---|---|---|
| Domain | Cloudflare / Namecheap | `<firstname>.consulting` or `<specialism>.firm` |
| Website | [`WEBSITE-FULL.md`](./WEBSITE-FULL.md) | Astro + Netlify; live in a day |
| Services page | [`PRICING-PAGE.md`](./PRICING-PAGE.md) | Transparent rate ranges |
| Invoicing | Stripe Atlas / Wise / SumUp | Per jurisdiction |
| Calendar | Cal.com | Free, professional |
| CRM | Notion or Pipedrive | Notion if solo, Pipedrive if scaling |
| LinkedIn | Existing account | Headline: `<specialism> for <ICP>` |
| Email | Custom domain via Google Workspace / Fastmail | Never sell from gmail |
| PDF rendering | Pandoc (see README) | For Tier-2 reports |

Total setup cost: <€50/month. Total time: 2–3 days.

---

## Phase 2 — First three clients (days 8–30)

The hardest phase. Goal: 3 signed engagements within 30 days.

### Source order (use this sequence)

1. **Existing network** — most underused channel
   - DM 50 people in your network: "I'm now offering X. Know anyone
     who needs Y?" Honest, brief, no pitch.
   - Expected conversion: 5–15% lead → discovery call, 30–50% call → engagement
   - This alone often hits the 3-client target

2. **LinkedIn warm outreach** — second wave
   - Use [`DISCOVERY.md`](./DISCOVERY.md) per prospect — saves 1–2h
     each, raises close rate 15–25%
   - 50 prospects / week, sustained for 4 weeks = 200 touches
   - Expected: 5–10 discovery calls, 1–3 engagements

3. **Communities** — specialism-specific Slacks, Discords, subreddits,
   industry forums
   - Answer questions for 2 weeks before any soft mention of your
     services
   - "Helpful first, sales second" is the only sustainable mode

4. **Partner referrals** — complementary consultants who serve same
   buyers
   - A web-dev agency needs your A11Y / SEO / GDPR expertise
   - A law firm needs your AI Act / DORA technical input
   - Offer reciprocal referrals; warm intros beat cold every time

### Pricing for first 3

- Discount to **60–70% of stated range** — these are reference
  customers, not full-price work
- Trade discount for:
  - Case study permission (use [`CASE-STUDY.md`](./CASE-STUDY.md))
  - Named testimonial (use [`TESTIMONIAL-REQUEST.md`](./TESTIMONIAL-REQUEST.md))
  - LinkedIn recommendation
- Be explicit: "First three clients at X price for these reasons; rate
  goes to Y from client 4"

### Run each engagement

| Stage | Prompt to use |
|---|---|
| Pre-call brief | [`DISCOVERY.md`](./DISCOVERY.md) |
| Send proposal | [`PROPOSAL.md`](./PROPOSAL.md) |
| Kickoff document | [`PROJECT-KICKOFF.md`](./PROJECT-KICKOFF.md) |
| Weekly updates | [`STATUS-REPORT.md`](./STATUS-REPORT.md) |
| Deliverable production | Your Tier-2 specialism prompt |
| Scope creep | [`SCOPE-CHANGE.md`](./SCOPE-CHANGE.md) |
| Handover | [`CLIENT-OFFBOARDING.md`](./CLIENT-OFFBOARDING.md) |
| Get testimonial | [`TESTIMONIAL-REQUEST.md`](./TESTIMONIAL-REQUEST.md) |
| Publish case study | [`CASE-STUDY.md`](./CASE-STUDY.md) |
| Offer retainer | [`RETAINER.md`](./RETAINER.md) follow-up |
| Chase invoice | [`INVOICE-FOLLOWUP.md`](./INVOICE-FOLLOWUP.md) |

---

## Phase 3 — Build distribution (days 30–90)

Pick ONE channel. Commit. Avoid the trap of trying all four.

| Channel | Prompt | Cadence | Year-1 outcome |
|---|---|---|---|
| **Newsletter** | [`NEWSLETTER.md`](./NEWSLETTER.md) | Weekly | 500–2 000 subscribers, 5–10% inbound lead rate |
| **LinkedIn posts** | [`SOCIAL-CALENDAR.md`](./SOCIAL-CALENDAR.md) | 3–5×/week | 3 000–10 000 followers, 1–3 leads/week |
| **Podcast guesting** | [`PODCAST-PITCH.md`](./PODCAST-PITCH.md) | 1–2 appearances/month | Authority compounding, mid-funnel leads |
| **Webinar host** | [`WEBINAR-PLAN.md`](./WEBINAR-PLAN.md) | Monthly | Best for B2B; warm leads at scale |

**Anti-pattern**: doing all four poorly. One channel done weekly for
12 months beats four channels done sporadically for 12 weeks.

### Marketing content sources

Every engagement produces:
- 1 case study (anonymised) → website + LinkedIn + newsletter
- 3–5 newsletter issues worth of insights
- 5–10 LinkedIn posts on specific findings
- 1 podcast pitch hook ("here's what I learned")

If you deliver 1 engagement / month, that's 30–60 pieces of marketing
content / year. The library compounds.

---

## Phase 4 — Convert to recurring (days 60+)

One-off engagements are good. Recurring revenue is the goal.

### Three recurring models

1. **Monthly retainer** — €1 500–5 000 / month per client
   - Use [`RETAINER.md`](./RETAINER.md) for monthly status report
   - Triggers: post-AUDIT continued security review, post-SBOM
     per-release regeneration, post-RAG-AUDIT ongoing eval
   - Goal: 3–5 retainer clients by month 12 = €5–25k MRR

2. **Productised bot retainer** — €100–400 / month per bot
   - Use [`AGENT-BUILDER.md`](./AGENT-BUILDER.md) for the build
     (€500–1 500 one-time) + monthly maintenance
   - Triggers: clients with chat-bot / agent use cases
   - Goal: 10+ bot retainers by month 12 = €1–4k MRR
     (smaller per client, lower churn, faster to acquire)

3. **Content/marketing recurring** — €1 500–10 000 / month per client
   - Use [`SEO-CONTENT.md`](./SEO-CONTENT.md) (10–25 articles / month),
     [`SOCIAL-CALENDAR.md`](./SOCIAL-CALENDAR.md), or
     [`NEWSLETTER.md`](./NEWSLETTER.md) ghost-writing
   - Triggers: founders too busy to write their own content
   - Goal: 2–3 content retainers = €3–15k MRR

---

## Service catalog (template — customise per specialism)

Map each engagement type to a packaged offering:

### Compliance bundles

| Package | Includes | Price | Buyer |
|---|---|---|---|
| **Fintech Compliance** | PCI-DSS + DORA + GDPR + SBOM | €15–40k | EU fintech, payment provider |
| **Healthtech Launch** | HIPAA + A11Y + AUDIT + RUNBOOK | €10–30k | Pre-launch healthtech in US |
| **AI Startup Pack** | AI-ACT + PROMPT-SECURITY + GDPR + MODEL-CARD | €10–35k | AI-first SaaS shipping in EU |
| **M&A TDD** | DD + AUDIT + SBOM + ARCH + DATA-PIPELINE-AUDIT | €20–60k | PE / VC pre-acquisition |

### Web bundles

| Package | Includes | Price | Buyer |
|---|---|---|---|
| **Web Launch** | WEBSITE-FULL + COPY-AUDIT + SEO + ANALYTICS-AUDIT | €8–25k | SMB rebrand / new launch |
| **Conversion Sprint** | CONVERSION-AUDIT + CHECKOUT-AUDIT + 90-day retainer | €10–30k | E-commerce hitting plateau |

### Recurring

| Package | Includes | Price | Buyer |
|---|---|---|---|
| **Content Engine** | NEWSLETTER + SOCIAL-CALENDAR + SEO-CONTENT (monthly) | €3–10k / month | Founders with no content time |
| **Security Retainer** | Monthly AUDIT + per-release SBOM + quarterly THREATMODEL | €2–5k / month | Mid-market SaaS with insurer requirement |
| **GDPR Subscription** | Quarterly review + per-feature DPIA support + Schrems-II monitoring | €1.5–4k / month | EU controller / processor |

---

## Rate card

For when prospects ask "what do you charge?":

| Engagement type | Range | Anchor |
|---|---|---|
| Hourly (advisory only) | €150 – 300 | Per your seniority + specialism |
| Day rate (workshop / interview) | €1 200 – 2 400 | 8h × hourly |
| Fixed-fee per Tier-2 prompt | See each prompt | Anchor on the deliverable not the time |
| Monthly retainer | €1 500 – 5 000 | Per defined scope |
| M&A TDD | €15 000 – 60 000 | Per deal complexity |
| Speaking / training | €2 000 – 8 000 / event | Plus expenses |

Avoid quoting hourly to corporates — they read it as "uncertain."
Quote per-deliverable with stated time bounds.

---

## 90-day milestone targets

| Day | Target |
|---|---|
| 7 | Stack live: website + email + calendar + invoicing + LinkedIn aligned |
| 14 | First 10 DISCOVERY-prepped LinkedIn / network conversations |
| 21 | First proposal sent |
| 30 | **First paid engagement signed.** If not: review positioning, not effort. |
| 45 | First deliverable shipped + testimonial requested |
| 60 | **Three engagements signed.** First case study published. |
| 75 | First retainer conversation opened |
| 90 | **One retainer signed + €5–10k MRR pipeline qualified.** |

If you miss day-30 (first signed engagement), the problem is almost
always positioning, not effort. Re-read Phase 1, narrow your
specialism, restart Phase 2.

---

## Anti-patterns (avoid these)

- **Trying to sell to companies who can't pay**: pre-seed startups,
  bootstrapped solopreneurs, "we'd love to but no budget" leads.
  Specialism + ICP filtering prevents this.
- **Scope creep without [`SCOPE-CHANGE.md`](./SCOPE-CHANGE.md)**:
  every "one small thing" is revenue you're giving away.
- **Promising outcomes you can't measure**: "save 30%" without baseline
  + post-measurement = future dispute. Use ranges, name the
  measurement method.
- **Undercharging the methodology**: the Tier-2 prompts represent
  consulting frameworks worth €5–25k engagements. Don't quote them at
  freelance hourly rates.
- **Generalising too early**: "I do AI Act AND PCI AND fintech AND
  e-commerce" reads as "I do nothing well." Stay narrow until
  revenue. Expand laterally with proof.
- **Skipping CASE-STUDY**: 12+ months of inbound from one published
  case study; skipping it is leaving the highest-ROI marketing on the
  table.
- **No retainer offer at end of engagement**: most consultants forget
  to convert; the natural moment is at handover, not 3 months later.

---

## When to hire / partner / decline

| Situation | Recommendation |
|---|---|
| You're at 100% capacity with > 6 months of €10k+ MRR | Hire — junior consultant or VA first, senior only when 12+ months of stable revenue |
| Scope extends beyond your specialism | Partner with a complementary specialist (split fee 50/50 or refer for finder's fee) |
| Client wants commodity-price-anchored work | Decline — race to bottom destroys positioning |
| Client is in a sector with regulatory uncertainty (crypto in some jurisdictions, gambling, adult, weapons) | Decline unless that IS your specialism |
| Client has previously sued consultants | Decline — public records check on big engagements |

---

## Year-1 honest math

Assumptions: solo, full-time, one specialism, executes this playbook.

| Month | Engagements signed | Cumulative engagement revenue | Retainer MRR exiting month | Total month revenue |
|---|---|---|---|---|
| 1 | 1 (discounted) | €3 000 | 0 | €3 000 |
| 2 | 2 (discounted) | €9 000 | 0 | €6 000 |
| 3 | 2 | €19 000 | €2 000 | €12 000 |
| 4 | 2 | €31 000 | €4 000 | €16 000 |
| 5 | 2 | €43 000 | €4 000 | €16 000 |
| 6 | 3 | €61 000 | €6 000 | €24 000 |
| 7 | 3 | €79 000 | €8 000 | €26 000 |
| 8 | 3 | €97 000 | €10 000 | €28 000 |
| 9 | 3 | €115 000 | €10 000 | €28 000 |
| 10 | 3 | €133 000 | €12 000 | €30 000 |
| 11 | 3 | €151 000 | €14 000 | €32 000 |
| 12 | 3 | €169 000 | €15 000 | €33 000 |

Year-1 realistic range: **€80 000 – €170 000**, exiting at €10–15k MRR.

This assumes one specialism, consistent action, and the engagements
covered in this library. Sector-specific multipliers (M&A TDD at the
upper end is higher; e-commerce CRO at the lower end is more frequent
but smaller) can shift the mix.

---

## Year 2 — what changes

Once year 1 milestones hit:

- **Specialism expansion**: add 1 adjacent specialism (e.g. AI Act
  consultant adds DORA; GDPR consultant adds Schrems-II / TIA)
- **Premium tier**: rate increase to top of stated ranges (no
  introductory discounts)
- **Productisation**: consider a fixed-price packaged offering for
  your single most-repeated engagement
- **Selective hiring**: junior delivers Tier-1 work, you focus on
  Tier-2 + sales
- **Speaking / authority**: 4–8 paid speaking engagements / year
  (€2–8k each)

Year-2 realistic: **€150 000 – €300 000**.

---

## What if it doesn't work?

If after 90 days you have zero paid engagements, the diagnostic
order is:

1. **Positioning**: are you specialised enough? Test by asking 5
   people in your target ICP "who do you call for X" — if your name
   isn't on their lips, your positioning isn't sharp enough
2. **ICP**: are you targeting buyers who can authorise €3k+? If not,
   you're selling to the wrong audience
3. **Channel**: is your one chosen distribution channel actually
   reaching ICP? LinkedIn is overkill for e-commerce buyers; Newsletter
   is right for compliance buyers
4. **Offer**: is your deliverable named in a way buyers recognise? "I
   do AI Act conformity assessments" beats "I do AI consulting"
5. **Effort**: be honest — 4 hours / week of effort produces 4 hours /
   week of results, not 40

The library cannot fix any of these alone. The playbook above is the
operating manual for combining the library with the work.

---

## Closing

The 78-prompt library is a year-1 reservoir of consulting deliverables
ready to be packaged, priced, and sold. This playbook is the
sequencing.

Most consultants fail not because their tools are bad but because
they execute three months in three weeks and then quit. The library
+ this playbook + 12 months of disciplined action is the path. There
is no shortcut.

Pick a specialism. Set up the stack. Start tomorrow.
