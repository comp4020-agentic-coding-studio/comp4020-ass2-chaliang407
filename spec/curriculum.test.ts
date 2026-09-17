import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

interface ApiNode {
  id: string;
  type: string;
  related: string[];
  meta?: Record<string, unknown>;
}

interface CourseApi {
  nodes: ApiNode[];
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;
const byId = new Map(api.nodes.map((node) => [node.id, node]));
const weekOf = (node: ApiNode): number | undefined => {
  const week = node.meta?.week;
  return typeof week === "number" ? week : undefined;
};

describe("twelve-week structure", () => {
  for (const type of ["sessions", "lectures"] as const) {
    it(`${type} cover weeks 1-12 exactly once each`, () => {
      const weeks = api.nodes
        .filter((node) => node.type === type)
        .map(weekOf)
        .filter((week): week is number => week !== undefined)
        .sort((a, b) => a - b);

      expect(weeks).toEqual(Array.from({ length: 12 }, (_, i) => i + 1));
    });
  }
});

describe("assessment weights", () => {
  it("sum to exactly 100", () => {
    const total = api.nodes
      .filter((node) => node.type === "assessments")
      .reduce((sum, node) => sum + ((node.meta?.weight as number) ?? 0), 0);

    expect(total).toBe(100);
  });
});

describe("week progression", () => {
  it("every session/lecture after week 1 links back to an earlier week", () => {
    const laterWeeks = api.nodes.filter(
      (node) =>
        (node.type === "sessions" || node.type === "lectures") &&
        (weekOf(node) ?? 0) > 1,
    );

    for (const node of laterWeeks) {
      const linksToEarlierWeek = node.related.some((refId) => {
        const ref = byId.get(refId);
        if (!ref || (ref.type !== "sessions" && ref.type !== "lectures")) {
          return false;
        }
        const refWeek = weekOf(ref);
        return refWeek !== undefined && refWeek < (weekOf(node) as number);
      });

      expect(
        linksToEarlierWeek,
        `${node.id} (week ${weekOf(node)}) has no related edge to an earlier week`,
      ).toBe(true);
    }
  });
});
