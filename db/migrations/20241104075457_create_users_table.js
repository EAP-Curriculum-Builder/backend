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
        await trx.raw(`
            CREATE POLICY select_user ON auth.users FOR SELECT
            USING (uid = current_user);
        `);
        await trx.raw(`
            CREATE POLICY insert_user ON auth.users FOR INSERT
            WITH CHECK (uid = current_user);
        `);
        await trx.raw(`
            CREATE POLICY update_user ON auth.users FOR UPDATE
            USING (uid = current_user)
            WITH CHECK (uid = current_user);
        `);
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.withSchema('auth').dropTableIfExists('users');
};