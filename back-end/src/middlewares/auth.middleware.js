const HttpException = require('../utils/HttpException');
const { verifyToken } = require('../utils/Token');

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    throw new HttpException(401, 'Token must be a valid token');
  }

  try {
    const decoded = verifyToken(token);
    if (decoded.payload.role !== 'administrator') {
      throw new HttpException(401, 'not adm');
    }
    req.body.decoded = decoded;
    return next();
  } catch (error) {
    throw new HttpException(401, 'Token must be a valid token');
  }
};

module.exports = authMiddleware;