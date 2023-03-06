import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import userContext from './userContext';
import { localStorageHandling, saveUser } from '../../utils';
import { USER_KEY } from '../../constants';

const initialState = {
  id: '',
  name: '',
  role: '',
  email: '',
  token: '',
  message: null,
};
export default function UserProvider({ children }) {
  const [state, setState] = useState(localStorageHandling.getItem(USER_KEY)
  || initialState);
  const { token, name, role, email, id } = state;

  const setUser = (user) => { setState((prevState) => ({ ...prevState, ...user })); };

  const resetUser = async () => setState(initialState);

  useMemo(() => {
    if (token) saveUser({ token, name, role, email, id });
  }, [token, name, role, email, id]);

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
