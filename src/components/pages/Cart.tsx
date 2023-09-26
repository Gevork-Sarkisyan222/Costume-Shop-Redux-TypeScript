import React, { useEffect } from 'react';
import CartCard from './CartCard';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '.././redux/store';
import { ICardProps } from '../../components/Card';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { clearItem } from '../redux/slices/Cart.slice';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { clearMinus } from '../redux/slices/Counter.slice';
import { clearChecked } from '../redux/slices/Checked.slice';

const Cart: React.FC = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    const messageClear = window.confirm('Вы действительно хотите очистить корзину');

    if (messageClear) {
      dispatch(clearItem());
      dispatch(clearMinus());
      dispatch(clearChecked());
    }
  };

  return (
    <div className="Cart-Main">
      <div className="cart-wrapper">
        <div className="Cart-inside-content">
          {items.length === 0 ? (
            <div className="empty-items">
              <h1>Ваша корзина пустая добавьте хоть пару костюмов</h1>
              <img
                src="https://gagaru.club/uploads/posts/2023-02/1677083617_gagaru-club-p-stilnii-chernii-kostyum-muzhskoi-oboi-14.jpg"
                alt=""
              />
              <Link to="/">
                <Button
                  sx={{
                    position: 'absolute',
                    left: '283px',
                    top: '242px',
                    width: '174px',
                    color: 'white',
                    borderColor: 'rgb(224,129,19)',
                    '&:hover': {
                      borderColor: 'rgb(224,129,19)',
                    },
                  }}
                  variant="outlined">
                  <KeyboardReturnIcon />
                  Назад
                </Button>
              </Link>
            </div>
          ) : (
            <div className="cart-wrapper-content">
              <h1>Корзина товаров 🛒🛒🛒</h1>
              <div style={{ position: 'fixed', zIndex: '1' }}>
                <Button
                  onClick={handleClearCart}
                  sx={{
                    positon: 'absolute',
                    left: '450px',
                    top: '79px',
                    width: '257px',
                    color: 'white',
                    borderColor: 'rgb(224,129,19)',
                    '&:hover': {
                      borderColor: 'rgb(224,129,19)',
                      color: 'brown',
                    },
                  }}
                  variant="outlined">
                  Очистить корзину
                </Button>
              </div>
              <div className="cart-card-render-place">
                {items.map((obj: ICardProps) => (
                  <CartCard {...obj} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
