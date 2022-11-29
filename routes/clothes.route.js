const { Router } = require('express');
const { clothesController } = require('../controllers/clothes.controller');

const router = Router();

router.get('/clothes', clothesController.getAllClothes);
router.post('/clothes', clothesController.postClothes);
router.delete('/clothes/:id', clothesController.delClothes);

module.exports = router;
