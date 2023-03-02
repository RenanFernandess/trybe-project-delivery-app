import React from 'react';
import PropTypes from 'prop-types';

export default function Trow({ id, description, price, isCheckout, quantity }) {
  return (
    <tr>
      <td>{ id }</td>
      <td>{ description }</td>
      <td>{ quantity }</td>
      <td>{ `R$${price}` }</td>
      <td>{ `R$${(price * quantity).toFixed(2)}` }</td>
      {
        isCheckout && (
          <td>
            <button
              type="button"
            >
              Remover
            </button>
          </td>
        )
      }
    </tr>
  );
}

Trow.propTypes = {
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  isCheckout: PropTypes.bool.isRequired,
};
