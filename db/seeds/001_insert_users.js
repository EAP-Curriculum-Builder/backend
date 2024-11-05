/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {
      uid: 'iKPWbpfKKGUktuH7WciAQnTWY9U2', 
      username: '79074e0b3db5e699d9853dcc3d3665fb:beaa473cce761771b7fd412e59e2c294',
      fullname: '0819dcb43cfba889f9a9c14a8f4590d2:08b3237853ff55205e35e7105126b032',
      role: 'learner'
    },
  ]);
};
