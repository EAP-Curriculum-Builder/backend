class CreateLearning {
    #knexUser;

    constructor() {
        this.#knexUser = this.#getKnexInstance();
    }

    #getKnexInstance = () => {
        const config = require('../../knexfile.js');
        return require('knex')(config);
    }

    async getLearningGenres() {
        try {
            const learningGenres = await this.#knexUser('learningGenres')
                .column(['id', 'genre'])
                .select();
            return learningGenres;
        } catch (error) {
            console.log("There was an error getting learning genres:", error);
            throw new Error();
        }
    }

    async getAssociatedTopics(genreId) {
        try {
            const associatedTopics = await this.#knexUser('topics')
                .column(['id', 'topic'])
                .select()
                .where('genre_id', genreId);
            return associatedTopics;
        } catch (error) {
            console.log("There was an error getting the associated topics:", error);
            throw new Error();
        }
    }
}

module.exports = CreateLearning;