/* eslint-disable no-undef */
const express = require('express')
const app = express()
const path = require('path')
const axios = require('axios')
const qs = require('qs')

require('dotenv').config()

app.use('/', express.static(path.join(__dirname, 'client/build')))

app.listen(3000)

const url = 'https://api.twitter.com/oauth2/token'

axios.post(url, {
  qs.stringify({'grant_type':'client_credentials'}),{
  headers: {
    'Content-Type':'application/x-www-form-urlencoded'
  },
  auth: {
    username: process.env.API_KEY,
    password: process.env.API_SECRET_KEY
  },
}).then(response => {
  console.log(response)
}).catch(error => {
  console.error(error)
})
