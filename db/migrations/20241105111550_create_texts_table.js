/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
      .createTable('texts', (table) => {
          table.increments('id').primary();
          table.string('title').notNullable();
          table.text('text').notNullable().unique();
          table.string('resource_type'); // picture, audio, webpage, 
          table.string('resource'); // a url to the learning resource
          table.integer('genre_id')
              .unsigned()
              .references('id')
              .inTable('learning_genres')
              .onDelete('CASCADE')
              .onUpdate('CASCADE');
          table.integer('topics_id')
              .unsigned()
              .references('id')
              .inTable('topics')
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
    return knex.schema.dropTableIfExists('texts');
  };
  