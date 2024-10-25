/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
   return knex.schema
    .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    .createTable('posts', function (table) {
      table.uuid('id', { primaryKey: true }).defaultTo(knex.raw("uuid_generate_v4()")).notNullable().unique()
       table.uuid('user').unsigned().index().references('id').inTable('users').notNullable().deferrable('deferred').onDelete('CASCADE')
       table.numeric('likes').defaultTo(0)
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
return knex.schema
    .dropTable("posts")
};
