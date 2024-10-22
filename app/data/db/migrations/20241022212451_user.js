
const knex = require('../config');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    .createTable('user', function (table) {
      table.uuid('id', { primaryKey: true }).defaultTo(knex.raw("uuid_generate_v4()")).notNullable().unique()
      table.string('email', 45).notNullable()
      table.string('nick', 15).notNullable()
      table.string('password').notNullable()
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTable("user")
};
