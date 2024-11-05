/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .createTable('topics', (table) => {
        table.increments('id').primary();
        table.string('topic').notNullable().unique();
        table.integer('genre_id')
            .unsigned()
            .references('id')
            .inTable('learningGenres')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        table.timestamps(true, true);
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('topics');
};
