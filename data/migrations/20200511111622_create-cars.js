
exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
        // creates a primary key called id
        tbl.increments();
        // creates a text field called name which is both required and unique
        tbl.text('vin', 20).unique().notNullable();
        tbl.text('make', 128).notNullable();
        tbl.text('model', 128).notNullable();
        tbl.text('status', 128);
        tbl.text('transmission', 128);
        // creates a numeric field called budget which is required
        tbl.decimal('mileage').notNullable();
      });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};
