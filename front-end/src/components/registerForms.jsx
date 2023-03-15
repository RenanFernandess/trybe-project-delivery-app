import React, { useState, useEffect, useContext, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { postAPI } from '../utils';
import '../styles/style.register.css';
import 'typeface-roboto';
import '@fontsource/roboto';
import userContext from '../context';

export default function RegisterForms() {
  const { setUser, ...client } = useContext(userContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);
  const history = useHistory();

  const ROUTE = useMemo(() => 'common_register', []);

  useEffect(() => {
    const MIN_PASSWORD_CHARACTERS = 12;
    const EMAIL_REGEXP = /^[\w.]+@[a-zA-Z]+(\.[a-zA-Z]+)+$/gi;
    const MIN_NAME_CHAR = 6;
    setDisabled(!(
      (password.length >= MIN_PASSWORD_CHARACTERS)
      && (EMAIL_REGEXP.test(email))
      && (name.length >= MIN_NAME_CHAR)));
  }, [email, name, password]);

  useEffect(() => {
    if (client.name) history.push('/customer/products');
  }, [client, history]);

  const register = async () => {
    await postAPI(
      '/register',
      (data) => {
        setUser(data);
      },
      { name, email, password, role: 'customer' },
    );
  };

  return (
    <div className="container">
      <h1>Cadastro</h1>
      <form>
        <div className="input-with-label">
          <label htmlFor="name">
            Nome
            <input
              data-testid={ `${ROUTE}__input-name` }
              name="name"
              type="text"
              id="name"
              placeholder="Seu nome"
              value={ name }
              onChange={ ({ target: { value } }) => setName(value) }
              required
            />
          </label>
        </div>
        <div className="input-with-label">
          <label htmlFor="id">
            Email
            <input
              name="email"
              data-testid={ `${ROUTE}__input-email` }
              type="email"
              id="email"
              placeholder="seu-email@site.com.br"
              value={ email }
              onChange={ ({ target: { value } }) => setEmail(value) }
              required
            />
          </label>
        </div>
        <div className="input-with-label">
          <label htmlFor="password">
            Senha
            <input
              placeholder="**********"
              data-testid={ `${ROUTE}__input-password` }
              name="password"
              type="password"
              id="password"
              value={ password }
              onChange={ ({ target: { value } }) => setPassword(value) }
              required
            />
          </label>
        </div>
        <div>
          <button
            className="btn"
            type="button"
            data-testid={ `${ROUTE}__button-register` }
            disabled={ disabled }
            onClick={ register }
          >
            Cadastrar
          </button>
        </div>
      </form>
      {
        client.message === 'User already exists' && (
          <div className="message">
            <span data-testid={ `${ROUTE}__element-invalid_register` }>
              {client.message}
            </span>
          </div>
        )
      }
    </div>
  );
}
