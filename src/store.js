
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../src/user/userSlice";
const store = configureStore({
    reducer : {
        user : userSlice
    }
})

export default store