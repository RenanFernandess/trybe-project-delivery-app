const { expect } = require('chai');
const sinon = require('sinon');

const { Product } = require('../../../../database/models');
const ProductService = require('../../../../services/Product.service');
const products = require('./mocks/allProducts.mock');

describe('Tests ProductService functions', function () {
  beforeEach(sinon.restore);
  it('getAll Products', async function () {
    sinon.stub(Product, 'findAll').resolves(products);

    const productService = new ProductService();
    const result = await productService.getAll();

    expect(result).to.deep.equal(products);
  });

  it('getById Products', async function () {
    sinon.stub(Product, 'findByPk').resolves(products[0]);

    const productService = new ProductService();
    const result = await productService.getById(1);

    expect(result).to.deep.equal(products[0]);
  });

  it('Fails to getById Products', async function () {
    sinon.stub(Product, 'findByPk').resolves();

    const productService = new ProductService();
    try {
      await productService.getById(555);      
    } catch (error) {
      expect(error.message).to.equal('Not Found');
    }
  });

  it('Remove Products', async function () {
    sinon.stub(Product, 'destroy').resolves({ removed: true });

    const productService = new ProductService();
    const result = await productService.remove(1);

    expect(result).to.deep.equal({ removed: true });
  });

  it('Fails to remove Products', async function () {
    sinon.stub(Product, 'destroy').resolves();

    const productService = new ProductService();
    try {
      await productService.remove(555);      
    } catch (error) {
      expect(error.message).to.equal('Not Found');
    }
  });
});