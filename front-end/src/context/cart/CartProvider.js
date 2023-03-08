import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import cartContext from './cartContext';
import { localStorageHandling } from '../../utils';
import { CART_KEY } from '../../constants';

export default function CartProvider({ children }) {
  const [products, setProducts] = useState(localStorageHandling.getItem(CART_KEY) || []);

  useEffect(() => {
    if (products.length) localStorageHandling.setItem(CART_KEY, products);
    if (!products.length) localStorage.removeItem(CART_KEY);
  }, [products]);

  const contextType = useMemo(() => ({
    products,
    setProducts,
    totalPrice: (products
      .reduce((sum, { quantity, price }) => sum + (price * quantity), 0)
      .toFixed(2)),
  }), [products]);

  return (
    <cartContext.Provider value={ contextType }>
      { children }
    </cartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
