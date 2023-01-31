const Orders = require('../models/Orders.model');

module.exports.ordersController = {
  getAllOrders: async (req, res) => {
    try {
      const getAllOrders = await Orders.find();
      res.json(getAllOrders);
    } catch (e) {
      console.log(e);
    }
  },
  postOrder: async (req, res) => {
    try {
      const { order, userData } = req.body;
      const postOrder = await Orders.create({
        userData,
        order,
      });
      res.json(postOrder);
    } catch (e) {
      console.log(e);
    }
  },
  delOrder: async (req, res) => {
    try {
      const delOrder = await Orders.findByIdAndDelete(req.params.id);
      res.json(delOrder);
    } catch (e) {
      console.log(e);
    }
  },
};
