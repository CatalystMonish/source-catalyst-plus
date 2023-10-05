module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 2020, sourceType: 'module' },
  settings: { react: { version: 'latest' } },
  plugins: ['react-hooks'],
  rules: {
    // You can add any additional rules you want here.
  },
};
