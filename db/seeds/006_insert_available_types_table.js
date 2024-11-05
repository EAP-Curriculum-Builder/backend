/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('exercises_available').del()
  await knex('exercises_available').insert([
    {id: 1, text_id: 1, exercise_types_id: 1},
    {id: 2, text_id: 1, exercise_types_id: 2},
    {id: 3, text_id: 1, exercise_types_id: 3},
    {id: 4, text_id: 1, exercise_types_id: 4},
    {id: 5, text_id: 1, exercise_types_id: 5},
    {id: 6, text_id: 1, exercise_types_id: 6},
    {id: 7, text_id: 1, exercise_types_id: 7},
    {id: 8, text_id: 1, exercise_types_id: 8},
    {id: 9, text_id: 1, exercise_types_id: 9},
    {id: 10, text_id: 1, exercise_types_id: 10},
    {id: 11, text_id: 2, exercise_types_id: 1},
    {id: 12, text_id: 2, exercise_types_id: 2},
    {id: 13, text_id: 2, exercise_types_id: 3},
    {id: 14, text_id: 2, exercise_types_id: 4},
    {id: 15, text_id: 2, exercise_types_id: 5},
    {id: 16, text_id: 2, exercise_types_id: 6},
    {id: 17, text_id: 2, exercise_types_id: 7},
    {id: 18, text_id: 2, exercise_types_id: 8},
    {id: 19, text_id: 2, exercise_types_id: 9},
    {id: 20, text_id: 2, exercise_types_id: 10},
    {id: 21, text_id: 3, exercise_types_id: 1},
    {id: 22, text_id: 3, exercise_types_id: 2},
    {id: 23, text_id: 3, exercise_types_id: 3},
    {id: 24, text_id: 3, exercise_types_id: 4},
    {id: 25, text_id: 3, exercise_types_id: 5},
    {id: 26, text_id: 3, exercise_types_id: 6},
    {id: 27, text_id: 3, exercise_types_id: 7},
    {id: 28, text_id: 3, exercise_types_id: 8},
    {id: 29, text_id: 3, exercise_types_id: 9},
    {id: 30, text_id: 3, exercise_types_id: 10},
  ]);
};
