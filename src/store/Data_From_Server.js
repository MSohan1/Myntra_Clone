import { createSlice } from "@reduxjs/toolkit";

const FetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false,
    currentlyFetching: false,
  },
  reducers: {
    makeFetchDone: (state) => {
       state.fetchDone= true;
    },
    makeFetchingStarted: (state) => {
      // console.log(state);
      
         state.currentlyFetching = true;
      },
      makeFetchingEnded: (state) => {
         state.currentlyFetching= false;
      },
  },
});


export const FetchStatusSliceAction = FetchStatusSlice.actions;

export default FetchStatusSlice;
