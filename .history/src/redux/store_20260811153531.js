import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export default store;