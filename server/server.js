const path = require('path')
const express = require('express')
const cors = require('cors')

const photographers = require('./routes/photographers.js')
const authRoutes = require('./routes/auth')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use(cors('*'))

server.use('/api/v1/photographers', photographers)
server.use('/api/v1', authRoutes)

module.exports = server

