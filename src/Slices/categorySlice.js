/** @format */

import { createSlice } from '@reduxjs/toolkit';
import { categorylist } from '../core/json/categorylistdata';

const initialState = {
	categories: categorylist,
	category: null,
	loading: false,
};

const categoriesSlice = createSlice({
	name: 'category',
	initialState: initialState,
	reducers: {
		setLoading: (state, action) => {
			state.loading = action.payload;
		},
		setCategories: (state, action) => {
			state.categories = action.payload;
			state.loading = false;
		},
		setCategory: (state, action) => {
			state.category = action.payload;
			state.loading = false;
		},
		addCategory: (state, action) => {
			state.categories.push(action.payload);
			state.loading = false;
		},
		updateCategory: (state, action) => {
			const index = state.categories.findIndex(
				(category) => category.id === action.payload.id
			);
			if (index !== -1) {
				state.categories[index] = action.payload;
			}
			state.loading = false;
		},
		removeCategory: (state, action) => {
			state.categories = state.categories.filter(
				(category) => category.id !== action.payload
			);
			state.loading = false;
		},
	},
});

// export function refreshCategories() {
// 	return async (dispatch, getState) => {
// 		// const token = getState().auth.token;
// 		try {
// 			// const response = await getAllProducts(token);
// 			// dispatch(setProducts(response));
// 		} catch (error) {
// 			console.error('Failed to refresh categories:', error);
// 		}
// 	};
// }

export const {
	setLoading,
	setCategories,
	setCategory,
	addCategory,
	updateCategory,
	removeCategory,
} = categoriesSlice.actions;
export default categoriesSlice.reducer;
