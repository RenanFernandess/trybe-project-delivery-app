import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Loading, ProductCard } from '../../components';
import NavBar from '../../components/navBar';
import userContext from '../../context';
import { getAPI, patchAPI } from '../../utils';

const HIDE_TIMER = 2000;

export default function Stock() {
  const history = useHistory();
  const { role, token } = useContext(userContext);

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [stockList, setStockList] = useState([]);
  const [response, setResponse] = useState({ id: 0, message: '', stockQty: 0 });
  const [hideMessage, setHideMessage] = useState(true);

  useEffect(() => {
    if (role !== 'seller' && role !== 'administrator') {
      history.push('/');
    }
  }, [history, role]);

  const getProcuctList = async () => {
    await getAPI('/products', (data) => {
      setProducts(data);
      setLoading(false);
      setStockList(data.map(() => 0));
    });
  };

  useEffect(() => {
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
        setResponse({ id, message: '', ...data });
        setStockList((prev) => prev.map(() => 0));
        timer();
      },
      { stockQty: stockList[index] },
      token,
    );
  };

  const saveButton = async (index, id) => {
    if (stockList[index] === 0) {
      setResponse((prevState) => ({
        ...prevState, id, message: 'Impossivel adicionar valor zero ao estoque' }));
      timer();
    } else {
      await patchProduct(index, id);
      await getProcuctList();
    }
  };

  return (
    <div>
      <NavBar route={ role } />
      { loading
        ? <Loading />
        : (
          <section className="c-body c-list-card">
            { products.map(({ id, name, urlImage, price, stockQty }, index) => (
              <ProductCard
                key={ id }
                id={ id }
                title={ name }
                thumbnail={ urlImage }
                stockQty={ stockQty }
                price={ price }
                quantity={ stockList[index] || 0 }
                onClick={ handleCardBtn }
                onChange={ handleChange }
                index={ index }
                saveButton={ saveButton }
                response={ response }
                hideMessage={ hideMessage }
              />
            )) }

          </section>
        ) }
    </div>
  );
}
