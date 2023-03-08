import React, { useContext, useEffect } from 'react';
import NavBar, { OrderTable } from '../../components';
import { cartContext } from '../../context';
import Form from './components';
import { CART_KEY } from '../../constants';
import { localStorageHandling } from '../../utils';
import './index.css';

const { getLocalStorage } = localStorageHandling;

export default function Checkout() {
  const { setProducts } = useContext(cartContext);

  useEffect(() => { setProducts(getLocalStorage(CART_KEY)); }, [setProducts]);

  return (
    <section>
      <NavBar route="customer_products" />
      <div className="c-body">
        <h2 className="checkout__h2">Finalizar Pedido</h2>
        <OrderTable />
        <Form />
      </div>
    </section>
  );
}
