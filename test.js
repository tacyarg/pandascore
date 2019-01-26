const api = require('./index')({
  token: '-jZBWTT9UGzVWUOLxME0eG7ocYkdX5d4lhp5bvG520GAa3EHmWM',
})

api
  .listUpcomingSeries(3)
  .then(series => {
    return series.reduce(async (memo, serie) => {
      const matches = await api.listUpcomingMatchesBySeries(serie.id)
      matches.map(memo.push)
      return memo
    }, [])
    // return series.reduce(async (memo, { id }) => {
    //   const matches = await api.listUpcomingMatchesBySeries(id)
    //   return [...memo, ...matches]
    // }, [])
  })
  .then(console.log)
  .catch(console.error)
