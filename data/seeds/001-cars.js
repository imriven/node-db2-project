
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { vin: 'rowValue1', make:"dodge", model:"caravan", mileage:7000},
        { vin: 'rowValue2', make:"dodge", model:"caravan", mileage:7000}
      ]);
    });
};
