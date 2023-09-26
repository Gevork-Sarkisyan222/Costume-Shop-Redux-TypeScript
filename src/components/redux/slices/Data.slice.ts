import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

type DataTypes = {
  id: number;
  name: string;
  email: string;
};

enum StatusKey {
  PENDING = 'loading',
  FULFILLDED = 'success',
  REJECTED = 'error',
}

interface CounterState {
  data: DataTypes[];
  status: StatusKey;
}

const initialState: CounterState = {
  data: [],
  status: StatusKey.PENDING,
};

export const fetchDataUsers = createAsyncThunk<DataTypes[]>('data/fetchById', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  return response.data;
});

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDataUsers.pending, (state) => {
      console.log('загрузка данных....');
      state.status = StatusKey.PENDING;
      state.data = [];
    });
    builder.addCase(fetchDataUsers.fulfilled, (state, action: PayloadAction<DataTypes[]>) => {
      console.log(state, 'данные получены успешно');
      state.status = StatusKey.FULFILLDED;
      state.data = action.payload;
    });
    builder.addCase(fetchDataUsers.rejected, (state) => {
      console.warn('произошла ошибка данные не получены');
      state.status = StatusKey.REJECTED;
      state.data = [];
    });
  },
});

export const {} = dataSlice.actions;

export default dataSlice.reducer;
