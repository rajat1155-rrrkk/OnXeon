import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

export default [
  {
    ignores: ["node_modules/**", ".next/**", ".vercel/**", "*.config.js", "*.config.mjs", "**/* 2.tsx"],
  },
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      "react-hooks/set-state-in-effect": "off",
      "@next/next/no-img-element": "warn",
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
];
