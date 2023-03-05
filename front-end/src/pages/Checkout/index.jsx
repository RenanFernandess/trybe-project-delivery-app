import React, { useContext, useEffect } from 'react';
import NavBar, { OrderTable } from '../../components';
import { cartContext } from '../../context';
import Form from './components';
import { CART_KEY } from '../../constants';
import { localStorageHandling } from '../../utils';

const { getLocalStorage } = localStorageHandling;

export default function Checkout() {
  const { setCart } = useContext(cartContext);

  useEffect(() => { setCart(getLocalStorage(CART_KEY)); }, [setCart]);

  return (
    <section>
      <NavBar route="customer_products" />
      <div>
        <h2>Finalizar Pedido</h2>
        <OrderTable />
      </div>
      <Form />
    </section>
  );
}
