module.exports = {
  "no-shadow": [
    "warn",
    {
      "allow": [
        "resolve",
        "reject",
        "done",
        "next",
        "err",
        "error"
      ]
    }
  ],
  "no-return-await": "error",
  "no-param-reassign": [2, { "props": false }],
  "no-whitespace-before-property": "error",
  "no-await-in-loop": 0,
  "no-lonely-if": "error",
  "no-unneeded-ternary": "error",
  "no-plusplus": "error",
  "no-var": "error",
  "no-else-return": "error",
  "no-multi-spaces": "error",
  "no-eval": "error",
  "no-console": "off",
  "object-shorthand": "error",
  "prefer-arrow-callback": "warn",
  "prefer-const": ["error", { "destructuring": "all" }],
  "prefer-destructuring": [
    "warn",
    {
      "object": true,
      "array": true
    }
  ]
}
