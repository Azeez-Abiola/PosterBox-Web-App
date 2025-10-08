module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/vue3-recommended', // This contains stricter rules for Vue 3
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 2021,
    parser: '@typescript-eslint/parser', // For TypeScript support
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    // This rule helps prevent extra spaces in self-closing tags
    'vue/html-self-closing': ['error', {
      html: {
        void: 'always',
        normal: 'never',
        component: 'always'
      }
    }],
    // Prevents spaces around equal signs in attributes
    'vue/no-spaces-around-equal-signs-in-attribute': ['error'],
    // Enforce consistent spacing in template
    'vue/html-indent': ['error', 2],
    // Enforce no extra spaces between attributes
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 3
      },
      multiline: {
        max: 1
      }
    }],
    // Ensures proper spacing within braces
    'vue/mustache-interpolation-spacing': ['error', 'always'],
    // Prevents trailing whitespace in template attributes
    'no-trailing-spaces': 'error'
  }
}