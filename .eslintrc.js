module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'airbnb/hooks',
    'prettier',
    'prettier/react',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    jest: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'prettier'],
  rules: {
    'react/jsx-filename-extension': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prefer-stateless-function': 'warn',
    'react/forbid-prop-types': 'off',
    'no-unused-expressions': 'off',
    'react/destructuring-assignment': 'warn',
    'no-underscore-dangle': 'warn',
    'react/prefer-stateless-function': 'off',
    'react/prop-types': 'warn',
    'import/prefer-default-export': 'off',
    'import/no-cycle': 'warn',
    'import/no-named-as-default-member': 'off',
    'no-underscore-dangle': 'off',
    'no-console': 'warn',
    'import/no-named-as-default': 'off',
    'react/state-in-constructor': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'global-require': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'arrow-body-style': 'off',
    'no-unneeded-ternary': 'off',
    'max-classes-per-file': 'off',
    'class-methods-use-this': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react/no-array-index-key': 'off',
    'react/no-unescaped-entities': 'off',
    'no-irregular-whitespace': 'off',
    'react/prop-types': 'off',
     // note you must disable the base rule as it can report incorrect errors
    "camelcase": "off",
    "@typescript-eslint/camelcase": ["error", { "properties": "never" }],
    "import/extensions": "off"
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      'babel-plugin-root-import': {},
    },
  },
};
