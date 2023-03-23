import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import '../styles/productCard.css';

const BASE = 'customer_products';

function ProductCard({ id, title, price, thumbnail,
  quantity, onClick, index, onChange, stockQty, saveButton, response, hideMessage }) {
  const { location: { pathname } } = useHistory();

  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const firstCheck = pathname.includes('customer') && stockQty === 0;
    const secondCheck = pathname.includes('customer') && quantity === stockQty;
    if (firstCheck || secondCheck) setDisabled(true);
    if (!firstCheck && !secondCheck) setDisabled(false);
  }, [quantity, stockQty, pathname]);

  return (
    <section data-testid="product" className="pro-card">
      <img
        className="pro-card__img"
        data-testid={ `${BASE}__img-card-bg-image-${id}` }
        src={ thumbnail }
        alt={ title }
      />
      <h2
        data-testid={ `${BASE}__element-card-price-${id}` }
        className="pro-card__price"
      >
        {price.replace('.', ',')}
      </h2>
      {
        id === response?.id && (
          <p className="pro-card__response">
            {
              response?.message
                ? (
                  <span
                    className="pro-card__response__message"
                    hidden={ hideMessage }
                  >
                    { response.message }
                  </span>
                )
                : response?.stockQty && (
                  <span
                    className="pro-card__response__saved"
                    hidden={ hideMessage }
                  >
                    Salvo!
                  </span>
                )
            }
          </p>
        )
      }
      <footer className="c-centralize pro-card__footer">
        <h4
          className="pro-card__title"
          data-testid={ `${BASE}__element-card-title-${id}` }
        >
          {title}
        </h4>
        <p className="pro-card__stock">{ `Em estoque: ${stockQty}` }</p>
        <div className="pro-card__div">
          <button
            data-testid={ `${BASE}__button-card-rm-item-${id}` }
            className="pro-card__button primary-btn"
            type="button"
            name="minusButton"
            onClick={ (e) => onClick(e, index) }
            disabled={ pathname.includes('customer') && quantity === 0 }
          >
            -
          </button>
          <input
            type="text"
            data-testid={ `${BASE}__input-card-quantity-${id}` }
            className="pro-card__input"
            name="quantity"
            inputMode="numeric"
            pattern="[0-9]*"
            value={ quantity }
            onChange={ ({ target: { value } }) => onChange(value, index) }
            disabled={ disabled }
          />
          <button
            data-testid={ `${BASE}__button-card-add-item-${id}` }
            className="pro-card__button primary-btn"
            type="button"
            name="addButton"
            onClick={ (e) => onClick(e, index) }
            disabled={ disabled }
          >
            +
          </button>
        </div>
        {
          pathname.includes('seller') && (
            <button
              className="base-btn secondary-btn pro-card__save-btn"
              type="button"
              disabled={ !quantity }
              onClick={ () => saveButton(index, id) }
            >
              Salvar
            </button>
          )
        }
      </footer>
    </section>
  );
}

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  stockQty: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saveButton: PropTypes.func.isRequired,
  hideMessage: PropTypes.bool.isRequired,
  response: PropTypes.shape({
    id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    stockQty: PropTypes.number.isRequired,
  }).isRequired,
}.isRequired;

export default ProductCard;
