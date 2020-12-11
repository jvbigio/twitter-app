/* eslint-disable no-undef */
const express = require('express')
const app = express()
const path = require('path')
const axios = require('axios')
const qs = require('qs')
require('dotenv').config()

app.use('/', express.static(path.join(__dirname, 'client/build')))

app.listen(3000)

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
    const token = await res.data.access_token
    return token
  } catch (error) {
    console.error(error)
  }
}

getAccessToken()
// const token = process.env.BEARER_TOKEN // works

// TODO: Implement Twitter Retrieval
// Create a new function.
const getTweets = async () => {
  try {
    // Send HTTP GET Request to Twitter API endpoint for retrieving tweets.
    const response = await axios.get('https://api.twitter.com/1.1/search/tweets.json?q=nasa&result_type=popular', {
      headers: {
        'Content-Type': 'application',
        Authorization: `Bearer ${process.env.BEARER_TOKEN}`
      }
    })
    console.log(response.data)
  } catch (error) {
    console.error(error)
  }
}
getTweets()

// From axios docs
// `auth` indicates that HTTP Basic auth should be used, and supplies credentials.
// This will set an `Authorization` header, overwriting any existing
// `Authorization` custom headers you have set using `headers`.
// Please note that only HTTP Basic auth is configurable through this parameter.
// For Bearer tokens and such, use `Authorization` custom headers instead.
