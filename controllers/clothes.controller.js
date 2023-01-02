const Clothes = require('../models/Clothes.model');

module.exports.clothesController = {
  getAllClothes: async (req, res) => {
    try {
      const clothesGet = await Clothes.find().populate('categoriesId');
      res.json(clothesGet);
    } catch (e) {
      console.log(e);
    }
  },
  getOneClothes: async (req, res) => {
    try {
      const clothesGet = await Clothes.findById(req.params.id).populate(
        'categoriesId'
      );
      res.json(clothesGet);
    } catch (e) {
      console.log(e);
    }
  },
  postClothes: async (req, res) => {
    try {
      const { name, price, colors, discount, categoriesId, modelImg } =
        req.body;
      const clothesPost = await Clothes.create({
        name,
        price,
        colors,
        discount,
        categoriesId,
        modelImg,
      });
      res.json(clothesPost);
    } catch (e) {
      console.log(e);
    }
  },

  putClothes: async (req, res) => {
    try {
      const { name, price, modelImg, discount, colors, categoriesId } =
        req.body;
      const clothesPost = await Clothes.findByIdAndUpdate(req.params.id, {
        name,
        modelImg,
        price,
        discount,
        colors,
        categoriesId,
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
