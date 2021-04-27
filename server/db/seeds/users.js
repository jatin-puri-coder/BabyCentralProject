const { generateHash } = require('authenticare/server')

exports.seed = (knex) => {
  return knex('users').del()
    .then(() => Promise.all([
      generateHash('jatin'),
      generateHash('admin')
    ]))
    .then(([jatinHash, adminHash]) =>
      knex('users').insert([
        { id: 1, username: 'jatin', hash: jatinHash },
        { id: 2, username: 'admin', hash: adminHash }
      ])
    )
}
