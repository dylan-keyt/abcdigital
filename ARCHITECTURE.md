# Architecture

This file can be used to detail:

* Architecture decisions.
* Future implementation details that cannot (or should not!) be attempted in the alotted time.

## Tech decisions

- Implemented TypeScript to verify type safety.
- ESLint for linting and code formatting/consistency.
- React Testing Library to verify requirements and write minimal code.

## File structure

- The components `Button` and `Input` could be moved to a shared component library for reuse with other larger components.
- Refactored `.js` files to `.tsx` to gain benefits from both a component creation and TS validation standpoint.
- Implemented component exports from `index.ts` to make imports more consise.
