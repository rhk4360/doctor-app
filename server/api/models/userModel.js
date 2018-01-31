'use strict';
var moment = require('moment');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  // Ideally these are separate from the user
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  type: {
    type: String,
    enum: ['Provider', 'Patient'],
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  passwordConfirmation: {
    type: String,
    required: true,
  },
  name: {
    first: { type: String, required: true, },
    last: { type: String, required: true, },
    suffix: String,
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  dob: Date,
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  address: { 
    type: Schema.Types.ObjectId, 
    ref: 'Address',
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

UserSchema.virtual('name.full').get(function() {
  let fullName = `${this.name.first} ${this.name.last}`;

  if (this.name.suffix) {
    fullName += ` ${this.name.suffix}`;
  }
  return fullName;
});

UserSchema.virtual('age').get(function() {  
  if (this.dob) {
    return moment().diff(this.dob, 'years');
  }
});

module.exports = mongoose.model('User', UserSchema);