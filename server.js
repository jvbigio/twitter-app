/* eslint-disable no-undef */
const express = require('express')
const app = express()
const path = require('path')
const axios = require('axios')
const qs = require('qs')
require('dotenv').config()

const port = process.env.PORT || 3000
// app.use(express.json()) // do i need?

app.use('/', express.static(path.join(__dirname, 'client/build')))

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

getAccessToken() // should i call this now or add it to below .get() requests?
// const token = await getAccessToken() // like so

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

// dummy data to test API:
// const tweetSearch = [
//   { id: 1, text: 'Try to exercise at least 30 min a day!' },
//   { id: 2, text: 'Hey hey!' }
// ]

const twitterUsers = [
  { id: 1, username: 'garyvee' },
  { id: 2, username: 'SteveMaxwellSC' }
]

// TODO: Week 4: Create API endpoints on server

// search by Twitter content
app.get('/api/tweets/search', (req, res) => {
  // res.send(tweetSearch) // works
})
app.get('/api/tweets/user', (req, res) => {
  res.send(twitterUsers)
})

// by username?
app.get('/api/tweets/user/:username', (req, res) => {
  const user = twitterUsers.find(handle => handle.username === req.params.username)

  if (!user) res.status(404).send('Username given does not exist!')
  res.send(twitterUsers)
})

app.get('/api/tweets/random', (req, res) => {
  res.send('random tweet')
})

/*
NOTES:
Routing refers to how an application’s endpoints (URIs) respond to client requests.
https://expressjs.com/en/guide/routing.html

*/
