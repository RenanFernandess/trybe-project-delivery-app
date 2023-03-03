const { expect } = require('chai');
const sinon = require('sinon');

const { Sale } = require('../../../../database/models');
const SaleService = require('../../../../services/Sale.service');
const { findOneSaleMock, getByIdMock } = require('../../../mocks/sales.mock');

describe('Tests SaleService getById function', function () {
  beforeEach(sinon.restore);
  it('Successfully find Sale By Id', async function () {
    sinon.stub(Sale, 'findOne').resolves(findOneSaleMock);

    const saleService = new SaleService();
    const result = await saleService.getById(1);

    expect(result).to.deep.equal(getByIdMock);
  });
});