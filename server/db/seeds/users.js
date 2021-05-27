const bcrypt = require('bcrypt')
const saltRounds = 10

exports.seed = (knex) => {
  return knex('users').del()
    .then(() => Promise.all([
      bcrypt.hash('jatin', saltRounds),
      bcrypt.hash('admin', saltRounds)
    ]))

    .then(([jatinHash, adminHash]) => {
      return knex('users').insert([
        { id: 1, username: 'jatin', password_hash: jatinHash },
        { id: 2, username: 'admin', password_hash: adminHash }
      ])
    })
}
