import { screen, waitFor } from '@testing-library/react';
import renderPath from '../../utils/renderWithRouter';
import userEvent from '@testing-library/user-event';
import { CUSTOMER_MOCK, SELLER_MOCK } from '../mocks/User.mock';
import { awaySaleMock, saleMock } from '../mocks/Sale.mock';
import { sellersMock } from '../mocks/Sellers.mock';
// import patchAPI from '../../../utils/patchAPI';

// jest.mock('../../../utils/patchAPI');

describe('Testes de Orders', () => {
  describe('Testes da página /customer/orders', () => {
    beforeEach(() => {
      localStorage.setItem('user', JSON.stringify(CUSTOMER_MOCK));
    });
    afterEach(() => {
      jest.clearAllMocks();
      localStorage.clear();
      // patchAPI.mockClear();
    });

    it('verifica se é possível alterar o satatus do pedido se estiver "Em Trânsito"', async () => {
      jest.spyOn(global, 'fetch');
      global.fetch.mockResolvedValue({
        json: jest.fn()
          .mockResolvedValue(undefined)
          .mockResolvedValueOnce(awaySaleMock)
          .mockResolvedValueOnce(sellersMock[0])
      });
      // patchAPI.mockResolvedValueOnce(undefined);

      renderPath('/customer/orders/1');

      expect(await screen.findByTestId('customer_order_details__element-order-details-label-seller-name')).toBeInTheDocument();

      expect(screen.getByTestId('customer_order_details__element-order-details-label-seller-name')).toHaveTextContent('Fulana Pereira');
      expect(screen.getByRole('button', { name: /Marcar como Entregue/i })).toBeEnabled();
      expect(screen.getAllByRole('row')).toHaveLength(3);

      expect(screen.getByTestId('customer_order_details__element-order-details-label-delivery-status1')).toHaveTextContent('Em Trânsito');
      userEvent.click(screen.getByRole('button', { name: /Marcar como Entregue/i }));
      expect(screen.getByTestId('customer_order_details__element-order-details-label-delivery-status1')).toHaveTextContent('Entregue');
    });
  });

  describe('Testes da página /seller/orders', () => {
    beforeEach(() => {
      localStorage.setItem('user', JSON.stringify(SELLER_MOCK));
    });
    afterEach(() => {
      jest.clearAllMocks();
      localStorage.clear();
      // patchAPI.mockClear();
    });

    it('verifica se é possível alterar o satatus do pedido de "Pendente" para "Preparando/Em Trânsito"', async () => {
      jest.spyOn(global, 'fetch');
      global.fetch.mockResolvedValue({
        json: jest.fn()
          .mockResolvedValue(undefined)
          .mockResolvedValueOnce(saleMock)
          .mockResolvedValueOnce(sellersMock[0])
      });
      // patchAPI.mockResolvedValueOnce(undefined);
      renderPath('/seller/orders/1');

      expect(await screen.findByTestId('seller_order_details__element-order-details-label-order-id')).toBeInTheDocument();

      expect(screen.getByTestId('seller_order_details__element-order-details-label-order-id')).toHaveTextContent('0001');
      expect(screen.getByRole('button', { name: /Preparar Pedido/i })).toBeEnabled();
      expect(screen.getAllByRole('row')).toHaveLength(3);

      expect(screen.getByTestId('seller_order_details__element-order-details-label-delivery-status')).toHaveTextContent('Pendente');
      userEvent.click(screen.getByRole('button', { name: /Preparar Pedido/i }));
      expect(screen.getByTestId('seller_order_details__element-order-details-label-delivery-status')).toHaveTextContent('Preparando');
      userEvent.click(screen.getByRole('button', { name: /Saiu Para Entrega/i }));
      expect(screen.getByTestId('seller_order_details__element-order-details-label-delivery-status')).toHaveTextContent('Em Trânsito');
    });
  });
});