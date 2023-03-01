import React, { useState, useEffect } from 'react';

const EMAIL_REGEXP = /^\w+@[a-zA-Z]+(\.[a-zA-Z]+)+$/gi;
const ROUTE = 'customer_products';
const passwordMinLength = 6;
const nameMinLength = 12;

export default function RegisterForms() {
  const [clientName, setClientName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);

  const isAble = () => !(
    password.length >= passwordMinLength
      && (EMAIL_REGEXP.test(email))
       && (clientName.length >= nameMinLength));

  useEffect(() => {
    setDisabled(isAble());
  }, [clientName, email, password]);
  return (
    <div>
      <p>Cadastro</p>
      <form>
        <div>
          <p>Nome</p>
          <input
            data-testid={ `${ROUTE}__input-name` }
            name="clientName"
            type="text"
            placeholder="Seu nome"
            value={ clientName }
            onChange={ ({ target: { value } }) => setClientName(value) }
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
            type="submit"
            data-testid={ `${ROUTE}__button-register` }
            disabled={ disabled }
          >
            Cadastrar
          </button>
        </div>
      </form>
      <div>
        {/* validação - elemento oculto */}
        <span data-testid={ `${ROUTE}__element-invalid_register` }>
          mensagem de erro
        </span>
      </div>
    </div>
  );
}
