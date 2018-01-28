const User = require('./api/models/userModel');
const Address = require('./api/models/addressModel');

exports.seed = function() {
	// check if db already has seed data	

	let address1 = new Address({
		line_1: '7185 Leeside View',
		line_2: 'Apt 1',
	 	city: 'Colorado Springs',
	 	state: 'Colorado',
	 	postal_code: '80924',
	});

	address1.save(function() {
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
		 	address: address1._id,
		 }).save();
	});
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