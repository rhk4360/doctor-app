/* The Appointment controller
*  findAppointmentsForPatient - finds all appointments for given patient id. 
*                               Optionally provider can be passed to filter for only a specific provider.
*  updateAppointment - updates the appointment with the given appointment details passed in
*/

var moment = require('moment');
var Appointment = require('../models/appointmentModel');
var User = require('../models/userModel');

exports.findAppointmentsForPatient = ((req, res) => {
    console.log('req.query: ' + JSON.stringify(req.query));
    let searchQuery = {
      patient: req.query.patientid,
    };
    if (req.query.provider) {
      searchQuery.provider = req.body.provider;
    }
    Appointment.find(searchQuery)
    .populate('provider')
    .exec((error, user) => {     
      if (error) {
        res.send(error);
      } else {  
        console.log('find appointments for patient Response: ' + JSON.stringify(user));

        res.send(user);
      }
    });
});

exports.updateAppointment = ((req, res) => {

    const id = req.body.appointment._id;
    // Don't try to save the _id otherwise mongo will complain
    delete req.body.appointment._id;
    Appointment.findByIdAndUpdate(id, req.body.appointment)
    .exec((error, updatedAppointment) => {
      if (error) {
        res.send(error);
      } else {
        res.send(updatedAppointment);
      }
    });
});