# How to use the instant tinkering scratchpad or scrathpad2:

see `package.json` `scripts`
```bash
codingawesomeness $
    nvm use
    npm run pad
    # OR
    npm run pad2
```

# How to instant tinker with any file:

```bash
codingawesomeness/src/tinkering $ npx nodemon new_tinker_file.ts
```

# history:

Jul 2020: added nodemon and ts-node.
NOTE: nodemon does it all without any configuration, once ts-node is installed.

# TODO

- add github clone instructions

## OLD but interesting: usage

open 2 terminal windows in this directory

terminal 1:

`codingawesomeness $ npx tsc --watch`

terminal 2:

`watch node ./build/using-promises`

watch needs to be installed (brewed)
