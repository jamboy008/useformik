import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './UserSlice'; // UserSlice (yoki UsersSlice) reducer'ingizni chaqirib olasiz

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export default store;