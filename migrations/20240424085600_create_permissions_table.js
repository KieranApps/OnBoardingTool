
export function up(knex) {
    return knex.schema.createTable('permissions', (table) => {
        table.increments('id').primary();
        table.string('permission');
    });
};
  
  
export function down(knex) {
    return knex.schema.dropTable('permissions');
};
  