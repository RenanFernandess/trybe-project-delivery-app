import React, { useState, useEffect } from 'react';
import NavBar from '../../components';
import { getAPI } from '../../utils';

export default function Products() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAPI('/products', (data) => {
      setProducts(data);
      setLoading(false);
    });
  });

  return (
    <div>
      <NavBar />
      { loading
        ? <p>Loading...</p>
        : (
          <section>
            { products.map((product) => <p key={ product.id }>{ product.name }</p>) }
          </section>
        ) }
    </div>
  );
}
