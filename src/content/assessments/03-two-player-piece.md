---
title: Two-player piece
description:
  The week 10 checkpoint — a prototype where two single-button players
  depend on each other, not two copies of the same game
week: 10
due: 2027-05-03T12:00:00+10:00
weight: 15
marking:
  mode: holistic
  description:
    Marked on whether the second player's input actually changes what the
    first player's button means, and vice versa. A technically-correct
    two-button, one-each prototype that plays identically with one player
    unplugged has not met the brief, however well it's built otherwise.
spec:
  - a two-player prototype exists, one button per player
  - a player's press changes meaning depending on what the other player has
    done
related:
  - sessions/10-two-players
---

> Build a game two people can only really play together, using one button
> each.

The one-button-per-player constraint is easy to satisfy on paper and easy to
miss in spirit — the interesting design work is in the dependency between
the two streams, not in the fact that there are two of them.

## What you submit

A runnable two-player prototype, plus the result of the "unplug one player"
test named in week 10's session: what happens, concretely, if only one
person plays.
