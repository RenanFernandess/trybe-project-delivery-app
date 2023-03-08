import React from 'react';
import PropTypes from 'prop-types';

export default function Thead({ isCheckout }) {
  return (
    <thead>
      <tr className="c-table__tr">
        <th className="c-table__th">Item</th>
        <th className="c-table__th">Descrição</th>
        <th className="c-table__th">Quantidade</th>
        <th className="c-table__th">Valor Unitário</th>
        <th className="c-table__th">Sub-total</th>
        { isCheckout && <th className="c-table__th">Remover Item</th> }
      </tr>
    </thead>
  );
}

Thead.propTypes = {
  isCheckout: PropTypes.bool.isRequired,
};
