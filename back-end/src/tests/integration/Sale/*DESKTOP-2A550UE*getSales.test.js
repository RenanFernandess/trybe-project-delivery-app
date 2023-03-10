const { expect } = require('chai');
const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const { Sale } = require('../../../database/models');
const { getAllSalesMock, getByIdMock, findOneSaleMock } = require('../../mocks/sales.mock');
const app = require('../../../api/app');

chai.use(chaiHttp);

describe('Tests LoginController getSales function', function () {
  beforeEach(sinon.restore);

  it('Successfully getAllSales', async function () {
    sinon.stub(Sale, 'findAll').resolves(getAllSalesMock);

    chaiHttpResponse = await chai
      .request(app)
      .get('/sales');

    expect(chaiHttpResponse.status).to.equal(200);
    expect(chaiHttpResponse.body).to.deep.equal(getAllSalesMock);
  });

  it('Fails getAllSales', async function () {
    sinon.stub(Sale, 'findAll').throws(new Error('Failure test'));

    chaiHttpResponse = await chai
      .request(app)
      .get('/sales');

    expect(chaiHttpResponse.status).to.equal(500);
    expect(chaiHttpResponse.body.message).to.deep.equal('Failure test');
  });

  it('Successfully getById', async function () {
    sinon.stub(Sale, 'findOne').resolves(findOneSaleMock);

    chaiHttpResponse = await chai
      .request(app)
      .get('/sales/1');

    expect(chaiHttpResponse.status).to.equal(200);
    expect(chaiHttpResponse.body).to.deep.equal(getByIdMock);
  });

  it('Fails getById', async function () {
    sinon.stub(Sale, 'findOne').throws(new Error('Failure test'));

    chaiHttpResponse = await chai
      .request(app)
      .get('/sales/1');

    expect(chaiHttpResponse.status).to.equal(500);
    expect(chaiHttpResponse.body.message).to.deep.equal('Failure test');
  });

  it('Successfully getBySellerId', async function () {
    sinon.stub(Sale, 'findAll').resolves(getAllSalesMock);

    chaiHttpResponse = await chai
      .request(app)
      .get('/sales/seller/2');

    expect(chaiHttpResponse.status).to.equal(200);
    expect(chaiHttpResponse.body).to.deep.equal(getAllSalesMock);
  });

  it('Fails getBySellerId', async function () {
    sinon.stub(Sale, 'findAll').throws(new Error('Failure test'));

    chaiHttpResponse = await chai
      .request(app)
      .get('/sales/seller/2');

    expect(chaiHttpResponse.status).to.equal(500);
    expect(chaiHttpResponse.body.message).to.deep.equal('Failure test');
  });

  it('Successfully getBySellerId', async function () {
    sinon.stub(Sale, 'findAll').resolves(getAllSalesMock);

    chaiHttpResponse = await chai
      .request(app)
      .get('/sales/user/3');

    expect(chaiHttpResponse.status).to.equal(200);
    expect(chaiHttpResponse.body).to.deep.equal(getAllSalesMock);
  });
});