/* The Authentication controller
*  signIn - attempts to sign the user in if the username/pw combo is found
*/

const moment = require('moment');
const User = require('../models/userModel');
const Appointment = require('../models/appointmentModel');

// signs in a user (super basic "auth")
exports.signIn = (function(req, res) {
    console.log('signIn called with request: ' + JSON.stringify(req.body));

    User.findOne({
      username: req.body.username, 
      password: req.body.password,
    })
    .populate('address')
    .exec(function(error, user) {     
      if (error) {
        console.log('Error: ' + JSON.stringify(error));
        res.send(error);
      } else {  
        res.send(user);
      }
    });
});

exports.getAllPatients = ((req, res) => {

    User.find({type: 'Patient'})
    .exec((error, user) => {     
      if (error) {
        console.log('Error: ' + JSON.stringify(error));
        res.send(error);
      } else {  
        res.send(user);
      }
    });
});

exports.getUser = (function(req, res) {
  User.findOne({
      _id: req.params.id,
    })
    .populate('address')
    .exec(function(error, user) {
      if (error) {
        console.log('Error: ' + JSON.stringify(error));
        res.send(error);
      } else {  
        let response = { user };

        Appointment.find({ patient: user._id })
        .populate('provider')
        .exec(function(error, appointments) {
          if (error) {
            console.log('Error: ' + JSON.stringify(error));
            res.send(error);
          } else {
            response.appointments = appointments;
            console.log('getUser API Response: ' + JSON.stringify(response));
            res.send(response);
          }
        })
      }
    });
});