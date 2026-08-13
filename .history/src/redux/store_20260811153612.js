import { configureStore } from '@reduxjs/toolkit';
import usersReducer 

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export default store;