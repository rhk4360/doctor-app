'use strict';
module.exports = function(app) {
  const appointmentController = require('../controllers/appointmentController');

  // appointment Routes

  app.route('/findAppointmentsForPatient')
    .get(appointmentController.findAppointmentsForPatient);

  app.route('/updateAppointment')
  	.put(appointmentController.updateAppointment);
};