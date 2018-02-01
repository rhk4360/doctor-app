const userController = require('../controllers/userController');

module.exports = (app) => {
  // authentication Routes

  app.route('/login')
    .post(userController.signIn);

  app.route('/getAllPatients')
  	.get(userController.getAllPatients);

  app.route('/user/:id')
    .get(userController.getUser);
};
