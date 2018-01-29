'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AppointmentSchema = new Schema({  
  datetime: {
    type: Date,
    required: true,
  },
  // Mongo stores in UTC by default
  timeoffset: {
    type: Number,
    required: true,
  },
  purpose: {
    type: String,
    required: true,
  },
  // ideally linked to provider id in the system instead
  provider_name: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['Booked', 'Requested', 'Canceled', 'Completed'],
    required: true,
  }
});


module.exports = mongoose.model('Appointment', AppointmentSchema);