/* The Appointment controller
*  getProvidersPatients - look for past/future appointments with given provider id
*
*  updateAppointment - updates the appointment with the given appointment details passed in
*/

const Appointment = require('../models/appointmentModel');
const User = require('../models/userModel');

exports.getProvidersPatients = ((req, res) => {
  Appointment.find({
    provider: req.params.id
  })
  .distinct('patient')
  .exec((error, userIds) => {
    if (error) {
      res.send(error);
    } else {
      User.find({'_id':{$in : userIds}})
      .exec((error2, users) => {
        if (error2) {
          res.send(error2);
        } else {
          res.send(users);
        }
      });
    }
  });
});

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
