# EAP Backend

## Database

### Schema
The following schema are set up when tables are created using knex
- auth (sensitive authorization tables)
- public (general application data)
- logging (for logging user activity)
- analytics (for reports and metrics)

### Roles
For role based permissions regarding CRUD operations on the database tables, the following roles are set up:
- admin: CREATE, SELECT, INSERT, UPDATE, DELETE, ALTER, DROP
- readwrite: SELECT, INSERT, UPDATE, DELETE (for developers to test data manipulation in staging environments, API handling CRUD operations)
- readonly: SELECT (analytics, reporting)
- migrator: CREATE, ALTER, DROP (for running schema migrations, creating new tables or adding indexes)
- users: SELECT, INSERT, UPDATE with RLS policies (for application use)