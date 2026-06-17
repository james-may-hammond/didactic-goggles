module.exports = {
  ignores: ["node_modules/**"],
  languageOptions: {
    ecmaVersion: "latest",
    sourceType: "script",
    globals: {
      module: "readonly",
      console: "readonly",
      setTimeout: "readonly",
      clearTimeout: "readonly",
      setInterval: "readonly",
      clearInterval: "readonly"
    }
  },
  rules: {
    "no-unused-vars": ["warn", { vars: "all", args: "after-used", ignoreRestSiblings: true }],
    "no-undef": "error",
    "no-console": "off"
  }
};
