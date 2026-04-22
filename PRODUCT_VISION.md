# PRODUCT VISION

## 1. Core purpose

Vocnjak exists to answer three real questions a grower has when standing in the orchard:

- What should I do today in my orchard?
- Why should I do it?
- Did I do it before?

This app is not a generic to do app, not a plant tracker, and not a data tool for entering records for their own sake.

This app is a decision-support system for real orchard work.

Its job is to help a person make the next good real-world decision at the right time, with the right context, based on how orchards actually behave through the season.

---

## 2. Real user mental model

The user thinks in simple orchard actions:

- spray
- prune
- water
- inspect
- harvest
- protect fruit

The user also thinks in time:

- now
- soon
- too early
- too late
- missed

And the user thinks in purpose:

- protect against fungus
- reduce pest pressure
- prevent leaf curl
- open the canopy
- protect the fruit before harvest

The user does not think in technical entities, structured records, schemas, per-plant task objects, or system vocabulary.

A real user does not say:

> I want to update the status of four plant task instances.

A real user says:

> I sprayed copper today.

Or:

> I still need to prune the plum.

Or:

> I saw more insects in the trap, should I react?

The product must match that mental model at every level.

---

## 3. Multi-plant action model

In real orchard work, one action often covers several plants.

Example:

- the user sprays copper
- there are 4 trees in the orchard
- the spray was done in one real-world pass

That is one action in the user’s mind.

The system must support this naturally.

It must allow the user to:

- mark the action as done for all relevant plants at once
- mark the action as done for only some plants if only part of the orchard was covered

Example:

- copper was sprayed on 2 of 4 trees because the other 2 were pruned later
- one logging action should still be easy
- the user must not be forced to repeat the same entry four times

The product must reflect the reality of orchard work:

- one pass can cover many trees
- one window can apply to many plants
- one missed action can affect several plants

The app must stay flexible here. It should support real work patterns without locking the product into a rigid per-plant checklist mentality.

---

## 4. Calendar-first behavior

The orchard is driven by time windows, not static lists.

Actions matter because of season, weather pattern, growth stage, and timing relative to other actions.

The app must therefore be calendar-first.

The user should see:

- what is relevant now
- what is coming soon
- what was missed

The user should not see a flat, timeless task list.

Example:

- dormant oil matters in a late winter window
- copper may matter before bud break, after pruning, or again only under certain spring conditions
- trap checks matter only during the active pest season
- harvest protection matters shortly before fruit ripens

The app should feel like a seasonal guide, not a backlog manager.

---

## 5. Actions always have purpose

Every action must answer one question clearly:

Why is this done?

Purpose is not optional. It is the heart of trust.

Examples:

- Bijelo ulje is used to reduce overwintering pest eggs and forms
- Bakar is used as preventive protection from fungal or bacterial problems
- Drugi bakar may matter only if spring is wet and leaf curl risk stays high
- Ljetna rezidba improves light, air flow, and canopy control
- Trap monitoring exists to decide whether action is needed at all

If the app shows an action without the reason behind it, the app has failed.

The system must always:

- show the purpose of the action
- explain the risk or problem it addresses
- help the user learn over time
- preserve the practical note behind the action

The orchard calendar is not just a list of things to do. It is a list of reasons to act inside the right window.

---

## 6. Products are not prescribed

Vocnjak must not prescribe specific brands or exact commercial products as the core product behavior.

It should prescribe the type of action:

- oil
- copper
- fungicide
- insecticide
- pruning
- monitoring

Reason:

- product names differ by country
- registration differs by market
- availability changes
- growers may use different approved options

The product should stay generic and adaptable while still being useful.

The important thing is:

- what kind of action is needed
- why it is needed
- when it is needed
- what constraints apply

Not:

- which exact bottle the user must buy

---

## 7. Sequence and constraints

Orchard work is not just a list of actions. It is a sequence with rules.

Some actions depend on earlier actions.

Examples:

- pruning can be followed by copper shortly after, because fresh cuts increase concern and protection timing matters
- oil and copper should not be combined blindly and often need spacing such as 7 to 10 days
- insecticide should not be suggested just because the season started; it may depend on trap increase or visible pressure
- some treatments must not happen during flowering

The system must reflect this reality.

It must understand that:

- timing alone is not enough
- order matters
- spacing matters
- conditions matter
- some combinations are wrong

The app must never blindly suggest an action only because a date range is open.

Real examples:

- after pruning, copper may become relevant within 1 to 2 days
- if oil was just applied, copper may need to wait
- if traps were not checked, insecticide is not justified
- if spring is not wet, a second copper may not be needed

This is where orchard trust is won or lost.

### Weather-delay principle

Real orchard work does not happen in perfect calendar conditions.

Sometimes an action is valid in principle, but weather makes it unsafe, ineffective, or simply impossible to do at the ideal time.

Example:

- copper may need dry conditions
- spraying may be delayed because rain is coming or the orchard is still too wet

The product must support this reality.

It must help the user continue safely when ideal timing is no longer possible.

One delayed action must not automatically push the whole seasonal plan forward.

Later execution may reduce flexibility for the next actions, but it must not collapse the whole plan.

The product must reflect real execution constraints, not an idealized calendar where every action happens on time.

### Weather-aware execution support

An action window may be open, but weather can still make execution unsafe, ineffective, or unrealistic on a given day.

The app should help the user understand that today may not be suitable.

It may show practical guidance such as rain is expected, conditions may be unsuitable, or the next likely execution opportunity may be several days away.

Forecast is advisory support, not absolute truth.

The app must not pretend to know the grower's exact micro-location or exact field conditions.

The user must still verify local conditions and make the final decision.

Weather support must help execution, not block the user.

It must support delayed execution without automatically domino-shifting the rest of the seasonal plan.

---

## 8. Monitoring philosophy

The system must never invent orchard reality.

No fake severity.
No guessed outbreaks.
No pretending to know what was not observed.

If a trap was not checked, the app must not act as if pest pressure is known.

Correct behavior:

- remind the user to check the trap
- show that more information is needed
- wait for real observation

Incorrect behavior:

- infer that pressure is high without evidence
- suggest treatment because data is missing
- create false confidence

Monitoring exists to support decisions, not to fill empty space with assumptions.

The app should be honest when it does not know.

---

## 9. History is critical

A grower must always be able to answer:

- Did I spray this last year?
- Did I already do this this season?
- Am I consistent?
- Did this problem repeat?

History is not a secondary feature. It is a core reason the app exists.

The value of the product grows over time because past actions give context to current decisions.

Examples:

- the user wants to see whether copper was missed last spring
- the user wants to compare pruning timing year to year
- the user wants to know whether trap-triggered insecticide was really needed before
- the user wants confidence that work was actually done

The system must never lose history and must never silently break history.

If trust in history is damaged, trust in the product is damaged.

---

## 10. Plan evolution

Orchard guidance will evolve.

Names will improve.
Structure will improve.
Agronomy will improve.
New knowledge will appear.

That is normal.

But when plans evolve, the grower’s past work must remain understandable.

The product must support change without making old seasons meaningless.

Example:

- an action name may later become clearer
- a treatment window may later be refined
- a purpose note may become more precise

Even then, the user must still be able to look back and understand what happened in prior seasons.

The app should become smarter over time without erasing the user’s orchard memory.

---

## 11. Simplicity and speed

Orchard work happens outside, often with dirty hands, limited time, bright sun, and one free hand.

The product must respect that.

Core interaction standard:

- minimal taps
- one-handed usage
- fast logging
- clear screen hierarchy
- no unnecessary data entry

Ideal flow:

1. open app
2. immediately see what matters
3. understand why it matters
4. log action quickly
5. return to real work

The app should reduce friction, not create it.

If using the app feels slower than remembering it mentally or writing it on paper, the product is wrong.

---

## 12. What this app is not

Vocnjak is not:

- a checklist per plant
- a data-heavy orchard management tool
- a system that forces the user into one rigid workflow
- a product catalog
- a generic gardening app
- a task manager that dumps everything into one list

It should not pressure the user to behave like a clerk entering records.

It should behave like a calm orchard guide that understands season, sequence, purpose, and real-world constraints.

---

## Non-negotiable product rules

These rules must remain true across all future changes.

1. The product must always answer what matters now, why it matters, and whether it was done before.
2. The product must reflect real orchard windows, not static timeless tasks.
3. Every action must include purpose. No explanation means no trust.
4. One real-world action may cover many plants. The app must support that naturally.
5. The app must never force the user to repeat the same action once per plant when one orchard pass was performed.
6. The app must prescribe action types and timing, not lock the user to brands or specific commercial products.
7. The app must respect sequencing, spacing, and conditional rules between actions.
8. The app must never recommend action from invented or missing monitoring data.
9. The app must preserve history as a first-class product promise.
10. The product may evolve, but the user’s past orchard work must stay understandable.
11. The app must stay simple, fast, and practical in real outdoor use.
12. The product must stay orchard-first and decision-first, never drift into generic task software.

---

## Final product stance

Vocnjak should feel like this:

- a seasonal orchard guide
- grounded in real calendars and real action windows
- built around action, timing, and purpose
- honest about uncertainty
- fast in the field
- dependable over years

If a future decision makes the app more technical, more rigid, more product-specific, more data-heavy, or less faithful to real orchard behavior, that decision is moving away from the vision in this document.
