/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('exercise_types').del()
  await knex('exercise_types').insert([
    {id: 1, exercise_type: 'vocabulary'},
    {id: 2, exercise_type: 'grammar'},
    {id: 3, exercise_type: 'gap fill'},
    {id: 4, exercise_type: 'note taking'},
    {id: 5, exercise_type: 'preview reading'},
    {id: 6, exercise_type: 'preview gap fill'},
    {id: 7, exercise_type: 'preview vocabulary'},
    {id: 8, exercise_type: 'grammar test'},
    {id: 9, exercise_type: 'vocabulary test'},
    {id: 10, exercise_type: 'content quiz'},
  ]);
};
