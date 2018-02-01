const appointmentController = require('../controllers/appointmentController');

module.exports = (app) => {
  // appointment Routes

  app.route('/updateAppointment')
  	.put(appointmentController.updateAppointment);
};
