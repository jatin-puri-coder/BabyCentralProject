exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('username')
    table.text('password_hash')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
