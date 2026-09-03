# Frontend Standards

## TypeScript

- avoid `any`
- prefer strict typing
- create domain types intentionally
- do not keep critical app logic in untyped `.js/.jsx` files for long
- API responses must be typed separately from UI models

## React

- functional components only
- hooks only
- avoid unnecessary `useMemo` and `useCallback`
- avoid premature optimization
- keep components focused on one responsibility

## FSD Boundaries

- `pages` assemble page scenarios
- `widgets` render large page blocks
- `features` contain user actions and scenarios
- `entities` store domain types, entity UI and entity-related data logic
- `shared` stores reusable UI, utils and infrastructure

## Data Flow

- widgets and shared UI should not import API directly
- widgets should not depend on mock data directly
- sorting, filtering and section preparation should live outside presentational UI
- prepare data before passing it into UI blocks

## State

Local UI state:

- `useState`

Global client state:

- Zustand

Server state:

- TanStack Query when API integration starts

## API

- native `fetch` for AniList GraphQL requests
- GraphQL over HTTP: `POST` with `query` and optional `variables`
- typed responses
- centralized API layer
- `DTO -> mapper -> app/domain model`
- do not pass raw API responses directly into components

## Routing

- routes must be explicit
- placeholder links should lead to stub pages, not silently fallback to home
- route helpers should stay centralized

## Styling

- SCSS Modules
- no inline layout styles
- prefer CSS for layout and responsiveness
- keep component geometry understandable
- shared tokens and helpers belong to app/shared styling layers

## Accessibility

- semantic HTML first
- keyboard support for interactive elements
- `aria-*` only where it adds real meaning
- no duplicated `id` values in interactive UI
- links and buttons must reflect their real behavior

## Async States

For data-driven screens always plan:

- loading state
- error state
- empty state
- success state

## Performance

- lazy loading for routes when they appear
- memoize only when justified
- optimize images
- avoid recomputing derived lists inside presentational widgets when possible

## Code Quality

- clear naming
- small components
- single responsibility
- predictable imports and exports
- prefer named exports for local project modules

## Verification

Before major merges:

- project builds successfully
- lint passes
- typecheck passes
- UI still works at desktop and mobile breakpoints
