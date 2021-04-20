const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) =>{

    // return res. ('Hello')
    db.getPhotographers()
        .then(photographers => {
            res.json(photographers)
            return null
        })
        .catch(err => {
            res.status(500).send(err.message)
          })
})



module.exports = router