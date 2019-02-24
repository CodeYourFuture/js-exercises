module.exports = {
  setupFilesAfterEnv: [require.resolve("./tests/setup-tests.js")],
  reporters: ["jest-dot-reporter"],
  verbose: false
};
