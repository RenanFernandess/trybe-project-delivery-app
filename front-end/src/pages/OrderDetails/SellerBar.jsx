import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { patchAPI } from '../../utils';
import colorChange from '../../utils/colorChange';

export const SELLER_TESTID = 'seller_order_details';
export const PADNUMBER = 4;
const DATATESTID = `${SELLER_TESTID}__element-order-details-label`;

export default function SellerBar({ order }) {
  const [status, setStatus] = useState(order?.status);

  const handleStatusChange = async (value, setter) => {
    setter(value);
    if (status !== value) {
      await patchAPI(`/sales/status/${order?.id}`, console.log, { status: value });
    }
  };

  return (
    <div className="bar-container">
      <h3 data-testid={ `${DATATESTID}-order-id` } className="seller-order-id">
        {`Pedido ${order?.id.toString().padStart(PADNUMBER, '0')}`}
      </h3>
      <p data-testid={ `${DATATESTID}-order-date` } className="seller-order-date">
        { moment(order?.saleDate).format('DD/MM/YYYY') }
      </p>
      <p
        data-testid={ `${DATATESTID}-delivery-status` }
        className="seller-order-status"
        style={ { backgroundColor: colorChange(status) } }
      >
        {status}
      </p>
      <button
        type="button"
        // disabled={ status !== 'Pendente' }
        value="Preparando"
        onClick={ ({ target: { value } }) => (handleStatusChange(value, setStatus)) }
        data-testid="seller_order_details__button-preparing-check"
        className="preparing-btn"
      >
        Preparar Pedido

      </button>
      <button
        type="button"
        // disabled={ status !== 'Preparando' }
        value="Em Trânsito"
        onClick={ ({ target: { value } }) => (handleStatusChange(value, setStatus)) }
        data-testid="seller_order_details__button-dispatch-check"
        className="in-transit-btn"
      >
        Saiu Para Entrega
      </button>
    </div>
  );
}

SellerBar.propTypes = {
  order: PropTypes.shape().isRequired,
};
