const mongoose = require('mongoose');

const schema = new mongoose.Schema({
objekt_id: Number,
objekt_name: String,
objekt_inventarnr: String,
objekt_erfasst_am: String,
institution_id: Number,
institution_name: String,
image: String,
image_height: Number
});

module.exports = mongoose.model('Quellen', schema, 'quellen');