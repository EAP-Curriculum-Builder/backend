class AccessLearning {
    #knexUser;

    constructor() {
        this.#knexUser = this.#getKnexInstance();
    }

    #getKnexInstance = () => {
        const config = require('../../knexfile.js');
        return require('knex')(config);
    }

    async getAllLearningPaths(uid) {
        try {
            const learningPaths = await this.#knexUser('learning_path')
                                            .column(['user_id', 'topics_id', 'genre_id', 'text_id', 'exercise_id_array'])
                                            .select()
                                            .where('user_id', uid);
                                            console.log(learningPaths);
            return learningPaths;
        } catch (error) {
            console.log("There was an error fetching your learning paths", error);
            throw new Error();
        }
    }
}

module.exports = AccessLearning;