import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./UserSlice

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export default store;
