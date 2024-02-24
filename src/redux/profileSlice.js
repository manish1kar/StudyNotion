import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
    name :"profile",
    initialState:{
        user:null
    },
    reducers : {
        addUser : (state, action) => {
            state.user = action.payload;
        }
    }
});

export const {addUser} = profileSlice.actions;

export default profileSlice.reducer;