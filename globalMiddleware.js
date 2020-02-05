const logger = (req, res, next) => {
	console.log(`${req.method} Request from ${req.url} ${new Date().toISOString()}`);
};

module.exports = logger;
