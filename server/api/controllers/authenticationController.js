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
    })
    .populate('address')
    .exec(function(error, user) {     
      if (error) {
        console.log('Error: ' + JSON.stringify(error));
        res.send(error);
      } else {  
        console.log('User Response: ' + JSON.stringify(user));

        res.send(user);
      }
    });
});