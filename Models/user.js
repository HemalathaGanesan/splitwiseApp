const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const establishConnection = require('../Connection/connection');

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  mobile: Number,
  friends: [],
  paid: [],
  borrowed: []
})

const Users = mongoose.model('users', UserSchema);
module.exports = Users;