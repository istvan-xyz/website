# Setting up linting and testing for a full-stack project

Time is one of our most valuable commodities. We shouldn't squander it on tasks that can be easily automated. Quality checks for a project are a prime example.

## Spell checking

We would never make spelling mistakes, but for the sake of our colleagues we should ensure that spelling mistakes are always caught.

First step is to install [cspell](https://cspell.org/) and the [dictionaries](https://www.npmjs.com/search?q=%40cspell%2Fdict) you would want.

```sh
npm i -D cspell @cspell/dict-html
```

And now we should create a cspell configuration called `cspell.json`.

```json
{
    "$schema": "https://raw.githubusercontent.com/streetsidesoftware/cspell/main/cspell.schema.json",
    "version": "0.2",
    "language": "en",
    "dictionaries": ["corp-terms", "fonts", "typescript", "fullstack", "html"],
    "import": ["./node_modules/@cspell/dict-html/cspell-ext.json"],
    "words": ["biomejs"],
    "useGitignore": true,
    "ignorePaths": [".vscode", "./tsconfig.json"]
}
```

Now we can add a script in the `package.json`:

```json
{
    "scripts": {
        "lint": "cspell ."
    }
}
```

We can now run:

```sh
npm run lint
```

If we get an error for something that is correct in our context, we can either add that to the `words` list in the `cspell.json` or we can run the following command to find a dictionary that has the word:

```sh
npx cspell trace colspan
```

To make sure that mistakes are caught immediately in the IDE, whenever our colleague borrows are machine we can also add the `cspell` VScode extension to the list of recommended extensions:

`.vscode/extensions.json`:

```json
{
    "recommendations": ["streetsidesoftware.code-spell-checker"]
}
```

There you don't want to spellcheck like translations, you can ignore them via the `ignorePaths` configuration.

## ESLint

Install dependencies

```sh
npm i -D --force eslint@^9 @eslint/js typescript-eslint
```

Create `eslint.config.mjs`:

```js
import eslint from '@eslint/js';
import tsEslint from 'typescript-eslint';

const config = tsEslint.config(
    eslint.configs.recommended,
    ...tsEslint.configs.recommended,
    ...tsEslint.configs.strict,
    {
        ignores: ['bin'],
    },
);

export default config;
```

Add the eslint command:

```json
{
    "scripts": {
        "lint": "cspell . && eslint"
    }
}
```

[WAT](https://github.com/eslint/eslint/issues/17400#issuecomment-1646543502)

## Prettier

```sh
npm install -D prettier
```

Create a `.prettierrc`

```json
{
    "trailingComma": "all",
    "tabWidth": 4,
    "semi": true,
    "printWidth": 120,
    "singleQuote": true,
    "arrowParens": "avoid"
}
```

Add to the lint script:

`package.json`

```json
{
    "scripts": {
        "lint": "cspell . && eslint && prettier --check ."
    }
}
```

Add to VSCode recommendations:

`.vscode/extensions.json`:

```json
{
    "recommendations": ["streetsidesoftware.code-spell-checker", "esbenp.prettier-vscode"]
}
```

## Vitest

https://vitest.dev/guide/

```sh
npm install -D vitest
```

vitest.config.ts

```ts
/// <reference types="vitest" />
import { defineConfig } from 'vite';

export default defineConfig({
    test: {
        // ...
    },
});
```
