const AbstractService = require('./Abstract.service');
const { Product } = require('../database/models');

class ProductService extends AbstractService {
  constructor() {
    super(Product);
  }
}

module.exports = ProductService;