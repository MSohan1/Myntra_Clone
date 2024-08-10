import { createSlice } from "@reduxjs/toolkit";

const bagItems = createSlice({
  name: "bagItems",
  initialState: [],
  reducers: {
    addToCart: (state, actions) => {
      console.log(state);
      state.push(actions.payload);
    },
    deleteFromCart: (state, actions) => {
      return state.filter((itemId) => itemId !== actions.payload);
    },
  },
});

export const bagActions = bagItems.actions;
export default bagItems;
