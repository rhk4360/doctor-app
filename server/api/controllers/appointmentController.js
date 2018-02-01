/* The Appointment controller
*
*  updateAppointment - updates the appointment with the given appointment details passed in
*/

const Appointment = require('../models/appointmentModel');

exports.updateAppointment = ((req, res) => {
  const id = req.body.appointment._id;
  // Don't try to save the _id otherwise mongo will complain
  delete req.body.appointment._id;
  Appointment.findByIdAndUpdate(id, req.body.appointment, {new: true})
  .populate('provider', 'name')
  .exec((error, updatedAppointment) => {
    if (error) {
      res.send(error);
    } else {
      res.send(updatedAppointment);
    }
  });
});
