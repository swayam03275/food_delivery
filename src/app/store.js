import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice.js"
import productReducer from "../features/product/productslice.js"
import cartReducer from "../features/cart/cartSlice.js"
 export const store=configureStore({
    reducer:{
        auth:authReducer,
        cart:cartReducer,
        products:productReducer


    }
})
