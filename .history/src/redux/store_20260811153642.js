import { configureStore } from '@reduxjs/toolkit';
import usersReducer from "../data/users/"

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export default store;