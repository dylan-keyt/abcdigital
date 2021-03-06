# Architecture

Here are my notes on the following:

* Architecture decisions
* Future implementation details that could not be completed in the alotted time.

## Tech/library decisions

- Implemented TypeScript to verify type safety.
- ESLint for linting and code formatting/consistency.
- React Testing Library to verify requirements and write minimal code.
- Emotion for CSS-in-JSX.

### File structure notes

- The components `Button` and `Input` could be moved to a shared component library for reuse with other larger components.
- Refactored `.js` files to `.tsx` to gain benefits from both a component creation and TS validation standpoint.
- Implemented component exports from `index.ts` to make imports more consise.

## Future improvements

### Frontend

- Additional cleanup and documentation of configuration files.
- Implement a better way to handle SVGs.
- Implement error handling and loading states.
- Use [object styles](https://emotion.sh/docs/object-styles) instead of styled components with Emotion for a better developer experience.
  - When refactoring, I could not overcome a `kebab-case` related error when running the tests.
  - This is likely due to misaligned config in Babel/Jest/TSConfig.
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
- Add loading/error handling, and add tests for them.
