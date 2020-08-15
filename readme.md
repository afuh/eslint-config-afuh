# eslint-config-afuh
These are my settings for ESlint.

## Install

If using **npm 5+**, use this shortcut
```sh
npx install-peerdeps --dev eslint-config-afuh
```

if using **npm < 5**, install the correct versions of each
package, which are listed by the command:

```sh
npm info "eslint-config-afuh@latest" peerDependencies
```

## Usage

### Create an `.eslintrc` file with:

```json
{
  "extends": "afuh"
}
```

If you are using React
```json
{
  "extends": "afuh/react"
}
```

## Settings
Add or overwrite [ESlint rules](https://eslint.org/docs/rules/).
```json
{
  "extends": "afuh",
  "rules": {
    "more-rules-here": 1
  }
}
```

## Prettier
If you want to use Prettier add the following packages:

```sh
npm i --save-dev prettier eslint-plugin-prettier eslint-config-prettier
```

Update the `.eslintrc` file.
```json
{
  "extends": ["afuh", "plugin:prettier/recommended"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  }
}
```

## Install everything
```sh
npx eslint-config-afuh
```

This is going to install `eslint-config-afuh`, the peer dependencies and Prettier. It's going to also generate a couple of config [files](https://github.com/afuh/eslint-config-afuh/tree/master/install/templates) if they don't exist.
