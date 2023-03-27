/* eslint-disable no-useless-escape */
const { messages } = require('../config');
const { response, stringGenerator } = require('../utils');
const URL = require('../models/url');

const shortUrl = async (req, res) => {
    try {
        const { url } = req.body;
        if (!url) return response.badRequest(res, messages.enterUrl);
        const validateUrl = url.match(/(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/);
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
