import { useState, useEffect, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import NavBar from '../components/navBar';
import OrderCard from '../components/orderCard';
import { getAPI } from '../utils';
import userContext from '../context';
// import getUserId from '../utils/getUserId';

export default function CustomerOrders() {
  const { location: { pathname } } = useHistory();
  const { id, role } = useContext(userContext);
  const [orders, setOrders] = useState([]);
  // const [id, setId] = useState('');

  const route = pathname
    .includes('customer') ? `/sales/user/${id}'` : `/sales/seller/${id}'`;

  // const getId = async () => {
  //   const userId = await getUserId();
  //   setId(userId);
  // };

  const getOrders = async () => {
    await getAPI(
      route,
      (data) => setOrders(data),
    );
  };

  useEffect(() => {
    // getId();
    getOrders();
  }, []);

  return (
    <div>
      <NavBar name="teste" route={ role } />
      {
        orders.length > 0 && orders.map((order, index) => (
          <Link
            to={ pathname
              .includes('customer')
              ? `/customer/orders/${order.id}`
              : `/seller/orders/${order.id}` }
            key={ order.id }
          >
            <OrderCard
              route={ pathname
                .includes('customer') ? 'customer_orders' : 'seller_orders' }
              order={ order }
              index={ index }
            />
          </Link>
        ))
      }
    </div>
  );
}
