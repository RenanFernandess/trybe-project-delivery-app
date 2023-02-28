const AbstractController = require('./Abstract.controller');
const LoginService = require('../services/Login.service');

class LoginController extends AbstractController {
  constructor(req, res, next) {
    const loginService = new LoginService();
    super(
      loginService,
      req,
      res,
      next,
    );
    this.loginService = loginService;
  }

  async login() {
    try {
      const newObj = await this.loginService.login(this.req.body);
      return this.res.status(200).json(newObj);
    } catch (error) {
      this.next(error);
    }
  }
}

module.exports = LoginController;