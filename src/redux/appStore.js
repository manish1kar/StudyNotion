import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import profileReducer from "./profileSlice";
import cartReducer from "./cartSlice";

const appStore = configureStore({
    reducer : {
        auth : authReducer,
        profile : profileReducer,
        cart : cartReducer
    }
})

export default appStore;