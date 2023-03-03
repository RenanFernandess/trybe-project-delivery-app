const { expect } = require('chai');
const chai = require('chai');
const sinon = require('sinon');
const md5 = require('md5');
const chaiHttp = require('chai-http');
const jwt = require('jsonwebtoken');
const { User } = require('../../../database/models');
const { userSeller, usersMock } = require('../../mocks/users.mock')
const app = require('../../../api/app');
const HttpException = require('../../../utils/HttpException');

chai.use(chaiHttp);
const MD5 = { md5 };

describe('Tests LoginController getByRole function', function () {
  beforeEach(sinon.restore);

  it('Successfully getByRole', async function () {
    sinon.stub(User, 'findAll').resolves([usersMock[1]]);

    chaiHttpResponse = await chai
      .request(app)
      .get('/login/role/seller');

    expect(chaiHttpResponse.status).to.equal(200);
    expect(chaiHttpResponse.body).to.deep.equal([userSeller]);
  });

  it('tests throwing error', async function () {
    sinon.stub(User, 'findAll').throws(new HttpException(404, 'Failure'));

    chaiHttpResponse = await chai
      .request(app)
      .get('/login/role/none');

    expect(chaiHttpResponse.status).to.equal(404);
    expect(chaiHttpResponse.body.message).to.deep.equal('Failure');
  });
});