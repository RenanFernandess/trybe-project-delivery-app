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

  async getByRole() {
    const { role } = this.req.params;
    try {
      const result = await this.loginService.getByRole(role);
      return this.res.status(200).json(result);
    } catch (error) {
      this.next(error);
    }
  }

  async getByEmail() {
    const { email } = this.req.params;
    try {
      const result = await this.loginService.getByEmail(email);
      return this.res.status(200).json(result);
    } catch (error) {
      this.next(error);
    }
  }
}

module.exports = LoginController;