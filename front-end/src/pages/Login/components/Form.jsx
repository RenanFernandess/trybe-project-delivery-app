import React, { useContext, useState } from 'react';
import userContext from '../../../context';
import { postAPI } from '../../../utils';

const EMAIL_REGEXP = /^\w+@[a-zA-Z]+(\.[a-zA-Z]+)+$/gi;
const passwordMinLength = 6;

export default function Form() {
  const { setUser } = useContext(userContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const disabled = (
    (password.length >= passwordMinLength)
    && (EMAIL_REGEXP.test(email)));

  const login = () => {
    postAPI('/login', (user) => setUser(user), { email, password });
  };

  return (
    <form>
      <label htmlFor="login-input-email">
        Login
        <input
          type="email"
          name="email"
          value={ email }
          onChange={ ({ target: { value } }) => setEmail(value) }
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
          onChange={ ({ target: { value } }) => setPassword(value) }
          id="login-input-password"
          data-test-id="common_login__input-password"
        />
      </label>
      <button
        type="button"
        disabled={ disabled }
        onClick={ login }
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
  );
}
