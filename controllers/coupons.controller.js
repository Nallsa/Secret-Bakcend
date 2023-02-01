const Coupons = require('../models/Coupons.model');

module.exports.couponsController = {
  getAllCoupons: async (req, res) => {
    try {
      const getAllCoupons = await Coupons.find();
      res.json(getAllCoupons);
    } catch (e) {
      console.log(e);
    }
  },
  getCoupon: async (req, res) => {
    try {
      const { coupon } = req.body;
      const getCoupon = await Coupons.find({
        coupon,
      });

      if (getCoupon.length == 0) {
        res.status(400).json('Купон не найден');
      } else {
        res.json(...getCoupon);
      }
    } catch (e) {
      res.status(400).json(e.toString());
    }
  },
  postCoupon: async (req, res) => {
    try {
      const { coupon, discount } = req.body;
      const postCoupon = await Coupons.create({
        coupon,
        discount,
      });
      res.json(postCoupon);
    } catch (e) {
      console.log(e);
    }
  },
  delCoupon: async (req, res) => {
    try {
      const delCoupon = await Coupons.findByIdAndDelete(req.params.id);
      res.json(delCoupon);
    } catch (e) {
      console.log(e);
    }
  },
};
