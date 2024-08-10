import {configureStore, createSlice} from "@reduxjs/toolkit";
import { DEFAULT_ITEMS } from "./items";

const ItemSlice =  createSlice({
    name:"items",
    initialState:DEFAULT_ITEMS,
    reducers:{
        addInitialData : (store,actions)=>
        {
            console.log(store);
            
        }
    }

})



const MyntraStore  =configureStore(
    {
        reducer: {items : ItemSlice.reducer}

    }
)

export const ItemSliceaction = ItemSlice.actions;
export default MyntraStore;