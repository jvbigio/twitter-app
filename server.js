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

const getTweets = async () => {
  try {
    const response = await axios.get('https://api.twitter.com/1.1/search/tweets.json?q=nasa&result_type=recent&count=5', {
      headers: {
        'Content-Type': 'application',
        Authorization: `Bearer ${process.env.BEARER_TOKEN}`
      }
    })
    // console.log(response.data) // works
  } catch (error) {
    console.error(error)
  }
}
getTweets()

const getUsers = async () => {
  try {
    const response = await axios.get('https://api.twitter.com/1.1/search/tweets.json?q=from%3Agaryvee&result_type=recent&count=5', {
      headers: {
        'Content-Type': 'application',
        Authorization: `Bearer ${process.env.BEARER_TOKEN}`
      }
    })
    // console.log(response.data.statuses) // works
    // now manipulate the data
  } catch (error) {
    console.error(error)
  }
}

getUsers()
