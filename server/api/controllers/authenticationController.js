/* The Authentication controller
*  signIn - attempts to sign the user in if the username/pw combo is found
*/

var moment = require('moment');
var User = require('../models/userModel');

exports.createUser = function(req, res) {
    new User({
      title: req.body.title, 
      author: req.body.author
    }).save();
}

// signs in a user (super basic "auth")
exports.signIn = (function(req, res) {
    console.log('signIn called with request: ' + JSON.stringify(req.body));

    User.findOne({
      username: req.body.username, 
      password: req.body.password,
    }, function(error, user) {     
      if (error) {
        res.send(error);
      } else {  
        console.log(JSON.stringify(user));
        // calculate age so everyone gets it for free
        if (user.dob) {
          user.age = moment().diff(user.dob, 'years');
        }
        res.send(user);
      }
    })
});