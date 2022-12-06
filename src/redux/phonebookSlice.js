import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const phonebookSlice = createSlice({
  name: 'book',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      const contactIs = state.contacts
        .map(cont => cont.name.includes(action.payload.name))
        .includes(true);
      !contactIs
        ? (state.contacts = [action.payload, ...state.contacts])
        : alert(`${action.payload.name} is already in contacns`);
    },
    removeContact(state, action) {
      state.contacts = state.contacts.filter(
        cont => cont.id !== action.payload
      );
    },
    isFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

const persistConfig = {
  key: 'book',
  storage,
  whitelist: ['contacts'],
};

export const bookReducer = persistReducer(
  persistConfig,
  phonebookSlice.reducer
);

export const getStoreContacts = state => state.book.contacts;
export const getStoreFilter = state => state.book.filter;

export const { addContact, removeContact, isFilter } = phonebookSlice.actions;
