const Categories = require('../models/Categories.model');

module.exports.categoriesController = {
  getAllCategories: async (req, res) => {
    const categoriesGet = await Categories.find();
    res.json(categoriesGet);
  },
  postCategories: async (req, res) => {
    const categoriesPost = await Categories.create({
      name: req.body.categories,
    });
    res.json(categoriesPost);
  },
  delCategories: async (req, res) => {
    const categoriesDel = await Categories.findByIdAndDelete(req.params.id);
    res.json(categoriesDel);
  },
};
