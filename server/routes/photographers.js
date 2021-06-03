const express = require('express')
const router = express.Router()

const db = require('../db/db')

// GET all photographers
router.get('/', (req, res) => {
  db.getPhotographers()
    .then(photographers => {
      res.json(photographers)
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

// GET specific photographer by name
router.get('/:photographerName', (req, res) => {
  const photographerName = String(req.params.photographerName)

  db.getPhotographerByName(photographerName)
    .then(photographer => {
      res.json(photographer)
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

// GET specific photographer by id
router.get('/:photographerId', (req, res) => {
  const photographerId = Number(req.params.photographerId)

  db.getPhotographerById(photographerId)
    .then(photographer => {
      res.json(photographer)
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

module.exports = router
