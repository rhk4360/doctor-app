const User = require('./api/models/userModel');
const Address = require('./api/models/addressModel');
const Appointment = require('./api/models/appointmentModel');
const moment = require('moment');

exports.seed = function() {
	// check if db already has seed data note: could be done through a file and may be a better option

	let jamesBondMd = new User({
	 	username: 'doctor1',
	 	password: 'test1234',
	 	passwordConfirmation: 'test1234',			 	
	 	email: 'doc@testuser.com',
	 	type: 'Provider',
	 	name: {
	 		first: 'James',
	 		last: 'Bond',
	 		suffix: 'M.D.'
	 	},	 	
	 	dob: new Date('02/22/1976'),
	});

	let docDolittle = new User({
	 	username: 'doctor2',
	 	password: 'test1234',
	 	passwordConfirmation: 'test1234',			 	
	 	email: 'doc2@testuser.com',
	 	type: 'Provider',
	 	name: {
	 		first: 'Steve',
	 		last: 'Dolittle',
	 		suffix: 'D.O.'
	 	},	 	
	 	dob: new Date('11/2/1966'),
	});

	let docDomore = new User({
	 	username: 'doctor3',
	 	password: 'test1234',
	 	passwordConfirmation: 'test1234',			 	
	 	email: 'doc3@testuser.com',
	 	type: 'Provider',
	 	name: {
	 		first: 'Steve',
	 		last: 'Domore',
	 		suffix: 'M.D.'
	 	},	 	
	 	dob: new Date('01/12/1973'),
	});

	let address1 = new Address({
		line_1: '7185 Leeside View',
		line_2: 'Apt 1',
	 	city: 'Colorado Springs',
	 	state: 'Colorado',
	 	postal_code: '80924',
	});

 	let patient1 = new User({
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
	});

	jamesBondMd.save(() => {
		docDomore.save(() => {
			docDolittle.save(() => {
				address1.save(() => {
					patient1.address = address1._id;
					patient1.save(() => {
						// populate some appointments
						let appt1 = new Appointment({
					 		patient: patient1._id,
					 		datetime: moment('2017-02-11 07:00'),
					 		timeoffset: -5,
					 		purpose: 'Baby delivery',
					 		provider: docDolittle._id,
					 		status: 'Completed',
					 	}).save(() => {
					 		let appt2 = new Appointment({
						 		patient: patient1._id,
						 		datetime: moment('2018-02-11 07:00'),
						 		timeoffset: -5,
						 		purpose: 'Baby check up',
						 		provider: docDomore._id,
						 		status: 'Requested',
						 	}).save(() => {
								let appt3 = new Appointment({
									patient: patient1._id,
									datetime: moment('2017-08-11 15:30'),
									timeoffset: -5,
									purpose: 'Physical',
									provider: jamesBondMd._id,
									status: 'Canceled',
								}).save(() => {
							 		let appt4 = new Appointment({
								 		patient: patient1._id,
								 		datetime: moment('2018-03-11 08:30'),
								 		timeoffset: -5,
								 		purpose: 'Shots',
								 		provider: jamesBondMd._id,
								 		status: 'Booked',
								 	}).save(() => {
								 		
								 	});
							 	});		 		
						 	});	
					 	});
				 	});
				});
			});
		});
	});
};