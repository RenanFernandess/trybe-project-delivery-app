import React from 'react';
import PropTypes from 'prop-types';
import Trow from './Trow';

export default function Tbody({ isCheckout, products, location }) {
  return (
    <tbody>
      { products.map(({ id, name, price, quantity }, index) => (
        <Trow
          key={ id }
          id={ id }
          description={ name }
          price={ price }
          quantity={ quantity }
          isCheckout={ isCheckout }
          location={ location }
          index={ index }
        />
      )) }
    </tbody>
  );
}

Tbody.propTypes = {
  isCheckout: PropTypes.bool.isRequired,
  location: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  })).isRequired,
};
