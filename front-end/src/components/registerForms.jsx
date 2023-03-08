import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { postAPI, localStorageHandling } from '../utils';
import './styles/style.register.css';

import 'typeface-roboto';
import '@fontsource/roboto';

export default function RegisterForms() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [client, setClient] = useState({ message: '' });
  const history = useHistory();

  const EMAIL_REGEXP = /^[\w.]+@[a-zA-Z]+(\.[a-zA-Z]+)+$/gi;
  const ROUTE = 'common_register';
  const passwordMinLength = 6;
  const nameMinLength = 12;

  const isAble = () => !(
    password.length >= passwordMinLength
      && (EMAIL_REGEXP.test(email))
       && (name.length >= nameMinLength));

  useEffect(() => {
    setDisabled(isAble());
  }, [name, email, password]);

  useEffect(() => {
    if (client.name === name) {
      history.push('/customer/products');
    }
  }, [client]);

  const register = async () => {
    await postAPI(
      '/register',
      (data) => setClient(data),
      { name, email, password, role: 'customer' },
    );
    localStorageHandling.setItem(data, USER_KEY);
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
      <div>
        {
          client.message === 'User already exists' && (
            <span data-testid={ `${ROUTE}__element-invalid_register` }>
              {client.message}
            </span>
          )
        }
      </div>
    </div>
  );
}
