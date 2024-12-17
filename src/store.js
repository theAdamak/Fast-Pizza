import { configureStore } from "@reduxjs/toolkit";
import userReduser from "./features/user/userSlice";
const store = configureStore({
  reducer: {
    user: userReduser,
  },
});

export default store;
