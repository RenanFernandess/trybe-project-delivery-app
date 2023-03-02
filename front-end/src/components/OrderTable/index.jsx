import React from 'react';
import PropTypes from 'prop-types';
import Thead, { Tbody } from './components';

export default function OrderTable({ isCheckout, products }) {
  const totalVaule = products
    .reduce((sum, { quantity, price }) => sum + (price * quantity), 0)
    .toFixed(2);

  return (
    <section>
      <table>
        <Thead isCheckout={ isCheckout } />
        <Tbody isCheckout={ isCheckout } products={ products } />
      </table>
      <div>
        <p>{ `Total: R$ ${totalVaule}` }</p>
      </div>
    </section>
  );
}

OrderTable.propTypes = {
  isCheckout: PropTypes.bool.isRequired,
  products: PropTypes.arrayOf(PropTypes.objectOf({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    isCheckout: PropTypes.bool.isRequired,
  })).isRequired,
};
