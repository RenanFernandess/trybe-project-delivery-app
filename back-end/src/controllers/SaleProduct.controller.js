const AbstractController = require('./Abstract.controller');
const SaleProductService = require('../services/SaleProduct.service');

class SaleProductController extends AbstractController {
  constructor(req, res, next) {
    const saleProductService = new SaleProductService();
    super(
      saleProductService,
      req,
      res,
      next,
    );
  }
}

module.exports = SaleProductController;