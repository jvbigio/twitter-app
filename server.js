/* eslint-disable no-undef */
const express = require('express')
const app = express()
const path = require('path')
const axios = require('axios')
require('dotenv').config()

app.use('/', express.static(path.join(__dirname, 'client/build')))

app.listen(3000)

// test
// app.get('/api/tweets', (req, res) => res.send('hello')) // works in postman

// const username = process.env.API_KEY // works
