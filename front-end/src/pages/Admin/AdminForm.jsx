import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { postAPI } from '../../utils';

const TESTID = 'admin_manage__';

const ROLES = ['admin', 'seller', 'customer'];

export default function AdminForm({ setUsers }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleChange = (value, setter) => {
    setter(value);
  };

  const resetUsers = (user) => {
    setUsers((prev) => [...prev, user]);
  };

  const handleSubmit = () => {
    postAPI('/register', resetUsers, { name, email, password, role });
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
        onChange={ ({ target: { value } }) => handleChange(value, setName) }
      />
      <input
        placeholder="Email"
        type="text"
        data-testid={ `${TESTID}input-email` }
        name="email"
        value={ email }
        onChange={ ({ target: { value } }) => handleChange(value, setEmail) }
      />
      <input
        placeholder="Senha"
        type="text"
        data-testid={ `${TESTID}input-password` }
        name="password"
        value={ password }
        onChange={ ({ target: { value } }) => handleChange(value, setPassword) }
      />
      <select
        data-testid={ `${TESTID}select-role` }
        name="role"
        id="roles"
        value={ role }
        onChange={ ({ target: { value } }) => handleChange(value, setRole) }
      >
        {
          ROLES.map((r) => (
            <option key={ r } value={ r }>{r}</option>
          ))
        }
      </select>

      <button
        type="submit"
        data-testid={ `${TESTID}button-register` }
      >
        Cadastrar

      </button>
    </form>
  );
}

AdminForm.propTypes = {
  setUsers: PropTypes.func.isRequired,
};
