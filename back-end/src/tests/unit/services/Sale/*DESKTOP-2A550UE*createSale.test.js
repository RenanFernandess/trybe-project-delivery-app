const { expect } = require('chai');
const sinon = require('sinon');

const { Sale } = require('../../../../database/models');
const SaleService = require('../../../../services/Sale.service');
const { findOneSaleMock, getByIdMock } = require('./mocks/sales.mock')

describe('Tests SaleService getById function', function () {
  beforeEach(sinon.restore);
  it('Successfully create new Sale', async function () {

  });
});