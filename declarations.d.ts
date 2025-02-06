declare module 'eslint-plugin-sonarjs' {
  import type { ESLint, Linter } from 'eslint';
  const plugin: ESLint.Plugin;
  export default plugin;
}

declare module '@typescript-eslint/eslint-plugin' {
  import type { ESLint } from 'eslint';
  const plugin: ESLint.Plugin;
  export default plugin;
}
