import { configureStore } from "@reduxjs/toolkit";
import userReduser from "./features/user/userSlice";
import cartReducer from "./features/cart/cartSlice";
const store = configureStore({
  reducer: {
    user: userReduser,
    cart: cartReducer,
  },
});

export default store;
