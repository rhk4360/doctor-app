const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AddressSchema = new Schema({
  line_1: String,
  line_2: String,
  city: String,
  state: String,
  postal_code: String,
  phone: String,
});

module.exports = mongoose.model('Address', AddressSchema);
