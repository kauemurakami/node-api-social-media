exports.up = function (knex) {
  return knex.schema
    .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    .createTable('users', function (table) {
      table.uuid('id', { primaryKey: true }).defaultTo(knex.raw("uuid_generate_v4()")).notNullable().unique()
      table.string('email', 45).notNullable().unique()
      table.string('name', 45).notNullable()
      table.string('nick', 15).notNullable().unique()
      table.string('password').notNullable()
    })
};


exports.down = function (knex) {
  return knex.schema
    .dropTable("users")
};
