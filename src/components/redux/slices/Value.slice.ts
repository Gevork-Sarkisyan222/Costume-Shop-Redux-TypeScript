import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  value: string;
}

const initialState: CounterState = {
  value: '',
};

export const valueSlice = createSlice({
  name: 'value',
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setValue } = valueSlice.actions;

export default valueSlice.reducer;
