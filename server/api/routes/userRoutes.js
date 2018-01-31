'use strict';
module.exports = function(app) {
  const userController = require('../controllers/userController');

  // authentication Routes

  app.route('/login')
    .post(userController.signIn);

  app.route('/getAllPatients')
  	.get(userController.getAllPatients);

  app.route('/user/:id')
    .get(userController.getUser);
};