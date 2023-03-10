import React, { useContext, useEffect } from 'react';
import NavBar, { OrderTable } from '../../components';
import { cartContext } from '../../context';
import Form from './components';
import { CART_KEY } from '../../constants';
import { localStorageHandling } from '../../utils';

const { getLocalStorage } = localStorageHandling;

export default function Checkout() {
  const { setProducts } = useContext(cartContext);

  useEffect(() => { setProducts(getLocalStorage(CART_KEY)); }, [setProducts]);

  return (
    <section>
      <NavBar route="customer" />
      <div>
        <h2>Finalizar Pedido</h2>
        <OrderTable />
      </div>
      <Form />
    </section>
  );
}
