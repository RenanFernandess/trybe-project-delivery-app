const AbstractController = require('./Abstract.controller');
const LoginService = require('../services/Login.service');

class LoginController extends AbstractController {
  constructor(req, res, next) {
    super(
      new LoginService(),
      req, 
      res, 
      next,
    );
  }
}

module.exports = LoginController;