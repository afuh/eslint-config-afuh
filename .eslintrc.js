const react = require("./rules/react")
const bestPractices = require("./rules/best-practices")
const style = require("./rules/style")

module.exports = {
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 2018,
    "ecmaFeatures": {
      "jsx": true,
      "browser": true
    }
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "env": {
    "es6": true,
    "node": true,
    "browser": true,
    "jest": true
  },
  "plugins": [
    "react",
    "jsx-a11y",
    "react-hooks",
  ],
  "extends": [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended"
  ],
  "rules": {
    "strict": 0,
    ...react,
    ...bestPractices,
    ...style
  }
}