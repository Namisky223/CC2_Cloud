const express = require('express');
const router = express.Router();
const Tache = require('../Tache/Tache.js');

router.post('/ajouter', async (req, res) => {
  const { titre, description, date_echeance, priorite } = req.body;

  const t = await Tache.findOne({ titre });
  if (t) {
    return res.status(400).json({ message: "Une tâche avec ce titre existe déjà." });
  }

  const nouvelleT = new Tache({
    titre,
    description,
    date_echeance,
    priorite
  });

  try {
    const t = await nouvelleT.save();
    res.status(201).json(t);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }

});
router.get('/:id', async (req, res) => {
    const tacheId = req.params.id;
  
    try {
      const tache = await Tache.findById(tacheId);
      
      if (!tache) {
        return res.status(404).json({ message: "Tâche non trouvée." });
      }
  
      res.status(200).json(tache);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

module.exports = router;
