exports.up = function(knex) {
  return knex.schema
    .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    .createTable('user_token', function (table) {
        table.uuid('id', {primaryKey: true}).defaultTo(knex.raw("uuid_generate_v4()")).notNullable().unique()
        table.uuid('user_id').unsigned().index().references('id').inTable('users').notNullable().unique().deferrable('deferred').onDelete('CASCADE')
        table.string('token').notNullable().unique()
    })
}

exports.down =function(knex) {
  return knex.schema
      .dropTable("user_token")
}

//  const config = { transaction: false };
exports.config = { transaction: false };
