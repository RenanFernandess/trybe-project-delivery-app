import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import cartContext from './cartContext';

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const contextType = useMemo(() => ({ cart, setCart }), [cart]);

  return (
    <cartContext.Provider value={ contextType }>
      { children }
    </cartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
