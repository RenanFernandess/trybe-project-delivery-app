const { expect } = require('chai');
const sinon = require('sinon');
const md5 = require('md5');
const jwt = require('jsonwebtoken');

const { User } = require('../../../../database/models');
const LoginService = require('../../../../services/Login.service');
const { mockFindOneReturn, successfullLoginMock, userMock, createUserMock } = require('../../../mocks/login.mock');

const MD5 = { md5 };

describe('Tests LoginService create function', function () {
  beforeEach(sinon.restore);
  it('Successfully create user', async function () {
    sinon.stub(User, 'findOne').resolves();
    sinon.stub(User, 'create').resolves(mockFindOneReturn);
    sinon.stub(MD5, 'md5').returns('a4c86edecc5aee06eff8fdeda69e0d04');
    sinon.stub(jwt, 'sign').returns(successfullLoginMock.token);

    const loginService = new LoginService();
    const result = await loginService.create(createUserMock);

    expect(result).to.deep.equal(successfullLoginMock);
  });

  it('Fails because user already exists', async function () {
    sinon.stub(User, 'findOne').resolves(mockFindOneReturn);

    const loginService = new LoginService();
    try {
      await loginService.create(createUserMock);
    } catch (error) {
      expect(error.message).to.equal('User already exists');
    }
  });
});