import { configureStore } from '@reduxjs/toolkit';
import usersReducer from "../data/"

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export default store;