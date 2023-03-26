const mongoose = require('mongoose');
const { messages } = require('../config');

mongoose.connect('mongodb://localhost:27017/shortenurl');

const dbConnection = mongoose.connection;

dbConnection.on('error', (err) => console.error({
    level: 'error',
    message: `${messages.mongoError} - ${err.toString()}`,
}));

dbConnection.once('open', () => console.log({
    level: 'info',
    message: messages.mongoConnected,
}));
