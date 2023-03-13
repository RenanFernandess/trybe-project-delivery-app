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
      { ROUTE.includes('customer') && (
        <Link to="/customer/products">
          <div data-testid="customer_products__element-navbar-link-products">
            produtos
          </div>
        </Link>
      ) }
      {
        (ROUTE.includes('customer') || ROUTE.includes('seller')) && (
          <Link to={ `/${ROUTE}/orders` }>
            <div data-testid="customer_products__element-navbar-link-orders">
              {ROUTE.includes('customer') ? 'Meus pedidos' : 'Pedidos'}
            </div>
          </Link>
        )
      }
      {
        ROUTE.includes('seller') && (
          <Link to={ `/${ROUTE}/products` }>
            <div>
              Estoque
            </div>
          </Link>
        )
      }
      {
        ROUTE.includes('admin') && (
          <Link to="/admin/manage">
            <div data-testid="customer_products__element-navbar-link-orders">
              gerenciar usuários
            </div>
          </Link>
        )
      }
      <div data-testid="customer_products__element-navbar-user-full-name">
        { userName }
      </div>
      <LogoutButton testId="customer_products__element-navbar-link-logout" />
    </nav>
  );
}

NavBar.propTypes = {
  name: PropTypes.string,
  route: PropTypes.string,
}.isRequired;
