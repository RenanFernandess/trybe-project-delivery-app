import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/productCard.css';

const BASE = 'customer_products';

class ProductCard extends Component {
  render() {
    const { id, title, price, thumbnail,
      quantity, onClick } = this.props;

    const product = {
      id,
      title,
      price,
      thumbnail,
      quantity,
    };
    return (
      <section data-testid="product" className="card-product-container">
        <div className="product-image">
          <img
            data-testid={ `${BASE}__img-card-bg-image-${id}` }
            src={ thumbnail }
            alt={ title }
          />
          <span
            data-testid={ `${BASE}__element-card-price-${id}` }
            className="product-price"
          >
            R$
            {price}
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
                onClick={ (e) => onClick(e, product) }
              >
                {/* <img src="minus.svg" alt="" /> */}
                ➖
              </button>

              <input
                type="number"
                data-testid={ `${BASE}__input-card-quantity-${id}` }
                className="card-quantity-input"
                name="quantity"
                value={ quantity }
              />

              <button
                data-testid={ `${BASE}__button-card-add-item-${id}` }
                className="card-plus-btn"
                type="button"
                name="addButton"
                onClick={ (e) => onClick(e, product) }
              >
                {/* <img src="plus.svg" alt="" /> */}
                ➕
              </button>
            </div>
            )

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
}

ProductCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ProductCard;
