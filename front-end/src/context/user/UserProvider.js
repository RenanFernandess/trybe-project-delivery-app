import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import userContext from './userContext';
import { saveUser } from '../../utils';

export default function UserProvider({ children }) {
  const [state, setState] = useState({
    name: '',
    role: '',
    email: '',
    token: '',
    message: null,
  });
  const { token, name, role, email } = state;

  const setUser = (user) => { setState((prevState) => ({ ...prevState, ...user })); };

  useMemo(() => { saveUser({ token, name, role, email }); }, [token, name, role, email]);

  const contextType = useMemo(() => ({ ...state, setUser }), [state]);

  return (
    <userContext.Provider value={ contextType }>
      { children }
    </userContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
