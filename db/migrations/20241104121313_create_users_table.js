/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    return knex.transaction(async (trx) => {
        await trx.schema
            .createTable('users', (table) => {
                table.string('uid').primary();
                table.text('username').notNullable();
                table.text('fullname').notNullable();
                table.string('role').notNullable();
                table.timestamps(true, true);
            });
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.withSchema('auth').dropTableIfExists('users');
};