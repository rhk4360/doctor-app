'use strict';
var mongoose = require('mongoose');
var moment = require('moment');
var Schema = mongoose.Schema;

var AppointmentSchema = new Schema({
  patient: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  provider: { 
    type: Schema.Types.ObjectId, 
    ref: 'User',
  },
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
  status: {
    type: String,
    enum: ['Booked', 'Requested', 'Canceled', 'Completed'],
    required: true,
  },
}, 
{
  toObject: {
    virtuals: true,
  },
  toJSON: {
    virtuals: true,
  },
});

AppointmentSchema.virtual('formatted_datetime').get(function() {  
  if (this.datetime) {
    return moment(this.datetime).utcOffset(this.timeoffset).format("MMM Do YYYY, h:mm a");
  }
});


module.exports = mongoose.model('Appointment', AppointmentSchema);