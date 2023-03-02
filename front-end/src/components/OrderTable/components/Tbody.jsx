import React from 'react';
import PropTypes from 'prop-types';
import Trow from './Trow';

export default function Tbody({ isCheckout, products }) {
  return (
    <tbody>
      { products.map(({ id, name, price, quantity }) => (
        <Trow
          key={ id }
          id={ id }
          description={ name }
          price={ price }
          quantity={ quantity }
          isCheckout={ isCheckout }
        />
      )) }
    </tbody>
  );
}

Tbody.propTypes = {
  isCheckout: PropTypes.bool.isRequired,
  products: PropTypes.arrayOf(PropTypes.objectOf({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    isCheckout: PropTypes.bool.isRequired,
  })).isRequired,
};
