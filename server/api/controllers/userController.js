/* The Authentication controller
*  signIn - attempts to sign the user in if the username/pw combo is found
*/

const User = require('../models/userModel');
const Appointment = require('../models/appointmentModel');

// signs in a user (super basic "auth")
exports.signIn = ((req, res) => {
  User.findOne({
    username: req.body.username,
    password: req.body.password,
  })
  .populate('address')
  .exec((error, user) => {
    if (error) {
      res.send(error);
    } else {
      res.send(user);
    }
  });
});

exports.getAllPatients = ((req, res) => {
  User.find({
    type: 'Patient',
  })
  .exec((error, user) => {
    if (error) {
      res.send(error);
    } else {
      res.send(user);
    }
  });
});

exports.getUser = ((req, res) => {
  User.findOne({
    _id: req.params.id,
  })
  .populate('address')
  .exec((error, user) => {
    if (error) {
      res.send(error);
    } else {
      const response = { user };

      Appointment.find({
        patient: user._id,
      })
      .populate('provider')
      .exec((error2, appointments) => {
        if (error2) {
          res.send(error2);
        } else {
          response.appointments = appointments;
          res.send(response);
        }
      });
    }
  });
});
