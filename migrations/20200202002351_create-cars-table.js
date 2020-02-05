exports.up = function(knex) {
	return knex.schema.createTable('cars', (tbl) => {
		tbl.increments();
		tbl.text('vin', 56).notNullable();
		tbl.text('make', 56).notNullable();
		tbl.text('model', 56).notNullable();
		tbl.integer('mileage', 56).notNullable();
		tbl.text('transmission_type');
		tbl.text('title_status');
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('cars');
};
