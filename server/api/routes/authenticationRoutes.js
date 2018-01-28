'use strict';
module.exports = function(app) {
  var authController = require('../controllers/authenticationController');

  // authentication Routes

  app.route('/login')
    .post(authController.signIn);
};