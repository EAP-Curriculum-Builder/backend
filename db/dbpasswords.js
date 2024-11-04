const isProduction = process.env.NODE_ENV === 'production';
const isStaging = process.env.NODE_ENV === "staging";

const adminPassword = isProduction ? process.env.DB_PASS_ADMIN_PROD : isStaging ? process.env.DB_PASS_ADMIN_STAG : process.env.DB_PASS_ADMIN_DEV;
const readwritePassword = isProduction ? process.env.DB_PASS_READWRITE_PROD : isStaging ? process.env.DB_PASS_READWRITE_STAG : process.env.DB_PASS_READWRITE_DEV;
const readonlyPassword = isProduction ? process.env.DB_PASS_READONLY_PROD : isStaging ? process.env.DB_PASS_READONLY_STAG : process.env.DB_PASS_READONLY_DEV;
const migratorPassword = isProduction ? process.env.DB_PASS_MIGRATOR_PROD : isStaging ? process.env.DB_PASS_MIGRATOR_STAG : process.env.DB_PASS_MIGRATOR_DEV;
const usersPassword = isProduction ? process.env.DB_PASS_USERS_PROD : isStaging ? process.env.DB_PASS_USERS_STAG : process.env.DB_PASS_USERS_DEV;
console.log(adminPassword);
console.log(readwritePassword);
console.log(readonlyPassword);
console.log(migratorPassword);
console.log(usersPassword);

module.exports = {
    adminPassword,
    readwritePassword,
    readonlyPassword,
    migratorPassword,
    usersPassword
};