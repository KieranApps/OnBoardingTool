
export function up (knex) {
    return knex.schema.createTable('project_managers', table => {
      table.increments('id').primary();
      table.integer('project_id').unsigned().references('id').inTable('projects');
      table.integer('user_id').unsigned().references('id').inTable('users');
    });
  };
  
export function down (knex) {
    return knex.schema.dropTable('project_managers');
};
