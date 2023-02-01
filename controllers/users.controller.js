const Users = require('../models/Users.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

require('dotenv').config();

module.exports.usersController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await Users.find();
      res.json(users);
    } catch (e) {
      console.log(e);
    }
  },
  registerUser: async (req, res) => {
    try {
      const { login, password, basket } = req.body;

      const hash = await bcrypt.hash(
        password,
        Number(process.env.BCRYPT_ROUNDS)
      );
      const user = await Users.create({ login, password: hash, basket });

      res.status(200).json('Вы успешно зарегистрировались');
    } catch (e) {
      res.status(401).json('Такой логин уже есть');
    }
  },
  login: async (req, res) => {
    try {
      const { login, password, basket } = req.body;
      const candidate = await Users.findOne({ login });

      if (!candidate) {
        return res.status(401).json('Неверный логин или пароль');
      }
      const valid = await bcrypt.compare(password, candidate.password);

      if (!valid) {
        return res.status(401).json('Неверный логин или пароль');
      }
      const payload = {
        id: candidate._id,
        login: candidate.login,
        basket: candidate.basket,
      };
      const token = await jwt.sign(payload, process.env.SECRET_JWT_KEY, {
        expiresIn: '7d',
      });

      return res.json({
        login: login,
        token: token,
      });
    } catch (e) {
      res.status(401).json(e.toString());
    }
  },
  getUser: async (req, res) => {
    try {
      const { id, login, basket } = await Users.findById(req.user.id);

      res.json({ id, login, basket });
    } catch (e) {
      res.status(401).json(e.toString());
    }
  },
  localStorageAddUser: async (req, res) => {
    try {
      const { basket } = req.body;

      let includesArray = [];

      const totalModel = [...req.user.basket, ...basket];

      function itemCheck(item) {
        if (includesArray.indexOf(item.uniqueId) === -1) {
          includesArray.push(item.uniqueId);

          return true;
        }

        return false;
      }

      const basketIncludes = totalModel.filter(item => itemCheck(item));

      await Users.findByIdAndUpdate(req.user.id, {
        basket: basketIncludes,
      });

      res.json('User изменен');
    } catch (e) {
      res.status(401).json(e.toString());
    }
  },

  renderUser: async (req, res) => {
    try {
      const { id, login, basket } = req.body;

      await Users.findByIdAndUpdate(req.params.id, {
        login,
        basket,
        id,
      });

      res.json('User изменен');
    } catch (e) {
      console.log(e);
    }
  },

  delUser: async (req, res) => {
    try {
      const categoriesDel = await Users.findByIdAndDelete(req.params.id);
      res.json(categoriesDel);
    } catch (e) {
      console.log(e);
    }
  },
};
