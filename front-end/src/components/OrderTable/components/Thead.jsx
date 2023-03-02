import React from 'react';
import PropTypes from 'prop-types';

export default function Thead({ isCheckout }) {
  return (
    <thead>
      <tr>
        <th>Item</th>
        <th>Descrição</th>
        <th>Quantidade</th>
        <th>Valor Unitário</th>
        <th>Sub-total</th>
        { isCheckout && <th>Remover Item</th> }
      </tr>
    </thead>
  );
}

Thead.propTypes = {
  isCheckout: PropTypes.bool.isRequired,
};
