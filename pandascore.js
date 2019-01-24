const CallAPI = require('./callapi')
const assert = require('assert')

// API REFERENCE: https://developers.pandascore.co/

module.exports = function(config) {
  config.baseURL = 'https://api.pandascore.co'
  const api = CallAPI(config)

  const actions = {
    listAvailableGames() {
      return api.get('/videogames')
    },
    getGame(id) {
      assert(id, 'requires id')
      return api.get('/videogames', { id })
    },
    listLeagues(videogame_id, options) {
      assert(videogame_id, 'requires videogame_id')
      return api.get('/leagues', { videogame_id, ...options })
    },
    getLeague(id) {
      assert(id, 'requires id')
      return api.get('/leagues', { id })
    },
    listSeries(options) {
      return api.get('/series', options)
    },
    listSeriesByGame(videogame_id, options) {
      assert(videogame_id, 'requires videogame_id')
      return api.get('/series', {
        videogame_id,
        ...options,
      })
    },
    listSeriesByLeauge(league_id, options) {
      assert(league_id, 'requires league_id')
      return api.get('/series', {
        league_id,
        ...options,
      })
    },
    getSeries(id) {
      assert(id, 'requires id')
      return api.get('/series', { id })
    },
    listUpcomingSeries() {
      return api.get('/series/upcoming')
    },
    listRunningSeries() {
      return api.get('/series/running')
    },
    listPastSeries() {
      return api.get('/series/past')
    },
    listTournaments(options) {
      return api.get('/tournaments', options)
    },
    listTournamentsByGame(videogame_id, options) {
      assert(videogame_id, 'requires videogame_id')
      return api.get('/tournaments', {
        videogame_id,
        ...options,
      })
    },
    listTournamentsBySeries(serie_id, options) {
      assert(serie_id, 'requires serie_id')
      return api.get('/tournaments', {
        serie_id,
        ...options,
      })
    },
    listTournamentsByLeague(league_id, options) {
      assert(league_id, 'requires league_id')
      return api.get('/tournaments', {
        league_id,
        ...options,
      })
    },
    getTournament(id) {
      assert(id, 'requires id')
      return api.get('/tournaments', { id })
    },
    listUpcomingTournaments() {
      return api.get('/tournaments/upcoming')
    },
    listRunningTournaments() {
      return api.get('/tournaments/running')
    },
    listPastTournaments() {
      return api.get('/tournaments/past')
    },
    listMatches(options) {
      return api.get('/matches', options)
    },
    listMatchesByTeam(team_id, options) {
      assert(team_id, 'requires team_id')
      return api.get('/matches', {
        team_id,
        ...options,
      })
    },
    listMatchesBySeries(serie_id, options) {
      assert(serie_id, 'requires serie_id')
      return api.get('/matches', {
        serie_id,
        ...options,
      })
    },
    listMatchesByLeagues(league_id, options) {
      assert(league_id, 'requires league_id')
      return api.get('/matches', {
        league_id,
        ...options,
      })
    },
    listMatchesByTournaments(tournament_id, options) {
      assert(tournament_id, 'requires tournament_id')
      return api.get('/matches', {
        tournament_id,
        ...options,
      })
    },
    getMatch(id) {
      assert(id, 'requires id')
      return api.get('/matches', { id })
    },
    listUpcomingMatches() {
      return api.get('/matches/upcoming')
    },
    listUpcomingMatchesBySeries(serie_id) {
      assert(serie_id, 'requires serie_id')
      return api.get('/matches/upcoming', { serie_id })
    },
    listUpcomingMatchesByLeague(league_id) {
      assert(league_id, 'requires league_id')
      return api.get('/matches/upcoming', { league_id })
    },
    listRunningMatches() {
      return api.get('/matches/running')
    },
    listRunningMatchesBySeries(serie_id) {
      assert(serie_id, 'requires serie_id')
      return api.get('/matches/running', { serie_id })
    },
    listRunningMatchesByLeague(league_id) {
      assert(league_id, 'requires league_id')
      return api.get('/matches/running', { league_id })
    },
    listPastMatches() {
      return api.get('/matches/past')
    },
    listPastMatchesBySeries(serie_id) {
      assert(serie_id, 'requires serie_id')
      return api.get('/matches/past', { serie_id })
    },
    listPastMatchesByLeague(league_id) {
      assert(league_id, 'requires league_id')
      return api.get('/matches/past', { league_id })
    },
    listMatchOpponents(id) {
      assert(id, 'requires id')
      return api.get(`/matches/${id}/opponents`)
    },
    listPlayers(options) {
      return api.get('/players', options)
    },
    getPlayer(id) {
      assert(id, 'requires id')
      return api.get('/players', { id })
    },
    listTeams(options) {
      return api.get('/teams', options)
    },
    listTeamsByTournament(tournament_id, options) {
      assert(tournament_id, 'requires tournament_id')
      return api.get(`/tournaments/${tournament_id}/teams`, options)
    },
    getTeam(id) {
      assert(id, 'requires id')
      return api.get('/teams', { id })
    },
    listIncidents(options) {
      return api.get('/incidents', options)
    },
    listIncidentsByGame(videogame, options) {
      assert(videogame, 'requires videogame')
      return api.get('/incidents', { videogame, ...options })
    },
    listChanges(options) {
      return api.get('/changes', options)
    },
    listChangesByGame(videogame, options) {
      assert(videogame, 'requires videogame')
      return api.get('/changes', { videogame, ...options })
    },
    listAdditions(options) {
      return api.get('/additions', options)
    },
    listAdditionsByGame(videogame, options) {
      assert(videogame, 'requires videogame')
      return api.get('/additions', { videogame, ...options })
    },
  }

  return {
    ...actions,
    listActions() {
      return Object.keys(actions)
    }
  }
}
