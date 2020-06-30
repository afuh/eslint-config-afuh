const react = require("./rules/react")

module.exports = {
  extends: ['./index.js', "plugin:react/recommended"],
  plugins: ['react', 'react-hooks'],
  ecmaFeatures: {
    jsx: true,
    browser: true
  },
  env: {
    browser: true
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  rules: {
    ...react
  }
}
