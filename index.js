const style = require("./rules/style")
const bestPractices = require("./rules/best-practices")

module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2018
  },
  env: {
    es6: true,
    node: true,
    jest: true
  },
  plugins: [
    "jsx-a11y"
  ],
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:jsx-a11y/recommended"
  ],
  rules: {
    strict: 0,
    ...bestPractices,
    ...style
  }
}
