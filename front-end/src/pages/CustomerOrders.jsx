import NavBar from '../components/navBar';
import OrderCard from '../components/orderCard';

export default function CustomerOrders() {
  const orderMock = {
    id: 8921912,
    totalPrice: '100.00',
    deliveryAddress: 'R. teste, 123',
    saleDate: '22-10-1980',
    status: 'enviado',
  };

  return (
    <div>
      <NavBar name="teste" route="customer_order" />
      <OrderCard route="customer_order" order={ orderMock } index="1" />
    </div>
  );
}
