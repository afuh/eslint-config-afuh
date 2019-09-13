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
npm info "eslint-config-airbnb-base@latest" peerDependencies
```

## Usage

### Via `.babelrc` 

```json
{
  "extends": ["afuh"]
}
```

### Via `package.json`
```json
{
  "eslintConfig": {
    "extends": ["afuh"]
  }
}
```

## Settings
Add or overwrite [ESlint rules](https://eslint.org/docs/rules/). 
```json
{
  "extends": ["afuh"],
  "rules": {
    "more-rules-here": 1
  }
}
```