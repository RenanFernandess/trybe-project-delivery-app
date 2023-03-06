import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { cartContext } from '../../../context';
import { CART_KEY } from '../../../constants';
import { localStorageHandling } from '../../../utils';

const { setItem } = localStorageHandling;

export default function RemoveButton({ id: productId }) {
  const { cart, setCart } = useContext(cartContext);

  const remove = async () => {
    await setCart(cart.filter(({ id }) => id !== productId));
  };

  useEffect(() => {
    setItem(CART_KEY, cart);
  }, [cart]);

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
