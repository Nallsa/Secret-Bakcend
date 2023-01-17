const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json('Нет доступа');
  }
  const [type, token] = req.headers.authorization.split(' ');

  if (type !== 'Bearer') {
    return res.status(401).json('Неверный тип токена');
  }
  try {
    req.user = jwt.verify(token, process.env.SECRET_JWT_KEY);

    next();
  } catch (e) {
    return res.status(401).json('Неверный токен');
  }
};
