import React from 'react';
import PropTypes from 'prop-types';
import RemoveButton from './RemoveButton';

export default function Trow(
  { id, description, price, isCheckout, quantity, location, index },
) {
  return (
    <tr>
      <td data-testid={ `${location}__element-order-table-item-number-${index}` }>
        { index + 1 }
      </td>
      <td data-testid={ `${location}__element-order-table-name-${index}` }>
        { description }
      </td>
      <td data-testid={ `${location}__element-order-table-quantity-${index}` }>
        { quantity }
      </td>
      <td data-testid={ `${location}__element-order-table-unit-price-${index}` }>
        { `${price.replace('.', ',')}` }
      </td>
      <td data-testid={ `${location}__element-order-table-sub-total-${index}` }>
        { `R$${((price * quantity).toFixed(2)).replace('.', ',')}` }
      </td>
      {
        isCheckout && (
          <td data-testid={ `customer_checkout__element-order-table-remove-${index}` }>
            <RemoveButton id={ id } />
          </td>
        )
      }
    </tr>
  );
}

Trow.propTypes = {
  id: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  isCheckout: PropTypes.bool.isRequired,
};
