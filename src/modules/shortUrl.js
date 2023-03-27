const { messages } = require('../config');
const { response, stringGenerator } = require('../utils');
const URL = require('../models/url');

const shortUrl = async (req, res) => {
    try {
        const { body } = req;
        const short = await stringGenerator();
        await URL.create({
            url: body.url,
            shortUrl: short,
        });
        return response.success(res, messages.urlShortened, `localhost:${process.env.PORT}/${short}`);
    } catch (error) {
        return response.serverError(res, error);
    }
};
module.exports = shortUrl;
