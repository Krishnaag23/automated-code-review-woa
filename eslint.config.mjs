import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import sonarjs from 'eslint-plugin-sonarjs';

export default tseslint.config(
  {
    files: ['**/*.{js,ts}'],
    ignores: ['node_modules/', 'dist/', 'build/'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
        ecmaVersion: 'latest',
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      sonarjs,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      'sonarjs/cognitive-complexity': ['error', 5],
      'sonarjs/no-identical-functions': 'error',
      complexity: ['error', 5],
      'no-console': 'warn',

      'sonarjs/no-identical-expressions': 'error',
      'sonarjs/no-redundant-jump': 'error',
      'sonarjs/no-small-switch': 'error',
      'sonarjs/no-same-line-conditional': 'error',
      'sonarjs/no-unused-collection': 'error',
      'sonarjs/no-use-of-empty-return-value': 'error',
      'sonarjs/no-duplicate-string': 'error',
      'sonarjs/no-gratuitous-expressions': 'error',
      'sonarjs/no-collapsible-if': 'error',
      'sonarjs/prefer-immediate-return': 'error',
      'sonarjs/no-one-iteration-loop': 'error',
      'sonarjs/no-element-overwrite': 'error',
      'sonarjs/no-collection-size-mischeck': 'error',
      'sonarjs/no-extra-arguments': 'error',
      'sonarjs/no-identical-conditions': 'error',
      'sonarjs/no-inverted-boolean-check': 'error',
      'sonarjs/no-redundant-boolean': 'error',
      'sonarjs/no-all-duplicated-branches': 'error',
      'sonarjs/no-ignored-return': 'error',
      'sonarjs/no-nested-switch': 'error',
    },
  },
  pluginJs.configs.recommended,
);
