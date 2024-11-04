require('dotenv').config();

const baseConfigDev = {
    client: process.env.DB_CLIENT,
    connection: {
        port: process.env.DB_PORT,
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PW
    },
    migrations: {
        directory: './db/migrations'
    },
};

const baseConfigProd = {
    connection: process.env.DB_URL
}

const config = {
    development: {
        ...baseConfigDev,
        admin: {
            ...baseConfigDev,
            connection: {
                ...baseConfigDev.connection,
                user: process.env.DB_USER_ADMIN_DEV,
                password: process.env.DB_PASS_ADMIN_DEV
            }
        },
        readwrite: {
            ...baseConfigDev,
            connection: {
                ...baseConfigDev.connection,
                user: process.env.DB_USER_READWRITE_DEV,
                password: process.env.DB_PASS_READWRITE_DEV
            }
        },
        readonly: {
            ...baseConfigDev,
            connection: {
                ...baseConfigDev.connection,
                user: process.env.DB_USER_READONLY_DEV,
                password: process.env.DB_PASS_READONLY_DEV
            }
        },
        migrator: {
            ...baseConfigDev,
            connection: {
                ...baseConfigDev.connection,
                user: process.env.DB_USER_MIGRATOR_DEV,
                password: process.env.DB_PASS_MIGRATOR_DEV
            }
        },
        users: {
            ...baseConfigDev,
            connection: {
                ...baseConfigDev.connection,
                user: process.env.DB_USER_USERS_DEV,
                password: process.env.DB_PASS_USERS_DEV
            }
        }
    },

    production: {
        ...baseConfigProd,
        admin: {

        },
        readwrite: {

        },
        readonly: {

        },
        migrator: {

        },
        users: {

        }
    }
}

module.exports = config[process.env.NODE_ENV || "development"];