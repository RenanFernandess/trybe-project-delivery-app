import React, { useState, useEffect } from 'react';
import NavBar from '../../components';
import { getAPI } from '../../utils';

export default function Products() {
  const [/* loading */, setLoading] = useState(true);
  const [/* products */, setProducts] = useState([]);

  useEffect(() => {
    getAPI('/products', (data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  // const addProductQuantity = (product, quantity) => {
  //   product.quantity += quantity;
  //   setItem(product);
  // };

  // const subtractProductQuantity = (product, quantity) => {
  //   product.quantity -= quantity;
  //   setItem(product);
  // };

  // const handleCardBtn = ({ target }, product) => {
  //   const { name } = target;
  //   if (name === 'addButton') {
  //     addProductQuantity(product, 1);
  //   }
  //   if ((name === 'minusButton') && (product.quantity > 1)) {
  //     subtractProductQuantity(product, 1);
  //   }
  // };

  return (
    <div>
      <NavBar name="rdeola@teste.com" route="customer_products" />
      {/* { loading
        ? <p>Loading...</p>
        : (
          <section>
            { products.map((product) => (<ProductCard
              key={ product.id }
              id={ product.id }
              title={ product.name }
              thumbnail={ product.urlImage }
              price={ product.price }
              quantity={ product.quantity }
              onClick={ () => handleCardBtn(e, product) }
            />)) }
            {products.map((product) => product)}
          </section>
        ) } */}
    </div>
  );
}
