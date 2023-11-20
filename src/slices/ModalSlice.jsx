import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  pokeData: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.open = true;
      state.pokeData = action.payload.pokeItems;
    },
    closeModal: (state) => {
      state.open = false;
      state.data = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
