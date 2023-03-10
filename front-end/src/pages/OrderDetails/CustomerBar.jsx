import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { patchAPI } from '../../utils';
import { PADNUMBER } from './SellerBar';

export const CUSTOMER_TESTID = 'customer_order_details';
const DATATESTID = `${CUSTOMER_TESTID}__element-order-details-label`;
const DELIVERED = 'Entregue';

export default function CustomerBar({ order, seller }) {
  const [status, setStatus] = useState(order?.status);

  const handleStatusChange = async (value, setter) => {
    setter(value);
    if (status !== DELIVERED) {
      await patchAPI(
        `/sales/status/${order?.id}`,
        console.log,
        { status: DELIVERED },
      );
    }
  };
  return (
    <div className="customer-bar-container">
      <h3 data-testid={ `${DATATESTID}-order-id` } className="order-id">
        { `Pedido ${order?.id.toString().padStart(PADNUMBER, '0')}`}
      </h3>
      <p data-testid={ `${DATATESTID}-seller-name` } className="order-name">
        {`P. Vend: ${seller.name}`}
      </p>
      <p data-testid={ `${DATATESTID}-order-date` } className="order-date">
        { moment(order?.saleDate).format('DD/MM/YYYY') }
      </p>
      <p data-testid={ `${DATATESTID}-delivery-status${1}` } className="order-status">
        { status }
      </p>
      <button
        type="button"
        disabled={ status === 'Entregue' }
        value={ DELIVERED }
        onClick={ ({ target: { value } }) => (handleStatusChange(value, setStatus)) }
        data-testid="customer_order_details__button-delivery-check"
        className="order-btn"
      >
        Marcar como Entregue

      </button>
    </div>
  );
}

CustomerBar.propTypes = {
  order: PropTypes.shape().isRequired,
  seller: PropTypes.shape().isRequired,
};
