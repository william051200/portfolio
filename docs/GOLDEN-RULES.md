# Golden rules for software projects

Use these principles as a baseline for application code and UI design. Keep language, framework, folder structure, business rules and tool commands in project-specific documentation. Record any deliberate exception and its reason there.

## 1. Build for a concrete requirement

- Implement the smallest complete solution that meets the acceptance criteria.
- Reuse existing capabilities before adding another dependency, service or architectural layer.
- Introduce abstractions when real use cases share the same responsibility and rules. Similar-looking code alone is not enough.
- Add configuration and extension points only when a current requirement needs them.
- Choose classes, functions and other language features according to their purpose and the project's conventions.

## 2. Give each responsibility a clear owner

- Keep presentation, business rules and external I/O separate enough to understand and test independently.
- Let UI code handle rendering and interaction. Keep business decisions out of templates and visual components.
- Keep core domain logic independent of UI frameworks, browser APIs, databases and network clients where practical.
- Give each business rule one authoritative implementation. Call it from the places that need it.
- Make dependencies explicit and avoid circular imports or hidden initialization requirements.

These are responsibility boundaries, not a requirement to create a folder, class or interface for every layer.

## 3. Make code easy to read locally

- Name things after their domain meaning or observable behavior.
- Keep functions and modules focused. Split them when responsibilities diverge, not to meet arbitrary line limits.
- Prefer straightforward control flow and explicit inputs and outputs over clever shortcuts.
- Use consistent terminology and the language's established idioms.
- Comment non-obvious constraints and reasons. Remove comments that only repeat the code.
- Remove obsolete code when replacing it; use version control for history.

## 4. Make state and data flow explicit

- Give mutable state a clear owner and a defined lifetime.
- Store shared state only when multiple consumers genuinely need it. Keep derived values computed where practical.
- Avoid shared mutable globals and hidden side effects.
- Distinguish editable input, validated domain data and saved or generated output when their guarantees differ.
- Copy or freeze data at boundaries where later edits must not change an earlier result.
- Define what navigation, cancellation, retries and reloads preserve or discard.

## 5. Treat boundaries as contracts

- Validate external input at the boundary that receives it. Client-side checks do not replace server-side enforcement.
- Normalize input only when the domain permits it; preserve meaningful user content.
- Represent invalid, missing, loading and failed states explicitly. Do not substitute plausible but false results.
- Use suitable representations for precision-sensitive values, dates and identifiers.
- Make asynchronous ownership clear. Prevent stale responses, repeated submissions and retries from corrupting state.
- Keep errors actionable for users and diagnosable for maintainers without exposing sensitive data.

## 6. Keep the interface consistent and accessible

- Use shared design tokens for color, spacing, typography and interaction states.
- Reuse components when their behavior and meaning match. Keep feature-specific rules with their feature.
- Make the current task and primary action easy to identify. Use plain, specific labels.
- Prefer semantic elements and native controls. Support keyboard use, visible focus and associated labels.
- Meet applicable accessibility standards. Do not rely on color alone to communicate meaning.
- Let content wrap and layouts adapt to narrow screens, zoom and long or translated text.
- Preserve user input after recoverable failures and explain what the user can do next.
- Add decoration, animation and dialogs only when they help the task.

## 7. Protect user data by default

- Collect, retain and transmit only the data the feature needs.
- Define storage, access and deletion behavior before introducing persistence.
- Keep credentials and other secrets out of client bundles, source control, fixtures and documentation.
- Use synthetic data in examples, screenshots and tests.
- Render untrusted content safely and use parameterized operations at data boundaries.
- Enforce authorization at the trusted boundary for every protected operation.
- Avoid sensitive data in logs, analytics, URLs and error messages.

## 8. Verify behavior at the right level

- Test domain rules independently from presentation where practical.
- Add focused regression tests for fixed bugs and tests for new behavior.
- Assert observable results and contracts. Avoid coupling tests to incidental implementation details.
- Use integration tests for boundaries and end-to-end tests for important user journeys.
- Check relevant failure paths and edge cases, not only successful input.
- For UI changes, verify keyboard interaction, focus and representative responsive layouts. Inspect visual output when appearance matters.
- Run the smallest relevant checks first, then broaden when shared changes or failures justify it.
- Use existing type checks, linters and build tools. State what passed and what remains unverified.

## 9. Keep changes narrow and reviewable

- Understand the existing flow and conventions before editing.
- Preserve unrelated work and established behavior outside the requested change.
- Keep directly dependent callers, tests and documentation consistent.
- Separate unrelated cleanup from functional changes.
- Investigate failures before weakening checks or changing the design.
- Measure before adding performance complexity.
- Plan compatibility, data migration and rollback when changing a persisted format or public contract.

## 10. Keep documentation authoritative

- Give each rule one authoritative location and link to it from other documents.
- Keep reusable engineering principles separate from project setup and domain-specific behavior.
- Document ownership, data lifetime and important constraints that readers cannot infer from names alone.
- Record consequential decisions with their reason and tradeoffs.
- Update existing guidance when behavior changes; remove obsolete instructions.
- Keep setup and verification commands reproducible.

## Before considering a change complete

- Does it meet the acceptance criteria without speculative scope?
- Are responsibility boundaries and state ownership clear?
- Are failure states, accessibility and data handling covered where relevant?
- Did the applicable checks pass, and were any limitations reported?
- Do documentation and actual behavior agree?
