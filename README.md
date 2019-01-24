# pandascore
A simple promise based library for the pandascore.co API

## Example
```js

const api = require('pandascore')({
  token: '',
})

api
  .listActions()
  .then(console.log)
  .catch(console.error)

```

## Actions

### listActions()
List all available methods.

### listGames()
List all games pandascore supports.