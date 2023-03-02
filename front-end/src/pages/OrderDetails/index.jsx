import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getAPI } from '../../utils';

const TABLE_HEADERS = ['Item', 'Descrição', 'Valor Unitário', 'Quantidade', 'Sub-total'];
const TESTIDVALUE = ['name', 'unit-price', 'quantity', 'sub-total'];
const DATATESTID = 'customer_order_details__element-order-table';

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
              <td
                data-testid={ `${DATATESTID}-item-number-${index}` }
              >
                { index + 1 }

              </td>
              {
                Object.values(p).map((value, ind) => (
                  <td
                    key={ `${ind} - ${value}` }
                    data-testid={ `${DATATESTID}-${TESTIDVALUE[ind]}-${index}` }
                  >
                    { value }

                  </td>
                ))
              }
              <td
                data-testid={ `${DATATESTID}-${TESTIDVALUE[3]}-${index}` }
              >
                { `R$ ${(p.price * p.quantity).toFixed(2)}` }

              </td>
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
