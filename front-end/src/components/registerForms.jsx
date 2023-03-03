import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { postAPI, localStorageHandling } from '../utils';
// import id, { USER_KEY } from '../constants/index';

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
    // CORRIGIR
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

  console.log(client);
  return (
    <div>
      <p>Cadastro</p>
      <form>
        <div>
          <p>Nome</p>
          <input
            data-testid={ `${ROUTE}__input-name` }
            name="name"
            type="text"
            placeholder="Seu nome"
            value={ name }
            onChange={ ({ target: { value } }) => setName(value) }
          />
        </div>
        <div>
          <p>Email</p>
          <input
            name="email"
            data-testid={ `${ROUTE}__input-email` }
            type="email"
            placeholder="seu-email@site.com.br"
            value={ email }
            onChange={ ({ target: { value } }) => setEmail(value) }
          />
        </div>
        <div>
          <p>senha</p>
          <input
            data-testid={ `${ROUTE}__input-password` }
            name="password"
            type="password"
            value={ password }
            onChange={ ({ target: { value } }) => setPassword(value) }
          />
        </div>
        <div>
          <button
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
        {/* validação - elemento oculto */}

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
