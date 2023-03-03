import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Thead, { Tbody } from './components';

const WHICH_LOCATION = {
  '/customer/checkout': 'customer_checkout',
  '/customer/orders': 'customer_order_details',
  '/seller/orders': 'seller_order_details',
};
export default function OrderTable({ products = [] }) {
  const { location: { pathname } } = useHistory();
  const LOCATION = WHICH_LOCATION[pathname];
  const isCheckout = (pathname === '/customer/checkout');

  const totalVaule = products
    .reduce((sum, { quantity, price }) => sum + (price * quantity), 0)
    .toFixed(2);

  return (
    <section>
      <table>
        <Thead isCheckout={ isCheckout } />
        <Tbody isCheckout={ isCheckout } location={ LOCATION } products={ products } />
      </table>
      <div>
        <p
          data-testid={ `${LOCATION}__element-order-total-price` }
        >
          { `Total: R$ ${totalVaule}` }
        </p>
      </div>
    </section>
  );
}

OrderTable.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  })).isRequired,
};
