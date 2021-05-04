const connection = require('./connection')
const { generateHash } = require('authenticare/server')

module.exports = {
  userExists,
  getUserByName,
  createUser
}

function userExists (username, db = connection) {
  return db('users').select()
    .where('username', username)
    .first()
    .then(result => {
      if (result === undefined) {
        return false
      } else {
        return true
      }
    })
}

function getUserByName (username, db = connection) {
  return db('users').select()
    .where('username', username)
    .first()
}

function createUser (user, db = connection ) {
  const { username, password } = user
  return userExists(username, db)
    .then(exists => {
      // eslint-disable-next-line promise/always-return
      if (exists) {
        return Promise.reject(new Error('User Exists'))
      }
    })
    .then(() => generateHash(password))
    .then(passwordHash => {
      return db('users').insert({ username, hash: passwordHash })
    })
}
