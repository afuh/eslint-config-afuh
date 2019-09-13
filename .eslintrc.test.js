test("entry points", () => {
  expect(() => {
    require("./rules/react")
    require("./rules/best-practices")
    require("./rules/style")
    require("./.eslintrc")
  }).not.toThrowError()
})

test("Object properties", () => {
  const eslintrc = require("./.eslintrc")

  expect(eslintrc).toHaveProperty("rules")
  expect(eslintrc).toHaveProperty("env")
  expect(eslintrc).toHaveProperty("parser")
  expect(eslintrc).toHaveProperty("extends")
  expect(eslintrc).toHaveProperty("plugins")
})