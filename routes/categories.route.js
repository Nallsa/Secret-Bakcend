const { Router } = require('express');
const {
  categoriesController,
} = require('../controllers/categories.controller');

const router = Router();

router.get('/categories', categoriesController.getAllCategories);
router.post('/categories', categoriesController.postCategories);
router.delete('/categories/:id', categoriesController.delCategories);

module.exports = router;
