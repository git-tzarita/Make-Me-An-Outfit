const express = require('express');
const outfitsController = require('../controllers/outfitsController');
const outfitRoutes = express.Router();

//outfitRoutes.get('/test', outfitsController.create);

outfitRoutes.get('/:id/edit', outfitsController.edit);

outfitRoutes.get('/:id', outfitsController.show);
outfitRoutes.delete('/:id', outfitsController.delete);
outfitRoutes.put('/:id', outfitsController.update);

outfitRoutes.post('/upload', outfitsController.upload);

outfitRoutes.get('/', outfitsController.index);

module.exports = outfitRoutes;
