const AbstractService = require('./Abstract.service');
const { Sale, SaleProduct, Product } = require('../database/models');

class SaleService extends AbstractService {
  constructor() {
    super(Sale);
    this.sale = Sale;
  }

  async getById(id) {
    const result = await this.sale.findOne({
      where: { id },
      include: [
        {
          model: SaleProduct,
          as: 'saleProduct',
          through: { attributes: { exclude: ['password'] } },
        },
      ],
    });
    console.log('específico');
    return result;
  }
}

module.exports = SaleService;