import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { postWithTokenAPI } from '../../utils';

const TESTID = 'admin_manage__';

const ROLES_DB = ['admin', 'seller', 'customer'];
const ROLES_TO_SHOW = ['Administrador', 'P. Vendedora', 'Cliente'];

export default function AdminForm({ setUsers, token }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState(ROLES_DB[2]);
  const [disabled, setDisabled] = useState(true);

  const EMAIL_REGEXP = /^[\w.]+@[a-zA-Z]+(\.[a-zA-Z]+)+$/gi;
  const passwordMinLength = 6;
  const nameMinLength = 12;

  const isAble = () => !(
    password.length >= passwordMinLength
      && (EMAIL_REGEXP.test(email))
       && (name.length >= nameMinLength));

  useEffect(() => {
    setDisabled(isAble());
  }, [name, email, password]);

  const handleChange = (event, setter) => {
    event.preventDefault(event);
    const { target: { value } } = event;
    setter(value);
  };

  const resetUsers = (user) => {
    setUsers((prev) => [...prev, user]);
  };

  const handleSubmit = () => {
    postWithTokenAPI(
      '/admin/register',
      resetUsers,
      { name, email, password, role },
      token,
    );
  };

  return (
    <form
      onSubmit={ handleSubmit }
    >
      <input
        placeholder="Nome"
        type="text"
        data-testid={ `${TESTID}input-name` }
        name="name"
        value={ name }
        onChange={ (e) => handleChange(e, setName) }
      />
      <input
        placeholder="Email"
        type="text"
        data-testid={ `${TESTID}input-email` }
        name="email"
        value={ email }
        onChange={ (e) => handleChange(e, setEmail) }
      />
      <input
        placeholder="Senha"
        type="text"
        data-testid={ `${TESTID}input-password` }
        name="password"
        value={ password }
        onChange={ (e) => handleChange(e, setPassword) }
      />
      <select
        data-testid={ `${TESTID}select-role` }
        name="role"
        id="roles"
        value={ role }
        onChange={ (e) => handleChange(e, setRole) }
      >
        {
          ROLES_DB.map((r, index) => (
            <option key={ r } value={ r }>{ROLES_TO_SHOW[index]}</option>
          ))
        }
      </select>

      <button
        type="submit"
        disabled={ disabled }
        data-testid={ `${TESTID}button-register` }
      >
        Cadastrar

      </button>
    </form>
  );
}

AdminForm.propTypes = {
  setUsers: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
};
