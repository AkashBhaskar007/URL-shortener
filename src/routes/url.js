const urlRouter = require('express').Router();
const {
    shortUrl,
    redirectUrl,
} = require('../modules');

urlRouter.post('/url', shortUrl);
urlRouter.get('/:shortUrl', redirectUrl);

module.exports = urlRouter;
