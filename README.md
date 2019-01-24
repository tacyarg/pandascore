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

### listGames([options])
List all games pandascore supports.

* `options` - object containing optional arguments: sort, filter, range.

### getGame(id)
Get data about a specific videogame.

* `id` - The videogame id

### listLeagues([options])
List all leagues tracked by pandascore.

* `options` - object containing optional arguments: sort, filter, range.

### listLeaguesByGame(videogame_id, [options])
list all leagues by videogame id.

* `videogame_id` - string containing a game id.
* `options` - object containing optional arguments: sort, filter, range.
