exports.up = function(knex) {
  return knex.schema.createTable('photographers', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('location')
    table.string('image')
    table.string('about')
    table.string('website')
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('photographers')
}
