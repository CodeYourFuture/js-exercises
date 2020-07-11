module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
  },
  rules: {
    semi: ["warn", "always"],
    quotes: ["warn", "double"],
    eqeqeq: ["warn", "always"],
    "no-unused-vars": ["warn"],
    "no-redeclare": ["warn"],
    "no-undef": ["warn"],
  },
};
