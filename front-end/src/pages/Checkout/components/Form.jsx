import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Loading } from '../../../components';
import userContext, { cartContext } from '../../../context';
import { getAPI, postWithTokenAPI } from '../../../utils';
import './styles/Form.css';

export default function Form() {
  const { id: userId, token } = useContext(userContext);
  const { products, totalPrice, setProducts } = useContext(cartContext);
  const history = useHistory();
  const [loading, setLoadion] = useState(true);
  const [sellers, setSellers] = useState([]);
  const [seller, setSeller] = useState(0);
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    getAPI('/login/role/seller', (data) => {
      setLoadion(false);
      setSellers(data);
      setSeller(data[0].id);
    });
  }, []);

  const finish = async () => {
    const formatProducts = products
      .map(({ id, quantity }) => ({ productId: id, quantity }));
    const body = {
      userId,
      sellerId: seller,
      totalPrice: +totalPrice,
      deliveryAddress: address,
      deliveryNumber: number,
      products: formatProducts,
    };
    await postWithTokenAPI('/sales', (data) => {
      history.push(`/customer/orders/${data.id}`);
      setProducts([]);
    }, body, token);
  };

  return (
    loading ? <Loading /> : (
      <div>
        <h2 className="checkout__h2">Detalhes e Endereço para Entrega</h2>
        <form className="c-mediun form">
          <label className="form__label" htmlFor="checkout-select-seller">
            P. Vendedora Responsável:
            <select
              className="form__select"
              name="seller"
              id="checkout-select-seller"
              value={ seller }
              data-testid="customer_checkout__select-seller"
              onChange={ ({ target: { value } }) => { setSeller(value); } }
            >
              { sellers.map(({ id, name }) => (
                <option value={ id } key={ id }>{ name }</option>
              )) }
            </select>
          </label>
          <label className="form__label" htmlFor="checkout-input-address">
            Endereço
            <input
              className="form__input"
              type="text"
              name="address"
              value={ address }
              onChange={ ({ target: { value } }) => setAddress(value) }
              id="checkout-input-address"
              placeholder="Travessa Terceira da Castanheira, Bairro Muruci"
              data-testid="customer_checkout__input-address"
            />
          </label>
          <label className="form__label" htmlFor="checkout-input-number">
            Número
            <input
              className="form__input"
              type="number"
              name="number"
              value={ number }
              onChange={ ({ target: { value } }) => setNumber(value) }
              id="checkout-input-number"
              placeholder="198"
              data-testid="customer_checkout__input-address-number"
            />
          </label>
          <button
            className="base-btn primary-btn form_btn"
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
