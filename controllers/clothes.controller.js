const Clothes = require('../models/Clothes.model');

module.exports.clothesController = {
  getAllClothes: async (req, res) => {
    try {
      const clothesGet = await Clothes.find();
      res.json(clothesGet);
    } catch (e) {
      console.log(e);
    }
  },
  postClothes: async (req, res) => {
    try {
      const { name, price, img, colors } = req.body;
      const clothesPost = await Clothes.create({
        name,
        price,
        img,
        colors,
      });
      res.json(clothesPost);
    } catch (e) {
      console.log(e);
    }
  },
  delClothes: async (req, res) => {
    try {
      const clothesDel = await Clothes.findByIdAndDelete(req.params.id);
      res.json(clothesDel);
    } catch (e) {
      console.log(e);
    }
  },
};
