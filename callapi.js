const Axios = require('axios')
const assert = require('assert')

module.exports = function(config) {
  assert(config.baseURL, 'baseurl required')
  assert(config.token, 'api token required')

  const { token, baseURL } = config

  const request = Axios.create({
    baseURL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const Request = function(method, endpoint, params) {
    if (!params) params = {}

    if (method === 'get') {
      params = {
        params,
      }
    }

    return request[method](endpoint, params)
      .then(res => {
        assert(res.status === 200, 'request status not ok')
        return res.data
      })
      .catch(err => {
        throw new Error(err.response.data.error)
      })
  }

  Request.post = (endpoint, params) => {
    return Request('post', endpoint, params)
  }

  Request.get = (endpoint, params) => {
    return Request('get', endpoint, params)
  }

  return Request
}
