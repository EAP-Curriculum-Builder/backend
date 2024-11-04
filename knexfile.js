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
};

const baseConfigStag = {
    connection: process.env.DB_URL_STAG
}

const baseConfigProd = {
    connection: process.env.DB_URL_PROD
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

    staging: {
        ...baseConfigStag,
        admin: {
            ...baseConfigStag,
            connection: {
                ...baseConfigStag.connection,
                user: process.env.DB_USER_ADMIN_STAG,
                password: process.env.DB_PASS_ADMIN_STAG
            }
        },
        readwrite: {
            ...baseConfigStag,
            connection: {
                ...baseConfigStag.connection,
                user: process.env.DB_USER_READWRITE_STAG,
                password: process.env.DB_PASS_READWRITE_STAG
            }
        },
        readonly: {
            ...baseConfigStag,
            connection: {
                ...baseConfigStag.connection,
                user: process.env.DB_USER_READONLY_STAG,
                password: process.env.DB_PASS_READONLY_STAG
            }
        },
        migrator: {
            ...baseConfigStag,
            connection: {
                ...baseConfigStag.connection,
                user: process.env.DB_USER_MIGRATOR_STAG,
                password: process.env.DB_PASS_MIGRATOR_STAG
            }
        },
        users: {
            ...baseConfigStag,
            connection: {
                ...baseConfigStag.connection,
                user: process.env.DB_USER_USERS_STAG,
                password: process.env.DB_PASS_USERS_STAG
            }
        }
    },

    production: {
        ...baseConfigProd,
        admin: {
            ...baseConfigProd,
            connection: {
                ...baseConfigProd.connection,
                user: process.env.DB_USER_ADMIN_PROD,
                password: process.env.DB_PASS_ADMIN_PROD
            }
        },
        readwrite: {
            ...baseConfigProd,
            connection: {
                ...baseConfigProd.connection,
                user: process.env.DB_USER_READWRITE_PROD,
                password: process.env.DB_PASS_READWRITE_PROD
            }
        },
        readonly: {
            ...baseConfigProd,
            connection: {
                ...baseConfigProd.connection,
                user: process.env.DB_USER_READONLY_PROD,
                password: process.env.DB_PASS_READONLY_PROD
            }
        },
        migrator: {
            ...baseConfigProd,
            connection: {
                ...baseConfigProd.connection,
                user: process.env.DB_USER_MIGRATOR_PROD,
                password: process.env.DB_PASS_MIGRATOR_PROD
            }
        },
        users: {
            ...baseConfigProd,
            connection: {
                ...baseConfigProd.connection,
                user: process.env.DB_USER_USERS_PROD,
                password: process.env.DB_PASS_USERS_PROD
            }
        }
    }
}

module.exports = config[process.env.NODE_ENV || "development"];