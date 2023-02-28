const AbstractService = require('./Abstract.service');
const { Sale } = require('../database/models');

class SaleService extends AbstractService {
  constructor() {
    super(Sale);
  }
}

module.exports = SaleService;