const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
  login: {
    type: String,
    unique: true,
  },
  password: String,
  basket: [
    {
      amount: Number,
      color: String,
      modelName: String,
      price: Number,
      modelImg: String,
      img: [String],
      uniqueId: String,
      size: {
        rest: Number,
        size: String,
        _id: String,
      },
      _id: String,
    },
  ],
});

const Users = mongoose.model('Users', usersSchema);

module.exports = Users;
