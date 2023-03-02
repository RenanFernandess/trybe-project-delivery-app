const AbstractService = require('./Abstract.service');
const { Sale, SaleProduct, Product, sequelize } = require('../database/models');
const HttpException = require('../utils/HttpException');

class SaleService extends AbstractService {
  constructor() {
    super(Sale);
    this.sale = Sale;
    this.saleProduct = SaleProduct;
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

  async create(body) {
    const { products, ...saleData } = body;
    try {
      const newSaleId = await sequelize.transaction(async (t) => {
        const { dataValues: { id } } = await this.sale.create({ ...saleData }, { transaction: t });
        const mapped = products
          .map((p) => this.saleProduct.create({ ...p, saleId: id }, { transaction: t }));
        await Promise.all(mapped);
        return id;
      });
      return this.getById(newSaleId);
    } catch (error) {
      throw new HttpException(400, error.message);
    }
  }

  async getByUserId(userId) {
    return this.sale.find({
      where: { userId },
    });
  }
}

module.exports = SaleService;