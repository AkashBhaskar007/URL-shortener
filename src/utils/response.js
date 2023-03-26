const { httpStatusCodes } = require('../config');
const { messages } = require('../config');

const success = (res, message, data = null) => {
    const response = {
        status: true,
        message,
    };
    if (data) response.data = data;
    res.status(httpStatusCodes.OK).send(response);
};

const serverError = (res, error, message) => {
    res.status(httpStatusCodes.INTERNAL_SERVER_ERROR).send({
        status: false,
        error: error.toString(),
        message: message || messages.unableToProcess,
    });
};
module.exports = {
    success,
    serverError,
};
