
exports.up = function(knex, Promise) {
  return knex.schema.createTable('order', function(table) {
    table.increments()
    table.text('product_name').notNullable()
    table.integer('quantity').notNullable()
    table.decimal('price').notNullable()
    table.decimal('total').notNullable()
    table.integer('user_id').references('user.id').onDelete('CASCADE')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('order')
};
