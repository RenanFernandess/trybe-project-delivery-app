import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderPath from '../../utils/renderWithRouter';
import { CUSTOMER_MOCK } from '../mocks/User.mock';
import { allProductsMock } from '../mocks/Products.mock';

describe('Pagina /customer/products', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
  });
  it('Verifica se tela carregou com todos elementos', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(allProductsMock),
    });
    localStorage.setItem('user', JSON.stringify(CUSTOMER_MOCK));
    const { history } = renderPath('/');
    await waitFor(() => expect(global.fetch).toHaveBeenCalled());
    expect(history.location.pathname).toBe('/customer/products');

    expect(screen.getByText(/cliente zé birita/i)).toBeDefined();
    expect(screen.getByText(/meus pedidos/i)).toBeDefined();
    expect(screen.getByText(/produtos/i)).toBeDefined();
    expect(screen.getByRole('button', { name: 'Sair' })).toBeDefined();

    const prices = screen.getAllByTestId(/customer_products__element-card-price/i);
    expect(prices).toHaveLength(11);

    const texts = screen.getAllByTestId(/customer_products__element-card-title/i);
    expect(texts).toHaveLength(11);

    const plusBtns = screen.getAllByTestId(/customer_products__button-card-add-item/i);
    expect(plusBtns).toHaveLength(11);

    const minusBtns = screen.getAllByTestId(/customer_products__button-card-rm-item/i);
    expect(minusBtns).toHaveLength(11);

    const inputs = screen.getAllByTestId(/customer_products__input-card-quantity/i);
    expect(inputs).toHaveLength(11);
    inputs.forEach((input) => {
      expect(input).toHaveValue('0');
    })

    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(11);

    expect(screen.getByRole('button', {name: /meu carrinho/i})).toBeDisabled();
    expect(screen.getByTestId(/customer_products__checkout-bottom-value/i)).toHaveTextContent('0,00');
  });

  it('Adiciona produtos ao carrinho', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(allProductsMock),
    });
        
    localStorage.setItem('user', JSON.stringify(CUSTOMER_MOCK));
    const { history } = renderPath('/');
    await waitFor(() => expect(global.fetch).toHaveBeenCalled());

    expect(screen.getByRole('button', {name: /meu carrinho/i})).toBeDisabled();

    const plusBtns = screen.getAllByTestId(/customer_products__button-card-add-item/i);
    userEvent.click(plusBtns[0]);
    userEvent.click(plusBtns[0]);
    expect(screen.getByRole('button', {name: /meu carrinho/i})).toBeEnabled();
    
    expect(JSON.parse(localStorage.getItem('cart'))).toEqual([{
      "id": 1,
      "name": "Skol Lata 250ml",
      "price": "2.20",
      "quantity": 2
    }]);
    const minusBtns = screen.getAllByTestId(/customer_products__button-card-rm-item/i);
    userEvent.click(minusBtns[0]);
    expect(JSON.parse(localStorage.getItem('cart'))).toEqual([{
      "id": 1,
      "name": "Skol Lata 250ml",
      "price": "2.20",
      "quantity": 1
    }]);
    userEvent.click(minusBtns[0]);
    expect(JSON.parse(localStorage.getItem('cart'))).toEqual([]);
    expect(screen.getByRole('button', {name: /meu carrinho/i})).toBeDisabled();

    userEvent.click(plusBtns[0]);
    userEvent.click(plusBtns[0]);
    userEvent.click(screen.getByRole('button', {name: /meu carrinho/i}));

    await waitFor(() => expect(global.fetch).toHaveBeenCalled());

    expect(history.location.pathname).toBe('/customer/checkout');
  });
});

// describe('', () => {
//   beforeEach(() => {
//     jest.clearAllMocks();
//     localStorage.clear();
//   });
//   it('', async () => {
//     jest.spyOn(global, 'fetch');
//     global.fetch.mockResolvedValue({
//       json: jest.fn().mockResolvedValue(),
//     });

//     const { history } = renderPath('/');

//   });
// });