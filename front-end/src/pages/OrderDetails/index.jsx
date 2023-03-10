import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { getAPI } from '../../utils';
import CustomerBar, { CUSTOMER_TESTID } from './CustomerBar';
import SellerBar, { SELLER_TESTID } from './SellerBar';
import userContext from '../../context';
import NavBar from '../../components/navBar';

import '../../styles/style.orderDetails.css';

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

  // checa se este usuario pode acessar está pagina.
  useEffect(() => {
    if (!path.includes(role)) {
      history.push(`/${role}/orders`);
    }
  }, []);

  // coloca em testId a parte do datatestid definida através do path
  useEffect(() => {
    if (path.includes('customer')) setTestId(CUSTOMER_TESTID);
    else setTestId(SELLER_TESTID);
  }, []);

  // fetch inicial em sales pelo id da venda
  useEffect(() => {
    const fetchs = async () => {
      await getAPI(`/sales/${id}`, setOrder);
    };
    fetchs();
  }, []);

  // calculo do valor total da venda e fetch da info do vendedor
  useEffect(() => {
    const tot = order?.products
      .reduce((acc, { price, quantity }) => acc + (price * quantity), 0);
    setTotal(tot);
    const fetchs = async () => {
      await getAPI(`/login/${order.sellerId}`, setSeller);
    };
    if (order) fetchs();
  }, [order]);

  console.log(order);

  return (
    <div className="main-container-orderDetails">
      <NavBar name={ name } route={ role } />
      <div>
        <header className="header-details">
          <h1>Detalhe do pedido</h1>
        </header>
        {
          order && (
            <div className="container-details">
              <div className="head-details">
                {
                  path.includes('customer')
                    ? <CustomerBar order={ order } seller={ seller } />
                    : <SellerBar order={ order } />
                }
              </div>
              <table className="order-table">
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
                        className="item-number"
                        data-testid={ `${testId}${TABLEID}-item-number-${index}` }
                      >
                        { index + 1 }

                      </td>
                      {
                        Object.values(p).map((value, ind) => (
                          <td
                            key={ `${ind} - ${value}` }
                            data-testid={ `${testId}${TABLEID}-${IDVALUE[ind]}-${index}` }
                            className={ IDVALUE[ind] }
                          >
                            { IDVALUE[ind] === 'unit-price' ? `R$ ${value}` : value }

                          </td>
                        ))
                      }
                      <td
                        data-testid={ `${testId}${TABLEID}-${IDVALUE[3]}-${index}` }
                        className="sub-total"
                      >
                        { `R$ ${(p.price * p.quantity).toFixed(2)}` }

                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <h3 className="total-details">
                <span>Total: R$</span>
                <span
                  data-testid={ `${testId}__element-order-total-price` }
                >
                  { total?.toFixed(2).replace('.', ',') }
                </span>
              </h3>
            </div>
          )
        }
      </div>
    </div>
  );
}

OrderDetails.propTypes = {
  match: PropTypes.shape().isRequired,
};
