const sinon = require('sinon');
const chai = require('chai');
const md5 = require('md5');
const chaiHttp = require('chai-http');
const { Product } = require('../../../database/models');
const { createNewProduct, productCreated } = require('../../mocks/products.mock');
const app = require('../../../api/app');
const productsMock = require('../../mocks/allProducts.mock');

const { expect } = chai;
chai.use(chaiHttp);

describe('Tests ProductsController functions', function () {
  beforeEach(sinon.restore);

  it('Successfully getAll products', async function () {
    sinon.stub(Product, 'findAll').resolves(productsMock);

    chaiHttpResponse = await chai
      .request(app)
      .get('/products');

    expect(chaiHttpResponse.status).to.equal(200);
    expect(chaiHttpResponse.body).to.deep.equal(productsMock);
  });

  it('Successfully getById product', async function () {
    sinon.stub(Product, 'findByPk').resolves(productsMock[0]);

    chaiHttpResponse = await chai
      .request(app)
      .get('/products/1');

    expect(chaiHttpResponse.status).to.equal(200);
    expect(chaiHttpResponse.body).to.deep.equal(productsMock[0]);
  });
});