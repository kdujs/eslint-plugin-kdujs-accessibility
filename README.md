# eslint-plugin-kdujs-accessibility

An `eslint` plugin for checking accessibility rules from within `.kdu` files.

## Installation

If you're using `yarn`:

```bash
yarn add --dev eslint-plugin-kdujs-accessibility
```

or if you're using `npm`:

```bash
npm install --save-dev eslint-plugin-kdujs-accessibility
```

## Usage

Add `kdujs-accessibility` to the plugins section of your `eslint` configuration. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["kdujs-accessibility"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "kdujs-accessibility/rule-name": "error"
  }
}
```

You can also enable all the recommended rules at once. Add `plugin:kdujs-accessibility/recommended` in extends:

```json
{
  "extends": ["plugin:kdujs-accessibility/recommended"]
}
```

## Development

Ensure you have `node` and `yarn` installed on your system. Then run `yarn` in the root of the repository to install the dependencies.

### Adding a new rule

To add a new rule, you need to take the following steps:

- Add the configuration and require to `src/index.ts`.
- Add the rule itself into `src/rules`.
- Add the corresponding documentation in `docs/rules`.

## License

The code is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
