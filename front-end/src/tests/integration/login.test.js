import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';
import renderPath from '../utils/renderWithRouter';
import { ADMIN_MOCK, SELLER_MOCK, CUSTOMER_MOCK } from './mocks/User.mock'
import { allProductsMock } from './mocks/Products.mock';

describe('Testa a tela de Login', () => {
  it('Verifica se possui um formulario de login', () => {
    renderPath('/');

    const email = screen.getByRole('textbox', { name: /login/i });
    const password = screen.getByLabelText(/senha/i);
    const login = screen.getByRole('button', { name: /login/i });
    const register = screen.getByRole('button', { name: /ainda não tenho conta/i });

    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(login).toBeInTheDocument();
    expect(register).toBeInTheDocument();
  });

  describe(
    'Testa se o botão de LOGIN ativa somente com email e senha no formato válido:',
    () => {
      beforeEach(() => {
        renderPath('/');
      });

      it('O botão deve inicia desativado', () => {
        const login = screen.getByRole('button', { name: /login/i });
        expect(login).toBeDisabled();
      });

      it(
        'O botão deve estar desativado com um email no formato incorreto e senha válida.',
        () => {
          const email = screen.getByRole('textbox', { name: /login/i });
          const password = screen.getByLabelText(/senha/i);
          const login = screen.getByRole('button', { name: /login/i });

          userEvent.type(email, 'test@gmail');
          userEvent.type(password, '123456');

          expect(login).toBeDisabled();
        },
      );

      it(
        `O botão deve estar desativado com um email no formato válido 
        e senha com menos de 6 caracteres.`,
        () => {
          const email = screen.getByRole('textbox', { name: /login/i });
          const password = screen.getByLabelText(/senha/i);
          const login = screen.getByRole('button', { name: /login/i });

          userEvent.type(email, 'zebirita@email.com');
          userEvent.type(password, '12345');

          expect(login).toBeDisabled();
        },
      );

      it(
        'O botão deve habilitar com um email e senha no formato válido.',
        () => {
          const email = screen.getByRole('textbox', { name: /login/i });
          const password = screen.getByLabelText(/senha/i);
          const login = screen.getByRole('button', { name: /login/i });

          userEvent.type(email, 'ze.birita@email.com');
          userEvent.type(password, '123456');

          expect(login).not.toBeDisabled();
        },
      );
    },
  );

  it(
    'Verifica se o botão "ainda não tenho conta" redireciona para tela de registro.',
    () => {
      const { history } = renderPath('/');
      const register = screen.getByRole('button', { name: /ainda não tenho conta/i });

      userEvent.click(register);
      const { location: { pathname } } = history;

      expect(pathname).toBe('/register');
    },
  );
});

describe('Testes de login', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
  });
  it('Logar com usuário { role: "customer" }', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(allProductsMock).mockResolvedValueOnce(CUSTOMER_MOCK),
    });

    const { history } = renderPath('/');

    const email = screen.getByRole('textbox', { name: /login/i });
    const password = screen.getByLabelText(/senha/i);
    const login = screen.getByRole('button', { name: /login/i });

    userEvent.type(email, CUSTOMER_MOCK.email);
    userEvent.type(password, '$#zebirita#$');

    userEvent.click(login);

    await waitFor(() => expect(global.fetch).toHaveBeenCalled());

    const { location: { pathname } } = history;

    expect(pathname).toBe('/customer/products');
  });

  it('Logar com usuário { role: "seller" }', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue([]).mockResolvedValueOnce(SELLER_MOCK),
    });

    const { history } = renderPath('/');

    const email = screen.getByRole('textbox', { name: /login/i });
    const password = screen.getByLabelText(/senha/i);
    const login = screen.getByRole('button', { name: /login/i });

    userEvent.type(email, SELLER_MOCK.email);
    userEvent.type(password, 'fulana@123');

    userEvent.click(login);

    await waitFor(() => expect(global.fetch).toHaveBeenCalled());

    const { location: { pathname } } = history;

    expect(pathname).toBe('/seller/orders');
  });

  it('Logar com usuário { role: "administrator" }', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue([]).mockResolvedValueOnce(ADMIN_MOCK),
    });

    const { history } = renderPath('/');

    const email = screen.getByRole('textbox', { name: /login/i });
    const password = screen.getByLabelText(/senha/i);
    const login = screen.getByRole('button', { name: /login/i });

    userEvent.type(email, ADMIN_MOCK.email);
    userEvent.type(password, '--adm2@21!!--');

    userEvent.click(login);

    await waitFor(() => expect(global.fetch).toHaveBeenCalled());

    const { location: { pathname } } = history;

    expect(pathname).toBe('/admin/manage');
  });
});