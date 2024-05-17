
export function up (knex) {
    return knex.schema.createTable('objectives', table => {
        table.increments('id').primary();
        table.integer('user_id').unsigned().references('id').inTable('users');
        table.text('objective');
        table.boolean('complete');
        table.boolean('manager_confirm');
    });
  };
  
export function down (knex) {
    return knex.schema.dropTable('objectives');
};
