import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { cartContext } from '../../../context';
import { CART_KEY } from '../../../constants';
import { localStorageHandling } from '../../../utils';

const { setItem } = localStorageHandling;

export default function RemoveButton({ id: productId }) {
  const { products, setProducts } = useContext(cartContext);

  const remove = async () => {
    await setProducts(products.filter(({ id }) => id !== productId));
  };

  useEffect(() => {
    setItem(CART_KEY, products);
  }, [products]);

  return (
    <button
      type="button"
      onClick={ remove }
    >
      Remover
    </button>
  );
}

RemoveButton.propTypes = {
  id: PropTypes.number.isRequired,
};
