const { sign } = require('jsonwebtoken');

const getToken = (payload) => {
  const secret = 'secret_key';
  // const jwtConfig = { algorithm: 'HS256', expiresIn: '7d' };
  return sign({ payload }, secret);
};

module.exports = { getToken };