import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import LogoutButton from './LogoutButton';
import userContext from '../context';
import './styles/NavBar.css';

export default function NavBar({ route }) {
  const { name: userName } = useContext(userContext);
  const selected = 'header__nav_p--selected';

  const ROUTE = route;
  return (
    <header className="header">
      <nav className="header__nav">
        { ROUTE.includes('customer') && (
          <NavLink
            to="/customer/products"
            className={
              (isActive) => `header__nav__link ${(isActive ? selected : '')}`
            }
          >
            <p
              className="header__nav__p"
              data-testid="customer_products__element-navbar-link-products"
            >
              produtos
            </p>
          </NavLink>
        ) }
        {
          (ROUTE.includes('customer') || ROUTE.includes('seller')) && (
            <NavLink
              to={ `/${ROUTE}/orders` }
              className={
                (isActive) => `header__nav__link ${(isActive ? selected : '')}`
              }
            >
              <p
                className="header__nav__p"
                data-testid="customer_products__element-navbar-link-orders"
              >
                {ROUTE.includes('customer') ? 'meus pedidos' : 'pedidos'}
              </p>
            </NavLink>
          )
        }
        {
          ROUTE.includes('admin') && (
            <NavLink
              to="/admin/manage"
              className={
                (isActive) => `header__nav__link ${(isActive ? selected : '')}`
              }
            >
              <p
                className="header__nav__p"
                data-testid="customer_products__element-navbar-link-orders"
              >
                gerenciar usuários
              </p>
            </NavLink>
          )
        }
      </nav>
      <aside className="header__aside">
        <p
          className="header__aside__p"
          data-testid="customer_products__element-navbar-user-full-name"
        >
          { userName }
        </p>
        <LogoutButton
          className="header__logout-btn"
          testId="customer_products__element-navbar-link-logout"
        />
      </aside>
    </header>
  );
}

NavBar.propTypes = {
  name: PropTypes.string,
  route: PropTypes.string,
}.isRequired;
