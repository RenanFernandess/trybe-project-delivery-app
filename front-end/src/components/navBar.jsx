import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import LogoutButton from './LogoutButton';
import userContext from '../context';

export default function NavBar({ route }) {
  const { name: userName } = useContext(userContext);

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
        </div>
      </Link>
      <div data-testid={ `${ROUTE}__element-navbar-user-full-name` }>
        { userName }
      </div>
      <LogoutButton testId={ `${ROUTE}__element-navbar-link-logout` } />
    </nav>
  );
}

NavBar.propTypes = {
  name: PropTypes.string,
  route: PropTypes.string,
}.isRequired;
