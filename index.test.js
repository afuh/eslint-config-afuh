describe("base config", () => {
  const base = require("./index.js")

  test("entry points", () => {
    expect(() => {
      require("./rules/best-practices")
      require("./rules/style")
    }).not.toThrowError()
  })

  test("config properties", () => {
    expect(base).toHaveProperty("rules")
    expect(base).toHaveProperty("env")
    expect(base).toHaveProperty("parser")
    expect(base).toHaveProperty("extends")
    expect(base).toHaveProperty("plugins")
  })
})

describe("react config", () => {
  const react = require("./react.js")

  test("entry points", () => {
    expect(() => {
      require("./rules/react")
    }).not.toThrowError()
  })

  test("config properties", () => {
    expect(react).toHaveProperty("rules")
    expect(react).toHaveProperty("env")
    expect(react).toHaveProperty("extends")
    expect(react).toHaveProperty("plugins")
  })

  it("should extend the base config", () => {
    expect(react['extends']).toContain('./index.js')
  })
})