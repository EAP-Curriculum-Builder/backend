require('dotenv').config();

const baseConfigDev = {
    client: process.env.DB_CLIENT,
    connection: {
        port: process.env.DB_PORT,
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PW
    },
    debug: true,
    migrations: {
        directory: './db/migrations'
    },
    seeds: {
        directory: "./db/seeds"
    }
};

const baseConfigStag = {
    client: process.env.DB_CLIENT,
    connection: process.env.DB_URL_STAG,
    debug: true,
    migrations: {
        directory: './db/migrations'
    },
    seeds: {
        directory: "./db/seeds"
    }
}

const baseConfigProd = {
    client: process.env.DB_CLIENT,
    connection: process.env.DB_URL_PROD,
    debug: true,
    migrations: {
        directory: './db/migrations'
    },
    seeds: {
        directory: "./db/seeds"
    }
}

const config = {
    development: {
        ...baseConfigDev,
    },

    staging: {
        ...baseConfigStag,
    },

    production: {
        ...baseConfigProd,
    }
}

module.exports = config[process.env.NODE_ENV || "development"];