/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.raw(`
          GRANT CREATE, USAGE ON SCHEMA auth TO admin;
          GRANT CREATE, USAGE ON SCHEMA public TO admin;
          GRANT CREATE, USAGE ON SCHEMA logging TO admin;
          GRANT CREATE, USAGE ON SCHEMA analytics TO admin;
          GRANT CREATE, USAGE ON SCHEMA auth TO migrator;
          GRANT CREATE, USAGE ON SCHEMA public TO migrator;
          GRANT CREATE, USAGE ON SCHEMA logging TO migrator;
          GRANT CREATE, USAGE ON SCHEMA analytics TO migrator;
          GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA auth TO admin;
          GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO admin;
          GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA logging TO admin;
          GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA analytics TO admin;
          GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO readwrite;
          GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA logging TO readwrite;
          GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA analytics TO readwrite;
          GRANT SELECT ON ALL TABLES IN SCHEMA analytics TO readonly;
          GRANT SELECT ON ALL TABLES IN SCHEMA logging TO readonly;
          GRANT SELECT, INSERT, UPDATE ON auth.users TO users;
      `);
};
  
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.raw(`
        REVOKE CREATE, USAGE ON SCHEMA auth TO admin;
        REVOKE CREATE, USAGE ON SCHEMA public TO admin;
        REVOKE CREATE, USAGE ON SCHEMA logging TO admin;
        REVOKE CREATE, USAGE ON SCHEMA analytics TO admin;
        REVOKE CREATE, USAGE ON SCHEMA auth TO migrator;
        REVOKE CREATE, USAGE ON SCHEMA public TO migrator;
        REVOKE CREATE, USAGE ON SCHEMA logging TO migrator;
        REVOKE CREATE, USAGE ON SCHEMA analytics TO migrator;
        REVOKE SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA auth FROM admin;
        REVOKE SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public FROM admin;
        REVOKE SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA logging FROM admin;
        REVOKE SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA analytics FROM admin;
        REVOKE SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public FROM readwrite;
        REVOKE SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA logging FROM readwrite;
        REVOKE SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA analytics FROM readwrite;
        REVOKE SELECT ON ALL TABLES IN SCHEMA analytics FROM readonly;
        REVOKE SELECT ON ALL TABLES IN SCHEMA logging FROM readonly;
        REVOKE SELECT, INSERT, UPDATE ON auth.users FROM users;
    `);
};  