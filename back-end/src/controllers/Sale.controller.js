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

  async getBySellerId() {
    try {
      const { id } = this.req.params;
      const result = await this.service.getBySellerId(id);
      return this.res.status(200).json(result);
    } catch (error) {
      this.next(error);
    }
  }
}

module.exports = SaleController;