module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json']
  },
  plugins: ['@typescript-eslint', 'react-hooks'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react'
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    'react/prop-types': 'off'
  }
};
