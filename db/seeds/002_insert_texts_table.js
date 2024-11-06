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
      resource_type: JSON.stringify([""]),
      resource: JSON.stringify([""]),
    },
    {
      id: 2, 
      title: "Maslow's Hierarchy of Needs", 
      text: "We all need things. We need a place to live. We need food and family. We need love and work. We need to feel valued. In fact, we need to feel that what we do has importance in the world. Well, someone called Maslow actually put these needs together into a hierarchy and claimed that as we grow in life, we can more and more satisfy these needs. Let me start by introducing the hierarchy here.",
      resource_type: JSON.stringify([""]),
      resource: JSON.stringify([""]),
    },
    {
      id: 3, 
      title: 'Urbanization and Nature.', 
      text: "Urbanization is a real thing. In 1900, the world's population was just 20 people. Then in 1950, the population soared to about 100 people. These days, there are over 200 people living in cities all around the world. Let's look next at how many people live in the 198 countries in the world. Of course, all of this is having a huge impact on our natural surroundings.",
      resource_type: JSON.stringify([""]),
      resource: JSON.stringify([""]),
    },
    {
      "id": 4,
      "title": "Understanding the United Nations and its Global Role",
      "text": "The United Nations (UN) is an international organization that was founded in 1945 to promote global peace, security, and cooperation. With over 190 member states, the UN works to address global issues, from conflict resolution to climate change. It operates through various specialized agencies, like the World Health Organization (WHO) and the United Nations Educational, Scientific and Cultural Organization (UNESCO). By providing a platform for dialogue and decision-making, the UN plays a critical role in coordinating international responses to global challenges.",
      "resource_type": JSON.stringify([""]),
      "resource": JSON.stringify([""]),
  },
  {
      "id": 5,
      "title": "Introduction to Computer Science and Its Core Concepts",
      "text": "Computer science is the study of computers and computational systems. It involves understanding how computers work, how they are designed, and how they can solve problems. Key areas of study include programming, algorithms, data structures, artificial intelligence, and human-computer interaction. Computer science professionals apply logic and creativity to design systems that solve practical problems, making our lives more efficient and connecting us to information in new ways.",
      "resource_type": JSON.stringify([""]),
      "resource": JSON.stringify([""]),
  },
  {
      "id": 6,
      "title": "Foundational Concepts in Basic Statistics",
      "text": "Statistics is the study of data collection, analysis, interpretation, and presentation. In basic statistics, we learn how to summarize data using measures like the mean, median, and mode, and how to describe data with charts and graphs. We also study probability, which is the chance of an event occurring. Understanding statistics is essential in many fields, from science and business to social studies, as it allows us to make informed decisions based on data.",
      "resource_type": JSON.stringify([""]),
      "resource": JSON.stringify([""]),
  },
  {
      "id": 7,
      "title": "Exploring Key Periods in Art History",
      "text": "Art history is the study of artistic works across different cultures and time periods. It helps us understand how art reflects and influences human experiences and ideas. Major art periods include the Renaissance, known for its focus on humanism and realism, and Modernism, which introduced abstract and experimental styles. By studying art, we learn about cultural values, historical events, and the evolution of creativity across generations.",
      "resource_type": JSON.stringify([""]),
      "resource": JSON.stringify([""]),
  },
  {
      "id": 8,
      "title": "Basics of Electronics and Circuit Components",
      "text": "Electronics is the study of electric circuits and the devices that use them. An electric circuit is a pathway that allows electric current to flow. Key components in circuits include resistors, capacitors, and transistors, which control the flow of electricity. Electronics is a foundation for much of modern technology, from smartphones to medical devices. Understanding how circuits work helps us design and troubleshoot electronic systems.",
      "resource_type": JSON.stringify([""]),
      "resource": JSON.stringify([""]),
  },
  {
      "id": 9,
      "title": "Fundamental Concepts in Marketing",
      "text": "Marketing is the process of promoting, selling, and distributing products or services. It involves understanding consumer needs and finding ways to meet them effectively. The marketing mix, often known as the 4 Ps—product, price, place, and promotion—guides how companies introduce their offerings to the public. Marketing plays a crucial role in business by creating awareness, generating interest, and building relationships with customers.",
      "resource_type": JSON.stringify([""]),
      "resource": JSON.stringify([""]),
  },
  {
      "id": 10,
      "title": "Democracy and Its Principles",
      "text": "Democracy is a system of government where citizens have the power to make decisions about their country through elected representatives. Core principles of democracy include freedom, equality, and justice. In a democratic society, people participate by voting, expressing opinions, and engaging in discussions. Democracies work to ensure that all voices are heard, and they protect the rights and freedoms of individuals. This system aims to create fair and balanced governance for all citizens.",
      "resource_type": JSON.stringify([""]),
      "resource": JSON.stringify([""]),
  },
  {
    "id": 11,
    "title": "Intermediate Concepts in Statistics",
    "text": "Intermediate statistics builds on basic concepts by introducing inferential methods. For example, hypothesis testing allows us to make conclusions about a population based on sample data. In a medical study, researchers might use a t-test to compare blood pressure levels between two groups. Another key concept is regression analysis, which helps us understand relationships between variables, such as predicting income based on years of education. These tools are widely used in research and data analysis.",
    "resource_type": JSON.stringify([""]),
    "resource": JSON.stringify([""]),
  },
  {
      "id": 12,
      "title": "An Overview of Finance and Investment",
      "text": "Finance involves managing money and investments to maximize returns. A central concept is risk and return, where higher returns often involve greater risk. For example, stocks generally offer higher returns than savings accounts but come with more volatility. Financial tools like bonds, mutual funds, and ETFs provide options for different investment goals. Corporate finance, a key branch of finance, helps companies decide how to fund operations and manage profits effectively.",
      "resource_type": JSON.stringify([""]),
      "resource": JSON.stringify([""]),
  },
  {
      "id": 13,
      "title": "Fundamentals of Artificial Intelligence",
      "text": "Artificial Intelligence (AI) is the simulation of human intelligence by machines. For example, AI-powered chatbots like customer service assistants use natural language processing to interact with users. Machine learning, a branch of AI, enables systems to learn from data. Self-driving cars are an advanced application, relying on machine learning to recognize objects and make driving decisions. AI is also used in healthcare, where algorithms can assist in diagnosing diseases by analyzing medical images.",
      "resource_type": JSON.stringify([""]),
      "resource": JSON.stringify([""]),
  },
  {
      "id": 14,
      "title": "Understanding Keynesian Economics",
      "text": "Keynesian economics, developed by John Maynard Keynes, emphasizes government intervention to stabilize the economy. For instance, during a recession, Keynesians argue that increased government spending can boost demand and reduce unemployment. The U.S. New Deal program in the 1930s is an example, where public projects created jobs and stimulated the economy. Keynesian ideas also advocate for managing interest rates to encourage investment, especially during economic downturns.",
      "resource_type": JSON.stringify([""]),
      "resource": JSON.stringify([""]),
  },
  {
      "id": 15,
      "title": "Introduction to Algorithms",
      "text": "Algorithms are step-by-step procedures for solving problems or performing tasks. In computer science, algorithms sort data, search for information, and solve mathematical problems. One example is the binary search algorithm, which quickly finds an item in a sorted list by dividing the list in half repeatedly. Sorting algorithms, like quicksort, organize data efficiently. Algorithms are essential in programming and enable computers to process data quickly and accurately.",
      "resource_type": JSON.stringify([""]),
      "resource": JSON.stringify([""]),
  },
  {
      "id": 16,
      "title": "Exploring Themes in Greek Poetry",
      "text": "Greek poetry, like the epic works of Homer, reflects ancient Greek values and beliefs. For instance, in Homer's 'Iliad' and 'Odyssey,' themes of heroism, honor, and the gods' influence on human fate are central. Greek lyric poetry, such as that of Sappho, often focuses on personal emotions and relationships. These poems give insight into Greek culture, celebrating bravery, love, and the struggles of human life.",
      "resource_type": JSON.stringify([""]),
      "resource": JSON.stringify([""]),
  },
  {
      "id": 17,
      "title": "Notable Works in French Literature",
      "text": "French literature has produced many influential works, reflecting diverse periods and themes. Victor Hugo's 'Les Misérables,' for example, explores justice and social inequality during 19th-century France. In contrast, Marcel Proust's 'In Search of Lost Time' delves into memory and time. Modern French literature includes existential works by Jean-Paul Sartre and Albert Camus, which address themes of freedom and the meaning of life. Each work offers a glimpse into French culture and thought.",
      "resource_type": JSON.stringify([""]),
      "resource": JSON.stringify([""]),
  },
  {
      "id": 18,
      "title": "Key Principles in Education",
      "text": "Education is the process of developing knowledge and skills. Different educational theories, such as constructivism, emphasize that learners build knowledge through experiences. For example, in active learning classrooms, students engage in problem-solving and group discussions. Montessori education provides hands-on learning experiences for young children. Education also includes assessment, where exams or projects measure student progress. Effective education encourages critical thinking and prepares students for future challenges.",
      "resource_type": JSON.stringify([""]),
      "resource": JSON.stringify([""]),
  },
  {
      "id": 19,
      "title": "Understanding the Basics of Nutrition",
      "text": "Nutrition is the study of how food affects the body. Key nutrients include carbohydrates, proteins, and fats, which provide energy, and vitamins and minerals, which support bodily functions. For example, calcium strengthens bones, while vitamin C boosts the immune system. A balanced diet includes various food groups like fruits, vegetables, grains, and proteins. Nutritional science helps people understand how to make healthy food choices to prevent illnesses and promote overall wellness.",
      "resource_type": JSON.stringify([""]),
      "resource": JSON.stringify([""]),
  },
  {
      "id": 20,
      "title": "Essentials of Nursing the Elderly",
      "text": "Nursing the elderly focuses on addressing the physical, emotional, and social needs of older adults. For example, caregivers may assist with mobility and provide medications for chronic illnesses like arthritis. Fall prevention strategies, such as installing handrails, are essential in elderly care. Nurses also promote mental well-being, engaging patients in social activities to reduce isolation. This specialized care ensures that elderly individuals receive support for a better quality of life.",
      "resource_type": JSON.stringify([""]),
      "resource": JSON.stringify([""]),
  },
  {
      "id": 21,
      "title": "The Role of Nursery Rhymes in Language Learning",
      "text": "Nursery rhymes are short, rhythmic poems often used in early childhood to develop language skills. Rhymes like 'Twinkle, Twinkle, Little Star' introduce children to sounds, patterns, and vocabulary. Many nursery rhymes, like 'Humpty Dumpty,' also tell stories, sparking children's imagination. These rhymes enhance memory, pronunciation, and listening skills, making them valuable tools for early language education.",
      "resource_type": JSON.stringify([""]),
      "resource": JSON.stringify([""]),
  }
  ]);
};
