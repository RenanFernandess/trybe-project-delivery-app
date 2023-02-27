const AbstractService = require('./Abstract.service');
const { User } = require('../database/models');

class LoginService extends AbstractService {
  constructor() {
    super(User);
  }
}

module.exports = LoginService;