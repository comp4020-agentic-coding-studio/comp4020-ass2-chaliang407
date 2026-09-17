---
title: Sequence
description:
  Turning short presses and long presses into a small alphabet the game can
  recognise
week: 5
date: 2027-03-22
teachers:
  - idris-fenn
spec:
  - you have defined an alphabet of three to five symbols built from
    short/long presses
  - a prototype recognises at least two distinct sequences and responds
    differently to each
related:
  - 02-hold
  - 03-release
  - 04-rhythm
---

This week doesn't add a new signal — it combines three you already have.
Short-press and long-press (from weeks 2 and 3) become two distinguishable
"letters," and week 4's timing windows are what let the game tell where one
letter ends and the next begins. A vocabulary, it turns out, is built by
combining existing primitives under a shared timing rule, not by adding new
hardware.

## Before the session

Bring your week 3 (release) and week 4 (rhythm) prototypes — you'll be
borrowing pieces from both.

## In the session

Demo of a Morse-style alphabet, then build time defining your own and wiring
up recognition.

## Studio exercise

Define a 3–5 symbol alphabet from short/long presses (e.g. short-short-long),
then build a prototype that recognises at least two distinct sequences from
it and does something different for each.

## By the end

You can point to which earlier week supplied each part of a sequence-reading
prototype: the symbol shapes, and the timing that segments them.
