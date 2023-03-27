/* eslint-disable consistent-return */
const { response } = require('../utils');
const { messages } = require('../config');
const URL = require('../models/url');

const redirectUrl = async (req, res) => {
    try {
        const { shortUrl } = req.params;
        const url = await URL.findOne({ shortUrl });
        if (!url) return response.success(res, messages.notFound);
        const newUrl = url.url;
        res.redirect(newUrl);
    } catch (error) {
        return response.serverError(res, error);
    }
};
module.exports = redirectUrl;
