import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import App from '../../App';
import renderWithRouter from '../utils/renderWithRouter';

describe('Testa a tela de Login', () => {
  it('Verifica se possui um formulario de login', () => {
    renderWithRouter(<App />);

    const email = screen.getByRole('textbox', { name: /login/i });
    const password = screen.getByLabelText(/senha/i);
    const login = screen.getByRole('button', { name: /login/i });
    const register = screen.getByRole('button', { name: /ainda não tenho conta/i });

    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(login).toBeInTheDocument();
    expect(register).toBeInTheDocument();
  });
});
