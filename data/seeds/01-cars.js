
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { VIN: 123456, Make: 'Car', Model: 'Super', Mileage: 123929 }
      ]);
    });
};
