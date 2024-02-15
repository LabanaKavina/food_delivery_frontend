
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../src/user/userSlice";
import itemsSlice from "./items/itemsSlice";
const store = configureStore({
    reducer : {
        user : userSlice,
        items: itemsSlice
    }
})

export default store