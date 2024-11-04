/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    return knex.transaction(async (trx) => {
        await trx.schema
            .withSchema('auth')
            .createTable('users', (table) => {
                table.string('uid').primary();
                table.text('username').notNullable();
                table.text('fullname').notNullable();
                table.string('role').notNullable();
                table.timestamps(true, true);
            });

        await trx.raw(`ALTER TABLE auth.users ENABLE ROW LEVEL SECURITY`);
        // The current_setting('eapApp'...) part is related to a postgreSQL session that I define myself
        // I have to set the session value when making calls to the database where there is row level security.
        await trx.raw(`
            CREATE POLICY select_user ON auth.users FOR SELECT
            USING (current_user = 'admin' OR uid = current_setting('eapApp.current_user_uid')::text);
        `);
        await trx.raw(`
            CREATE POLICY insert_user ON auth.users FOR INSERT
            WITH CHECK (current_user = 'admin' OR uid = current_setting('eapApp.current_user_uid')::text);
        `);
        await trx.raw(`
            CREATE POLICY update_user ON auth.users FOR UPDATE
            USING (current_user = 'admin' OR uid = current_setting('eapApp.current_user_uid')::text)
            WITH CHECK (current_user = 'admin' OR uid = current_setting('eapApp.current_user_uid')::text);
        `);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.withSchema('auth').dropTableIfExists('users');
};