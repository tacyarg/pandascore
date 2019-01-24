const api = require('./index')({
  token: '',
})

api
  .listLeagues()
  .then(console.log)
  .catch(console.error)
