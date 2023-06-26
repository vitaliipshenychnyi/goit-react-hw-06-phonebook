import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    add(state, action) {
      state = action.payload;
    },
    remove(state, action) {
      state = state.filter(elem => elem.id !== 1);
    },
  },
});

export const { add, remove } = contactsSlice.actions;
