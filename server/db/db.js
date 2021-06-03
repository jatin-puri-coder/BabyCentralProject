// const environment = process.env.NODE_ENV || 'development'
const database = require('../db/connection')

module.exports = {
  getPhotographers,
  getPhotographerByName,
  getPhotographerById
}

function getPhotographers (db = database) {
  return db('photographers').select()
}

function getPhotographerByName (name, db = database) {
  return db('photographers')
    .select()
    .where('name', name)
    .first()
}

function getPhotographerById (id, db = database) {
  return db('photographers')
    .where('id', id)
    .select()
    .first()
}
