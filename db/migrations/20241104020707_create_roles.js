/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.raw(`
        CREATE ROLE admin WITH LOGIN PASSWORD '';
        CREATE ROLE readwrite;
        CREATE ROLE readonly;
        CREATE ROLE migrator;
        CREATE ROLE users;
    `);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.raw(`
        DROP ROLE IF EXISTS admin;
        DROP ROLE IF EXISTS readwrite;
        DROP ROLE IF EXISTS readonly;
        DROP ROLE IF EXISTS migrator;
        DROP ROLE IF EXISTS users;
    `);
};
