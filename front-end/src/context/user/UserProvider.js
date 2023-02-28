import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import userContext from './userContext';
import { saveToken } from '../../utils';

export default function UserProvider({ children }) {
  const [state, setState] = useState({
    name: '',
    role: '',
    token: '',
    message: null,
  });
  const { token } = state;

  const setUser = (user) => { setState((prevState) => ({ ...prevState, ...user })); };

  useMemo(() => { saveToken(token); }, [token]);

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
