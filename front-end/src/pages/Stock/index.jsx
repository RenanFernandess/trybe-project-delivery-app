import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ProductCard } from '../../components';
import NavBar from '../../components/navBar';
import userContext from '../../context';
import { getAPI, patchAPI } from '../../utils';

const HIDE_TIMER = 1500;

export default function Stock() {
  const history = useHistory();
  const { role, token } = useContext(userContext);

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [stockList, setStockList] = useState([]);
  const [response, setResponse] = useState();
  const [hideMessage, setHideMessage] = useState(true);

  useEffect(() => {
    if (role !== 'seller' && role !== 'administrator') {
      history.push('/');
    }
  }, []);

  useEffect(() => {
    const getProcuctList = async () => {
      await getAPI('/products', (data) => {
        setProducts(data);
        setLoading(false);
        setStockList(data.map(() => 0));
      });
    };
    getProcuctList();
  }, []);

  const handleCardBtn = ({ target }, index) => {
    const { name } = target;
    if (name === 'addButton') {
      setStockList((prev) => prev.map((p, ind) => (ind === index ? p + 1 : p)));
    }
    if ((name === 'minusButton') && (stockList[index] > 0)) {
      setStockList((prev) => prev.map((p, ind) => (ind === index ? p - 1 : p)));
    }
  };

  const handleChange = (value, index) => {
    setStockList((prev) => prev.map((p, ind) => (ind === index ? +value : p)));
  };

  const timer = () => {
    setHideMessage(false);
    setTimeout(() => {
      setHideMessage(true);
    }, HIDE_TIMER);
  };

  const patchProduct = async (index, id) => {
    await patchAPI(
      `/products/stock/${id}`,
      (data) => {
        setResponse({ id, ...data });
        setStockList((prev) => prev.map(() => 0));
        timer();
      },
      { stockQty: stockList[index] },
      token,
    );
  };

  const saveButton = async (index, id) => {
    if (stockList[index] === 0) {
      setResponse({ id, message: 'Impossivel adicionar valor zero ao estoque' });
      timer();
    } else {
      await patchProduct(index, id);
    }
  };

  return (
    <div>
      <NavBar route={ role } />
      { loading
        ? <p>Loading...</p>
        : (
          <section className="product-list-container">
            { products.map(({ id, name, urlImage, price }, index) => (
              <div key={ id }>
                <ProductCard
                  id={ id }
                  title={ name }
                  thumbnail={ urlImage }
                  price={ price }
                  quantity={ stockList[index] }
                  onClick={ handleCardBtn }
                  onChange={ handleChange }
                  index={ index }
                />
                <button
                  type="button"
                  onClick={ () => saveButton(index, id) }
                >
                  Salvar

                </button>
                {
                  id === response?.id && (
                    response?.message
                      ? <span hidden={ hideMessage }>{response.message}</span>
                      : response?.stockQty && <span hidden={ hideMessage }>Salvo</span>

                  )
                }
              </div>
            )) }

          </section>
        ) }
    </div>
  );
}
