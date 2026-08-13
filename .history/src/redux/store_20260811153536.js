import { configureStore } from '@reduxjs/toolkit';
import 
export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export default store;