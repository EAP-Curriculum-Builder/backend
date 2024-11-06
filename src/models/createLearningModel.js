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
            const learningGenres = await this.#knexUser('learning_genres')
                .column(['id', 'type', 'genre'])
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
                .column(['id', 'topic', 'theme', 'text_id'])
                .select()
                .where('genre_id', genreId);
            return associatedTopics;
        } catch (error) {
            console.log("There was an error getting the associated topics:", error);
            throw new Error();
        }
    }

    async getExercisesAvailable(textId) {
        try {
            const exercisesAvailable = await this.#knexUser('exercises_available')
                .join('exercise_types', 'exercises_available.exercise_types_id', '=', 'exercise_types.id')
                .select('exercises_available.id', 'exercises_available.text_id', 'exercise_types.exercise_type')
                .where('exercises_available.text_id', textId);
            return exercisesAvailable;
        } catch (error) {
            console.log("There was an error getting your exercises available data:", error);
            throw new Error();
        }
    }
}

module.exports = CreateLearning;