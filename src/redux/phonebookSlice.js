import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './phonebookOperation';

const handlePending = state => {
  state.contacts.isLoading = true;
};

const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.error;
};

const phonebookSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  reducers: {
    isFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,

    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items.push(action.payload.data);
    },
    [addContact.rejected]: handleRejected,

    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = state.contacts.items.filter(
        cont => cont.id !== action.meta.arg
      );
    },
    [deleteContact.rejected]: handleRejected,
  },
});

export const bookReducer = phonebookSlice.reducer;

export const getStoreContacts = state => state.book.contacts.items;
export const getStoreFilter = state => state.book.filter;
export const getLoading = state => state.book.contacts.isLoading;

export const { isFilter } = phonebookSlice.actions;
