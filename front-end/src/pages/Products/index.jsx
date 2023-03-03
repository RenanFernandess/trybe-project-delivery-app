import React, { useState, useEffect } from 'react';
import NavBar, { ProductCard } from '../../components';
import { getAPI, localStorageHandling } from '../../utils';
import { USER_KEY } from '../../constants';

export default function Products() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const user = localStorageHandling.getItem(USER_KEY);
  console.log('user', user);
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
      <NavBar name={ user.name } route="customer_products" />
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
              // onClick={ () => handleCardBtn(e, product) }
            />)) }

          </section>
        ) }
    </div>
  );
}
