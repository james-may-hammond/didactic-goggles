module.exports = {
  root: true,
  ignorePatterns: ["node_modules/"],
  languageOptions: {
    ecmaVersion: "latest",
    sourceType: "script"
  },
  rules: {
    "no-unused-vars": ["warn", { vars: "all", args: "after-used", ignoreRestSiblings: true }],
    "no-undef": "error",
    "no-console": "off"
  }
};
