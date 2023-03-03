const { expect } = require('chai');
const chai = require('chai');
const sinon = require('sinon');
const md5 = require('md5');
const chaiHttp = require('chai-http');
const jwt = require('jsonwebtoken');
const { User } = require('../../../database/models');
const { successfullLoginMock, mockFindOneReturn } = require('../../mocks/login.mock');
const app = require('../../../api/app');

chai.use(chaiHttp);
const MD5 = { md5 };

describe('Tests LoginController login function', function () {
  beforeEach(sinon.restore);

  it('Successfully login', async function () {
    sinon.stub(User, 'findOne').resolves(mockFindOneReturn);
    sinon.stub(MD5, 'md5').returns('a4c86edecc5aee06eff8fdeda69e0d04');
    sinon.stub(jwt, 'sign').returns(successfullLoginMock.token);

    chaiHttpResponse = await chai
      .request(app)
      .post('/login').send({
        email: 'adm@deliveryapp.com',
        password: '--adm2@21!!--',
      });

    expect(chaiHttpResponse.status).to.equal(200);
    expect(chaiHttpResponse.body).to.deep.equal(successfullLoginMock);
  });

  it('Fails login', async function () {
    sinon.stub(User, 'findOne').resolves();

    chaiHttpResponse = await chai
      .request(app)
      .post('/login').send({
        email: 'ERROR@deliveryapp.com',
        password: '--adm2@21!!--',
      });

    expect(chaiHttpResponse.status).to.equal(404);
    expect(chaiHttpResponse.body.message).to.deep.equal('Not Found');
  });
});