
export function up (knex) {
    return knex.schema.createTable('projects', table => {
      table.increments('id').primary();
      table.string('name', 255);
      table.text('description');
      table.date('startDate');
      table.date('endDate');
      
    });
  };
  
export function down (knex) {
    return knex.schema.dropTable('projects');
};
  