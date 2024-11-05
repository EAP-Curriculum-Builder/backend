/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('learningGenres').del()
  await knex('learningGenres').insert([
    {id: 1, genre: 'paragraphs'},
    {id: 2, genre: 'essays'},
    {id: 3, genre: 'lectures'},
    {id: 4, genre: 'presentations'}
  ]);
};
