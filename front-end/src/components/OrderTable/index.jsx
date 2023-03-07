import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Thead, { Tbody } from './components';
import { cartContext } from '../../context';

const WHICH_LOCATION = {
  '/customer/checkout': 'customer_checkout',
  '/customer/orders': 'customer_order_details',
  '/seller/orders': 'seller_order_details',
};
export default function OrderTable() {
  const { products, totalPrice } = useContext(cartContext);
  const { location: { pathname } } = useHistory();
  const LOCATION = WHICH_LOCATION[pathname];
  const isCheckout = (pathname === '/customer/checkout');

  return (
    <section>
      <table>
        <Thead isCheckout={ isCheckout } />
        <Tbody isCheckout={ isCheckout } location={ LOCATION } products={ products } />
      </table>
      <aside>
        Total: R$
        <p
          data-testid={ `${LOCATION}__element-order-total-price` }
        >
          { `${totalPrice.replace('.', ',')}` }
        </p>
      </aside>
    </section>
  );
}
