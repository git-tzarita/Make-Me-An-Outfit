const Outfit = require('../models/outfit-model');

const loginController = {};


loginController.findByUserName = (req,res) => {
  console.log("inside findByUserName again",  req.query.username)
  // Outfit.findById(req.params.name)
  // .then(outfit => {
  //   res.json({
  //     message: 'ok',
  //     data: { outfit },
  //   });
  // })
  // .catch(err => {
  //   res.status(400).json({message: '400', err});
  // });
};


loginController.createUser = (req,res) => {
   Outfit.createAUser({
     username: req.body.username,
     password: req.body.password,
   })
   .then(user => {
     res.json({ message: 'ok', data: { user } });
   })
   .catch(err => {
     console.log(err);
     res.status(400).json({message:'400',err});
   });
};

  // Outfit.findById(req.params.name)
  // .then(outfit => {
  //   res.json({
  //     message: 'ok',
  //     data: { outfit },
  //   });
  // })
  // .catch(err => {
  //   res.status(400).json({message: '400', err});
  // });


module.exports = loginController;
