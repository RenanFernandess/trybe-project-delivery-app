import { useState } from 'react';
import NavBar from '../components/navBar';
import OrderCard from '../components/orderCard';
import { getAPI } from '../utils';
import getUserId from '../utils/getUserId';

export default function CustomerOrders() {
  // const orderMock = {
  //   id: 8921912,
  //   totalPrice: '100.00',
  //   deliveryAddress: 'R. teste, 123',
  //   saleDate: '22-10-1980',
  //   status: 'enviado',
  // };
  const [orders, setOrders] = useState([]);
  const [id, setId] = useState('');

  const route = `/sales/user/${id}'`;

  const getId = async () => {
    const userId = await getUserId();
    setId(userId);
    // console.log(id);
  };

  const getOrders = async () => {
    await getAPI(
      route,
      (data) => setOrders(data),
    );
  };

  useEffect(() => {
    getId();
    getOrders();
  }, []);

  return (
    <div>
      <NavBar name="teste" route="customer_order" />
      {
        orders.length > 0 && orders.map((order, index) => (
          <OrderCard
            route="customer_order"
            key={ order.id }
            order={ order }
            index={ index }
          />
        ))
      }
    </div>
  );
}
