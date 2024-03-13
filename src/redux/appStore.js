import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import profileReducer from "./profileSlice";
import cartReducer from "./cartSlice";
import viewCourseReducer from "./viewCourseSlice";
import courseReducer from "./courseSlice";

const appStore = configureStore({
    reducer : {
        auth : authReducer,
        profile : profileReducer,
        cart : cartReducer,
        viewCourse : viewCourseReducer,
        course : courseReducer
    }
})

export default appStore;