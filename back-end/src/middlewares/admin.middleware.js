const HttpException = require('../utils/HttpException');

const adminMiddleware = (req, res, next) => {
  const {payload: { role }} = req.body.decoded;

  if (role !== 'administrator') {
    throw new HttpException(401, 'Not Administrator');
  }
  next();
};

module.exports = adminMiddleware;