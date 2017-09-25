const express = require('express');
const outfitsController = require('../controllers/outfitsController');
const outfitRoutes = express.Router();
outfitRoutes.get('/test', outfitsController.create);

outfitRoutes.get('/:id/edit', outfitsController.edit);

outfitRoutes.get('/:id', outfitsController.show);

outfitRoutes.get('/', outfitsController.findByUserName);

outfitRoutes.delete('/:id', outfitsController.delete);
outfitRoutes.put('/:id', outfitsController.update);

outfitRoutes.get('/', outfitsController.index);
outfitRoutes.post('/', outfitsController.create);


module.exports = outfitRoutes;
