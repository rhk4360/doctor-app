'use strict';
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
  password: {
    type: String,
    required: true,
  },
  passwordConfirmation: {
    type: String,
    required: true,
  },
  first_name: String,
  last_name: String,
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
  // Ideally we have an address table and just have a FK here
  address_line_1: String,
  address_line_2: String,
  city: String,
  state: String,
  postal_code: String,
});

module.exports = mongoose.model('User', UserSchema);