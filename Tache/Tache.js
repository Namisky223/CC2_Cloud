const mongoose = require('mongoose');

const tacheSchema = new mongoose.Schema({
  titre: { type: String, unique: true },
  description: String,
  date_echeance: Date,
  priorite: Number
});

module.exports = mongoose.model('Tache', tacheSchema);
