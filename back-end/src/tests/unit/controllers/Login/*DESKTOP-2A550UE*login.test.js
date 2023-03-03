// const sinonChai = require('sinon-chai');
// const chai = require('chai');
// const sinon = require('sinon');
// const LoginController = require('../../../../controllers/Login.controller');
// const LoginService = require('../../../../services/Login.service');
// const { successfullLoginMock } = require('../../mocks/login.mock');

// const { expect } = chai;
// chai.use(sinonChai);

// describe('Tests LoginController login function', function () {
//   beforeEach(sinon.restore);

//   const loginService = new LoginService();

//   it.skip('Successfully login user', async function () {
//     const res = {};
//     const req = {};
//     const next = {};
//     res.status = sinon.stub().returns(res);
//     res.json = sinon.stub().returns();

//     sinon.stub(loginService, 'login').resolves(successfullLoginMock);

//     const loginController = new LoginController(req, res, next);
//     await loginController.login();

//     expect(res.status).to.have.been.calledWith(200);

//     expect(res.json).to.have.been.calledWith(successfullLoginMock);
//   });
// });