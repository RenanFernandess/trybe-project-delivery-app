import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { patchAPI } from '../../utils';

const DATATESTID = 'customer_order_details__element-order-details-label';
const DELIVERED = 'Entregue';

export default function CustomerBar({ order, seller }) {
  const [status, setStatus] = useState(order?.status);

  const handleStatusChange = async () => {
    setStatus(DELIVERED);
    if (status !== DELIVERED) {
      await patchAPI(`/sales/status/${order?.id}`, console.log, { status });
    }
  };
  return (
    <div>
      <h3 data-testid={ `${DATATESTID}-order-id` }>
        {order?.id}
      </h3>
      <p data-testid={ `${DATATESTID}-seller-name` }>
        {seller.name}
      </p>
      <p data-testid={ `${DATATESTID}-order-date` }>
        {new Date(order?.saleDate.split('T')[0]).toLocaleDateString()}
      </p>
      <p data-testid={ `${DATATESTID}-delivery-status${1}` }>
        {status.toUpperCase()}
      </p>
      <button type="button" onClick={ handleStatusChange }>Marcar como Entregue</button>
    </div>
  );
}

CustomerBar.propTypes = {
  order: PropTypes.shape().isRequired,
  seller: PropTypes.shape().isRequired,
};
