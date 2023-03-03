import React, { useContext, useEffect } from 'react';
import NavBar, { OrderTable } from '../../components';
import { cartContext } from '../../context';
import Form from './components';

const p = {
  id: 1,
  name: 'xablau',
  price: 2.99,
  quantity: 3,
};

export default function Checkout() {
  const { setCart } = useContext(cartContext);

  useEffect(() => { setCart([p, { ...p, id: 2 }]); }, [setCart]);

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
