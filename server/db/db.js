// const environment = process.env.NODE_ENV || 'development'
const database = require('../db/connection')

module.exports = {
  getPhotographers
}

function getPhotographers (db = database) {
  return db('photographers').select()
}
