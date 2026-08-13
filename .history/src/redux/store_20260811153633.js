import { configureStore } from '@reduxjs/toolkit';
import usersReducer from "../"

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export default store;