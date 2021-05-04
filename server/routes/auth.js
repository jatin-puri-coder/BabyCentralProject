const express = require('express')
const { applyAuthRoutes } = require('authenticare/server')
const { userExists, getUserByName, createUser } = require('../db/authenticare_db')

const router = express.Router()

applyAuthRoutes(router, {
  userExists,
  getUserByName,
  createUser
})

module.exports = router
