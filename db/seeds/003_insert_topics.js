/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('topics').del()
  await knex('topics').insert([
    {id: 1, topic: 'The United Nations', genre_id: 1},
    {id: 2, topic: 'Computer Science', genre_id: 1},
    {id: 3, topic: 'Basic Statistics', genre_id: 1},
    {id: 4, topic: 'Child Psychology', genre_id: 1},
    {id: 5, topic: 'Art History', genre_id: 1},
    {id: 6, topic: 'Electronics', genre_id: 2},
    {id: 7, topic: 'Marketing', genre_id: 2},
    {id: 8, topic: 'Democracy', genre_id: 2},
    {id: 9, topic: 'Intermediate Statistics', genre_id: 2},
    {id: 10, topic: 'Finance', genre_id: 2},
    {id: 11, topic: 'Artificial Intelligence', genre_id: 3},
    {id: 12, topic: 'Keynsian Economics', genre_id: 3},
    {id: 13, topic: 'Algorithms', genre_id: 3},
    {id: 14, topic: 'Society', genre_id: 3},
    {id: 15, topic: 'Greek Poetry', genre_id: 3},
    {id: 16, topic: 'French Literature', genre_id: 4},
    {id: 17, topic: 'Zoology', genre_id: 4},
    {id: 18, topic: 'Education', genre_id: 4},
    {id: 19, topic: 'Nutrition', genre_id: 4},
    {id: 20, topic: 'Nursing the Elderly', genre_id: 4},
    {id: 21, topic: 'Nursery Rhymes', genre_id: 4},
  ]);
};
