/* eslint-disable consistent-return */
const { response } = require('../utils');
const URL = require('../models/url');

const redirectUrl = async (req, res) => {
    try {
        const { shortUrl } = req.params;
        const url = await URL.findOne({ shortUrl });
        const newUrl = url.url;
        res.redirect(newUrl);
    } catch (error) {
        return response.serverError(res, error);
    }
};
module.exports = redirectUrl;
