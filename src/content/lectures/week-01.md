---
title: Press
description:
  The opening lecture — why one button is a design position worth twelve
  weeks, not a restriction to route around
week: 1
date: 2027-02-22
teachers:
  - marisol-quaye
related:
  - sessions/01-press
slides: /decks/week-01/
---

Most software assumes at least two inputs exist: one to confirm, one to
cancel or back out. This course removes that assumption entirely, and the
removal is the point, not an obstacle to design around. A doorbell, an
elevator call button, and a Morse key already run on the same idea — one
input, read for whatever it can give before anything else gets added. This
semester spends twelve weeks finding out how much that "whatever it can
give" actually is.

Before anything gets read at all, one distinction is worth being precise
about: a press is an event — something that happens — not a value —
something that has a state. Treating "pressed" as if it lingers after the
event is the easiest mistake to make early on, and every later primitive
this semester is built by adding structure on top of the plain event, not by
replacing it.

## Outline

- why this course treats one button as a design position, not a limitation
  to engineer around
- the event/value distinction, and why blurring it undermines everything
  built on top of it later
- what a whole semester can be built from a single edge-triggered signal,
  once you stop assuming you need more
