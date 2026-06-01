import eslintPluginAstro from "eslint-plugin-astro";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import tseslint from "typescript-eslint";
import oxlintPlugin from "eslint-plugin-oxlint";
import eslintConfigPrettier from "eslint-config-prettier";

/** @type {import("typescript-eslint").ConfigArray} */
export default [
  {
    ignores: ["dist/**", ".astro/**", "node_modules/**", "public/**"],
  },

  // TypeScript base
  ...tseslint.configs.recommended,

  // Astro configs: registra jsx-a11y globalmente (sin files scope)
  // Debe ir antes del config React para que el plugin quede registrado
  ...eslintPluginAstro.configs["flat/recommended"],
  ...eslintPluginAstro.configs["flat/jsx-a11y-recommended"],

  // React + Hooks para .tsx/.jsx
  // jsx-a11y ya está registrado por astro, solo agregar las reglas
  {
    files: ["**/*.tsx", "**/*.jsx"],
    plugins: {
      ...reactPlugin.configs.flat.recommended.plugins,
      ...reactHooksPlugin.configs.flat["recommended-latest"].plugins,
    },
    languageOptions: reactPlugin.configs.flat.recommended.languageOptions,
    settings: { react: { version: "19" } },
    rules: {
      ...reactPlugin.configs.flat.recommended.rules,
      ...reactPlugin.configs.flat["jsx-runtime"].rules,
      ...reactHooksPlugin.configs.flat["recommended-latest"].rules,
      // Reglas de jsx-a11y para archivos React (plugin ya registrado por astro)
      ...jsxA11yPlugin.flatConfigs.recommended.rules,
      "react/prop-types": "off",
    },
  },

  // Reglas TypeScript adicionales
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports", fixStyle: "inline-type-imports" },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },

  // Desactiva en ESLint las reglas que oxlint ya verifica
  ...oxlintPlugin.configs["flat/recommended"],

  // Desactiva reglas de formato que maneja Prettier (siempre último)
  eslintConfigPrettier,
];
