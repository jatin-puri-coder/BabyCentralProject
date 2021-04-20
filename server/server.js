const path = require('path')
const express = require('express')
const cors = require('cors')

const photographers = require('./routes/photographers.js')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use(cors('*'))

server.use('/api/v1/photographers', photographers)

module.exports = server

