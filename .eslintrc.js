module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'google'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'require-jsdoc': 0,
    'react/prop-types': 'off',
    'quote-props': 'always',
    indent: 'off',
    'comma-dangle': [2, 'always-multiline'],
  },
};
