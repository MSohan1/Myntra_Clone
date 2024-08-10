import {configureStore, createSlice} from "@reduxjs/toolkit";
import { DEFAULT_ITEMS } from "./items";

const ItemSlice =  createSlice({
    name:"items",
    initialState:DEFAULT_ITEMS,
    reducers:{
        addInitialData : (store,actions)=>
        {
            return store;
        }
    }

})

export const ItemSliceAction = ItemSlice.actions;
export default ItemSlice;