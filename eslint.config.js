import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigFile} */
export default [
  { ignores: ['dist', 'node_modules', 'eslint.config.js', '*.config.js'] },
  js.configs.recommended,
  {
    files: ['scripts/**/*.js'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  // Configuration for E2E tests and config files (disable type-checked rules)
  {
    files: ['e2e/**/*.ts', 'playwright.config.ts'],
    languageOptions: {
      globals: {
        ...globals.node,
        // Allow Playwright's test assertions and browser globals if needed
      },
      parser: tseslint.parser,
      parserOptions: {
        project: null, // Disable project service for these files to avoid "not found" errors
      },
    },
    // We can't use type-checked rules here because these files aren't in the main tsconfig
    // and we don't want to force them into it.
  },
  // Scope type-aware rules to ONLY TypeScript files
  ...tseslint.configs.stylisticTypeChecked.map(config => ({
    ...config,
    files: ['**/*.{ts,tsx}'],
    ignores: ['e2e/**/*.ts', 'playwright.config.ts'],
  })),
  ...tseslint.configs.recommendedTypeChecked.map(config => ({
    ...config,
    files: ['**/*.{ts,tsx}'],
    ignores: ['e2e/**/*.ts', 'playwright.config.ts'],
  })),
  {
    files: ['**/*.{ts,tsx}'],
    ignores: ['e2e/**/*.ts', 'playwright.config.ts'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: globals.browser,
      parser: tseslint.parser,
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
        projectService: true,
      },
    },
    settings: { react: { version: 'detect' } },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      react,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...react.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
    },
  },
];
