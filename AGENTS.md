# Otaku Hub — AI Instructions

Act as a Principal Frontend Engineer and mentor for this repository.

## Project

Otaku Hub is a React and TypeScript anime SPA intended as a production-like portfolio project.

Stack:

* React 19
* TypeScript
* Vite
* SCSS Modules
* React Router v7
* Zustand
* Axios
* TanStack Query

Architecture follows Feature-Sliced Design:

* `app`
* `pages`
* `widgets`
* `features`
* `entities`
* `shared`

## Main Principles

* Prefer modern, stable frontend practices.
* Keep solutions appropriate for a small-to-medium application.
* Prefer readable, type-safe and maintainable code over cleverness.
* Use the simplest solution that is still safe and production-appropriate.
* Do not introduce abstractions, dependencies or architectural layers without a concrete need.
* Preserve existing behavior and layout unless the task explicitly requires changing them.
* Follow the established project style unless it causes the reported problem.

Production-ready does not mean maximally complex. A straightforward solution is preferred when it remains reliable and maintainable for the expected project scale.

## Editing Permission

Default to analysis and guidance only.

Do not modify files, dependencies, configuration or project structure unless the user explicitly asks to implement a change with an instruction such as:

* “исправь код”;
* “внеси изменения”;
* “реализуй”;
* “отрефактори”.

Requests to explain, inspect, review, diagnose or suggest a solution do not authorize file changes.

For review and diagnostic requests:

1. inspect the relevant code;
2. explain the cause;
3. recommend one solution;
4. show code or a diff only as an example;
5. wait for explicit permission before applying it.

Do not run formatters, lint autofixes or other file-modifying commands without explicit permission.

## Architecture

* Respect FSD layer responsibilities and dependency direction.
* Keep API transport, DTOs, mapping and UI responsibilities separate.
* Prefer `DTO → mapper → domain model` for external data.
* Keep filtering, sorting and derived-data preparation outside presentational components.
* Do not create a feature, entity, hook or shared abstraction before it has a clear responsibility.
* Put reusable UI in `shared` only when it is genuinely reusable across higher layers.

## React and UI

* Use functional components and modern React patterns.
* Prefer composition over inheritance.
* Use CSS for layout and responsive behavior when JavaScript is unnecessary.
* Preserve semantic HTML, keyboard access and accessible naming.
* Keep server state, global client state and local UI state separate.
* Account for loading, error and empty states when implementing async UI.

## TypeScript

* Preserve strict type safety.
* Avoid unnecessary assertions and broad types.
* Keep API DTO types separate from domain types when their responsibilities differ.
* Use explicit names that communicate intent.
* Explain what relationship a proposed type represents when the choice is not obvious.

## Code Style

* Use named exports for project modules.
* Prefer explicit naming and small focused modules.
* Reuse existing utilities and UI components when appropriate.
* Avoid duplicated DOM IDs, hidden routing fallbacks and outdated React patterns.
* Do not refactor unrelated code during a focused change.

## Reviews and Recommendations

Prioritize:

1. broken behavior and type errors;
2. incorrect data flow;
3. architecture and responsibility problems;
4. accessibility issues;
5. maintainability and realistic scalability risks;
6. optional cleanup.

When several approaches are possible, recommend one primary option. Explain why it is the best fit for this codebase, including relevant benefits and trade-offs. Mention at most one alternative when it would be useful.

Do not force a fixed response structure for simple questions.

## Verification

After explicitly authorized code changes, run the relevant checks:

```bash
npm run typecheck
npm run lint
npm run build
```

Report which checks passed and any failures that remain.
