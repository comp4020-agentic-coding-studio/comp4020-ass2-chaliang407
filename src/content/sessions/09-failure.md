---
title: Failure
description:
  Designing mistakes a player can actually read, and a retry that respects
  what went wrong
week: 9
date: 2027-04-19
teachers:
  - idris-fenn
spec:
  - a prototype has at least two distinguishable failure states, each with
    its own feedback
  - retrying costs something proportionate to the mistake, not a flat
    penalty regardless of what went wrong
related:
  - 03-release
  - 05-sequence
  - 06-momentum
---

This week only becomes possible once the vocabulary is rich enough to fail
in more than one way — it couldn't have happened in week 1 or 2. Released too
early (week 3), broke a sequence (week 5), let momentum decay to nothing
(week 6): each is a different mistake, and each should look and feel
different when it happens.

## Before the session

Bring a prototype with at least two ways to fail already built into it
(combine mechanics from weeks 3, 5 or 6 if yours doesn't have two yet).

## In the session

Demo of the same failure given two different treatments — one illegible
("you lose"), one legible (a specific signal naming what happened) — then
build time telling them apart in your own prototype.

## Studio exercise

Take a prototype with two failure modes and give each one a distinct,
immediate signal, plus a retry whose cost matches the size of the mistake —
a near-miss should cost less to retry than a bad miss.

## By the end

You can tell the difference between a game that punished you and a game that
told you what happened, using only the channels this course has already
built.
