/* eslint-disable no-undef */
const express = require('express')
const app = express()
const path = require('path')
const axios = require('axios')
const qs = require('qs')
require('dotenv').config()

const port = process.env.PORT || 3000

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

app.get('/api/tweets/content', async (req, res) => {
  const token = await getAccessToken()
  const URL = 'https://api.twitter.com/1.1/search/tweets.json'

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    },
    params: {
      q: req.query.search_term,
      lang: 'en',
      count: 5,
      result_type: 'popular'
    }
  }

  // Retrieve data from Twitter
  axios.get(URL, config)
    .then(response => res.send(response.data.statuses))
    .catch(error => {
      console.error(error)
      res.sendStatus(500).send(error)
    })
})
// works in postman: https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=garyvee

app.get('/api/tweets/username', async (req, res) => {
  const token = await getAccessToken()
  const URL = 'https://api.twitter.com/1.1/statuses/user_timeline.json'

  // Also try:
  //  https://api.twitter.com/1.1/search/tweets.json?q%40garyvee
  // const URL = 'https://api.twitter.com/1.1/search/tweets.json'

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    },
    // for user_timeline URL:
    params: {
      screen_name: req.query.username,
      count: 5
    }
    // for /search/tweets URL:
    // params: {
    //   q: req.query.username,
    //   count: 5
    // }
  }
  // GET request to Twitter:
  axios.get(URL, config)
    .then(response => res.send(response.data))
    .catch(error => {
      console.error(error)
      res.sendStatus(500).send(error)
    })
})

// by username?
app.get('/api/tweets/username/:username', (req, res) => {
  const user = twitterUsers.find(handle => handle.username === req.params.username)

  if (!user) res.status(404).send('Username given does not exist!')
  res.send(twitterUsers)
})

app.get('/api/tweets/random', (req, res) => {
  res.send('random tweet')
})

/*
NOTES:
Routing refers to how an application’s endpoints (URLs) respond to client requests.
https://expressjs.com/en/guide/routing.html

*/
