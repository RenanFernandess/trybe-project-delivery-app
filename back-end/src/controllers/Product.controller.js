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
  }
}

module.exports = ProductController;