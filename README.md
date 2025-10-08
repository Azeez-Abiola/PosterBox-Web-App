# Poster-box

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Linting and Syntax Checking

```sh
# Check for linting issues
npm run lint

# Fix automatically fixable issues
npm run lint:fix

# Check for Vue template syntax issues
npm run check-syntax
```

## Preventing Build Errors

To prevent "Invalid end tag" errors and other Vue template syntax issues:

1. Review the [Vue Syntax Guide](./vue-syntax-guide.md) for common pitfalls
2. Install recommended linting tools with [these instructions](./install-linting-tools.md)
3. Run syntax checks before committing: `npm run check-syntax`
4. Be careful with self-closing tags - avoid spaces before the closing bracket: `/>` not ` />`

## Additional Documentation

- [Vue Syntax Guide](./vue-syntax-guide.md) - Tips to prevent Vue template errors
- [Linting Tools Installation](./install-linting-tools.md) - Setting up ESLint and other tools
