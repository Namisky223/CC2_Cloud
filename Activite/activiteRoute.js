const express = require('express');
const router = express.Router();
const Activite = require('../Activite/Activite.js');
const Utilisateur = require('../../Auth-service/User.js');
const Tache = require('../../Tache/Tache.js');

router.post('/ajouter', async (req, res) => {
  const { utilisateur_id, tache_id } = req.body;

  try {
    const utilisateur = await Utilisateur.findById(utilisateur_id);
    if (!utilisateur) {
      return res.status(404).json({ message: "Utilisateur non trouvé." });
    }

    
    const tache = await Tache.findById(tache_id);
    if (!tache) {
      return res.status(404).json({ message: "Tâche non trouvée." });
    }

   
    const nouvelleActivite = new Activite({
      utilisateur_id,
      tache_id
    });

    const activiteEnregistree = await nouvelleActivite.save();
    res.status(201).json(activiteEnregistree);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
