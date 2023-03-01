const AbstractController = require('./Abstract.controller');
const SaleService = require('../services/Sale.service');

class SaleController extends AbstractController {
  constructor(req, res, next) {
    const saleService = new SaleService();
    super(
      saleService,
      req,
      res,
      next,
    );
  }
}

module.exports = SaleController;