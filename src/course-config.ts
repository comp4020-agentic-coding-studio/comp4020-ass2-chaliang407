import type { CourseMetaInput } from "astro-course-university";
import { z } from "astro/zod";

// The level digits ANU uses: 1000--4000 undergraduate, 6000 and 8000
// postgraduate. Both the code pattern and the level field derive from this.
const LEVELS = [1, 2, 3, 4, 6, 8] as const;
const allowedCode = new RegExp(`^SLOP[${LEVELS.join("")}]\\d{3}$`);

export const slopCourseMetaSchema = z
  .strictObject({
    code: z.string().regex(allowedCode, {
      message: "use SLOP plus a 1000–4000, 6000 or 8000 level code",
    }),
    title: z.string().trim().min(1).max(100),
    session: z.string().trim().min(1).max(40),
    year: z.number().int().min(2026).max(2200),
    level: z.literal(LEVELS),
    startDate: z.iso.date(),
    endDate: z.iso.date(),
    description: z.string().trim().min(80).max(300),
    tags: z.array(z.string().trim().min(2).max(24)).min(1).max(3),
  })
  .superRefine((course, ctx) => {
    const codeLevel = Number(course.code.at(4));
    if (course.level !== codeLevel) {
      ctx.addIssue({
        code: "custom",
        path: ["level"],
        message: `must match ${course.code}'s first digit (${codeLevel})`,
      });
    }
    if (course.startDate > course.endDate) {
      ctx.addIssue({
        code: "custom",
        path: ["startDate"],
        message: "must not be after endDate",
      });
    }
  });

// The single source of truth for the course record. The generated homepage,
// navigation label and /api/index.json all read this object.
//
// The code's last three digits were assigned to this repo when it was
// provisioned, and no other course in the cohort has them, so SLOP1614 stays.
// Level 1 (undergraduate, first digit of the code) is a deliberate choice,
// not a leftover default: the course assumes no prior game-design or
// programming background, only a willingness to build small playable things
// every week.
//
// Teaching period: twelve weekly sessions/lectures run Monday 22 Feb 2027 to
// Monday 10 May 2027; endDate extends eleven days past the last teaching
// week so the final assessment's due date (the end of the teaching period
// itself) falls inside it.
export const courseMeta = slopCourseMetaSchema.parse({
  code: "SLOP1614",
  title: "One Button, Twelve Games",
  session: "Semester 1",
  year: 2027,
  level: 1,
  startDate: "2027-02-22",
  endDate: "2027-05-21",
  description:
    "A twelve-week course in how much interaction a single button can hold. " +
    "Each week adds one new primitive to a shared vocabulary — press, hold, " +
    "release, rhythm, sequence, momentum, context — building toward a " +
    "complete one-button game.",
  tags: ["game design", "interaction design", "constraints"],
}) satisfies CourseMetaInput;
