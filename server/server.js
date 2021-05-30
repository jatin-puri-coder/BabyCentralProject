const path = require('path')
const express = require('express')
const cors = require('cors')
const passportRoute = require('./routes/passport')
const photographers = require('./routes/photographers')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use(cors('*'))

if (process.env.NODE_ENV === 'production') {
  server.use(express.static('client/build'))
}
server.get('*', (request, response) => {
  response.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

server.use('/api/v1/photographers', photographers)
server.use('/api/v1/auth', passportRoute)

module.exports = server
