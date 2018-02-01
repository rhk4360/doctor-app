const userController = require('../controllers/userController');

module.exports = (app) => {
  // authentication Routes

  app.route('/login')
    .post(userController.signIn);

  app.route('/user/:id')
    .get(userController.getUser);
};
