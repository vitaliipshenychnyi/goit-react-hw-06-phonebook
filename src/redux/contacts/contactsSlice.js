import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: JSON.parse(window.localStorage.getItem('contacts')) || [], // зчитування даних зі сховища, або []
  reducers: {
    add(state, action) {
      state.push(action.payload); // додавання нового контакту
      window.localStorage.setItem('contacts', JSON.stringify(state)); // запис до сховища
    },
    // remove(state, action) {
    //   state = state.filter(elem => elem.id !== 1);
    // },
  },
});

export const { add, remove } = contactsSlice.actions;
