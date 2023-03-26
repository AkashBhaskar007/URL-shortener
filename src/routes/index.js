const express = require('express');

const router = express.Router();
const urlRouter = require('./url');

router.use(urlRouter);

module.exports = router;
