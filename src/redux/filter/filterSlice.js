import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: { change(state, ction) {} },
});

export const { chnage } = filterSlice.actions;
