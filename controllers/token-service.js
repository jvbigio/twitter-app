const axios = require('axios')
require('dotenv').config()

let bearer

const getAccessToken = () => {
  try {
    if (bearer) return bearer
    const URL = 'https://api.twitter.com/oauth2/token'

    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      auth: {
        username: process.env.API_KEY,
        password: process.env.API_SECRET_KEY
      }
    }

    return axios
      .post(URL, 'grant_type=client_credentials', config)
      .then(response => {
        axios.defaults.headers.common = {
          Authorization: `Bearer ${response.data.access_token}`
        }
        return response.data.access_token
      })
  } catch (error) {
    console.error(error)
  }
}

module.exports = {
  getAccessToken
}
