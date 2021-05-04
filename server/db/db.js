// const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile').development
const connection = require('knex')(config)

module.exports = {
  getPhotographers
}

function getPhotographers (db = connection) {
  return db('photographers').select()
}
