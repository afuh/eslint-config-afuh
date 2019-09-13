module.exports = {
  "react-hooks/rules-of-hooks": "error",
  "react-hooks/exhaustive-deps": "warn",
  "react/no-deprecated": "off",
  "react/display-name": "off",
  "react/prop-types": [
    "error",
    {
      "ignore": ["match", "history", "children"]
    }
  ]
}
