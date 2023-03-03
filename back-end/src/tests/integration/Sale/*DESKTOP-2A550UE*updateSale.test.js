const { expect } = require('chai');
const chai = require('chai');
const sinon = require('sinon');
const md5 = require('md5');
const chaiHttp = require('chai-http');
const jwt = require('jsonwebtoken');
const { Sale } = require('../../../database/models');
const { getAllSalesMock, getByIdMock, findOneSaleMock } = require('../../mocks/sales.mock');
const app = require('../../../api/app');

chai.use(chaiHttp);

describe('Tests LoginController getSales function', function () {
  beforeEach(sinon.restore);

  it('Successfully Update sales', async function () {
    sinon.stub(Sale, 'update').resolves([1]);
    sinon.stub(Sale, 'findByPk').resolves({ ...getByIdMock, status: 'entregue' });

    chaiHttpResponse = await chai
      .request(app)
      .patch('/sales/status/1').send({ status: "entregue" });

    expect(chaiHttpResponse.status).to.equal(200);
    expect(chaiHttpResponse.body).to.deep.equal({ ...getByIdMock, status: 'entregue' });
  });

  it('Fails Update sales', async function () {
    sinon.stub(Sale, 'update').resolves([0]);

    chaiHttpResponse = await chai
      .request(app)
      .patch('/sales/status/1').send({ status: "entregue" });

    expect(chaiHttpResponse.status).to.equal(404);
    expect(chaiHttpResponse.body.message).to.deep.equal('Not Found');
  });
});