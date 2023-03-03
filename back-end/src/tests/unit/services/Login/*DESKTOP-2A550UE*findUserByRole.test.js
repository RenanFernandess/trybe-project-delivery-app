const { expect } = require('chai');
const sinon = require('sinon');
const md5 = require('md5');
const jwt = require('jsonwebtoken');

const { User } = require('../../../../database/models');
const LoginService = require('../../../../services/Login.service');
const { usersMock, userSeller } = require('../../../mocks/users.mock');

const MD5 = { md5 };

describe('Tests LoginService find by role function', function () {
  beforeEach(sinon.restore);
  it('getByRole successfully', async function () {
    sinon.stub(User, 'findAll').resolves([usersMock[1]]);

    const loginService = new LoginService();
    const result = await loginService.getByRole('seller');

    expect(result).to.deep.equal([userSeller]);
  });
});