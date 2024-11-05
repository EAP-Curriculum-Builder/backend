class AuthorizeUsers {
    #knexUser;

    constructor() {
        this.#knexUser = this.#getKnexInstance();
        console.log(this.#knexUser);
    }

    #getKnexInstance = () => {
        const config = require('../../knexfile.js');
        return require('knex')(config);
    }

    async addUser(userData) {
        try {
            await this.#knexUser('users').insert({
                uid: userData.uid,
                username: userData.username,
                fullname: userData.fullname,
                role: userData.role
            });
        } catch (error) {
            console.log("There was an error:", error);
            throw new Error();
        }
    }

    async getUserByUID(userUID) {
        try {
            const response = await this.#knexUser('users')
                .select('username', 'role')
                .where('uid', userUID);
            return response;
        } catch (error) {
            console.log("There was an error:", error);
            throw new Error();
        }
    }

    async removeUser(userUID) {
        try {
            await this.#knexUser('users')
                    .where('uid', userUID)
                    .del();
        } catch (error) {
            console.log("There was an error:", error);
            throw new Error();
        }
    }
}

module.exports = AuthorizeUsers;