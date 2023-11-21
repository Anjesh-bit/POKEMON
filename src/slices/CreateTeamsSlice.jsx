import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  pokeData: JSON.parse(localStorage.getItem("pokeCreated")) || [],
};

const teamsSlice = createSlice({
  name: "teams",
  initialState,
  reducers: {
    addTeams: (state, action) => {
      const isExists = state.pokeData.find(
        (items) => items?.id === action.payload.pokeItems.pokeItems.id
      );

      if (!isExists) {
        state.pokeData.push({
          items: action.payload.pokeItems.pokeItems,
          id: action.payload.pokeItems.pokeItems.id,
          count: 1,
        });
      } else {
        state.pokeData = state.pokeData.map((items) => {
          if (items.id === action.payload.pokeItems.pokeItems.id) {
            return {
              ...items,
              count: action.payload.pokeItems.count + 1,
            };
          } else {
            return items;
          }
        });
      }
    },
    removeFromPokeList: (state, action) => {
      const filteredPokeData = state.pokeData.filter(
        (items) => items.id !== action.payload.key
      );
      state.pokeData = filteredPokeData;
    },
  },
});

export const { addTeams, removeFromPokeList } = teamsSlice.actions;
export default teamsSlice.reducer;
