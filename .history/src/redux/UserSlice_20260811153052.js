import { createSlice } from "@reduxjs/toolkit";
import { users } from "../data/users";

const initialState = {
  users: users,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    // 1. O'chirish reducer'i
    deleteUser: (state, action) => {
      // action.payload ichida user.id keladi
      state.users = state.users.filter((user) => user.id !== action.payload);
    },

    // 2. Tahrirlash (Edit) reducer'i
    editUser: (state, action) => {
      // action.payload ichida yangilangan user obyekti keladi
      const index = state.users.findIndex((user) => user.id === action.payload.id);
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },
  },
});

export const { deleteUser, editUser } = usersSlice.actions;
export default usersSlice.reducer;