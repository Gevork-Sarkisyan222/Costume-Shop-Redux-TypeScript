import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface ICheckedState {
  [key: number]: { checked: boolean };
}

const checkedStateFromLocalStorage = localStorage.getItem('checkedState');
const initialState: ICheckedState = checkedStateFromLocalStorage
  ? JSON.parse(checkedStateFromLocalStorage)
  : {};

export const checkedSlice = createSlice({
  name: 'checked',
  initialState,
  reducers: {
    setChecked: (state, action: PayloadAction<{ id: number; value: boolean }>) => {
      const { id, value } = action.payload;
      state[id] = { checked: value };

      localStorage.setItem('checkedState', JSON.stringify(state));
    },
    clearChecked: (state: ICheckedState) => {
      Object.keys(state).forEach((key) => delete state[parseInt(key, 10)]);

      // Сохраняем обновленное состояние в localStorage
      localStorage.setItem('checkedState', JSON.stringify(state));
    },
  },
});

export const { setChecked, clearChecked } = checkedSlice.actions;
export default checkedSlice.reducer;
