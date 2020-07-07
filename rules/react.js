module.exports = {
  "jsx-quotes": ["error", "prefer-single"],
  "react-hooks/rules-of-hooks": "error",
  "react-hooks/exhaustive-deps": "warn",
  "react/no-deprecated": "off",
  "react/display-name": "off",
  "import/no-anonymous-default-export": "error",
  "react/prop-types": [
    "error",
    {
      "ignore": ["match", "history", "children", "element"]
    }
  ]
}
