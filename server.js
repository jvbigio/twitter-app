const express = require('express')
const app = express()
const path = require('path')
const axios = require('axios')
require('dotenv').config()

app.use('/', express.static(path.join(__dirname, 'client/build')))

app.listen(3000)

// test
// app.get('/api/tweets', (req, res) => res.send('hello')) // works in postman

// const port = process.env.PORT
// console.log(`Your port is ${port}`)
// const username = process.env.USERNAME
