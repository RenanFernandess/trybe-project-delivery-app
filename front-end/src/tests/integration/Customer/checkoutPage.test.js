import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderPath from '../../utils/renderWithRouter';
import { CUSTOMER_MOCK } from '../mocks/User.mock';
import { allProductsMock } from '../mocks/Products.mock';
import { cartMock } from '../mocks/Cart.mock';
import { sellersMock } from '../mocks/Sellers.mock';
import { saleMock } from '../mocks/Sale.mock';

describe('Pagina /customer/checkout', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
  });
  it('Verifica se renderizou corretamente', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(sellersMock).mockResolvedValueOnce(allProductsMock),
    });

    localStorage.setItem('user', JSON.stringify(CUSTOMER_MOCK));
    localStorage.setItem('cart', JSON.stringify(cartMock));
    const { history } = renderPath('/');
    await waitFor(() => expect(global.fetch).toHaveBeenCalled());

    expect(screen.getByRole('button', {name: /meu carrinho/i})).toBeEnabled();
    userEvent.click(screen.getByRole('button', {name: /meu carrinho/i}));
    expect(history.location.pathname).toBe('/customer/checkout');
    await waitFor(() => expect(global.fetch).toHaveBeenCalled());

    expect(screen.getByText('Finalizar Pedido')).toBeDefined();

    expect(screen.getAllByRole('row')).toHaveLength(3);
    expect(screen.getAllByRole('columnheader')).toHaveLength(6);

    const totalValue = screen.getByTestId('customer_checkout__element-order-total-price');
    expect(totalValue).toHaveTextContent('11,90');
    const removeBtns = screen.getAllByRole('button', { name: /remover/i});
    expect(removeBtns).toHaveLength(2);
    userEvent.click(removeBtns[0]);
    expect(screen.getAllByRole('button', { name: /remover/i})).toHaveLength(1);
    expect(totalValue).toHaveTextContent('7,50');
  });

  it('Verifica', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(saleMock).mockResolvedValueOnce(sellersMock),
    });

    localStorage.setItem('user', JSON.stringify(CUSTOMER_MOCK));
    localStorage.setItem('cart', JSON.stringify(cartMock));
    const { history } = renderPath('/customer/checkout');

    await waitFor(() => expect(global.fetch).toHaveBeenCalled());

    const sellerSelector = screen.getByRole('combobox');
    const addressInput = screen.getByRole('textbox');
    const numberInput = screen.getByRole('spinbutton');
    expect(sellerSelector).toBeDefined();
    
    userEvent.selectOptions(sellerSelector, 'Ciclano');
    userEvent.type(addressInput, 'Rua XXX');
    userEvent.type(numberInput, '750');

    userEvent.click(screen.getByRole('button', { name: /finalizar pedido/i}));

    await waitFor(() => expect(global.fetch).toHaveBeenCalled());

    expect(history.location.pathname).toBe('/customer/orders/1')
  });
});