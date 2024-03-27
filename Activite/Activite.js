const mongoose = require('mongoose');

const recetteSchema = new mongoose.Schema({
  titre: String,
  utilisateur_id: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  Tache_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Tache' },

});

module.exports = mongoose.model('Activite', ActiviteSchema);
