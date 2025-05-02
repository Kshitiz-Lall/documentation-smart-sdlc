import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Extend default Next.js and TypeScript rules
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Custom rule overrides
  {
    files: ["**/*.js", "**/*.ts", "**/*.tsx"],
    rules: {
      "import/no-anonymous-default-export": "off",
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
];

export default eslintConfig;
