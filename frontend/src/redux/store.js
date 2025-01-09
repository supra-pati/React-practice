// filepath: /src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../features/form/formSlice";
import cartReducer from "../features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    form: formReducer,
    cart: cartReducer,
  },
});
