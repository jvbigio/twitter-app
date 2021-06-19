const express = require('express')
const axios = require('axios').default
const tokenService = require('../controllers/token-service')

require('dotenv').config()

const router = express.Router()

router.get('/tweets/content', async (req, res) => {
  await tokenService.getAccessToken()
  const URL = 'https://api.twitter.com/1.1/search/tweets.json'

  const config = {
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

router.get('/tweets/username', async (req, res) => {
  await tokenService.getAccessToken()
  const URL = 'https://api.twitter.com/1.1/statuses/user_timeline.json'

  const config = {
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

router.get('/tweets/random', async (req, res) => {
  await tokenService.getAccessToken()
  const URL = 'https://api.twitter.com/1.1/statuses/user_timeline.json'

  const config = {
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

module.exports = router
