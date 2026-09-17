---
title: Momentum
description:
  A value that survives between presses, and drains on its own when you stop
week: 6
date: 2027-03-29
teachers:
  - idris-fenn
spec:
  - a prototype has a resource that rises with well-timed repeated presses
    and visibly decays on its own when input stops
  - stopping has a cost you can point to on screen, not just a number that
    freezes
related:
  - 04-rhythm
---

Every primitive so far resets between gestures. This week's doesn't: momentum
is a value that accumulates across repeated presses and drains when you stop,
so the *history* of your presses matters, not just the current one. It builds
directly on week 4's rhythm — well-timed presses are what feed it — and is
the first thing this semester that has memory.

## Before the session

Bring your week 4 rhythm prototype.

## In the session

Demo of a resource that climbs with steady tempo and bleeds away the moment
you stop, then build time.

## Studio exercise

Add a resource to your rhythm prototype that rises while you keep good tempo
and decays on its own the instant you stop pressing. Make the decay visible,
and make stopping cost something a player can feel, not just see.

## By the end

You can distinguish a value that resets every gesture (hold-duration, week 2)
from one that persists across gestures (momentum), and say why the second
kind opens up strategy the first kind can't.
