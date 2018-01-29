const User = require('./api/models/userModel');
const Address = require('./api/models/addressModel');
const Appointment = require('./api/models/appointmentModel');
const moment = require('moment');

exports.seed = function() {
	// check if db already has seed data note: could be done through a file and may be a better option

	let address1 = new Address({
		line_1: '7185 Leeside View',
		line_2: 'Apt 1',
	 	city: 'Colorado Springs',
	 	state: 'Colorado',
	 	postal_code: '80924',
	});

	let appt1 = new Appointment({
 		//YYYY-MM-DDTHH:mm
 		datetime: moment('2017-02-11 07:00'),
 		timeoffset: -5,
 		purpose: 'Baby delivery',
 		provider_name: 'Doctor Dolittle',
 		status: 'Completed',
 	});

 	let appt2 = new Appointment({
 		//YYYY-MM-DDTHH:mm
 		datetime: moment('2018-02-11 07:00'),
 		timeoffset: -5,
 		purpose: 'Baby check up',
 		provider_name: 'Doctor Domore',
 		status: 'Requested',
 	});

 	let appt3 = new Appointment({
		//YYYY-MM-DDTHH:mm
		datetime: moment('2017-08-11 15:30'),
		timeoffset: -5,
		purpose: 'Physical',
		provider_name: 'Doctor Bond',
		status: 'Canceled',
	});

	let appt4 = new Appointment({
 		//YYYY-MM-DDTHH:mm
 		datetime: moment('2018-03-11 08:30'),
 		timeoffset: -5,
 		purpose: 'Shots',
 		provider_name: 'Doctor Bond',
 		status: 'Booked',
 	});

	address1.save(function() {

		// populate some appointments
		appt1.save(function() {
	 		appt2.save(() => {
				appt3.save(() => {
			 		appt4.save(() => {
				 		new User({
						 	username: 'patient1',
						 	password: 'test1234',
						 	passwordConfirmation: 'test1234',			 	
						 	email: 'test@testuser.com',
						 	type: 'Patient',
						 	name: {
						 		first: 'Andrew',
						 		last: 'Garret',
						 	},	 	
						 	dob: new Date('12/16/1985'),
						 	address: address1._id,
						 	appointments: [ appt1._id, appt2._id, appt3._id, appt4._id ],
						}).save();
				 	});
			 	});		 		
		 	});	
	 	});
	});

	// db.users.deleteOne({password: "test1234"})



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