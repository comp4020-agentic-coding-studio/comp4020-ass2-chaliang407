# Harness — SLOP1614, One Button, Twelve Games

This course's whole premise rests on one constraint staying real for twelve
weeks: everything a player can do, they do with a single button. These rules
exist to stop that constraint quietly dissolving into a generic game-design
course with "one button" pasted on the front.

## The vocabulary is cumulative, not a list of topics

Weeks 1–11 each add exactly one new primitive to the interaction vocabulary.
Before writing one of these weeks, state which primitive it adds in one
sentence, and which earlier week(s) it depends on. If a week's "new" idea is
just an earlier primitive with different art or a different theme, it is not
a new week — cut it or fold it into the week it duplicates.

**Week 12 is the deliberate exception.** It adds no new primitive. Its subject
is synthesis: choosing which parts of the vocabulary serve one finished game
and cutting the rest. Do not force a twelfth mechanic into it to satisfy the
"one new thing per week" pattern — the whole point of week 12 is that
restraint, not addition, is the skill being taught. Its studio deliverable
must state what was left out and why.

The running vocabulary, in order, is: press → duration → release-as-decision
→ tempo → symbol sequences → persistent/decaying state → mode-dependent
meaning → spatial mapping → legible failure → concurrent streams →
externally-timed confirmation → (synthesis, no new primitive). Do not reorder
this chain without updating every week downstream of the change.

## The constraint is load-bearing

Every exercise, example and prototype uses exactly one button (one bit of
digital input, plus its timing) per player. No second button, no analog
stick, no modifier key, "for testing purposes" or otherwise. If an exercise
needs a second input to work, the exercise is wrong, not the constraint.

## Every week ships something you can try

An exercise is not "discuss X" or "consider how X might work" — it is a thing
a student presses, and that visibly does something different from every
earlier week's thing. Write session `spec:` lines so each one names an
artefact and a way to tell it works, not a topic to have covered.

## Later weeks must show their debts

When a week's content or exercise depends on an earlier week's idea, say
which week and which idea, in the page itself — not just in a `related:`
edge in frontmatter. A reader landing on week 8 should be able to tell, from
the prose, that it needs week 2's hold-duration and week 6's momentum,
without opening either page.

## Plain, specific language

Say what the mechanic does, in mechanical terms: "the bar fills while the
button is down" beats "the interaction affords a growing sense of tension."
Avoid generic course-copy vocabulary — leverage, seamless, elevate, unlock,
dive into, robust, utilize, delve, journey, holistic, cutting-edge, empower,
foster, synergy — and the wider habit they stand for: reaching for an
impressive-sounding word instead of the plain mechanical one. If a sentence
would still make sense with the specific mechanic swapped out for a
different one, rewrite it until it wouldn't.

This rule is deliberately not a spec check. Whether a sentence is actually
plain, rather than merely free of a specific banned word, is a judgement
call a grep cannot make — a paragraph can be entirely generic without using
any word on that list. Treat this as something to apply while writing and
to re-read for, not something the build enforces. `PROCESS.md` should say
this plainly: this is one of the qualities that stayed a human judgement on
purpose, not an oversight.

## Examples serve the week's question, nothing else

An example exists to make that week's specific mechanic clear. Do not reuse
a game example from a later week's material, and do not reach for a
well-known game unless it demonstrates the primitive under discussion and
nothing more than that primitive. When in doubt, use one of this course's
own prototypes as the example instead of an external game.

## No invented jargon

Use the plain names already established in this file (press, hold, release,
rhythm, sequence, momentum, context, scanning) rather than coining new terms
for the same ideas. If a genuinely new term is needed, define it once, in
the week that introduces it, in one sentence.

## The site reads as one semester

Consecutive weeks' sessions and lectures carry `related:` edges to each
other, and later weeks also link back to the specific earlier week their
exercise depends on, not only the week before them. A person reading week 6
and week 9 back to back (not adjacent) should be able to tell they're the
same course — same vocabulary, same voice, same running example set where
relevant. Before finishing a week, check it against the week immediately
before and after it, not just against this file.

## What this file does not cover

This file constrains how content is written; it is not a substitute for
`spec/` or for the crit. Three different things protect this course's
promises, and they are not interchangeable:

- **Rules here** — generative constraints an agent (or a person) can follow
  while writing, but that no test can verify after the fact: one primitive
  per week, the one-button constraint, plain language, examples on-topic.
- **Checks in `spec/`** — structural promises the build output can actually
  verify: twelve teaching weeks, assessment weights summing to 100, later
  weeks carrying a `related:` edge into earlier material. These protect the
  skeleton, not the quality of what fills it.
- **Left to the crit** — whether a week's "new" mechanic actually feels new
  to play, whether an exercise's scope fits its session, whether the prose
  is genuinely plain rather than just free of specific banned words,
  whether the two-player design honours the constraint's spirit rather than
  its letter, and whether the site reads as one coherent semester to a
  stranger in ten minutes. No test in this repo claims to answer any of
  these, and none should be written to pretend otherwise.
