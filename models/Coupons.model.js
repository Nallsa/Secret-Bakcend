const mongoose = require('mongoose');

const couponsSchema = mongoose.Schema({
  coupon: String,
  discount: Number,
});

const Coupons = mongoose.model('Coupons', couponsSchema);

module.exports = Coupons;
