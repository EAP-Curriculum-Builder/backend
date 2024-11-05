/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('learning_genres').del()
  await knex('learning_genres').insert([
    {id: 1, type: 'writing', genre: 'paragraphs'},
    {id: 2, type: 'writing', genre: 'essays'},
    {id: 3, type: 'reading', genre: 'academic texts'},
    {id: 4, type: 'speaking', genre: 'presentations'},
    {id: 5, type: 'speaking', genre: 'discussions'},
    {id: 6, type: 'listening', genre: 'lectures'},
  ]);
};
