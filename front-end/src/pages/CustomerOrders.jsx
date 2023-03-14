import { useState, useEffect, useContext, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from '../components/navBar';
import OrderCard from '../components/orderCard';
import { getAPI } from '../utils';
import userContext from '../context';
import { Loading } from '../components';

export default function CustomerOrders() {
  const { location: { pathname } } = useHistory();
  const { id, role } = useContext(userContext);
  const [loadin, setLoadin] = useState(true);
  const [orders, setOrders] = useState([]);

  const route = role === 'customer' ? `/sales/user/${id}'` : `/sales/seller/${id}'`;

  const getOrders = useCallback(async () => {
    await getAPI(
      route,
      (data) => {
        setOrders(data);
        setLoadin(false);
      },
    );
  }, [route]);

  useEffect(() => {
    getOrders();
  }, [getOrders]);

  return (
    <div>
      <NavBar route={ role } />
      {
        loadin ? <Loading /> : (
          <section className="c-body c-list-card">
            {
              orders.length > 0 && orders.map((order, index) => (
                <OrderCard
                  key={ order.id }
                  pathname={ pathname }
                  order={ order }
                  index={ index }
                />
              ))
            }
          </section>
        )
      }
    </div>
  );
}
