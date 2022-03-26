# ABC Frontend Coding Exercise

## Summary

This is my submission for ABC's coding exercise. I spent a couple of days working on it, give or take.

Please see [ARCHITECTURE.md](./ARCHITECTURE.md) for more information on tech decisions and what I would aim to achieve with more time.

## Getting Started

To get the app running, run these commands inside the terminal:

    git clone https://github.com/dylan-keyt/abcdigital.git
    cd abcdigital
    npm install
    npm start

### Node version

This app has been tested with Node `v16.14.2`, which is the latest LTS version at the time of development.

If you encounter any issues with setup, please ensure you are using this version.

## Commands

The `package.json` file has been updated with more commands to use.

- `npm start` - runs the local development server in addition to the proxy server on port `8010`
- `npm run build` - runs the TypeScript compiler (`noEmit: true` flag currently prevents output)
- `npm run lint` - runs ESLint for root directory
- `npm run lint-fix` - runs ESLint and fixes all auto-fixable issues
- `npm run test` - runs unit tests with Jest and React Testing Library
- `npm run test-watch` - runs Jest in the watch mode, will re-run if files or tests are changed

## Support

If you have any questions, please don't hesitate to email me or send me a message.

Thanks for reviewing my code.
