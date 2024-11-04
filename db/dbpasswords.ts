const isProduction = process.env.NODE_ENV === 'production';

const adminPassword = isProduction ? process.env.DB_PASS_ADMIN_PROD : process.env.DB_PASS_ADMIN_DEV;
const readwritePassword = isProduction ? process.env.DB_PASS_READWRITE_PROD : process.env.DB_PASS_READWRITE_DEV;
const readonlyPassword = isProduction ? process.env.DB_PASS_READONLY_PROD : process.env.DB_PASS_READONLY_DEV;
const migratorPassword = isProduction ? process.env.DB_PASS_MIGRATOR_PROD : process.env.DB_PASS_MIGRATOR_DEV;
const usersPassword = isProduction ? process.env.DB_PASS_USERS_PROD : process.env.DB_PASS_USERS_DEV;

module.exports = {
    adminPassword,
    readwritePassword,
    readonlyPassword,
    migratorPassword,
    usersPassword
}