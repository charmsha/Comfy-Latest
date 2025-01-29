import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./features/Cart/cartSlice";
import userReducer from "./features/User/userSlice";

export const store = configureStore({
  reducer: {
    cartState: cartReducer,
    userState: userReducer,
  },
});
