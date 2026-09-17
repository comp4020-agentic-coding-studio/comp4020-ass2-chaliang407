---
title: Movement
description:
  Week 8 — the precision a single continuous signal gives up when it's
  asked to control both timing and magnitude
week: 8
date: 2027-04-12
teachers:
  - marisol-quaye
related:
  - week-02
  - week-06
  - week-07
  - sessions/08-movement
---

Movement doesn't add a new way to read the button — it adds a new way to
spend a signal you already have. Hold-duration or momentum, mapped onto a
spatial value like jump height or run speed, do the job a joystick usually
does, using the same one bit of input this whole course has insisted on.

The trade-off worth naming is precision: a single continuous signal asked to
control both *when* something moves and *how far* it goes gives a player
less independent control over each than two separate inputs would. That
loss isn't a bug to route around — it's the actual content of this week's
design problem. A mapping succeeds when the coupling between timing and
magnitude feels like a deliberate skill (a longer hold reliably means a
higher jump) rather than an accident of reusing a signal that wasn't built
for this.

## Outline

- movement as spending an existing continuous signal on a spatial mapping,
  not a new capability
- the precision trade-off of controlling both timing and magnitude from one
  signal
- what makes a spatial mapping feel deliberate rather than accidental
