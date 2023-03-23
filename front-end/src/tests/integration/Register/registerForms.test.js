import { screen } from '@testing-library/react';
import renderPath from '../../utils/renderWithRouter';
import userEvent from '@testing-library/user-event';
import { CUSTOMER_MOCK } from '../mocks/User.mock';

describe('Testa a tela de Registro de usuário', () => {
  const INPUT_NAME = 'common_register__input-name';
  const INPUT_PASSWORD = 'common_register__input-password';
  const INPUT_EMAIL = 'common_register__input-email';
  afterEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
  });

  it('should exist registerForms form and their components', () => {
    renderPath('/register');

    expect(screen.getByTestId(INPUT_EMAIL)).toBeInTheDocument();
    expect(screen.getByTestId(INPUT_PASSWORD)).toBeInTheDocument();
    expect(screen.getByTestId(INPUT_NAME)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Cadastrar/i })).toBeInTheDocument();
  });

  it('should register a new user with valid data', () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(CUSTOMER_MOCK),
    });
    renderPath('/register');

    const name = screen.getByTestId(INPUT_NAME);
    const email = screen.getByTestId(INPUT_EMAIL);
    const passwotd = screen.getByTestId(INPUT_PASSWORD);

    userEvent.type(name, 'nomne para teste');
    userEvent.type(email, 'teste@email.com');
    userEvent.type(passwotd, 'minhaSenha');
    userEvent.click(screen.getByRole('button', { name: /cadastrar/i }))
  });
});