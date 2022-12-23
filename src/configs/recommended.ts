import type { Linter } from "eslint";

const recommended: Linter.BaseConfig = {
  parser: require.resolve("kdu-eslint-parser"),
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module"
  },
  env: {
    browser: true,
    es6: true
  },
  plugins: ["kdujs-accessibility"],
  rules: {
    "kdujs-accessibility/accessible-emoji": "error",
    "kdujs-accessibility/alt-text": "error",
    "kdujs-accessibility/anchor-has-content": "error",
    "kdujs-accessibility/aria-props": "error",
    "kdujs-accessibility/aria-role": "error",
    "kdujs-accessibility/aria-unsupported-elements": "error",
    "kdujs-accessibility/click-events-have-key-events": "error",
    "kdujs-accessibility/form-control-has-label": "error",
    "kdujs-accessibility/heading-has-content": "error",
    "kdujs-accessibility/iframe-has-title": "error",
    "kdujs-accessibility/interactive-supports-focus": "error",
    "kdujs-accessibility/label-has-for": "error",
    "kdujs-accessibility/media-has-caption": "error",
    "kdujs-accessibility/mouse-events-have-key-events": "error",
    "kdujs-accessibility/no-access-key": "error",
    "kdujs-accessibility/no-autofocus": "error",
    "kdujs-accessibility/no-distracting-elements": "error",
    "kdujs-accessibility/no-onchange": "error",
    "kdujs-accessibility/no-redundant-roles": "error",
    "kdujs-accessibility/role-has-required-aria-props": "error",
    "kdujs-accessibility/tabindex-no-positive": "error"
  }
};

export default recommended;
