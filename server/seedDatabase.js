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
	 	phone: '773-202-LUNA',
	});

	let address2 = new Address({
		line_1: '21 Lakeshore View',
		line_2: 'Apt 121',
	 	city: 'Chicago',
	 	state: 'Illinois',
	 	postal_code: '60611',
	 	phone: '312-323-2222',
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

	const patient2 = new User({
	 	username: 'patient2',
	 	password: 'test1234',
	 	passwordConfirmation: 'test1234',			 	
	 	email: 'test3@testuser.com',
	 	type: 'Patient',
	 	name: {
	 		first: 'Bugs',
	 		last: 'Bunny',
	 	},
	 	dob: new Date('04/11/1980'),
	});

	new User({
	 	username: 'patient3',
	 	password: 'test1234',
	 	passwordConfirmation: 'test1234',			 	
	 	email: 'test4@testuser.com',
	 	type: 'Patient',
	 	name: {
	 		first: 'Dexter',
	 		last: 'Dog',
	 	},
	 	dob: new Date('04/22/1981'),
	}).save();

	new User({
	 	username: 'patient4',
	 	password: 'test1234',
	 	passwordConfirmation: 'test1234',			 	
	 	email: 'test5@testuser.com',
	 	type: 'Patient',
	 	name: {
	 		first: 'Nolan',
	 		last: 'Steven',
	 	},
	 	dob: new Date('02/11/2017'),
	}).save();

	jamesBondMd.save(() => {
		docDomore.save(() => {
			docDolittle.save(() => {
				address1.save(() => {
					patient1.address = address1._id;
					patient1.save(() => {
						// populate some appointments
						new Appointment({
					 		patient: patient1._id,
					 		datetime: moment('2017-02-11 07:00'),
					 		timeoffset: -5,
					 		purpose: 'Baby delivery',
					 		provider: docDolittle._id,
					 		status: 'Completed',
					 	}).save();
					 	new Appointment({
					 		patient: patient1._id,
					 		datetime: moment('2018-02-11 07:00'),
					 		timeoffset: -5,
					 		purpose: 'Baby check up',
					 		provider: docDomore._id,
					 		status: 'Requested',
					 	}).save();
						new Appointment({
							patient: patient1._id,
							datetime: moment('2017-08-11 15:30'),
							timeoffset: -5,
							purpose: 'Physical',
							provider: jamesBondMd._id,
							status: 'Canceled',
						}).save();
						new Appointment({
					 		patient: patient1._id,
					 		datetime: moment('2018-03-11 08:30'),
					 		timeoffset: -5,
					 		purpose: 'Shots',
					 		provider: jamesBondMd._id,
					 		status: 'Booked',
					 	}).save();

					 	new Appointment({
					 		patient: patient1._id,
					 		datetime: moment('2018-03-13 10:30'),
					 		timeoffset: -5,
					 		purpose: 'Check up',
					 		provider: jamesBondMd._id,
					 		status: 'Booked',
					 	}).save();
					 	new Appointment({
					 		patient: patient1._id,
					 		datetime: moment('2018-02-04 11:30'),
					 		timeoffset: -5,
					 		purpose: 'Check up for baby',
					 		provider: jamesBondMd._id,
					 		status: 'Requested',
					 	}).save(() => {
					 		address2.save(() => {
						 		patient2.address = address2._id;
						 		patient2.save(() => {
						 			new Appointment({
								 		patient: patient2._id,
								 		datetime: moment('2018-02-22 12:10'),
								 		timeoffset: -5,
								 		purpose: 'Annual physical',
								 		provider: jamesBondMd._id,
								 		status: 'Requested',
								 	}).save();
								 	new Appointment({
								 		patient: patient2._id,
								 		datetime: moment('2018-02-12 11:50'),
								 		timeoffset: -5,
								 		purpose: 'MRI',
								 		provider: jamesBondMd._id,
								 		status: 'Requested',
								 	}).save();
								 	new Appointment({
								 		patient: patient1._id,
								 		datetime: moment('2018-01-23 16:30'),
								 		timeoffset: -5,
								 		purpose: 'Tetanus shot',
								 		provider: jamesBondMd._id,
								 		status: 'Booked',
								 	}).save();
								 	new Appointment({
								 		patient: patient2._id,
								 		datetime: moment('2018-01-04 10:30'),
								 		timeoffset: -5,
								 		purpose: 'X-rays',
								 		provider: jamesBondMd._id,
								 		status: 'Completed',
								 	}).save();
							 	});
					 		});
					 	});
				 	});
				});
			});
		});
	});
};