const jwt = require('jsonwebtoken');

const readFile = require('fs');

const getToken = (payload) => {
  const secret = readFile.readFileSync('../jwt.evaluation.key', { encoding: 'utf-8' });
  // const jwtConfig = { algorithm: 'HS256', expiresIn: '7d' };
  return jwt.sign({ payload }, secret);
};

module.exports = { getToken };