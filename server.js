const express = require('express')
const app = express()
const path = require('path')
require('dotenv').config()

// this way for multiple endpoint with its own separate file
// so each gets its own variable. 32min mark of code review
// const routes = require('./routes')

const port = process.env.PORT || 3000

app.use('/', express.static(path.join(__dirname, 'client/build')))

// for example with multiple endpoints:
// app.use('/api', routes)

app.use('/api', require('./routes'))

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
})

app.listen(port, () => console.log(`Server running on port ${port}`))
