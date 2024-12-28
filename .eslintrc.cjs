module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'prettier',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['simple-import-sort', 'unused-imports', '@typescript-eslint'],
  rules: {
    'no-continue': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'no-await-in-loop': 'off',
    'no-underscore-dangle': 'off',
    'react/function-component-definition': 'off',
    'consistent-return': 'off',
    'react/jsx-no-bind': 'off',
    'react/button-has-type': 'off',
    'react/no-unstable-nested-components': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/ban-types': 'off',
    'no-param-reassign': 'off',
    'import/no-named-as-default': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-shadow': 'warn',
    'react/react-in-jsx-scope': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'unused-imports/no-unused-imports': 'error',
    semi: 'warn',
    "@typescript-eslint/no-use-before-define": [
      "error",
      { "functions": false }
    ],
    'no-restricted-imports': [
      'error',
      {
        patterns: ['bignumber.js'],
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
        jsx: 'never',
      },
    ],
    'prefer-const': 'error',
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "variableLike",
        "format": ["camelCase", "PascalCase", "UPPER_CASE"],
        "leadingUnderscore": "allow",
        "filter": {
          "regex": "^_",
          "match": false
        }
      },
      {
        "selector": "variable",
        "modifiers": ["unused"],
        "leadingUnderscore": "require",
        "format": ["camelCase"],
        "filter": {
          "regex": "^_",
          "match": true
        }
      }
    ],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        "varsIgnorePattern": "^_",
        "argsIgnorePattern": "^_"
      }
    ]
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.app.json', './tsconfig.node.json'],
  },
  ignorePatterns: ['.eslintrc.cjs', 'vite.config.ts'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'import/extensions': 'off',
      },
    },
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              [
                '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder |sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
              ],
              ['^react', '^@?\\w'],
              ['^(yup|zustand)', '^@?\\w'],
              ['^(@|views)(/.*|$)'],
              ['^(@|components)(/.*|$)'],
              ['^(@|hooks)(/.*|$)'],
              ['^(@|types)(/.*|$)'],
              ['^(@|utils)(/.*|$)'],
              ['^(@|classes)(/.*|$)'],
              ['^\\u0000'],
              ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
              ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
              ['^.+\\.?(css)$'],
            ],
          },
        ],
      },
    },
  ],
};
