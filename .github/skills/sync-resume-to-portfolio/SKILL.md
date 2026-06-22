---
name: sync-resume-to-portfolio
description: >-
  Sync the resume PDF into this Vue portfolio's typed data files
  (src/data/*.ts). Additively adds new projects, skills, work experience,
  and profile details — never removes existing portfolio entries, even if
  they were trimmed from the resume. Use when the user updates their resume
  and wants the portfolio brought up to date.
---

# Sync Resume → Portfolio

Keep this portfolio in sync with the owner's resume. The portfolio stores all
content in typed data files under `src/data/`; the resume lives at
`public/Resume.pdf`. Your job is to read the resume and **add** anything new to
the portfolio data files.

## Golden rule: additive only

**Never delete or trim existing portfolio entries.** The resume is regularly
trimmed (old projects/skills removed to keep it short), but the portfolio is a
complete history. Only ever **add** new items or **augment** existing ones.
If something is in the portfolio but not the resume, leave it untouched.

## Inputs

- Resume: `public/Resume.pdf` by default. If the user supplies a different path
  or attaches a document, use that instead.
- Portfolio data files (all under `src/data/`):
  - `projects.ts` — array of `Project`
  - `skills.ts` — array of `SkillGroup`
  - `companies.ts` — array of `Company` (work experience)
  - `profile.ts` — single `Profile` object
- Type definitions live in `src/types/` (`project.ts`, `skill.ts`,
  `company.ts`, `profile.ts`, `index.ts`). Read them so new entries match the
  exact shape.

## Procedure

1. **Read the resume.** Extract its projects, skills, experience, education, and
   contact/headline details.
2. **Read every `src/data/*.ts` file** to learn what already exists. Build a
   mental diff of resume-vs-portfolio for each section.
3. **Add only what's missing** per the rules below.
4. **Verify** with `npm run type-check` (and `npm run build` for a full check).
5. **Report** a concise summary of what was added and explicitly confirm that
   nothing was removed.

## Per-section rules

### Projects (`src/data/projects.ts`)

- Match existing projects by `title` (case-insensitive, ignoring punctuation).
- For each resume project **not** already present, append a new `Project`:
  ```ts
  {
    title: string,
    description: string,   // 1–2 sentences, condensed from the resume bullet(s)
    tags: string[],        // key technologies, matching the casing used elsewhere
    links: ProjectLink[],  // add { label: "Source", url } when a GitHub URL exists
    featured?: boolean,    // only set true for flagship items already styled so
  }
  ```
- Keep the repo's tone: portfolio descriptions are slightly condensed versions of
  the resume text, not verbatim copies. Reuse tag names already present in the
  file when they apply (e.g. `Python`, `Docker`, `REST API`, `AI`).
- Preserve ordering convention (featured projects first).

### Skills (`src/data/skills.ts`)

- Each `SkillGroup` has a `category` and `items[]`. Add any new resume skill to
  the most appropriate existing category (`Languages`, `Frameworks & Libraries`,
  `Tools & Platforms`). Create a new group only if no category fits.
- Match items case-insensitively to avoid duplicates. Never remove items.

### Work experience (`src/data/companies.ts`)

- Match by `name` + `role`. For a genuinely new role/company on the resume,
  append a `Company` (`name`, `role`, `period`, `summary`, `url`). Use `"#"` for
  `url` if no link is available, matching existing entries.
- If an existing company's `period` changed (e.g. an end date was added), update
  that field. Never remove past roles.

### Profile (`src/data/profile.ts`)

- Only touch `headline`, `tagline`, `about`, or `highlights` when the resume
  clearly signals a change (e.g. a new current job title or focus). Keep edits
  additive/corrective — never blank out existing prose.
- If the project or skill counts visibly changed, you may bump the relevant
  `highlights` value (e.g. "Projects Shipped"). Confirm with the user if unsure.

## Verification

Run from the repo root:

```sh
npm run type-check
npm run build
```

Both must pass. Fix any type errors caused by your additions before finishing.

## Output

End with a short report:

- **Added**: bullet list of new entries per section (or "none").
- **Updated**: any augmented existing entries (or "none").
- **Removed**: always "none — additive sync".
- Note the verification result (type-check/build passed).
