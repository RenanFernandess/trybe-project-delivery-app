import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { EMAIL_REGEXP, MIN_PASSWORD_CHARACTERS } from '../../../constants';
import userContext from '../../../context';
import { postAPI } from '../../../utils';

export default function Form() {
  const { setUser } = useContext(userContext);
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    setDisabled(!(
      (password.length >= MIN_PASSWORD_CHARACTERS)
      && (EMAIL_REGEXP.test(email))));
  }, [email, password]);

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
          data-testid="common_login__input-email"
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
          data-testid="common_login__input-password"
        />
      </label>
      <button
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
      >
        Ainda não tenho conta
      </button>
    </form>
  );
}
