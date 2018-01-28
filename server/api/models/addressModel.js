'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AddressSchema = new Schema({
  line_1: String,
  line_2: String,
  city: String,
  state: String,
  postal_code: String,
  phone: String,
});

module.exports = mongoose.model('Address', AddressSchema);