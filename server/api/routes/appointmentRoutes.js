const appointmentController = require('../controllers/appointmentController');

module.exports = (app) => {
  // appointment Routes

  app.route('/findAppointmentsForPatient')
    .get(appointmentController.findAppointmentsForPatient);

  app.route('/updateAppointment')
  	.put(appointmentController.updateAppointment);
};
