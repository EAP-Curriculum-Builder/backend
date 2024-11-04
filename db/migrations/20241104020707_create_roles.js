/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.raw(`
        CREATE ROLE admin;
        CREATE ROLE read-write;
        CREATE ROLE read-only;
        CREATE ROLE migrator;
        CREATE ROLE learner;
        CREATE ROLE teacher;
        CREATE ROLE guest;
    `);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.raw(`
        DROP ROLE IF EXISTS admin;
        DROP ROLE IF EXISTS read-write;
        DROP ROLE IF EXISTS read-only;
        DROP ROLE IF EXISTS migrator;
        DROP ROLE IF EXISTS learner;
        DROP ROLE IF EXISTS teacher;
        DROP ROLE IF EXISTS guest;
    `);
};
