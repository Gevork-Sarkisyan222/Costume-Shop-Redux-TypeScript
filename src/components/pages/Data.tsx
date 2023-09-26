import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../redux/store';
import { fetchDataUsers } from '../redux/slices/Data.slice';

const Data: React.FC = () => {
  const { data, status } = useSelector((state: RootState) => state.data);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log('Dispatching fetchDataUsers');
    dispatch(fetchDataUsers());
  }, [dispatch]);

  return (
    <div className="Data-Main">
      <div className="data-wrapper">
        <h1>Топ 10 Покупатели</h1>
        {status === 'error' ? (
          <div>
            <h1>К сожалению произошла ошибка при подгружении данных⚠️⚠️❌❌</h1>
          </div>
        ) : (
          data.map((obj) => (
            <div className="data-content-wrapper">
              <div className="data-content" key={obj.id}>
                <h2>{obj.name}</h2>
                <h2>{obj.email}</h2>
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
                  alt=""
                />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Data;
