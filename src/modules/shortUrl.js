const { messages } = require('../config');
const { response, stringGenerator } = require('../utils');
const URL = require('../models/url');

const shortUrl = async (req, res) => {
    try {
        const { url } = req.body;
        if (!url) return response.badRequest(res, messages.enterUrl);
        const validateUrl = url.match(/^((https?):\/\/)?([w|W]{3}\.)+[a-zA-Z0-9\-\.]{3,}\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/);
        if (!validateUrl) return response.success(res, messages.enterValidUrl);
        const urlCheck = url.split('://');
        let originalUrl = '';
        if (urlCheck.length <= 1) {
            originalUrl = `${req.protocol}://${url}`;
        } else {
            originalUrl = url;
        }
        const short = await stringGenerator();
        await URL.create({
            url: originalUrl,
            shortUrl: short,
        });
        return response.success(res, messages.urlShortened, `localhost:${process.env.PORT}/${short}`);
    } catch (error) {
        return response.serverError(res, error);
    }
};
module.exports = shortUrl;
