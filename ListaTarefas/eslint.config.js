import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import babelParser from "@babel/eslint-parser";

/** @type {import('eslint').Linter.Config} */
export default {
  files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"],
  languageOptions: {
    globals: globals.browser,
    parser: babelParser,
    parserOptions: {
      requireConfigFile: false,
      babelOptions: {
        presets: ["@babel/preset-react"],
      },
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: ["react"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
  },
};
