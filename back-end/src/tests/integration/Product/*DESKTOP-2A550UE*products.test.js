const sinon = require('sinon');
const chai = require('chai');
const md5 = require('md5');
const chaiHttp = require('chai-http');
const { Product } = require('../../../database/models');
const { createNewProduct, productCreated } = require('../../mocks/products.mock');
const app = require('../../../api/app');

const { expect } = chai;
chai.use(chaiHttp);

describe('Tests ProductsController functions', function () {
  beforeEach(sinon.restore);

  it('Successfully create products', async function () {
    sinon.stub(Product, 'create').resolves(productCreated);

    chaiHttpResponse = await chai
      .request(app)
      .post('/products').send(createNewProduct);

    expect(chaiHttpResponse.status).to.equal(201);
    expect(chaiHttpResponse.body).to.deep.equal(productCreated);
  });

  it('Fails creating products', async function () {
    sinon.stub(Product, 'create').throws(new Error('Failure test'));

    chaiHttpResponse = await chai
      .request(app)
      .post('/products').send();

    expect(chaiHttpResponse.status).to.equal(500);
    expect(chaiHttpResponse.body.message).to.deep.equal('Failure test');
  });

  it('deletes product', async function () {
    sinon.stub(Product, 'destroy').resolves(true);

    chaiHttpResponse = await chai
      .request(app)
      .delete('/products/1');

    expect(chaiHttpResponse.status).to.equal(204);
  });

  it('Fails deleting product', async function () {
    sinon.stub(Product, 'destroy').throws(new Error('Failure test'));

    chaiHttpResponse = await chai
      .request(app)
      .delete('/products/555');

    expect(chaiHttpResponse.status).to.equal(500);
    expect(chaiHttpResponse.body.message).to.deep.equal('Failure test');
  });
});