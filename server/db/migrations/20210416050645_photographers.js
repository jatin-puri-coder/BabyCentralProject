exports.up = function (knex) {
  return knex.schema.createTable('photographers', (table) => {
    table.increments('id').primary()
    table.text('name')
    table.text('location')
    table.text('image')
    table.text('about')
    table.text('website')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('photographers')
}
