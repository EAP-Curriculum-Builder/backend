class AuthorizeUsers {
    #role;
    #knexUser;

    constructor(role) {
        this.#role = role;
        this.#knexUser = this.#getKnexInstance(role);
        console.log(this.#knexUser);
    }

    #getKnexInstance = (role) => {
        const config = require('../../knexfile.js')[this.#role];
        return require('knex')(config);
    }

    async addUser(userData) {
        try {
            await this.#knexUser('auth.users').insert({
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
            await this.#knexUser.raw(`SET eapApp.current_user_uid = '${userUID}'`);
            const response = await this.#knexUser('auth.users')
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
            // only admin can do this!
            if (this.#role === 'admin') {
                await this.#knexUser('auth.users')
                    .where('uid', userUID)
                    .del();
            } else {
                throw new Error("Unauthorized!");
            }
        } catch (error) {
            console.log("There was an error:", error);
            throw new Error();
        }
    }
}

module.exports = AuthorizeUsers;