/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
      .createTable('vocab_exercise', (table) => {
          table.increments('id').primary();
          table.string('user_id')
              .references('uid')
              .inTable('users')
              .onDelete('CASCADE')
              .onUpdate('CASCADE');
          table.string('word').notNullable(); // for users to store words they are learning
          table.string('def'); // for users to provide a definition
          table.string('note'); // for users to take a note of the word
          table.integer('learning_path_id')
              .references('id')
              .inTable('learning_path')
              .onDelete('CASCADE')
              .onUpdate('CASCADE');
          table.integer('exercise_num').notNullable(); // in case users have more than one vocab exercise in their learning path
          // the exercise_num is stored in the exercises_id_array in learning_path table
          table.timestamps(true, true);
      })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('vocab_exercise');
  };
  