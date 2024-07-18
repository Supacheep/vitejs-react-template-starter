module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "semi": ["error", "never"],
    "react/react-in-jsx-scope": 0,
    "react/jsx-filename-extension": 0,
    "jsx-a11y/href-no-hash": 0,
    "no-underscore-dangle": 0,
    "max-len": [2, {"code": 200, "tabWidth": 4, "ignoreUrls": true}],
    "no-tabs": 0,
    "no-nested-ternary": 0,
    "react/jsx-closing-tag-location": 0,
    "import/prefer-default-export": 0,
    "react/jsx-props-no-spreading": 0,
    // "react/prop-types": [
    //   "enabled",
    //   { "ignore": "ignore", "customValidators": "customValidator" }
    // ],
    "prefer-promise-reject-errors": "off",
    "react/no-danger": "off"
  },
}
