const express = require('express');
const outfitsController = require('../controllers/outfitsController');
const outfitRoutes = express.Router();

outfitRoutes.get('/:id/edit', outfitsController.edit);

outfitRoutes.get('/:id', outfitsController.show);
outfitRoutes.delete('/:id', outfitsController.delete);
outfitRoutes.put('/:id', outfitsController.update);

outfitRoutes.get('/', outfitsController.index);
outfitRoutes.post('/', outfitsController.createOutfit, outfitsController.createOutfitItems);


module.exports = outfitRoutes;
