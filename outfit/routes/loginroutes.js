
const express = require('express');
const loginController = require('../controllers/loginController');
const loginRoutes = express.Router();


loginRoutes.get('/', loginController.findByUserName);

loginRoutes.post('/', loginController.createUser);



module.exports = loginRoutes;
