
export function up(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('firstname', 255).notNullable();
    table.string('lastname', 255).notNullable();
    table.string('email', 255).notNullable();
    table.string('password').notNullable();
    table.string('reset_id').nullable();
    table.datetime('reset_expiry').nullable();
    table.integer('manager_id').unsigned().references('id').inTable('users');
    table.integer('role_id').unsigned().references('id').inTable('roles').defaultTo(1);
    table.timestamps(false,  true);
  });
};


export function down(knex) {
    return knex.schema.dropTable('users');
};
