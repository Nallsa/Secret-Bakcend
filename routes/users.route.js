const { Router } = require('express');
const { usersController } = require('../controllers/users.controller');
const authMiddleware = require('../routes/middleware/middleware');

const router = Router();

router.get('/users', usersController.getAllUsers);
router.post('/userReg', usersController.registerUser);
router.post('/login', usersController.login);
router.get('/user', authMiddleware, usersController.getUser);
router.post(
  '/localStorageUser',
  authMiddleware,
  usersController.localStorageAddUser
);
router.post('/user/:id', usersController.renderUser);
router.delete('/user/:id', usersController.delUser);

module.exports = router;
