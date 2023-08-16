// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./redux/Slices/CartSlice";

export const store=configureStore({
   reducer:{
        cart:CartSlice
    }
})
export default store
