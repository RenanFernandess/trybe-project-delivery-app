const { expect } = require('chai');
const sinon = require('sinon');
const md5 = require('md5');
const jwt = require('jsonwebtoken');

const { User } = require('../../../../database/models');
const LoginService = require('../../../../services/Login.service');
const { mockFindOneReturn, successfullLoginMock, userMock } = require('../../../mocks/login.mock');

const MD5 = { md5 };

describe('Tests LoginService login function', function () {
  beforeEach(sinon.restore);
  it('Login successful', async function () {
    sinon.stub(User, 'findOne').resolves(mockFindOneReturn);
    sinon.stub(MD5, 'md5').returns('a4c86edecc5aee06eff8fdeda69e0d04');
    sinon.stub(jwt, 'sign').returns(successfullLoginMock.token);

    const loginService = new LoginService();
    const result = await loginService.login(userMock);

    expect(result).to.deep.equal(successfullLoginMock);
  });

  it('Login fails to find user by email', async function () {
    sinon.stub(User, 'findOne').resolves();


    const loginService = new LoginService();
    try {
      await loginService.login(userMock);
    } catch (error) {
      expect(error.message).to.equal('Not Found');
    }
  });

  it('Login fails comparing password with hash from DB', async function () {
    sinon.stub(User, 'findOne').resolves(mockFindOneReturn);
    sinon.stub(MD5, 'md5').returns('');


    const loginService = new LoginService();
    try {
      await loginService.login(userMock);
    } catch (error) {
      expect(error.message).to.equal('email or password incorrect');
    }
  });
});