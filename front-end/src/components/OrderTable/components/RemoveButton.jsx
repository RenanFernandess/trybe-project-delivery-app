import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { cartContext } from '../../../context';

export default function RemoveButton({ id: productId }) {
  const { products, setProducts } = useContext(cartContext);

  const remove = async () => {
    await setProducts(products.filter(({ id }) => id !== productId));
  };

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
