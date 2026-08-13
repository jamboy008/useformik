import { configureStore } from '@reduxjs/toolkit';
import usersRed

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export default store;