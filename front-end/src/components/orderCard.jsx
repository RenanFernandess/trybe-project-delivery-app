import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { formatNumber, formatDate } from '../utils/formatNumbers';
import '../styles/orderCard.css';

const STATUS = {
  Pendente: 'pending',
  Preparando: 'preparing',
  'Em Trânsito': 'transit',
  Entregue: 'delivered',
};
export default function OrderCard({ pathname, order }) {
  const ROUTE = pathname.includes('customer') ? 'customer_orders' : 'seller_orders';
  const FOUR = 4;
  return (
    <Link
      to={ pathname
        .includes('customer')
        ? `/customer/orders/${order.id}`
        : `/seller/orders/${order.id}` }
      className="order-card"
    >
      <div className="order-card__c-id c-centralize">
        <p>
          Pedido
        </p>
        <p
          className="order-card__id"
          data-testid={ `${ROUTE}__element-order-id-${order.id}` }
        >
          {formatNumber(order.id, FOUR)}
        </p>
      </div>
      <div className="order-card__description">
        <p
          className={
            `order-card__status c-centralize order-card__status--${STATUS[order.status]}`
          }
          data-testid={ `${ROUTE}__element-delivery-status-${order.id}` }
        >
          {order.status}
        </p>
        <p
          className="order-card__date c-centralize"
          data-testid={ `${ROUTE}__element-order-date-${order.id}` }
        >
          {formatDate(order.saleDate)}
        </p>
        <p
          className="order-card__price c-centralize"
          data-testid={ `${ROUTE}__element-card-price-${order.id}` }
        >
          {`R$ ${order.totalPrice.replace('.', ',')}`}
        </p>
        {
          ROUTE === 'seller_orders' && (
            <p
              className="order-card__address c-centralize"
              data-testid={ `${ROUTE}__element-card-address-${order.id}` }
            >
              {order.deliveryAddress}
            </p>
          )
        }
      </div>
    </Link>
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
