/* The Appointment controller
*  findAppointmentsForPatient - finds all appointments for given patient id. 
*                               Optionally provider can be passed to filter for only a specific provider.
*/

var moment = require('moment');
var Appointment = require('../models/appointmentModel');

exports.findAppointmentsForPatient = (function(req, res) {
    console.log('req.query: ' + JSON.stringify(req.query));
    let searchQuery = {
      patient: req.query.patientid,
    };
    if (req.query.provider) {
      searchQuery.provider = req.body.provider;
    }
    Appointment.find(searchQuery)
    .populate('provider')
    .exec(function(error, user) {     
      if (error) {
        console.log('Error: ' + JSON.stringify(error));
        res.send(error);
      } else {  
        console.log('find appointments for patient Response: ' + JSON.stringify(user));

        res.send(user);
      }
    });
});