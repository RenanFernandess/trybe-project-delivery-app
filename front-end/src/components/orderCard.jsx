export default function OrdersCard({ route, order }) {
  // const ROUTE = 'customer_orders';
  const ROUTE = route;
  return (
    <div>
      <div>
        <div>
          pedido
          <p data-testid={ `${ROUTE}__element-order-id-${order.id}` }>
            {order.id}
            {/* numero do pedido */}
          </p>
        </div>
        <div>
          status
        </div>
        <div>
          data
          <p data-testid={ `${ROUTE}__element-order-id-${order.id}` }>
            {dateNow(order.saleDate)}
          </p>
        </div>
        <div>
          valor
        </div>
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
