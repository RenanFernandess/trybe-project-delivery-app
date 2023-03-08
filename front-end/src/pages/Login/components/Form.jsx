import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import userContext from '../../../context';
import { postAPI } from '../../../utils';

import '../../../styles/style.login.css';

export default function Form() {
  const { setUser } = useContext(userContext);
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);

  const MIN_PASSWORD = 6;

  const EMAILREGEXP = /^[\w.]+@[a-zA-Z]+(\.[a-zA-Z]+)+$/gi;

  useEffect(() => {
    setDisabled(!(
      (password.length >= MIN_PASSWORD)
      && (EMAILREGEXP.test(email))));
  }, [email, password]);

  const login = () => {
    postAPI('/login', (user) => setUser(user), { email, password });
  };

  return (
    <form>
      <div className="input-with-label">
        <label htmlFor="login-input-email">
          Login
          <input
            type="email"
            name="email"
            value={ email }
            placeholder="email@trybeer.com.br"
            onChange={ ({ target: { value } }) => setEmail(value) }
            id="login-input-email"
            data-testid="common_login__input-email"
          />
        </label>
      </div>
      <div className="input-with-label">
        <label htmlFor="login-input-password">
          Senha
          <input
            type="password"
            name="password"
            placeholder="**********"
            value={ password }
            onChange={ ({ target: { value } }) => setPassword(value) }
            id="login-input-password"
            data-testid="common_login__input-password"
          />
        </label>
      </div>
      <div className="login-buttons">
        <button
          className="login-btn"
          type="button"
          disabled={ disabled }
          onClick={ login }
          data-testid="common_login__button-login"
        >
          LOGIN
        </button>
        <button
          type="button"
          onClick={ () => history.push('/register') }
          data-testid="common_login__button-register"
          className="register-btn"
        >
          Ainda não tenho conta
        </button>
      </div>
    </form>
  );
}
