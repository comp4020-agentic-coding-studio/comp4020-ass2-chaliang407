---
title: Rhythm
description:
  What the gap between separate presses says, once duration stops being the
  only signal a button gives you
week: 4
date: 2027-03-15
teachers:
  - idris-fenn
spec:
  - a prototype reacts to the timing between separate presses, not to how
    long any single press lasted
  - it visibly distinguishes "too fast", "too slow" and "on tempo"
related:
  - 01-press
  - 03-release
---

Weeks 2 and 3 measured what happens inside one gesture. This week measures
across gestures: the interval between one press and the next, read as tempo
rather than duration. It depends on week 1's press as a repeated, sampled
event — not on last week's release logic, which is deliberately switched off
this week so the two signals don't blur together.

## Before the session

Bring a stopwatch, mentally: this week is about counting gaps between
presses, not holding anything down.

## In the session

Demo of a metronome-style prototype, then build time. Hold and release logic
are off-limits this week on purpose.

## Studio exercise

Build a prototype that reacts to the *gap* between presses — steady tempo,
accelerating, drifting off. No hold-duration and no release timing allowed;
if a prototype needs either, it's using last week's mechanic, not this
week's.

## By the end

You can explain why "how long you held" and "how often you pressed" are
different data channels from the same button, not two names for one idea.
