# Vue Template Syntax Checker

This script helps install and configure tools to prevent Vue template syntax errors like the "Invalid end tag" issue you experienced.

## Installation

Run this script in your project directory:

```bash
# Install ESLint and Vue plugin
npm install --save-dev eslint eslint-plugin-vue @typescript-eslint/parser @typescript-eslint/eslint-plugin

# Install Husky for pre-commit hooks
npm install --save-dev husky lint-staged

# Configure Husky (you may need to adjust this based on your npm version)
npx husky install
npx husky add .husky/pre-commit "npx lint-staged"
```

## Add this to your package.json

```json
{
  "lint-staged": {
    "*.vue": "eslint --fix"
  },
  "scripts": {
    "lint": "eslint --ext .js,.vue,.ts src",
    "lint:fix": "eslint --ext .js,.vue,.ts src --fix"
  }
}
```

## Running the Linter

After installation, you can run:

```bash
# Check for errors
npm run lint

# Fix automatically fixable errors
npm run lint:fix
```

## VS Code Extension

For real-time linting in VS Code, install:

1. ESLint extension
2. Volar extension (for Vue 3)

This setup will help catch syntax errors before they cause build failures.