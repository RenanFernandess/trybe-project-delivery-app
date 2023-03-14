const AbstractController = require('./Abstract.controller');
const ProductService = require('../services/Product.service');

class ProductController extends AbstractController {
  constructor(req, res, next) {
    const productService = new ProductService();
    super(
      productService,
      req,
      res,
      next,
    );
    this.service = productService;
  }

  async increment() {
    const { id } = this.req.params;
    const { stockQty } = this.req.body;
    try {
      const incremented = await this.service.increment(id, stockQty);
      return this.res.status(200).json(incremented);
    } catch (error) {
      this.next(error);
    }
  }
}

module.exports = ProductController;