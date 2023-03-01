const { expect } = require('chai');
const sinon = require('sinon');

const { Sale, SaleProduct } = require('../../../../database/models');
const SaleService = require('../../../../services/Sale.service');
const { getByIdMock, saleBodyMock,
  createdSaleMock, createdSaleProductMock } = require('../../../mocks/sales.mock')

describe('Tests SaleService getById function', function () {
  beforeEach(sinon.restore);
  it('Successfully create new Sale', async function () {
    sinon.stub(Sale, 'create').resolves(createdSaleMock);
    sinon.stub(SaleProduct, 'create').resolves(createdSaleProductMock);

    const saleService = new SaleService();
    sinon.stub(saleService, 'getById').resolves(getByIdMock);
    const result = await saleService.create(saleBodyMock);

    expect(result).to.deep.equal(getByIdMock);
  });

  it('Fails to create new Sale', async function () {
    sinon.stub(Sale, 'create').throws(new Error('ERROR'));

    const saleService = new SaleService();
    try {
      await saleService.create(saleBodyMock);
    } catch (error) {
      expect(error.message).to.equal('ERROR');
    }
  });
});