import PropTypes from 'prop-types';

export default function OrderCard({ route, order, index }) {
  // const ROUTE = 'customer_orders';
  const ROUTE = route;
  return (
    <div>
      <div>
        pedido
        <p data-testid={ `${ROUTE}__element-order-id-${order.id}` }>
          {index}
        </p>
      </div>
      <div>
        <p data-testid={ `${ROUTE}__element-delivery-status-${order.id}` }>
          {order.status}
        </p>
      </div>
      <div>
        {/* data */}
        <p data-testid={ `${ROUTE}__element-order-date-${order.id}` }>
          {order.saleDate}
        </p>
      </div>
      <div>
        <p>R$</p>
        <p data-testid={ `${ROUTE}__element-card-price-${order.id}` }>
          {order.totalPrice.replace('.', ',')}
        </p>
      </div>
      {
        ROUTE === 'seller_orders' && (
          <p data-testid={ `${ROUTE}__element-card-address-${order.id}` }>
            {order.deliveryAddress}
          </p>
        )
      }
    </div>
  );
}

OrderCard.propTypes = {
  route: PropTypes.string,
  index: PropTypes.string,
  order: PropTypes.shape({
    id: PropTypes.number,
    totalPrice: PropTypes.string,
    deliveryAddress: PropTypes.string,
    saleDate: PropTypes.string,
    status: PropTypes.string,
  }),
}.isRequired;
