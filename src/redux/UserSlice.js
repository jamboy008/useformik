import { createSlice } from '@reduxjs/toolkit'
import { users } from '../data/users'

const initialState = {
	users: users,
}

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		addUser: (state, action) => {
			state.users.push(action.payload)
		},

		deleteUser: (state, action) => {
			state.users = state.users.filter(user => user.id !== action.payload)
		},

		editUser: (state, action) => {
			const index = state.users.findIndex(user => user.id === action.payload.id)
			if (index !== -1) {
				state.users[index] = action.payload
			}
		},
	},
})

export const { addUser, deleteUser, editUser } = usersSlice.actions
export default usersSlice.reducer
