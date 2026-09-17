# Process overview

## What I built

SLOP1614, "One Button, Twelve Games": a twelve-week course site where every
week adds one primitive to a shared one-button interaction vocabulary, and
later weeks depend on earlier ones instead of restating them.

## How I got here

I decided that a good course is cumulative rather than merely consistent.
For a course built entirely on one button, each week should expand a shared
interaction vocabulary — press, hold, release, rhythm, sequence, and on —
and later work should depend on earlier ideas, not just sit next to them.

In [`a7d3982`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-chaliang407/commit/a7d398266441523e9347fc85342315543d51a953)
I encoded the structural side of that position: a twelve-week curriculum
with one new primitive per week, a `CLAUDE.md` harness spelling out the
vocabulary and the one-button constraint, `spec/curriculum.test.ts` checking
that sessions and lectures each cover weeks 1–12 exactly once, that
assessment weights sum to 100, and that every session or lecture after week
1 carries a `related` edge back to an earlier week, and a set of assessments
built out of that curriculum.

The important change came after that commit, not inside it. The structural
checks passed, but reading non-adjacent weeks against each other showed that
a valid `related` edge did not mean the two pages actually needed each
other. Several lectures and their paired sessions said close to the same
thing in different words — the edge existed, but deleting either page would
have lost almost nothing.

That is what changed the harness. In
[`0900f3b`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-chaliang407/commit/0900f3b88efc99b81cf7950dad36209f9463b27e)
I added the rule "Lectures frame; sessions build" to `CLAUDE.md`: a lecture
frames the week's design problem, distinguishes the new primitive from
earlier ones, and raises trade-offs; a session turns that into a concrete
build with stated constraints and an observable way to tell it works, and
assumes the lecture rather than repeating it. That commit rewrote the twelve
lectures and several sessions to match, and cleared up a real inconsistency
the rule exposed: week 7's studio session works with two mechanics behind
one piece of state, while the Context Switch assessment asks for three or
more — that looked like a contradiction until both pages said explicitly
that the assessment extends the session's technique rather than repeating
its scope.

I did not try to fix this by adding more automated checks. Twelve weeks,
assessment totals, and `related` edges are mechanically testable; whether a
lecture actually frames instead of repeating is not — that takes reading two
pages and judging whether either one is redundant, which is what the
"Rules here" / "Checks in `spec/`" / "Left to the crit" split already in
`CLAUDE.md` is for.

[`7c16acc`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-chaliang407/commit/7c16accac7d90c22905be4c18719df692c01935b)
applies the same standard to the student-facing site: the real Week 1
lecture deck, replacement people content and portraits, replacement artwork,
and a responsive pass across the built pages. That pass found a bug the
structural checks could not have caught — the deck's final auto-animate
slide overflowed the fixed 1280×720 canvas — and fixing it meant looking at
a rendered slide, not re-running a test. Acceptance, here, kept meaning more
than "the build passes" all the way through.
