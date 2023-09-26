// FavoriteChecked.slice.ts

import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IFavoriteChecked {
  [key: number]: boolean;
}

const initialState: IFavoriteChecked = JSON.parse(localStorage.getItem('favoriteChecked') || '{}');

const favoriteCheckedSlice = createSlice({
  name: 'favoriteChecked',
  initialState,
  reducers: {
    toggleFavoriteItem(state, action: PayloadAction<number>) {
      const id = action.payload;
      if (state[id]) {
        delete state[id];
      } else {
        state[id] = true;
      }
      localStorage.setItem('favoriteChecked', JSON.stringify(state));
    },
  },
});

export const { toggleFavoriteItem } = favoriteCheckedSlice.actions;
export default favoriteCheckedSlice.reducer;
