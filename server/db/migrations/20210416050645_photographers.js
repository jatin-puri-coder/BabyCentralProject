exports.up = function (knex) {
  return knex.schema.createTable('photographers', (table) => {
    table.increments('id').primary()
    table.varchar('name')
    table.varchar('location')
    table.varchar('image')
    table.text('about')
    table.varchar('website')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('photographers')
}
