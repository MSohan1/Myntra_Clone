import { createSlice } from "@reduxjs/toolkit";

const ItemSlice =  createSlice({
    name:"items",
    initialState:[],
    reducers:{
        addInitialData : (state,actions)=>
        {
            // console.log(state);
            return actions.payload;
            
        }
    }

});

export const ItemSliceAction = ItemSlice.actions;
export default ItemSlice;

