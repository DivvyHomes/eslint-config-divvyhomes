/**
 * DivvyHomes (https://www.divvyhomes.com)
 * Copyright © 2016-present Divvy. All rights reserved.
 */

// ESLint configuration
// http://eslint.org/docs/user-guide/configuring
module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'plugin:flowtype/recommended',
    'plugin:css-modules/recommended',
    'prettier',
    'prettier/flowtype',
    'prettier/react',
    'plugin:jest/recommended',
  ],

  plugins: [
    'flowtype',
    'css-modules',
    'prettier',
    'react-hooks',
    'no-only-tests',
    'jest',
    /* NOTE: adding rules as ESLint plugin like this didn't work in the context of NPM
     * package. After we published a new version with added "eslint-plugin-divvy-rules"
     * folder it broke builds as consumers couldn't install the library anymore. Error that
     * we saw:
     * Could not install from "node_modules/@divvy-homes/eslint-config-divvyhomes/eslint-plugin-divvy-rules" as it does not contain a package.json file.
     *
     */
    // "divvy-rules"
  ],

  globals: {
    __DEV__: true,
    __GIT_COMMITHASH__: true,
  },

  env: {
    browser: true,
    'jest/globals': true,
  },

  rules: {
    // `js` and `jsx` are common extensions
    // `mjs` is for `universal-router` only, for now
    'import/extensions': [
      'error',
      'always',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
        jsx: 'never',
        mjs: 'never',
      },
    ],

    // Enforce strict equality, even against null literal
    // https://eslint.org/docs/rules/eqeqeq
    eqeqeq: ['error', 'always'],

    'max-len': 'off',

    // Not supporting nested package.json yet
    // https://github.com/benmosher/eslint-plugin-import/issues/458
    'import/no-extraneous-dependencies': 'off',

    // Recommend not to leave any console.log in your code
    // Use console.error, console.warn and console.info instead
    'no-console': [
      'error',
      {
        allow: ['warn', 'error', 'info'],
      },
    ],

    'no-restricted-syntax': 'off',
    'no-await-in-loop': 'off',
    'no-debugger': 'off',
    'prefer-destructuring': 'off',

    // a11y removed rule, ignore them
    'jsx-a11y/href-no-hash': 'off',

    // https://github.com/evcohen/eslint-plugin-jsx-a11y/issues/308#issuecomment-322954274
    'jsx-a11y/label-has-for': 'warn',
    'jsx-a11y/click-events-have-key-events': 'error',
    'jsx-a11y/mouse-events-have-key-events': 'error',
    'jsx-a11y/anchor-is-valid': 'error',
    'jsx-a11y/label-has-associated-control': 'error',

    // Allow js files to use jsx syntax, too
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],

    // Automatically convert pure class to function by
    // babel-plugin-transform-react-pure-class-to-function
    // https://github.com/kriasoft/react-starter-kit/pull/961
    'react/prefer-stateless-function': 'off',
    'react/destructuring-assignment': 'error',
    'react/default-props-match-prop-types': 'error',
    'react/no-access-state-in-setstate': 'error',
    'react/require-default-props': 'error',
    'react/no-unescaped-entities': 'error',
    'react/sort-comp': 'error',
    'react/button-has-type': 'error',
    'react/no-unused-state': 'error',
    'react/jsx-no-target-blank': 'error',

    // https://www.npmjs.com/package/eslint-plugin-react-hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // ESLint plugin for prettier formatting
    // https://github.com/prettier/eslint-plugin-prettier
    'prettier/prettier': [
      'error',
      {
        // https://github.com/prettier/prettier#options
        singleQuote: true,
        trailingComma: 'all',
        printWidth: 100,
      },
    ],

    'no-param-reassign': ['error', { props: false }],
    'no-plusplus': 'off',
    'prefer-rest-params': 'warn',

    // reasoning around this rule is weak https://github.com/airbnb/javascript/issues/1365
    // but it complicates refactoring in certain cases
    'import/prefer-default-export': 'off',

    'no-only-tests/no-only-tests': 'error',

    // "divvy-rules/use-core-error": "warn",
    // "divvy-rules/use-user-facing-error": "warn",
    // "divvy-rules/use-new-with-error": "error"
  },

  settings: {
    // https://github.com/johvin/eslint-import-resolver-alias
    'import/resolver': {
      alias: {
        map: [['@app', './src']],
        extensions: ['.ts', '.js', '.jsx', '.json'],
      },
      node: {
        moduleDirectory: ['node_modules', 'src'],
        extensions: ['.ts', '.js', '.jsx', '.json'],
      },
    },
    'import/parsers': {
      'typescript-eslint-parser': ['.ts', '.tsx'],
    },
  },
};
