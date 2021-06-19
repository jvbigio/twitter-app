const express = require('express')
const app = express()
const path = require('path')
const axios = require('axios')
require('dotenv').config()

const tokenService = require('./controllers/token-service')

const port = process.env.PORT || 3000

app.use('/', express.static(path.join(__dirname, 'client/build')))

app.get('/api/tweets/content', async (req, res) => {
  const token = await tokenService.getAccessToken()
  const URL = 'https://api.twitter.com/1.1/search/tweets.json'

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    },
    params: {
      q: req.query.search_term,
      lang: 'en',
      count: 5,
      result_type: 'popular',
      tweet_mode: 'extended'
    }
  }
  axios.get(URL, config)
    .then(response => res.send(response.data.statuses))
    .catch(error => {
      console.error(error)
      res.sendStatus(500).send(error)
    })
})

app.get('/api/tweets/username', async (req, res) => {
  const token = await tokenService.getAccessToken()
  const URL = 'https://api.twitter.com/1.1/statuses/user_timeline.json'

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    },
    params: {
      screen_name: req.query.username,
      count: 10,
      tweet_mode: 'extended',
      exclude_replies: true,
      include_rts: false
    }
  }
  axios.get(URL, config)
    .then(response => res.send(response.data))
    .catch(error => {
      console.error(error)
      res.sendStatus(500).send(error)
    })
})

app.get('/api/tweets/random', async (req, res) => {
  const token = await tokenService.getAccessToken()
  const URL = 'https://api.twitter.com/1.1/statuses/user_timeline.json'

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    },
    params: {
      screen_name: req.query.username,
      count: 1,
      tweet_mode: 'extended',
      exclude_replies: true,
      include_rts: false
    }
  }
  axios.get(URL, config)
    .then(response => res.send(response.data))
    .catch(error => {
      console.error(error)
      res.sendStatus(500).send(error)
    })
})

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
})

app.listen(port, () => console.log(`Server running on port ${port}`))
