
export function up (knex) {
  return knex.schema.createTable('sessions', table => {
    table.increments('id').primary();
    table.integer('user_id').unsigned().references('id').inTable('users').notNullable();
    table.string('session_id', 255).notNullable();
    table.datetime('expiry').notNullable();
  });
};

export function down (knex) {
    return knex.schema.dropTable('sessions');
};
