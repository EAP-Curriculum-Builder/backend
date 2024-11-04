const { adminPassword, readwritePassword, readonlyPassword, migratorPassword, usersPassword } = require('../dbpasswords.js');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {

  return await knex.raw(`
        CREATE ROLE admin WITH LOGIN PASSWORD '${adminPassword}';
        CREATE ROLE readwrite WITH LOGIN PASSWORD '${readwritePassword}';
        CREATE ROLE readonly WITH LOGIN PASSWORD '${readonlyPassword}';
        CREATE ROLE migrator WITH LOGIN PASSWORD '${migratorPassword}';
        CREATE ROLE users WITH LOGIN PASSWORD '${usersPassword}';
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