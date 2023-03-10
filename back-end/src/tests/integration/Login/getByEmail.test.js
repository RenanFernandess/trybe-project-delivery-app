const { expect } = require('chai');
const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const { User } = require('../../../database/models');
const { userSeller, usersMock } = require('../../mocks/users.mock')
const app = require('../../../api/app');
const HttpException = require('../../../utils/HttpException');

chai.use(chaiHttp);

describe('Tests LoginController getByEmail function', function () {
  beforeEach(sinon.restore);

  it('Successfully getByEmail', async function () {
    sinon.stub(User, 'findOne').resolves([usersMock[1]]);

    chaiHttpResponse = await chai
      .request(app)
      .get('/login/email/fulana@deliveryapp.com');

    expect(chaiHttpResponse.status).to.equal(200);
    expect(chaiHttpResponse.body).to.deep.equal([userSeller]);
  });

  it('tests throwing error', async function () {
    sinon.stub(User, 'findOne').throws(new HttpException(404, 'Failure'));

    chaiHttpResponse = await chai
      .request(app)
      .get('/login/email/ciclana@deliveryapp.com');

    expect(chaiHttpResponse.status).to.equal(404);
    expect(chaiHttpResponse.body.message).to.deep.equal('Failure');
  });
});