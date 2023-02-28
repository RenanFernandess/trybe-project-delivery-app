import { Link } from 'react-router-dom';

export default function navBar({ name, route }) {
  const ROUTE = route;
  return (
    <nav>
      { ROUTE === 'customer_products' && (
        <Link to="/customer/products">
          <div data-testid={ `${ROUTE}__element-navbar-link-products` }>
            produtos
          </div>
        </Link>
      ) }
      <Link to="/customer/orders">
        <div data-testid={ `${ROUTE}__element-navbar-link-orders` }>
          {ROUTE === 'customer_products' ? 'meus pedidos' : 'pedidos'}
          {/* meus pedidos */}
          {/* pedidos - quando estiver no fluxo da pessoa desenvolvedora */}
        </div>
      </Link>
      <div data-testid={ `${ROUTE}__element-navbar-user-full-name` }>
        {name}
      </div>
      <Link to="/login">
        <button
          type="button"
          data-testid={ `${ROUTE}__element-navbar-link-logout` }
        >
          sair
        </button>
      </Link>
    </nav>
  );
}
