const { Router } = require('express');
const { ordersController } = require('../controllers/orders.controller');

const router = Router();

router.get('/orders', ordersController.getAllOrders);
router.post('/order', ordersController.postOrder);
router.delete('/order/:id', ordersController.delOrder);

module.exports = router;
