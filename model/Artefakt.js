const mongoose = require('mongoose');

const artefaktSchema = new mongoose.Schema({
  name: { type: String, required: true },
  beschreibung: { type: String },
  bildURL: { type: String },
  historischeDaten: { type: Array },
});

module.exports = mongoose.model('Artefakt', artefaktSchema);