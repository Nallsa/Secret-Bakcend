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
      const { login, password } = req.body;
      const hash = await bcrypt.hash(
        password,
        Number(process.env.BCRYPT_ROUNDS)
      );
      const user = await Users.create({ login, password: hash });
      res.json(user);
    } catch (e) {
      console.log(e);
    }
  },
  login: async (req, res) => {
    const { login, password } = req.body;
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
    };
    const token = await jwt.sign(payload, process.env.SECRET_JWT_KEY, {
      expiresIn: '24h',
    });

    // return res.json({
    //   token: token,
    // });

    return res.json(req.headers.authorization);
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
