import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/navBar';
import OrderCard from '../components/orderCard';
import { getAPI } from '../utils';
import userContext from '../context';
// import getUserId from '../utils/getUserId';

export default function CustomerOrders() {
  const { id } = useContext(userContext);
  const [orders, setOrders] = useState([]);
  // const [id, setId] = useState('');

  const route = `/sales/user/${id}'`;

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
      <NavBar name="teste" route="customer" />
      {
        orders.length > 0 && orders.map((order, index) => (
          <Link to={ `/customer/orders/${order.id}` } key={ order.id }>
            <OrderCard
              route="customer_orders"
              order={ order }
              index={ index }
            />
          </Link>
        ))
      }
    </div>
  );
}
