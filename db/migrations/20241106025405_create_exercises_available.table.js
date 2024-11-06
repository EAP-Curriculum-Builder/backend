/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
      .createTable('exercises_available', (table) => {
          table.increments('id').primary();
          table.integer('text_id')
              .unsigned()
              .references('id')
              .inTable('texts')
              .onDelete('CASCADE')
              .onUpdate('CASCADE');
          table.integer('exercise_types_id')
              .unsigned()
              .references('id')
              .inTable('exercise_types')
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
    return knex.schema.dropTableIfExists('exercises_available');
  };
  