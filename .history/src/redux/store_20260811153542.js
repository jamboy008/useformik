import { configureStore } from '@reduxjs/toolkit';
import u
export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export default store;