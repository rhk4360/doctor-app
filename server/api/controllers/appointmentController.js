/* The Appointment controller
*  findAppointmentsForPatient - finds all appointments for given patient id.
*                               Optionally provider can be passed to filter for only a specific provider.
*  updateAppointment - updates the appointment with the given appointment details passed in
*/

const Appointment = require('../models/appointmentModel');

exports.findAppointmentsForPatient = ((req, res) => {
  const searchQuery = {
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
