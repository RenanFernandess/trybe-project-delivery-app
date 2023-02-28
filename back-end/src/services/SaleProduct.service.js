const AbstractService = require('./Abstract.service');
const { SaleProduct } = require('../database/models');

class SaleProductService extends AbstractService {
  constructor() {
    super(SaleProduct);
  }
}

module.exports = SaleProductService;