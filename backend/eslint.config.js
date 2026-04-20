const security = require("eslint-plugin-security");

module.exports = [
  {
    ignores: ["node_modules/**", "coverage/**"],
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "commonjs",
    },
    ...security.configs.recommended,
    rules: {
      ...security.configs.recommended.rules,
      "no-console": "off",
      "security/detect-object-injection": "off",
    },
  },
];
