const express = require('express')
const path = require('path')

const app = express()

app.use('/', express.static(path.join(__dirname, 'client/build')))

app.listen(3000)


// test
app.get('/api/tweets', (req, res) => res.send('hello')) // works in postman