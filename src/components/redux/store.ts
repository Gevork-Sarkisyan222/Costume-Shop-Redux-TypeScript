import { configureStore } from '@reduxjs/toolkit';
import checked from './slices/Checked.slice';
import count from './slices/Counter.slice';
import cart from './slices/Cart.slice';
import value from './slices/Value.slice';
import data from './slices/Data.slice';
import favorite from './slices/Favorite.slice';
import favoriteChecked from './slices/FavoriteChecked.slice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    checked,
    count,
    cart,
    value,
    data,
    favorite,
    favoriteChecked,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
