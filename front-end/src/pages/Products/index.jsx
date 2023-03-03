import React, { useState, useEffect } from 'react';
import NavBar, { ProductCard } from '../../components';
import { getAPI } from '../../utils';

export default function Products() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  // const [cartList, setCartList] = useState([]);

  useEffect(() => {
    const getProcuctList = async () => {
      await getAPI('/products', (data) => {
        setProducts(data);
        setLoading(false);
        console.log(products);
      });
    };
    getProcuctList();
  }, []);

  const handleCardBtn = ({ target }, product) => {
    const { name } = target;
    if (name === 'addButton') {
      product.quantity += 1;
    }
    if ((name === 'minusButton') && (product.quantity > 1)) {
      product.quantity -= 1;
    }
    // setItem(product);
  };

  return (
    <div>
      <NavBar route="customer_products" />
      { loading
        ? <p>Loading...</p>
        : (
          <section className="product-list-container">
            { products.map(({ id, name, urlImage, price }) => (<ProductCard
              key={ id }
              id={ id }
              title={ name }
              thumbnail={ urlImage }
              price={ price }
              quantity={ /* product.quantity */ 0 }
              onClick={ handleCardBtn }
            />)) }

          </section>
        ) }
    </div>
  );
}
