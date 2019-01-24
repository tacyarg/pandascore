const api = require('./index')({
  token: 'KWXvSBDIerSHxxtdqqK11ZZeLfByZl0dgd_MRvNGZ95CISa2Ybk'
})

api
  .listActions()
  .then(console.log)
  .catch(console.error)
