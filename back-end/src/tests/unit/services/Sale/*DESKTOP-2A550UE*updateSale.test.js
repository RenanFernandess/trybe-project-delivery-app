const { expect } = require('chai');
const sinon = require('sinon');

const { Sale } = require('../../../../database/models');
const SaleService = require('../../../../services/Sale.service');
const { findOneSaleMock, getByIdMock, createdSaleMock } = require('../../../mocks/sales.mock')

describe('Tests SaleService update function', function () {
  beforeEach(sinon.restore);
  it('Successfully Updates status', async function () {
    sinon.stub(Sale, 'update').resolves([1]);

    const saleService = new SaleService();
    sinon.stub(saleService, 'getById').resolves(createdSaleMock);
    const result = await saleService.update(1, { status: 'Entregue' });

    expect(result).to.deep.equal({...createdSaleMock });
  });

  it('Fails to Update status', async function () {
    sinon.stub(Sale, 'update').resolves([0]);

    const saleService = new SaleService();
    try {
      await saleService.update(1, { status: 'Entregue' });
    } catch (error) {
      expect(error.message).to.equal('Not Found');
    }
  });
});