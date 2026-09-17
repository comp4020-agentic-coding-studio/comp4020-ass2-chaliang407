---
title: Momentum
description:
  Week 6 — a value that outlives a single press, and drains on its own when
  input stops
week: 6
date: 2027-03-29
teachers:
  - marisol-quaye
related:
  - week-04
  - week-05
  - sessions/06-momentum
---

Everything built so far resets between gestures. Momentum doesn't: it
accumulates across repeated presses and decays on its own once you stop,
which makes it the first primitive this semester with memory. It depends on
week 4's rhythm specifically — momentum needs a notion of "well-timed" to
know what to reward.

## Outline

- persistent, decaying state, as distinct from a value that resets each
  gesture
- why decay has to be visible for momentum to mean anything to a player
- how memory across presses opens up strategy that single gestures can't
