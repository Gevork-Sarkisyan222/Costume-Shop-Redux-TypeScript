import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getFavoriteFromLS } from '../slices/utils/getFavoriteFromLS';

interface FavoriteState {
  id: number;
  title: string;
  image: string;
  price: string;
}

const initialState = {
  favoriteItems: getFavoriteFromLS() as FavoriteState[],
};

export const favoriteItems = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addItemFavorite: (state, action: PayloadAction<FavoriteState>) => {
      state.favoriteItems.push(action.payload);
    },
    removeItemFavorite: (state, action: PayloadAction<number>) => {
      state.favoriteItems = state.favoriteItems.filter((item) => item.id !== action.payload);
    },
    clearItemFavorite: (state) => {
      state.favoriteItems = [];
    },
  },
});

export const { addItemFavorite, removeItemFavorite, clearItemFavorite } = favoriteItems.actions;
export default favoriteItems.reducer;
