exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('cars').truncate().then(function() {
		// Inserts seed entries
		return knex('cars').insert([
			{
				vin: 'sd654gfr8g4r',
				make: 'Ford',
				model: 'Mustang',
				mileage: 1500,
				transmission_type: 'automatic',
				title_status: 'clean'
			},
			{
				vin: 'asd65f48sdg',
				make: 'Ford',
				model: 'F-150',
				mileage: 25000
			}
		]);
	});
};
