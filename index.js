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
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
  ],
  rules: {
    strict: 0,
    ...bestPractices,
    ...style
  }
}
