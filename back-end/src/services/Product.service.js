const AbstractService = require('./Abstract.service');
const { Product } = require('../database/models');
const HttpException = require('../utils/HttpException');

class ProductService extends AbstractService {
  constructor() {
    super(Product);
    this.product = Product;
  }

  async increment(id, stockQty) {
    const [qtdUpdated] = await this.product.increment('stockQty', { by: stockQty, where: { id } });
    if (!qtdUpdated) throw new HttpException(404, 'Not Found');
    const updated = await super.getById(+id);
    return updated;
  }
}

module.exports = ProductService;