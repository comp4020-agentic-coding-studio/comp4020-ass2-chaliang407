---
title: Two players
description:
  Week 10 — simultaneous presses as a design decision, not a bug to patch
  around
week: 10
date: 2027-04-26
teachers:
  - marisol-quaye
related:
  - week-04
  - week-07
  - sessions/10-two-players
---

Two players each pressing an independent single button sounds like it just
doubles week 1 — two event streams instead of one. What actually changes is
that shared state now has two writers instead of one, and the interesting
design work is entirely in how those two streams are allowed to disagree:
what happens when both players press at the same moment, and whose press
wins, or whether the game refuses to let that be a coincidence at all.

That contention is a genuine design decision, not an implementation detail
to patch around. Resolving it arbitrarily — first press wins, by whatever
the code happens to check first — usually feels unfair to whichever player
loses the race. Resolving it structurally, so the two presses are never
actually read as simultaneous, usually feels more deliberate, even if a
player never consciously notices why.

## Outline

- why two single-button streams sharing state is a different problem from
  doubling week 1's single stream
- simultaneous presses as a design decision, not a bug to route around
- fairness as something built into how contention is resolved, not added
  afterward
