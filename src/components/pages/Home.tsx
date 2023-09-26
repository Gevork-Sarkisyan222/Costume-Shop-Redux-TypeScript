import React, { useRef, useEffect, useState, useCallback } from 'react';
import Card from '../Card';
import { useDispatch, useSelector } from 'react-redux';
import { setValue } from '../redux/slices/Value.slice';
import { RootState } from '../redux/store';
import debounce from 'lodash.debounce';

const array = [
  {
    id: 1,
    title: 'КОСТЮМ СЕРО-СИНИЙ В КЛЕТКУ',
    image:
      'https://www.trimforti.ru/upload/resize_cache/iblock/736/268_402_2/736f9f9fad68dbe30a614ae13478f798.jpg',
    price: '56 500 руб',
  },
  {
    id: 2,
    title: 'КОСТЮМ арт.12896',
    image:
      'https://www.trimforti.ru/upload/resize_cache/iblock/165/268_402_2/khllskgpm6gefl3cbge2mn9wsz9v8x81.jpg',
    price: '67 200 руб',
  },
  {
    id: 3,
    title: 'КОСТЮМ арт.12901',
    image:
      'https://www.trimforti.ru/upload/resize_cache/iblock/e33/268_402_2/e3349274325c88a737bbd7aaa9236fe4.jpg',
    price: ' 67 200 руб',
  },
  {
    id: 4,
    title: 'ТЕМНО-СИНИЙ В ПОЛОСКУ',
    image:
      'https://www.trimforti.ru/upload/resize_cache/iblock/ae4/268_402_2/ae4fe7d7e9c231fe33c56c04339cd2e1.jpg',
    price: '79 000 руб',
  },
  {
    id: 5,
    title: 'СЕРО-СИНИЙ КОСТЮМ',
    image:
      'https://www.trimforti.ru/upload/resize_cache/iblock/e33/268_402_2/e3349274325c88a737bbd7aaa9236fe4.jpg',
    price: '55 000 руб',
  },
  {
    id: 6,
    title: 'КОСТЮМ ЛЕН С ШЕРСТЬЮ',
    image:
      'https://www.trimforti.ru/upload/resize_cache/iblock/12e/268_402_2/12e51179bd47e1ce9fc39b3727394def.jpg',
    price: ' 67 200 руб',
  },
];

const Home: React.FC = () => {
  const value = useSelector((state: RootState) => state.value.value);
  const dispatch = useDispatch();
  const isMounted = useRef<boolean>(false);
  const isMounted2 = useRef<boolean>(false);
  const [find, setFind] = useState('');

  const items = useSelector((state: RootState) => state.cart.items);
  const favoriteItems = useSelector((state: RootState) => state.favorite.favoriteItems);

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem('cart', json);
    }
    isMounted.current = true;
  }, [items]);

  useEffect(() => {
    if (isMounted2.current) {
      const json = JSON.stringify(favoriteItems);
      localStorage.setItem('favoriteCart', json);
    }
    isMounted2.current = true;
  }, [favoriteItems]);

  const filteredArray = array.filter((obj) => {
    return obj.title.toLowerCase().includes(value.toLowerCase());
  });

  const updateValue = useCallback(
    debounce((str) => {
      dispatch(setValue(str));
      console.log('hello input');
    }, 260),
    [],
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFind(event.target.value);
    updateValue(event.target.value);
  };

  return (
    <div className="all-content">
      <div className="main-wrapper">
        <h1 className="title">Новые костюмы для мужиков</h1>
        <div className="input-container">
          <input value={find} onChange={onChangeInput} type="text" placeholder="Найти костюм...." />
          <button className="button">Найти</button>
        </div>
        <div className="card-render-place">
          {filteredArray.length > 0 ? (
            filteredArray.map((obj) => (
              <Card
                key={obj.id}
                title={obj.title}
                image={obj.image}
                price={obj.price}
                id={obj.id}
              />
            ))
          ) : (
            <div className="Not-found-input-main">
              <h1>По вашему запросу нечего не найдено</h1>
              <h2>404</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
