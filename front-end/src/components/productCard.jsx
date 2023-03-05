import React from 'react';
import PropTypes from 'prop-types';
import './styles/productCard.css';

const BASE = 'customer_products';

function ProductCard({ id, title, price, thumbnail,
  quantity, onClick, index, onChange }) {
  return (
    <section data-testid="product" className="card-product-container">
      <div className="div-product-image">
        <img
          className="product-image"
          data-testid={ `${BASE}__img-card-bg-image-${id}` }
          src={ thumbnail }
          alt={ title }
        />
        <span
          data-testid={ `${BASE}__element-card-price-${id}` }
          className="product-price"
        >
          {price.replace('.', ',')}
        </span>
      </div>

      <div className="product-footer">
        <div className="product-description">

          <p data-testid={ `${BASE}__element-card-title-${id}` }>
            {title}
          </p>

        </div>
        <div className="card-price-quantity">
          <div className="card-quantity">
            <button
              data-testid={ `${BASE}__button-card-rm-item-${id}` }
              className="card-minus-btn"
              type="button"
              name="minusButton"
              onClick={ (e) => onClick(e, index) }
            >
              {/* <img src="minus.svg" alt="" /> */}
              ➖
            </button>

            <input
              type="text"
              data-testid={ `${BASE}__input-card-quantity-${id}` }
              className="card-quantity-input"
              name="quantity"
              inputMode="numeric"
              pattern="[0-9]*"
              value={ quantity }
              onChange={ ({ target: { value } }) => onChange(value, index) }
            />

            <button
              data-testid={ `${BASE}__button-card-add-item-${id}` }
              className="card-plus-btn"
              type="button"
              name="addButton"
              onClick={ (e) => onClick(e, index) }
            >
              {/* <img src="plus.svg" alt="" /> */}
              ➕
            </button>
          </div>

        </div>
      </div>
      {/* <div className="card-buttons">
          <button
            className="card-delete-btn"
            data-testid="remove-product"
            type="button"
            name="removeButton"
            onClick={ (e) => onClick(e, product) }
          >
            ❌
          </button>
        </div> */}
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
