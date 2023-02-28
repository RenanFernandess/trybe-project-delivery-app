import React, { useState } from 'react';

export default function RegisterForms() {
  const ROUTE = 'customer_products';
  const passwordMinLength = 6;
  const nameMinLength = 12;
  const EMAIL_REGEXP = /^\w+@[a-zA-Z]+(\.[a-zA-Z]+)+$/gi;

  const [client, setClient] = useState(
    { clientName: '', email: '', password: '' },
  );
  const saveInfo = ({ target: { name, value } }) => {
    setClient((prevState) => {
      const { clientName, email, password } = { ...prevState, [name]: value };
      return {
        clientName,
        email,
        password,
        disabled: !(
          (password.length >= passwordMinLength)
          && (EMAIL_REGEXP.test(email)
          && clientName.length >= nameMinLength)
        ) };
    });
  };
  const { clientName, email, password } = client;

  const disabled = !(
    (password.length >= passwordMinLength)
          && (EMAIL_REGEXP.test(email)
          && clientName.length >= nameMinLength));

  console.log(client);

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
            onChange={ saveInfo }
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
            onChange={ saveInfo }
          />
        </div>
        <div>
          <p>senha</p>
          <input
            data-testid={ `${ROUTE}__input-password` }
            name="password"
            type="password"
            value={ password }
            onChange={ saveInfo }
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
