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
    <div>
      <h3 data-testid={ `${DATATESTID}-order-id` }>
        {order?.id.toString().padStart(PADNUMBER, '0')}
      </h3>
      <p data-testid={ `${DATATESTID}-seller-name` }>
        {`P. Vend: ${seller.name}`}
      </p>
      <p data-testid={ `${DATATESTID}-order-date` }>
        { moment(order?.saleDate).format('DD/MM/YYYY') }
      </p>
      <p data-testid={ `${DATATESTID}-delivery-status${1}` }>
        { status }
      </p>
      <button
        type="button"
        disabled={ status !== 'Em Trânsito' }
        value={ DELIVERED }
        onClick={ ({ target: { value } }) => (handleStatusChange(value, setStatus)) }
        data-testid="customer_order_details__button-delivery-check"
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
