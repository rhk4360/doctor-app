'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AppointmentSchema = new Schema({
  // Ideally these are separate from the user
  date: {
    type: Date,
    required: true,
  },
  time: {
    hour: {
      type: Number,
      required: true,
    },
    minute {
      type: Number,
      required: true,
    },
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
    enum: ['Booked', 'Requested', 'Canceled'],
    required: true,
  }
});


module.exports = mongoose.model('Appointment', AppointmentSchema);