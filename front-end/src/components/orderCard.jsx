export default function OrdersCard({ route, order, index }) {
  // const ROUTE = 'customer_orders';
  const ROUTE = route;
  return (
    <div>
      <div>
        <div>
          pedido
          <p data-testid={ `${ROUTE}__element-order-id-${order.id}` }>
            {index}
            {/* numero do pedido - vai ser o index ou o id? */}
          </p>
        </div>
        <div>
          {order.status}
        </div>
        <div>
          data
          <p data-testid={ `${ROUTE}__element-order-id-${order.id}` }>
            {order.saleDate}
          </p>
        </div>
        <div>
          <p>R$</p>
          <p>
            {order.totalPrice.replace('.', ',')}
          </p>
        </div>
        {
          ROUTE === 'seller_orders' && (
            <p>{order.deliveryAddress}</p>
          )
        }
      </div>
    </div>
  );
}

OrdersCard.propTypes = {
  route: PropTypes.string,
  order: PropTypes.shape({
    id: PropTypes.number,
    totalPrice: PropTypes.string,
    deliveryAddress: PropTypes.string,
    saleDate: PropTypes.string,
    status: PropTypes.string,
  }),
}.isRequired;
