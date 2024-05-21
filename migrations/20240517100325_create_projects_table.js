
export function up (knex) {
    return knex.schema.createTable('projects', table => {
      table.increments('id').primary();
      table.string('name', 255);
      table.text('description');
      table.date('startDate');
      table.date('endDate');
      // Likely a lot more to be needed here/in sub-tables
      // I.e., pictures, logos, etc....
    });
  };
  
export function down (knex) {
    return knex.schema.dropTable('projects');
};
  