import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import LogoutButton from './LogoutButton';
import userContext from '../context';
import './styles/NavBar.css';

export default function NavBar({ route }) {
  const { name: userName } = useContext(userContext);

  const ROUTE = route;
  return (
    <header className="header">
      <nav className="header-child">
        { ROUTE.includes('customer') && (
          <Link to="/customer/products">
            <p data-testid="customer_products__element-navbar-link-products">
              produtos
            </p>
          </Link>
        ) }
        {
          (ROUTE.includes('customer') || ROUTE.includes('seller')) && (
            <Link to={ `/${ROUTE}/orders` }>
              <p data-testid="customer_products__element-navbar-link-orders">
                {ROUTE.includes('customer') ? 'meus pedidos' : 'pedidos'}
              </p>
            </Link>
          )
        }
        {
          ROUTE.includes('admin') && (
            <Link to="/admin/manage">
              <p data-testid="customer_products__element-navbar-link-orders">
                gerenciar usuários
              </p>
            </Link>
          )
        }
      </nav>
      <aside className="header-aside header-child">
        <p data-testid="customer_products__element-navbar-user-full-name">{ userName }</p>
        <LogoutButton testId="customer_products__element-navbar-link-logout" />
      </aside>
    </header>
  );
}

NavBar.propTypes = {
  name: PropTypes.string,
  route: PropTypes.string,
}.isRequired;
