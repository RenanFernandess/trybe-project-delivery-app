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

  async create() {
    try {
      const newObj = await this.service.createSale(this.req.body);
      return this.res.status(201).json(newObj);
    } catch (error) {
      this.next(error);
    }
  }
}

module.exports = SaleController;