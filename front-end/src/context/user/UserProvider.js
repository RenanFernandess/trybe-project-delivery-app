import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import userContext from './userContext';

export default function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: '',
    role: '',
    token: '',
    message: null,
  });

  const contextType = useMemo(() => ({ user, setUser }), [user]);

  return (
    <userContext.Provider value={ contextType }>
      { children }
    </userContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
