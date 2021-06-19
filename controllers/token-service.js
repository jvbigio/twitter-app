const axios = require('axios')
const qs = require('qs')

require('dotenv').config()

const getAccessToken = async () => {
  try {
    const res = await axios.post('https://api.twitter.com/oauth2/token', qs.stringify({ grant_type: 'client_credentials' }), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials',
      auth: {
        username: process.env.API_KEY,
        password: process.env.API_SECRET_KEY
      }
    })
    const token = res.data.access_token
    return token
  } catch (error) {
    console.error(error)
  }
}

module.exports = {
  getAccessToken
}
