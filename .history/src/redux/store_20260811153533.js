import { configureStore } from '@reduxjs/toolkit';
impo
export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export default store;