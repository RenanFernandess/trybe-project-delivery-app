import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getAPI } from '../../utils';

const TABLE_HEADERS = ['Item', 'Descrição', 'Quantidade', 'Valor Unidade', 'Sub-total'];

export default function OrderDetails({ match: { path, params: { id } } }) {
  const [order, setOrder] = useState();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getAPI(`/sales/${id}`, setOrder);
    console.log(path);
  }, []);

  useEffect(() => {
    const tot = order?.products
      .reduce((acc, { price, quantity }) => acc + (price * quantity), 0);
    setTotal(tot);
  }, [order]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            {
              TABLE_HEADERS.map((head) => <th key={ head }>{head}</th>)
            }
          </tr>
        </thead>
        <tbody>
          { order && order.products.map((p, index) => (
            <tr key={ `${index} - ${p.productName}` }>
              <td>{ index + 1 }</td>
              {
                Object.values(p).map((value, ind) => (
                  <td key={ `${ind} - ${value}` }>{ value }</td>
                ))
              }
              <td>{ `R$ ${(p.price * p.quantity).toFixed(2)}` }</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>{ `R$ ${total?.toFixed(2)}` }</h3>
    </div>
  );
}

OrderDetails.propTypes = {
  match: PropTypes.shape().isRequired,
};
