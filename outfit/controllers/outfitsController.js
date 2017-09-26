const Outfit = require('../models/outfit-model');

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
      data: { outfit },
    });
  })
  .catch(err => {
    res.status(400).json({message: '400', err});
  });
};

outfitsController.upload = (req, res) => {
  Outfit.createClothing({ url: req.body.url, type_id: req.body.type_id })
  .then(outfit => {
    res.json({
      message: 'ok',
      data: { outfit }
    });
  })
  .catch(err => {
    console.log(err);
    res.status(400).json({message: '400', err});
  });
};

//THIS NEEDS TO CHANGE = req.body.outfit
outfitsController.create = (req, res) => {
  Outfit.create(2, [3,7,1,4])
  .then(outfit => {

    res.json({
      message: 'ok',
      data: { outfit }
    });
  })
  .catch(err => {
    console.log(err);
    res.status(400).json({message: '400', err});
  });
};

//THIS NEEDS TO CHANGE
outfitsController.edit = (req, res) => {
  Outfit.findById(req.params.id)
  .then(outfit => {
    res.json({
      message: 'ok',
      data: { outfit }
    });
    })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

//THIS NEEDS TO CHANGE
outfitsController.update = (req, res) => {
  Outfit.update({
    outfit: req.body.outfit,
  }, req.params.id)
    .then(outfit => {
    res.json({
      message: 'ok',
      data: { outfit }
    });
    })
    .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

//THIS NEEDS TO CHANGE
outfitsController.delete = (req, res) => {
  Outfit.delete(req.params.id)
  .then(outfit => {
    res.json({
      message: 'ok',
      data: { outfit }
    });
    })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

module.exports = outfitsController;
