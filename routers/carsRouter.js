const express = require('express');
const db = require('./carsDb.js');

const router = express.Router();

router.get('/', (req, res) => {
	db
		.get()
		.then((data) => {
			res.status(200).json(data);
		})
		.catch((err) => {
			res.status(500).json({ error: 'unable to get data from database' });
		});
});

router.post('/', validateCar, (req, res) => {
	const body = req.body;

	db
		.insert(body)
		.then((car) => {
			res.status(200).json(car);
		})
		.catch((err) => {
			res.status(500).json({ error: 'unable to add new car' });
		});
});

// custom middleware
function validateCar(req, res, next) {
	const body = req.body;
	if (body) {
		console.log(body);
		next();
	} else {
		console.log('this is catch');
		res.status(400).json({ message: 'missing required fields' });
	}
}

module.exports = router;
