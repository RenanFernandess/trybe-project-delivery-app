import { screen, waitFor } from '@testing-library/react';
import renderPath from '../../utils/renderWithRouter';
import { sellersMock } from '../mocks/Sellers.mock';
import { ADMIN_MOCK, NEW_USER } from '../mocks/User.mock';
import userEvent from '@testing-library/user-event';

describe('Testes da página /admin/manage', () => {
  beforeEach(() => {
    localStorage.setItem('user', JSON.stringify(ADMIN_MOCK));
  })
  afterEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
  });

  it('verifica se renderizou a página correta', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn()
        .mockResolvedValue(sellersMock),
    });
    const { history } = renderPath('/admin/manage');
    // await waitFor(() => expect(global.fetch).toHaveBeenCalled());

    await waitFor(() => expect(screen.getByTestId('customer_products__element-navbar-user-full-name')).toBeInTheDocument());
    expect(screen.getByTestId('customer_products__element-navbar-user-full-name')).toHaveTextContent('Delivery App Admin');
    expect(screen.getByRole('button', { name: /Cadastrar/i })).toBeDisabled();
    expect(screen.getAllByRole('row')).toHaveLength(3);
  });

  it('verifica se insere novo usuário se informados valores corretos', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn()
        .mockResolvedValue(NEW_USER)
        .mockResolvedValueOnce(sellersMock),
    });

    const { history } = renderPath('/admin/manage');

    await waitFor(() => expect(screen.getByTestId('admin_manage__input-name')).toBeInTheDocument());
    expect(screen.getAllByRole('row')).toHaveLength(3);

    userEvent.type(screen.getByTestId('admin_manage__input-name'), NEW_USER.name);
    userEvent.type(screen.getByTestId('admin_manage__input-email'), NEW_USER.email);
    userEvent.type(screen.getByTestId('admin_manage__input-password'), 'senhaDifícil');
    userEvent.selectOptions(screen.getByTestId('admin_manage__select-role'), NEW_USER.role);
    expect(screen.getByRole('button', { name: /Cadastrar/i })).toBeEnabled();
    userEvent.click(screen.getByRole('button', { name: /cadastrar/i }));
    await waitFor(() => expect(global.fetch).toHaveBeenCalled());
    expect(screen.getAllByRole('row')).toHaveLength(4);
  });

  it('verifica se é possível excluir um usuário', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn()
        .mockResolvedValue([sellersMock[1]])
        .mockResolvedValueOnce(sellersMock),
    });
    const { history } = renderPath('/admin/manage');

    expect(await screen.findByTestId('admin_manage__element-user-table-remove-0')).toBeInTheDocument();
    expect(screen.getAllByRole('row')).toHaveLength(3);

    userEvent.click(screen.getByTestId('admin_manage__element-user-table-remove-0'));
    await waitFor(() => expect(global.fetch).toHaveBeenCalled());
    expect(screen.getAllByRole('row')).toHaveLength(2);
  });
});