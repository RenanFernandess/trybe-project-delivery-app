const HttpException = require('../utils/HttpException');

const sellerMiddleware = (req, res, next) => {
  const { payload: { role } } = req.body.decoded;

  if (role !== 'seller' && role !== 'administrator') {
    throw new HttpException(401, role);
  }
  next();
};

module.exports = sellerMiddleware;