/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
      .createTable('topics', (table) => {
          table.increments('id').primary();
          table.string('topic').notNullable().unique();
          table.string('theme').notNullable()
          table.integer('genre_id')
              .unsigned()
              .references('id')
              .inTable('learning_genres')
              .onDelete('CASCADE')
              .onUpdate('CASCADE');
          table.integer('text_id')
              .unsigned()
              .references('id')
              .inTable('texts')
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
  