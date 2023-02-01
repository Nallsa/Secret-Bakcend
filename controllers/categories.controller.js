const Categories = require('../models/Categories.model');

module.exports.categoriesController = {
  getAllCategories: async (req, res) => {
    try {
      const categoriesGet = await Categories.find();
      res.json(categoriesGet);
    } catch (e) {
      console.log(e);
    }
  },
  postCategories: async (req, res) => {
    try {
      const categoriesPost = await Categories.create({
        name: req.body.name,
      });
      res.json(categoriesPost);
    } catch (e) {
      console.log(e);
    }
  },
  delCategories: async (req, res) => {
    try {
      const categoriesDel = await Categories.findByIdAndDelete(req.params.id);
      res.json(categoriesDel);
    } catch (e) {
      console.log(e);
    }
  },
};
