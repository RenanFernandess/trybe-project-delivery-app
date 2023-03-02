import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { getAPI } from '../../utils';
import CustomerBar, { CUSTOMER_TESTID } from './CustomerBar';
import SellerBar, { SELLER_TESTID } from './SellerBar';
import userContext from '../../context';
import NavBar from '../../components/navBar';

const TABLE_HEADERS = ['Item', 'Descrição', 'Valor Unitário', 'Quantidade', 'Sub-total'];
const IDVALUE = ['name', 'unit-price', 'quantity', 'sub-total'];
const TABLEID = '__element-order-table';

export default function OrderDetails({ match: { path, params: { id } } }) {
  const { role, name } = useContext(userContext);
  const history = useHistory();

  const [order, setOrder] = useState();
  const [total, setTotal] = useState(0);
  const [seller, setSeller] = useState({});
  const [testId, setTestId] = useState('');

  useEffect(() => {
    if (!path.includes(role)) {
      history.push(`/${role}/orders`);
    }
  }, []);

  useEffect(() => {
    const fetchs = async () => {
      await getAPI(`/sales/${id}`, setOrder);
    };
    fetchs();
    if (path.includes('customer')) setTestId(CUSTOMER_TESTID);
    else setTestId(SELLER_TESTID);
  }, []);

  useEffect(() => {
    const tot = order?.products
      .reduce((acc, { price, quantity }) => acc + (price * quantity), 0);
    setTotal(tot);
    const fetchs = async () => {
      await getAPI(`/login/${order.sellerId}`, setSeller);
    };
    if (order) fetchs();
  }, [order]);

  return (
    <div>
      <NavBar name={ name } route="customer_products" />
      {
        order && (
          <div>
            <div>
              {
                path.includes('customer')
                  ? <CustomerBar order={ order } seller={ seller } />
                  : <SellerBar order={ order } />
              }
            </div>
            <table>
              <thead>
                <tr>
                  {
                    TABLE_HEADERS.map((head) => <th key={ head }>{head}</th>)
                  }
                </tr>
              </thead>
              <tbody>
                { order && order?.products.map((p, index) => (
                  <tr key={ `${index} - ${p.productName}` }>
                    <td
                      data-testid={ `${testId}${TABLEID}-item-number-${index}` }
                    >
                      { index + 1 }

                    </td>
                    {
                      Object.values(p).map((value, ind) => (
                        <td
                          key={ `${ind} - ${value}` }
                          data-testid={ `${testId}${TABLEID}-${IDVALUE[ind]}-${index}` }
                        >
                          { value }

                        </td>
                      ))
                    }
                    <td
                      data-testid={ `${testId}${TABLEID}-${IDVALUE[3]}-${index}` }
                    >
                      { `R$ ${(p.price * p.quantity).toFixed(2)}` }

                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h3
              data-testid={ `${testId}__element-order-total-price` }
            >
              { `R$ ${total?.toFixed(2)}` }

            </h3>
          </div>

        )
      }
    </div>
  );
}

OrderDetails.propTypes = {
  match: PropTypes.shape().isRequired,
};
