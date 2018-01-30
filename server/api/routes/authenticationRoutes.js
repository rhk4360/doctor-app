'use strict';
module.exports = function(app) {
  const authController = require('../controllers/authenticationController');

  // authentication Routes

  app.route('/login')
    .post(authController.signIn);
};