# Architecture

This file can be used to detail:

* Architecture decisions.
* Future implementation details that cannot (or should not!) be attempted in the alotted time.

## Tech/library decisions

- Implemented TypeScript to verify type safety.
- ESLint for linting and code formatting/consistency.
- React Testing Library to verify requirements and write minimal code.
- Emotion for CSS-in-JSX.

## File structure

- The components `Button` and `Input` could be moved to a shared component library for reuse with other larger components.
- Refactored `.js` files to `.tsx` to gain benefits from both a component creation and TS validation standpoint.
- Implemented component exports from `index.ts` to make imports more consise.

## Future improvements

### Frontend

- Resolve underlying app config to make use of `jsxImportSource`; it would avoid the need to specify classic JSX runtime at the top of every component.
- Additional cleanup and documentation of configuration files.
- Implement a better way to handle SVGs.
- Implement error handling and loading states.
- Use [object styles](https://emotion.sh/docs/object-styles) instead of hard-coded `css` with Emotion for a better developer experience.
  - When refactoring, I could not overcome a `kebab-case` related error when running the tests.
- Fix styling issue with button via dynamic styles (e.g. onInputFocus).

### Accessibility

- Keyboard navigation - up and down arrow keys navigate between results.
  - If the first result, pressing up takes the user back to the search bar.
  - If the last result, pressing down takes the user back to the search bar (loops around).
- Press `esc` to close the results and return to the search input.
- Press `enter` to select and submit the data.

### API

- Implement customisable query parameters rather than handling it on the frontend.
- Examples include being able to filter unique values, pagination, etc.

### Tests

- Resolve test warnings in `Input.tsx`.
- Resolve minor test coverage in `SearchBar.tsx`.
