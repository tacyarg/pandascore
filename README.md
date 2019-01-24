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

- `options` - object containing optional arguments: sort, filter, range.

### getGame(id)

Get data about a specific videogame.

- `id` - The videogame id

### listLeagues([options])

List all leagues tracked by pandascore.

- `options` - object containing optional arguments: sort, filter, range.

### listLeaguesByGame(videogame_id, [options])

List all leagues by videogame id.

- `videogame_id` - string containing a game id.
- `options` - object containing optional arguments: sort, filter, range.

### getLeague(id)

Get data about a specific league.

- `id` - The league id

### listSeries([options])

List all series tracked by pandascore.

- `options` - object containing optional arguments: sort, filter, range.

### listSeriesByGame(videogame_id, [options])

List all series by game id.

- `videogame_id` - string containing a game id.
- `options` - object containing optional arguments: sort, filter, range.

### listSeriesByLeague(league_id, [options])

List all series by league.

- `league_id` - string containing a league id.
- `options` - object containing optional arguments: sort, filter, range.

### getSeries(id)

Get data by a series id.

- `id` - The series id

### listUpcomingSeries()

List all upcoming series.

### listRunningSeries()

List all running series.

### listPastSeries()

List all past series.

### listTournaments()

### getTournament(id)

Get data by a tournament id.

- `id` - The series id

### listTournamentsByGame(videogame_id, [options])

List all tournaments by game id.

- `videogame_id` - string containing a videogame id.
- `options` - object containing optional arguments: sort, filter, range.

### listTournamentsBySeries(serie_id, [options])

List all tournaments by game id.

- `serie_id` - string containing a serie id.
- `options` - object containing optional arguments: sort, filter, range.

### listTournamentsByLeague(league_id, [options])

List all tournaments by league id.

- `league_id` - string containing a league id.
- `options` - object containing optional arguments: sort, filter, range.

### listUpcomingTournaments()

List all upcoming tournaments.

### listRunningTournaments()

List all running tournaments.

### listPastTournaments()

List all past tournaments.

### listMatches([options])

List all matches by match id.

- `options` - object containing optional arguments: sort, filter, range.

### getMatch(id)

Get data by match id.

- `id` - The series id

### listMatchesByTeam(team_id, [options])

List all matches using a team id.

- `team_id` - string containing a team id.
- `options` - object containing optional arguments: sort, filter, range.

### listMatchesBySeries(serie_id, [options])

List all matches using a serie id.

- `serie_id` - string containing a serie id.
- `options` - object containing optional arguments: sort, filter, range.

### listMatchesByLeagues(league_id, [options])

List all matches using a league id.

- `league_id` - string containing a league id.
- `options` - object containing optional arguments: sort, filter, range.

### listMatchesByTournaments(tournament_id, [options])

List all matches using a tournament id.

- `tournament_id` - string containing a tournament id.
- `options` - object containing optional arguments: sort, filter, range.

### listUpcomingMatches()

List all upcoming matches.

### listUpcomingMatchesBySeries(serie_id)

List all upcoming matches by serie id.

- `serie_id` - string containing a serie id.

### listUpcomingMatchesByLeague(league_id)

List all upcoming matches by league id.

- `league_id` - string containing a league id.

### listRunningMatches()

List all running matches.

### listRunningMatchesBySeries(serie_id)

List all running matches serie id.

- `serie_id` - string containing a serie id.

### listRunningMatchesByLeague(league_id)

List all running matches league id.

- `league_id` - string containing a league id.

### listPastMatches()

List all past matches.

### listPastMatchesBySeries(serie_id)

List all past matches serie id.

- `serie_id` - string containing a serie id.

### listPastMatchesByLeague(league_id)

List all past matches league id.

- `league_id` - string containing a league id.

### listMatchOpponents(id)

List opponents by match id.

- `id` - The match id

### listPlayers([options])

List all players.

- `options` - object containing optional arguments: sort, filter, range.

### getPlayer(id)

Get data by player id.

- `id` - The player id

### listTeams([options])

List all teams.

- `options` - object containing optional arguments: sort, filter, range.

### listTeamsByTournament(tournament_id, [options])

List all teams by tournament id.

- `tournament_id` - tournament id.
- `options` - object containing optional arguments: sort, filter, range.

### getTeam(id)

Get data by team id.

### listIncidents([options])

list all incidents.

- `options` - object containing optional arguments: sort, filter, range.

### listIncidentsByGame(videogame, [options])

List incidents by videgame.

- `videogame` - videogame id.
- `options` - object containing optional arguments: sort, filter, range.

### listChanges([options])

List all changes.

- `options` - object containing optional arguments: sort, filter, range.

### listChangesByGame(videogame, [options])

List changes by videgame.

- `videogame` - videogame id.
- `options` - object containing optional arguments: sort, filter, range.

### listAdditions([options])

List all additions.

- `options` - object containing optional arguments: sort, filter, range.

### listAdditionsByGame(videogame, [options])

List additions by videgame.

- `videogame` - videogame id.
- `options` - object containing optional arguments: sort, filter, range.
