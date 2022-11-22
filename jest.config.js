module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  moduleFileExtensions: ["js", "json", "vue"],
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
  testPathIgnorePatterns: ["/tests/e2e"],
  collectCoverage: true,
  collectCoverageFrom: ["./src/**/*.{js,vue}", "!**/node_modules/**", "!./src/**/*.(stories|test|spec).js"]
}
