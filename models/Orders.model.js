const mongoose = require('mongoose');

const orderssSchema = mongoose.Schema({
  userData: {
    basket: [
      {
        amount: Number,
        color: String,
        modelName: String,
        price: Number,
        ModelImg: String,
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
    coupon: Number,
    orderPrice: Number,
    totalAmount: Number,
    userId: String,
    userName: String,
  },
  order: {
    City: String,
    Comment: String,
    Country: String,
    E_mail: String,
    House: String,
    Name: String,
    Phone: String,
    Street: String,
    cash: Boolean,
    card: Boolean,
    flat: String,
  },
});

const Orders = mongoose.model('Orders', orderssSchema);

module.exports = Orders;
