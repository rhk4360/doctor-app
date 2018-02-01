const moment = require('moment');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  // Ideally these are separate from the user
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
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
    first: {
      type: String,
      required: true,
    },
    last: {
      type: String,
      required: true,
    },
    suffix: String,
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
  dob: Date,
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
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
  }
);

UserSchema.virtual('age').get(() => {
  if (this.dob) {
    return moment().diff(this.dob, 'years');
  }
  return '';
});

// UserSchema.virtual('name.full').get(() => {
//   let fullName = `${name.first} ${name.last}`;

//   if (this.name.suffix) {
//     fullName += ` ${this.name.suffix}`;
//   }
//   return fullName;
// });

module.exports = mongoose.model('User', UserSchema);
