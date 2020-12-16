/* eslint-disable no-undef */
const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000
const axios = require('axios')
const qs = require('qs')
require('dotenv').config()

app.use('/', express.static(path.join(__dirname, 'client/build')))

// app.listen(3000) // original
app.listen(port, () => console.log(`Server running on port ${port}`))

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
    // app.get logic for searching tweet content goes here?
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
    // app.get logic for searching a user goes here?
  } catch (error) {
    console.error(error)
  }
}

getUsers()

// TODO: Week 4: Create API endpoints on server
// test
app.get('/', (req, res) => {
  res.send('GET request to homepage')
})

app.get('/search', (req, res) => {
  res.send('search')
})

app.get('/random', (req, res) => {
  res.send('random')
})

/*
NOTES:
Routing refers to how an application’s endpoints (URIs) respond to client requests.
https://expressjs.com/en/guide/routing.html

*/
