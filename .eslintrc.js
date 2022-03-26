// eslint-disable-next-line no-undef
module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "@typescript-eslint"
  ],
  "rules": {
    "max-len": ["error", { "code": 100 }],
    "indent": ["error", 2],
    "@typescript-eslint/type-annotation-spacing": 2,
    "quotes": ["error", "double"],
    "no-trailing-spaces": "error",
    "jsx-quotes": ["error", "prefer-double"],
    "semi": ["error", "always"],
    "no-multi-spaces": ["error"],
    "object-curly-spacing": ["error", "always"]
  },
  "ignorePatterns": ["build", "node_modules"]
};
