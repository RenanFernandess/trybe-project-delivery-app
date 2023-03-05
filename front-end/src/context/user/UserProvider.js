import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import userContext from './userContext';
import { saveUser } from '../../utils';

const initialState = {
  id: 0,
  name: '',
  role: '',
  email: '',
  token: '',
  message: null,
};
export default function UserProvider({ children }) {
  const [state, setState] = useState(initialState);
  const { token, name, role, email } = state;

  const setUser = (user) => { setState((prevState) => ({ ...prevState, ...user })); };

  const resetUser = async () => setState(initialState);

  useMemo(() => {
    if (token) saveUser({ token, name, role, email });
  }, [token, name, role, email]);

  const contextType = useMemo(() => ({ ...state, setUser, resetUser }), [state]);

  return (
    <userContext.Provider value={ contextType }>
      { children }
    </userContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
