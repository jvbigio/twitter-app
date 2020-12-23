/* eslint-disable no-undef */
const express = require('express')
const app = express()
const path = require('path')
const axios = require('axios')
const qs = require('qs')
const { response } = require('express')
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

// getAccessToken() 
// const token = await getAccessToken() // like so

// const getTweets = async () => {
//   try {
//     const response = await axios.get('https://api.twitter.com/1.1/search/tweets.json?q=nasa&result_type=recent&count=5', {
//       headers: {
//         'Content-Type': 'application',
//         Authorization: `Bearer ${process.env.BEARER_TOKEN}`
//       }
//     })

//     // console.log(response.data) // works
//     // app.get logic for searching tweet content goes here?
//   } catch (error) {
//     console.error(error)
//   }
// }
// getTweets()

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

// search by Twitter content
app.get('/api/tweets/search', async (req, res) => {
  const token = await getAccessToken()
  const URL = 'https://api.twitter.com/1.1/search/tweets.json'
  const config = {
    headers: {
      // 'Content-Type': 'application',
      Authorization: `Bearer ${token}`
    },
    params: {
      q: req.query.search_term,
      count: 5,
      result_type: 'recent'
    }
  }
  // to twitter to get the data
  axios.get(URL, config)
    .then(response => res.send(response.data))
    .catch(error => {
      console.error(error)
      res.sendStatus(500).send(error)
    })
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
