import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettier from 'eslint-config-prettier';
import eslintPluginBetterTailwindcss from 'eslint-plugin-better-tailwindcss';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import storybook from 'eslint-plugin-storybook';
import { parser as eslintParserTypeScript } from 'typescript-eslint';

export default defineConfig([
  // Next.js recommended rules + Core Web Vitals
  ...nextVitals,
  ...nextTs,

  // Better TailwindCSS plugin
  {
    extends: [eslintPluginBetterTailwindcss.configs.recommended],
    rules: {
      'better-tailwindcss/enforce-consistent-line-wrapping': [
        'warn',
        {
          printWidth: 120,
          classesPerLine: 0,
          preferSingleLine: true,
          strictness: 'loose',
          group: 'newLine',
          indent: 2,
          lineBreakStyle: 'unix',
        },
      ],
      'better-tailwindcss/no-unknown-classes': 'off',
    },
    settings: {
      'better-tailwindcss': {
        entryPoint: 'app/global.css',
      },
    },
  },

  // simple-import-sort plugin
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
    },
  },

  // TypeScript parser for TS/TSX files
  {
    files: ['**/*.{ts,tsx,cts,mts}'],
    languageOptions: {
      parser: eslintParserTypeScript,
      parserOptions: {
        project: true,
      },
    },
  },

  // Enable JSX parsing for React/TSX files
  {
    files: ['**/*.{jsx,tsx}'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },

  // Prettier integration
  prettier,

  // Storybook plugin
  ...storybook.configs['flat/recommended'],

  {
    files: ['.storybook/**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        project: ['./.storybook/tsconfig.json'],
      },
    },
  },

  // Override default ignores of eslint-config-next
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
]);
