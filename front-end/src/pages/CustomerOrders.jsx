import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/navBar';
import OrderCard from '../components/orderCard';
import { getAPI } from '../utils';
import getUserId from '../utils/getUserId';

export default function CustomerOrders() {
  const [orders, setOrders] = useState([]);
  const [id, setId] = useState('');

  const route = `/sales/user/${id}'`;

  const getId = async () => {
    const userId = await getUserId();
    setId(userId);
  };

  const getOrders = async () => {
    await getAPI(
      route,
      (data) => setOrders(data),
    );
  };

  const getInfo = async () => {
    await getId();
    await getOrders();
  };
  useEffect(() => {
    getInfo();
  }, []);

  return (
    <div>
      <NavBar name="teste" route="customer" />
      {
        orders.length > 0 && orders.map((order, index) => (
          <Link to={ `/customer/orders/${order.id}` } key={ order.id }>
            <OrderCard
              route="customer_order"
              order={ order }
              index={ index }
            />
          </Link>
        ))
      }
    </div>
  );
}
