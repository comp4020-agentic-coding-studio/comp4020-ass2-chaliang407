---
title: Release
description:
  The moment of letting go — why release timing, not press timing, decides
  what happened
week: 3
date: 2027-03-08
teachers:
  - idris-fenn
spec:
  - a prototype has a target window that can be missed two ways — releasing
    too early and releasing too late
  - you can demonstrate both failure cases, on request, in under a minute
related:
  - 02-hold
---

Week 2's hold-duration was just a readout. This week it becomes a payload:
the release event carries that duration with it, so *when* you let go —
early, late, or on target — decides the outcome. This is charge-and-release
in full: charging is hold-duration with something staked on the release.

## Before the session

Bring your week 2 prototype and its duration readout.

## In the session

Demo of a moving or decaying target window, then build time adding release
logic to your own readout.

## Studio exercise

Add a target window to your week 2 prototype — a moving marker, a shrinking
zone, a colour band — so that releasing on target succeeds and releasing
off-target fails in a way you can name. It must be possible to fail by
releasing too early *and* by releasing too late.

## By the end

You can state the difference between "duration as feedback" (week 2) and
"duration as a commitment scored at release" (this week) in one sentence
each.
