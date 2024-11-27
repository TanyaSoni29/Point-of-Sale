/** @format */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	staffUsers: [],
	staffUser: null,
	loading: false,
};

const staffUsersSlice = createSlice({
	name: 'staffUsers',
	initialState: initialState,
	reducers: {
		setLoading: (state, action) => {
			state.loading = action.payload;
		},
		setStaffUsers: (state, action) => {
			state.staffUsers = action.payload;
			state.loading = false;
		},
		setStaffUser: (state, action) => {
			state.staffUser = action.payload;
			state.loading = false;
		},
		addStaffUser: (state, action) => {
			state.staffUsers.push(action.payload);
			state.loading = false;
		},
		updateStaffUser: (state, action) => {
			const index = state.staffUsers.findIndex(
				(staffUser) => staffUser.id === action.payload.id
			);
			if (index !== -1) {
				state.staffUsers[index] = action.payload;
			}
			state.loading = false;
		},
		removeStaffUser: (state, action) => {
			state.staffUsers = state.staffUsers.filter(
				(staffUser) => staffUser.id !== action.payload
			);
			state.loading = false;
		},
	},
});

// export function refreshStaffUsers() {
// 	return async (dispatch, getState) => {
// 		// const token = getState().auth.token;
// 		try {
// 			// const response = await getAllProducts(token);
// 			// dispatch(setProducts(response));
// 		} catch (error) {
// 			console.error('Failed to refresh staffUsers:', error);
// 		}
// 	};
// }

export const {
	setLoading,
	setStaffUsers,
	setStaffUser,
	addStaffUser,
	updateStaffUser,
	removeStaffUser,
} = staffUsersSlice.actions;
export default staffUsersSlice.reducer;
