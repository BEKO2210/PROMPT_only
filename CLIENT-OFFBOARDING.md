# CLIENT-OFFBOARDING — End-of-Engagement Handover (interner Hebel)

End of engagement is when most consultants leave revenue and
relationship value on the table: no testimonial collected, no referral
ask made, no future-work hook planted, no knowledge handover
documented. This produces a complete offboarding package that captures
all four.

**Leverage value: 50–70% of testimonials come from properly closed
engagements. 30–60% of follow-on work comes from a clean offboarding.**

---

## How to use

Paste the block below, then on the next line:

    ENGAGEMENT: <name + reference>
    CLIENT: <client legal entity + primary contact>
    DELIVERABLES: <what was produced>
    OUTCOMES: <what changed for the client — be specific>
    RELATIONSHIP_HEALTH: <STRONG | NEUTRAL | STRAINED — drives ask aggressiveness>

---

## The prompt (copy from here)

```
You are producing an engagement-offboarding package. Six deliverables:
§4 HANDOVER, §5 FINAL REPORT TEMPLATE, §6 TESTIMONIAL REQUEST,
§7 REFERRAL ASK, §8 FUTURE-WORK HOOK, §9 OFFBOARDING EMAIL.

Three rules:

(1) END WELL, GET REPEAT. The last 5% of the engagement disproportionately
    shapes what the client says about you afterward.
(2) ASK FOR THE THINGS. Most consultants don't ask for testimonials,
    referrals, or future work — and don't get them. Asking once,
    well, with relationship sensitivity, is the play.
(3) HANDOVER IS LEGAL HYGIENE. Document what was delivered,
    what's now the client's responsibility, what we still maintain
    (if anything). Eliminates "did you do X?" disputes 6 months
    later.

1. DELIVERABLES INDEX
   List every deliverable produced during the engagement:
     - Name + version + delivery date
     - Where it lives (file path / repo URL / shared drive)
     - Format (PDF / Markdown / JSON / code)
     - Acceptance status (signed off Y/N + when)

2. KNOWLEDGE TRANSFER
   What the client's team needs to know to maintain / extend the
   work:
     - Where to find the artefacts long-term
     - How to update the artefacts (if applicable — cite e.g. the
       RUNBOOK.md for ops handoff, or the SBOM for re-runs per
       release)
     - Recommended re-review cadence (annual? per release? per
       audit?)
     - Tooling the client will need (with licensing notes)
     - Who internally owns this going forward (ask the client to
       name the owner)

3. ONGOING ACCESS
   - Credentials / system access — return / revoke checklist
   - Documents shared — retention or deletion per data agreement
   - Slack / email channels — close or archive
   - Repos / CI access — revoke
   This is a security obligation, not just hygiene.

4. HANDOVER  ← deliverable (a)
   Combine §1, §2, §3 into a single handover doc the client's
   team can reference.
   --- HANDOVER START ---
   # Engagement Handover: <ENGAGEMENT>
   **Closed:** <date>   **Final deliverable accepted:** <date>

   ## Deliverables Index            (§1, table)
   ## Knowledge Transfer            (§2)
   ## Ongoing Access (closed)       (§3 checklist)
   ## Engagement Contact (post-close):
   For questions about deliverables, contact <your email> within
   30 days post-close at no cost.
   --- HANDOVER END ---

5. FINAL REPORT  ← deliverable (b)
   A one-page wrap-up: what we set out to do, what we did, what
   the measurable outcomes are. The page the client circulates
   internally to justify the engagement spend.

6. TESTIMONIAL REQUEST  ← deliverable (c)
   Sent 1–2 weeks after the final deliverable lands (when value
   is fresh and outcomes are visible). Tone calibrated to
   RELATIONSHIP_HEALTH:
     - STRONG: ask direct + offer to draft + ask for LinkedIn
       recommendation + ask for video clip
     - NEUTRAL: ask direct + offer to draft
     - STRAINED: skip; ask later if relationship recovers
   See TESTIMONIAL-REQUEST.md for the full process.

7. REFERRAL ASK  ← deliverable (d)
   Sent same email or 1 week after testimonial. Specific:
     - "Who do you know with a similar <pain you just solved>?"
     - Make a warm intro template the client can copy-paste
     - Offer a referral incentive if standard practice (10–20%
       of first engagement fee or fixed bonus)
   Don't generic-ask ("send me referrals"). Specific asks get
   answers.

8. FUTURE-WORK HOOK  ← deliverable (e)
   Plant the next engagement. From §RECOMMENDATIONS in the
   deliverable (cite the specific recommendation):
     - "When you're ready to tackle <X>, we can scope that
       separately"
     - Offer a free 30-minute scoping conversation in 60–90 days
     - Add to your CRM with a follow-up date

9. OFFBOARDING EMAIL  ← deliverable (f)
   The single message that ships all of the above.
   --- EMAIL START ---
   Subject: Wrap-up + a few quick things

   Hi <first name>,

   Final deliverables for <ENGAGEMENT> landed on <date>. Quick
   recap: <one-line outcome>.

   **Three things in this email:**

   **1. Your handover document** [link to §4]
   This is yours — covers what was delivered, where it lives,
   and what to do next.

   **2. A small ask**
   If the engagement worked for you, would you be open to a
   short testimonial? Even 2–3 sentences would help. I can draft
   something for your review if easier.

   **3. Looking ahead**
   Based on the work, the natural next step would be <future
   hook from §8>. No urgency — when you're ready, I'm here for
   a 30-min scoping call (no fee).

   And: if you know anyone facing similar <pain>, I'd appreciate
   the intro.

   It's been a pleasure working with <CLIENT_TEAM_REFERENCE>.

   <your name>
   --- EMAIL END ---

HARD RULES
- §1 deliverables index is verified — every item listed actually
  exists and was actually accepted.
- §3 ongoing-access revocation is a checklist that gets executed,
  not just listed.
- §6 testimonial ask is calibrated to RELATIONSHIP_HEALTH. Don't
  ask STRAINED clients — wait or skip.
- §8 future-work hook references a specific recommendation, not
  generic "let me know how I can help."
- Respond in the language of the CLIENT input.

ENGAGEMENT:
CLIENT:
DELIVERABLES:
OUTCOMES:
RELATIONSHIP_HEALTH:
```

---

## What you get

A complete offboarding package that closes the engagement cleanly,
collects social proof, plants the next engagement, and protects you
legally. Run on every engagement close — the marginal effort is
tiny, the marginal value is large.
