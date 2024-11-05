/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('topics').del()
  await knex('topics').insert([
    {id: 1, topic: 'The United Nations', theme: 'Politics', genre_id: 1},
    {id: 2, topic: 'Computer Science', theme: 'Science', genre_id: 1},
    {id: 3, topic: 'Basic Statistics', theme: 'Mathematics', genre_id: 1},
    {id: 4, topic: 'Cognitive Psychology', theme: 'Psychology', genre_id: 2},
    {id: 5, topic: 'Art History', theme: 'Humanities', genre_id: 2},
    {id: 6, topic: 'Electronics', theme: 'Science', genre_id: 2},
    {id: 7, topic: 'Marketing', theme: 'Social Science', genre_id: 3},
    {id: 8, topic: 'Democracy', theme: 'Politics', genre_id: 3},
    {id: 9, topic: 'Intermediate Statistics', theme: 'Mathematics', genre_id: 3},
    {id: 10, topic: 'Finance', theme: 'Mathematics', genre_id: 4},
    {id: 11, topic: 'Artificial Intelligence', theme: 'Science', genre_id: 4},
    {id: 12, topic: 'Keynesian Economics', theme: 'Economics', genre_id: 4},
    {id: 13, topic: 'Algorithms', theme: 'Mathematics', genre_id: 5},
    {id: 14, topic: 'Motivation', theme: 'Social Science', genre_id: 5},
    {id: 15, topic: 'Greek Poetry', theme: 'Humanities', genre_id: 5},
    {id: 16, topic: 'French Literature', theme: 'Humanities', genre_id: 6},
    {id: 17, topic: 'Nature', theme: 'Science', genre_id: 6},
    {id: 18, topic: 'Education', theme: 'Social Science', genre_id: 6},
    {id: 19, topic: 'Nutrition', theme: 'Science', genre_id: 1},
    {id: 20, topic: 'Nursing the Elderly', theme: 'Social Science', genre_id: 2},
    {id: 21, topic: 'Nursery Rhymes', theme: 'Humanities', genre_id: 3},
  ]);
};
