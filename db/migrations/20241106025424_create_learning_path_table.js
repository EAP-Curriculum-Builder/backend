/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
      .createTable('learning_path', (table) => {
          table.increments('id').primary();
          table.string('user_id')
              .references('uid')
              .inTable('users')
              .onDelete('CASCADE')
              .onUpdate('CASCADE');
          table.integer('topics_id')
              .references('id')
              .inTable('topics')
              .onDelete('CASCADE')
              .onUpdate('CASCADE');
          table.integer('genre_id')
              .references('id')
              .inTable('learning_genres')
              .onDelete('CASCADE')
              .onUpdate('CASCADE');
          table.integer('text_id')
              .references('id')
              .inTable('texts')
              .onDelete('CASCADE')
              .onUpdate('CASCADE');  
          table.jsonb("exercise_id_array");
          table.timestamps(true, true);
      })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('learning_path');
  };
  