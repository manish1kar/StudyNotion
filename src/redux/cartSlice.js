import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        totalItems : localStorage.getItem("totalItems") ? 
        JSON.parse(localStorage.getItem("totalItems")) : 
        0
    },
    reducers : {
        setTotalItems : (state, action) => {
            state.cart = action.payload;
        }
    }
});

export const {setTotalItems} = cartSlice.actions;

export default cartSlice.reducer;