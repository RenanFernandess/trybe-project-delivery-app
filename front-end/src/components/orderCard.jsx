import PropTypes from 'prop-types';
import { formatNumber, formatDate } from '../utils/formatNumbers';

const FOUR = 4;
export default function OrderCard({ route, order }) {
  return (
    <div>
      <div>
        pedido
        <p data-testid={ `${route}__element-order-id-${order.id}` }>
          {formatNumber(order.id, FOUR)}
        </p>
      </div>
      <div>
        <p data-testid={ `${route}__element-delivery-status-${order.id}` }>
          {order.status}
        </p>
      </div>
      <div>
        {/* data */}
        <p data-testid={ `${route}__element-order-date-${order.id}` }>
          {formatDate(order.saleDate)}
        </p>
      </div>
      <div>
        <p data-testid={ `${route}__element-card-price-${order.id}` }>
          {`R$ ${order.totalPrice.replace('.', ',')}`}
        </p>
      </div>
      {
        route === 'seller_orders' && (
          <p data-testid={ `${route}__element-card-address-${order.id}` }>
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
