const User = require('./api/models/userModel');

exports.seed = function() {
	// check if db already has seed data	

	new User({
	 	username: 'patient1',
	 	password: 'test1234',
	 	passwordConfirmation: 'test1234',			 	
	 	email: 'test@testuser.com',
	 	name: {
	 		first: 'Andrew',
	 		last: 'Garret',
	 	},	 	
	 	dob: new Date('12/16/1985'),
	 	address_line_1: '7185 Leeside View',
	 	city: 'Colorado Springs',
	 	state: 'Colorado',
	 	postal_code: '80924',
	 }).save();
	// User.findOne({
	// 	username: 'patient1', 
	// 	password: 'test1234'
	// }).then(err, user) => 
	// {
	// 	if (user) {
	// 		return;
	// 	} else {
	// 		// seed with patient and doctor users
	// 		 new User({
	// 		 	username: 'patient1',
	// 		 	password: 'test1234',
	// 		 	confirmPassword: 'test1234',			 	
	// 		 }).save();
	// 	}
	// }
};