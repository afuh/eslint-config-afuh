const react = require("./rules/react")

module.exports = {
  extends: ['./index.js', "plugin:react/recommended", "plugin:jsx-a11y/recommended"],
  plugins: ['react', 'react-hooks', "jsx-a11y"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      browser: true
    },
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
