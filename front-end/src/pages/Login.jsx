import React, { useState } from 'react';

export default function Login() {
  const [login, setLogin] = useState({ email: '', password: '' });

  const handleChange = ({ target: { name, value } }) => {
    setLogin((prevState) => ({ ...prevState, [name]: value }));
  };

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
            value={ login.email }
            onChange={ handleChange }
            id="login-input-email"
            data-test-id="common_login__input-email"
          />
        </label>
        <label htmlFor="login-input-password">
          Senha
          <input
            type="password"
            name="password"
            value={ login.password }
            onChange={ handleChange }
            id="login-input-password"
            data-test-id="common_login__input-password"
          />
        </label>
        <button
          type="button"
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
