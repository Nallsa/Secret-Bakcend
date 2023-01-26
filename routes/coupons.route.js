const { Router } = require('express');
const { couponsController } = require('../controllers/coupons.controller');

const router = Router();

router.get('/coupons', couponsController.getAllCoupons);
router.post('/coupon', couponsController.getCoupon);
router.post('/couponAdd', couponsController.postCoupon);
router.delete('/coupon/:id', couponsController.delCoupon);

module.exports = router;
