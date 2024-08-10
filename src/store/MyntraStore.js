import { configureStore } from "@reduxjs/toolkit";
import FetchStatusSlice from "./Data_From_Server";
import ItemSlice from "./Server";
import bagItems from "./bag";


const MyntraStore = configureStore({
    reducer: {
        items: ItemSlice.reducer ,
        fetch : FetchStatusSlice.reducer,
        bagItems: bagItems.reducer,

    },

  });

  
  export default MyntraStore;