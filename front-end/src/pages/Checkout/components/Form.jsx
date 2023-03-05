import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import userContext, { cartContext } from '../../../context';
import { getAPI, postAPI } from '../../../utils';

export default function Form() {
  const { id: userId } = useContext(userContext);
  const { cart: products, totalPrice } = useContext(cartContext);
  const history = useHistory();
  const [loading, setLoadion] = useState(true);
  const [sellers, setSellers] = useState([]);
  const [seller, setSeller] = useState(0);
  const [number, setNumber] = useState(0);
  const [address, setAddress] = useState('');

  useEffect(() => {
    getAPI('/login/role/seller', (data) => {
      setLoadion(false);
      setSellers(data);
    });
  }, []);

  const finish = () => {
    const body = {
      userId,
      sellerId: seller,
      totalPrice,
      deliveryAddress: address,
      deliveryNumber: number,
      products,
    };
    postAPI('/sales', ({ id }) => {
      history.push(`/customer/orders/${id}`);
    }, body);
    localStorage.removeItem('cart');
  };

  return (
    loading ? <p>Loading...</p> : (
      <div>
        <h2>Detalhes e Endereço para Entrega</h2>
        <form>
          <label htmlFor="checkout-select-seller">
            P. Vendedora Responsável:
            <select
              name="seller"
              id="checkout-select-seller"
              value={ seller }
              data-testid="customer_checkout__select-seller"
              onChange={ ({ target: { value } }) => { setSeller(Number(value)); } }
            >
              { sellers.map(({ id, name }) => (
                <option value={ id } key={ id }>{ name }</option>
              )) }
            </select>
          </label>
          <label htmlFor="checkout-input-address">
            Endereço
            <input
              type="text"
              name="address"
              value={ address }
              onChange={ ({ target: { value } }) => setAddress(Number(value)) }
              id="checkout-input-address"
              placeholder="Travessa Terceira da Castanheira, Bairro Muruci"
              data-testid="customer_checkout__input-address"
            />
          </label>
          <label htmlFor="checkout-input-number">
            Número
            <input
              type="number"
              name="number"
              value={ number }
              onChange={ ({ target: { value } }) => setNumber(Number(value)) }
              id="checkout-input-number"
              placeholder="198"
              data-testid="customer_checkout__input-address-number"
            />
          </label>
          <button
            type="button"
            data-testid="customer_checkout__button-submit-order"
            onClick={ finish }
          >
            FINALIZAR PEDIDO
          </button>
        </form>
      </div>
    )
  );
}
