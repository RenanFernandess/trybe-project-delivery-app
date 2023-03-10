import React from 'react';
import PropTypes from 'prop-types';
import '../styles/productCard.css';

const BASE = 'customer_products';

function ProductCard({ id, title, price, thumbnail,
  quantity, onClick, index, onChange }) {
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
      <footer className="pro-card__footer">
        <h4
          className="pro-card__title"
          data-testid={ `${BASE}__element-card-title-${id}` }
        >
          {title}
        </h4>
        <div className="pro-card__div">
          <button
            data-testid={ `${BASE}__button-card-rm-item-${id}` }
            className="pro-card__button primary-btn"
            type="button"
            name="minusButton"
            onClick={ (e) => onClick(e, index) }
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
          />
          <button
            data-testid={ `${BASE}__button-card-add-item-${id}` }
            className="pro-card__button primary-btn"
            type="button"
            name="addButton"
            onClick={ (e) => onClick(e, index) }
          >
            +
          </button>
        </div>
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
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ProductCard;
