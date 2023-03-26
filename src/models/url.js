const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    url: String,
    shortUrl: String,
}, {
    timestamps: true,
});
module.exports = mongoose.model('ShortUrls', urlSchema);
