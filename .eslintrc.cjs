module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  rules: {
    'vue/multi-word-component-names': 'off',
    'no-console': 'warn',
    'no-debugger': 'warn',
    'import/extensions': ['error', 'ignorePackages', { js: 'never', vue: 'always' }],
    'no-param-reassign': 'off',
    'prefer-destructuring': ['error', {
      array: false,
      object: false,
    }],
    'vue/attribute-hyphenation': 'off',
    'vue/v-on-event-hyphenation': 'off',
  },
};
