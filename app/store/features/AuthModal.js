// modalSlice.js - Create this file for your Redux state management
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false
};

export const AuthModalSlice = createSlice({
  name: 'authModal',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    toggleModal: (state) => {
      state.isOpen = !state.isOpen;
    }
  }
});

export const { openModal, closeModal, toggleModal } = AuthModalSlice.actions;
export default AuthModalSlice.reducer;
