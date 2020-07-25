
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments();
      /* VIN, make, model, mileage; (required)
      transmission type and title status (not required) */
      tbl.integer('VIN').unique().notNullable();
      tbl.text('Make').notNullable();
      tbl.text('Model').notNullable();
      tbl.integer('Mileage').notNullable();
      tbl.text('Transmission Type')
      tbl.text('Title status')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
