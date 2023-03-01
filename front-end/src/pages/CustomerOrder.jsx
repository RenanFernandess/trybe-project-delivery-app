import NavBar from '../components/navBar';
import OrderCard from '../components/orderCard';

export default function CustomerOrder() {
  const orderMock = {
    id: 8921912,
    totalPrice: '100.00',
    deliveryAddress: 'R. teste, 123',
    saleDate: '22-10-1980',
    status: 'enviado',
  };

  return (
    <div>
      <NavBar name="teste" route="customer_products" />
      <OrderCard route="customer_products" order={ orderMock } index="1" />
    </div>
  );
}
