const { Router } = require('express');
const { usersController } = require('../controllers/users.controller');

const router = Router();

router.get('/user', usersController.getAllUsers);
router.post('/user', usersController.registerUser);
router.post('/login', usersController.login);
// router.delete('/categories/:id', usersController.delCategories);

module.exports = router;
