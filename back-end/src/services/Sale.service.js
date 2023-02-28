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
        { model: SaleProduct, as: 'productsSold', attributes: { exclude: ['saleId'] } },
        { model: Product, as: 'products', through: { attributes: [] } },
    ],
    });

    const products = result.products.map((item, index) => ({
      productName: item.name,
      price: item.price,
      quantity: result.productsSold[index].quantity,
    }));
    const { productsSold: _, ...remain } = result.dataValues;
    return { ...remain, products };
  }

  // async createSale(body) {

  // }
}

module.exports = SaleService;