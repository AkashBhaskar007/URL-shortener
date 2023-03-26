const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    url: String,
    shortUrl: String,
});
module.exports = mongoose.model('ShortUrls', urlSchema);
