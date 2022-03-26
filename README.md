# ABC Frontend Coding Exercise

## Summary

This is my submission for ABC's coding exercise. I spent one and a half days working on it, give or take.

Please see [ARCHITECTURE.md](./ARCHITECTURE.md) for more information on tech decisions and what I would aim to achieve with more time.

## Getting Started

To get the app running, run these commands inside the terminal:

    git clone https://github.com/dylan-keyt/abcdigital.git
    cd abcdigital
    git checkout dylan-keyt-code-submission
    npm install
    npm start

Please note that the modified code can be found on the `dylan-keyt-code-submission` branch.

This was done in order to have an easier time viewing differences to `master`.

## Commands

The `package.json` file has been updated with more commands to use.

- `npm start` - runs the local development server in addition to the proxy server on port `8010`
- `npm run build` - runs the TypeScript compiler (`noEmit: true` flag currently prevents output)
- `npm run lint` - runs ESLint for root directory
- `npm run test` - runs unit tests with Jest and React Testing Library

## Support

If you have any questions, please don't hesitate to email me or send me a message.

Thanks for reviewing my code.
