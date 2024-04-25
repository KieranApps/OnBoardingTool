
export function up(knex) {
    return knex.schema.createTable('roles', (table) => {
        table.increments('id').primary();
        table.string('role', 255);
        table.integer('permission_id').unsigned().references('id').inTable('permissions').defaultTo(1);
    });
};
  
  
export function down(knex) {
    return knex.schema.dropTable('roles');
};
  