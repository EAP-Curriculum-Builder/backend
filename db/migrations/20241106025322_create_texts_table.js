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
          table.jsonb('resource_type'); // picture, audio, webpage, 
          table.jsonb('resource'); // urls to the learning resource
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
  