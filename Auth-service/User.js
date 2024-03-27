const mongoose = require('mongoose');

const utilisateurSchema = new mongoose.Schema({
  nom: String,
  email: { type: String, unique: true },
  login: { type: String, unique: true },
  mdp: String
});


UserModel = mongoose.model('Utilisateur', utilisateurSchema);
module.exports=UserModel;
