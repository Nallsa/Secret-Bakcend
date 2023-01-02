const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
  login: String,
  password: String,
});

const Users = mongoose.model('Users', usersSchema);

module.exports = Users;
