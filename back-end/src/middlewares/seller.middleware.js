const HttpException = require('../utils/HttpException');

const sellerMiddleware = (req, res, next) => {
  const { payload: { role } } = req.body.decoded;

  if (role !== 'seller' || role !== 'administrator') {
    throw new HttpException(401, 'Not seller or administrator');
  }
  next();
};

module.exports = sellerMiddleware;