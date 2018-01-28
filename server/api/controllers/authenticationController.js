/* The Authentication controller
   Exports 3 methods:
   * post - Creates a new thread
   * list - Returns a list of threads
   * show - Displays a thread and its posts
*/


var User = require('../models/userModel');

exports.createUser = function(req, res) {
    new User({
      title: req.body.title, 
      author: req.body.author
    }).save();
}

// signs in a user (super basic auth)
exports.signIn = (function(req, res) {
    console.log('signIn called with request: ' + JSON.stringify(req.body));
    //res.send(null);
    User.findOne({
      username: req.body.username, 
      password: req.body.password,
    }, function(error, user) {     
      if (error) {
        res.send(error);
      } else {  
        res.send(user);
      }
    })
});