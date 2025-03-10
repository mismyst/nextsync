import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Disable the rule that enforces using Next.js Image component
      "@next/next/no-img-element": "off",
      // Other rules you might want to modify
      "react/no-unescaped-entities": "off", // Optional: disable apostrophe escaping warnings
    },
  },
];

export default eslintConfig;
