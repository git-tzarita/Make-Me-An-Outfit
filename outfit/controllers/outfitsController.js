const Outfit = require('../models/outfit');

const outfitsController = {};

outfitsController.index = (req,res) => {
  Outfit.findAll()
  .then(outfits => {
    res.json({
      message: 'ok',
      data: outfits,
    });
  })
  .catch(err => {
    console.log(err);
    res.status(400).json({message: '400', err});
  });
};

outfitsController.show = (req,res) => {
  Outfit.findById(req.params.id)
  .then(outfit => {
    res.json({
      message: 'ok',
      data: { tweed },
    });
  })
  .catch(err => {
    res.status(400).json({message: '400', err});
  });
};

//THIS NEEDS TO CHANGE = req.body.outfit
outfitsController.create = (req, res) => {
  Outfit.create({
    outfit: req.body.outfit,
  })
  .then(outfit => {
    res.json({message: 'ok', data: { outfit }});
  })
  .catch(err => {
    console.log(err);
    res.status(400).json({message: '400', err});
  });
};

outfitsController.edit = (req, res) => {
  Outfit.findById(req.params.id)
  .then(outfit => {
    res.render('#', {
      data: outfit,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

//THIS NEEDS TO CHANGE
outfitsController.update = (req, res) => {
  Outfit.update({
    photo: req.body.photo,
    location: req.body.location,
    status: req.body.status,
    comments: req.body.comments,
    type: req.body.type,
}, req.params.id).then(gram => {
    res.redirect('#');
    })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

outfitsController.delete = (req, res) => {
  Outfit.delete(req.params.id)
  .then(() => {
    res.redirect('#');
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

module.exports = outfitsController;
