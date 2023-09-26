import { createSlice } from '@reduxjs/toolkit';

interface CounterState {
  count: number;
}

const initialState = {
  count: 0,
} as CounterState;

const countFromLocalStorage = localStorage.getItem('count');
if (countFromLocalStorage !== null) {
  initialState.count = parseInt(countFromLocalStorage, 10);
}

const counterSlice = createSlice({
  name: 'count',
  initialState: { count: initialState.count },
  reducers: {
    plus: (state) => {
      state.count += 1;
      localStorage.setItem('count', state.count.toString());
    },
    minus: (state) => {
      state.count -= 1;
      localStorage.setItem('count', state.count.toString());
    },
    clearMinus: (state) => {
      state.count = 0;
      localStorage.setItem('count', state.count.toString());
    },
  },
});

export const { plus, minus, clearMinus } = counterSlice.actions;

export default counterSlice.reducer;
