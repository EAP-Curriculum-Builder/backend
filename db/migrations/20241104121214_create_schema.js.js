/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.raw('CREATE SCHEMA IF NOT EXISTS auth');
    await knex.raw('CREATE SCHEMA IF NOT EXISTS public');
    await knex.raw('CREATE SCHEMA IF NOT EXISTS logging');
    await knex.raw('CREATE SCHEMA IF NOT EXISTS analytics');
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = async function(knex) {
      await knex.raw('DROP SCHEMA IF EXISTS auth');
      await knex.raw('DROP SCHEMA IF EXISTS public');
      await knex.raw('DROP SCHEMA IF EXISTS logging');
      await knex.raw('DROP SCHEMA IF EXISTS analytics');
  };
  