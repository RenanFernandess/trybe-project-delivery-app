import React, { useState } from 'react';

const EMAIL_REGEXP = /^\w+@[a-zA-Z]+(\.[a-zA-Z]+)+$/gi;
const passwordMinLength = 6;

export default function Login() {
  const [login, setLogin] = useState({ email: '', password: '', disabled: true });
  const loginChange = ({ target: { name, value } }) => {
    setLogin((prevState) => {
      const { email, password } = { ...prevState, [name]: value };
      return {
        email,
        password,
        disabled: !(
          (password.length >= passwordMinLength)
          && (EMAIL_REGEXP.test(email))
        ) };
    });
  };

  const { email, password, disabled } = login;

  return (
    <div>
      <div>
        <img src="" alt="Logtipo" />
        <h2>Delivery</h2>
      </div>
      <form>
        <label htmlFor="login-input-email">
          Login
          <input
            type="email"
            name="email"
            value={ email }
            onChange={ loginChange }
            id="login-input-email"
            data-test-id="common_login__input-email"
          />
        </label>
        <label htmlFor="login-input-password">
          Senha
          <input
            type="password"
            name="password"
            value={ password }
            onChange={ loginChange }
            id="login-input-password"
            data-test-id="common_login__input-password"
          />
        </label>
        <button
          type="button"
          disabled={ disabled }
          data-test-id="common_login__button-login"
        >
          LOGIN
        </button>
        <button
          type="button"
          data-test-id="common_login__button-register"
        >
          Ainda não tenho conta
        </button>
      </form>
      <p>error</p>
    </div>
  );
}
