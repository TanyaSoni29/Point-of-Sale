/** @format */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	makes: [],
	make: null,
	loading: false,
};

const makesSlice = createSlice({
	name: 'makes',
	initialState: initialState,
	reducers: {
		setLoading: (state, action) => {
			state.loading = action.payload;
		},
		setMakes: (state, action) => {
			state.makes = action.payload;
			state.loading = false;
		},
		setMake: (state, action) => {
			state.make = action.payload;
			state.loading = false;
		},
		addMake: (state, action) => {
			state.makes.push(action.payload);
			state.loading = false;
		},
		updateMake: (state, action) => {
			const index = state.makes.findIndex(
				(make) => make.id === action.payload.id
			);
			if (index !== -1) {
				state.makes[index] = action.payload;
			}
			state.loading = false;
		},
		removeMake: (state, action) => {
			state.makes = state.makes.filter((make) => make.id !== action.payload);
			state.loading = false;
		},
	},
});

// export function refreshMakes() {
// 	return async (dispatch, getState) => {
// 		// const token = getState().auth.token;
// 		try {
// 			// const response = await getAllProducts(token);
// 			// dispatch(setProducts(response));
// 		} catch (error) {
// 			console.error('Failed to refresh makes:', error);
// 		}
// 	};
// }

export const {
	setLoading,
	setMakes,
	setMake,
	addMake,
	updateMake,
	removeMake,
} = makesSlice.actions;
export default makesSlice.reducer;
