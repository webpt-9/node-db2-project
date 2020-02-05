const express = require('express');
const carsRouter = require('./routers/carsRouter.js');
const logger = require('./globalMiddleware.js');

const server = express();

server.use(logger);
server.use(express.json());

server.use('/api/cars', carsRouter);

module.exports = server;
