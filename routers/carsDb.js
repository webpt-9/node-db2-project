const db = require('../dbConfig.js');

module.exports = {
	get,
	getById,
	getUserPosts,
	insert,
	update,
	remove
};

function get() {
	return db('cars');
}

function getById(id) {
	return db('cars').where({ id }).first();
}

function getUserPosts(userId) {
	return db('posts as p')
		.join('cars as u', 'u.id', 'p.user_id')
		.select('p.id', 'p.text', 'u.name as postedBy')
		.where('p.user_id', userId);
}

function insert(user) {
	return db('cars').insert(user).then((ids) => {
		return getById(ids[0]);
	});
}

function update(id, changes) {
	return db('cars').where({ id }).update(changes);
}

function remove(id) {
	return db('cars').where('id', id).del();
}
