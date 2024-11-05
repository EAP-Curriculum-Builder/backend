/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('texts').del()
  await knex('texts').insert([
    {
      id: 1, 
      title: 'Principles for understanding cognitive levels of analysis.', 
      text: "When people try to solve a math problem, recall a book title, tell a joke, or just plan for the next day, they are using cognitive processes. Cognitive psychology studies the mind's structure and functions to understand these processes. Cognitive psychologists work to explain how the human mind learns about the world and how it applies this knowledge. Cognitive neuroscience links brain science with knowledge about these mental processes. \n The mind includes different mental processes, which the brain performs. These cognitive processes include perception, thinking, problem-solving, memory, language, and attention. We call these processes cognition. Cognition relies on mental representations of the world, such as pictures, words, or ideas. People's unique experiences create different mental representations, like ideas of right and wrong. These individual representations affect how people see and think about the world.",
      resource_type: "picture",
      resource: "",
      genre_id: 3,
      topics_id: 4
    },
    {
      id: 2, 
      title: "Maslow's Hierarchy of Needs", 
      text: "We all need things. We need a place to live. We need food and family. We need love and work. We need to feel valued. In fact, we need to feel that what we do has importance in the world. Well, someone called Maslow actually put these needs together into a hierarchy and claimed that as we grow in life, we can more and more satisfy these needs. Let me start by introducing the hierarchy here.",
      resource_type: "audio",
      resource: "",
      genre_id: 6,
      topics_id: 14
    },
    {
      id: 3, 
      title: 'Urbanization and Nature.', 
      text: "Urbanization is a real thing. In 1900, the world's population was just 20 people. Then in 1950, the population soared to about 100 people. These days, there are over 200 people living in cities all around the world. Let's look next at how many people live in the 198 countries in the world. Of course, all of this is having a huge impact on our natural surroundings.",
      resource_type: "youtube_link",
      resource: "",
      genre_id: 4,
      topics_id: 17
    },
  ]);
};
