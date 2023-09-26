import React, { useEffect, useRef, useState } from 'react';
import FavoriteCard from '../../components/FavoriteCard';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarsIcon from '@mui/icons-material/Stars';

const Favorite: React.FC = () => {
  const favoriteItems = useSelector((state: RootState) => state.favorite.favoriteItems);
  const isMounted2 = useRef(false);

  useEffect(() => {
    if (isMounted2.current) {
      const json = JSON.stringify(favoriteItems);
      localStorage.setItem('favoriteCart', json);
    }
    isMounted2.current = true;
  }, [favoriteItems]);

  return (
    <div className="Favorite-Main">
      <div className="favorite-wrapper">
        {favoriteItems.length === 0 ? (
          <div className="empty-favorite-main">
            <h1>Ваши закладки пустые</h1>
            <img src="https://cdn-icons-png.flaticon.com/128/9018/9018889.png" alt="" />
          </div>
        ) : (
          <div>
            <h1>
              Закладки
              <br />
              <StarsIcon sx={{ color: 'rgb(224,129,19)', fontSize: '35px' }} />
              <FavoriteIcon sx={{ color: 'white', fontSize: '35px' }} />
              <FavoriteIcon sx={{ color: 'white', fontSize: '35px' }} />
              <StarsIcon sx={{ color: 'rgb(224,129,19)', fontSize: '35px' }} />
            </h1>

            <div className="favorite-card-place">
              {favoriteItems.map((obj) => (
                <FavoriteCard {...obj} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorite;
