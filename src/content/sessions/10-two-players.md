---
title: Two players
description:
  Two single buttons, one shared game — what changes when someone else's
  timing matters too
week: 10
date: 2027-04-26
teachers:
  - idris-fenn
spec:
  - a two-player prototype exists where each player's press only means
    something in relation to the other player's input
  - you can say exactly what breaks if you unplug the second player
related:
  - 04-rhythm
  - 07-context
---

Two players, one button each: the interesting part isn't running two
single-player prototypes side by side, it's making each player's press
depend on the other's. That needs week 4's rhythm (synchronising against
someone else's timing) and week 7's shared state (now read by two input
streams instead of one).

## Before the session

Bring a prototype that uses rhythm or context — you'll be turning its single
shared state into something both players affect.

## In the session

Demo of a two-player prototype where removing one player breaks the game
outright, then build time on your own.

## Studio exercise

Build a two-player, one-button-each prototype where a player's press changes
meaning depending on what the other player just did. Test it by playing
solo, pressing both buttons yourself, then run the "unplug one player" test:
if the game still plays the same alone, the dependency isn't real yet.

## By the end

You can justify why "one button per player" is a much bigger design space
than "one button total," and name which earlier mechanics carry over into
it.
