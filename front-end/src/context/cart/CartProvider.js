import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import cartContext from './cartContext';

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const contextType = useMemo(() => ({
    cart,
    setCart,
    totalPrice: (cart
      .reduce((sum, { quantity, price }) => sum + (price * quantity), 0)
      .toFixed(2)),
  }), [cart]);

  return (
    <cartContext.Provider value={ contextType }>
      { children }
    </cartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
