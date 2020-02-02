exports.up = function(knex) {
	return knex.schema.createTable('cars', (tbl) => {
		// todo create the database schema
	});
};

exports.down = function(knex) {};
