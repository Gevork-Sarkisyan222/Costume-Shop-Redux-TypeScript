import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getCartFromLS } from './utils/getCardsFromLS';

interface CounterState {
  id: number;
  title: string;
  image: string;
  price: string;
}

const initialState = {
  // items: [] as CounterState[],
  items: getCartFromLS() as CounterState[],
};

export const cartItems = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CounterState>) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearItem: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearItem } = cartItems.actions;
export default cartItems.reducer;
