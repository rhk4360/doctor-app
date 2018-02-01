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
    enum: ['Booked', 'Requested', 'Declined', 'Canceled', 'Completed'],
    required: true,
  },
  declined_reason: {
    type: String
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
    return moment(this.datetime).utcOffset(this.timeoffset).format("MM/DD/YYYY, h:mm a");
  }
});


module.exports = mongoose.model('Appointment', AppointmentSchema);