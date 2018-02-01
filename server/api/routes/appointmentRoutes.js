const appointmentController = require('../controllers/appointmentController');

module.exports = (app) => {
  // appointment Routes

  app.route('/getProvidersPatients/:id')
  	.get(appointmentController.getProvidersPatients);
  	
  app.route('/updateAppointment')
  	.put(appointmentController.updateAppointment);
};
