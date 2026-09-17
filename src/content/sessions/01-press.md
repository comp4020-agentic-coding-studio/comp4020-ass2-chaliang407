---
title: Press
description:
  The first session of the semester — the smallest possible interaction, and
  three different things a single press can mean
week: 1
date: 2027-02-22
teachers:
  - idris-fenn
spec:
  - your development environment runs the course's toolchain and you can
    preview a prototype in a browser
  - you have three tiny prototypes, each responding to a single press in a
    different way
---

A press is a discrete event: it happens once, instantly, and carries no shape
of its own — no duration, no location, nothing but "it happened." Everything
this course builds for the next eleven weeks is layered on top of that one
fact, so this week isolates it before anything gets added.

## Before the session

Have the toolchain running. Nothing else is expected in week 1 — no design
experience, no prior prototypes.

## In the session

A short demo of three things that already use a single press for three
different jobs (a light switch, a camera shutter, a stopwatch's lap button),
then the rest of the time is build time.

## Studio exercise

Build three tiny prototypes, each using only the press event — no hold logic,
no timing between presses, nothing measured. In one, a press advances a
counter. In one, a press toggles between two states. In one, a press fires a
single irreversible effect. They should feel different from each other using
nothing but that one event.

## By the end

You can tell the difference between an event (something that happens) and a
value (something that has a state), and you've seen how much a single bit of
input can already carry before anything is added to it.
