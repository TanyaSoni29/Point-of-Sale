/** @format */

import { createSlice } from '@reduxjs/toolkit';
// import { productlistdata } from '../core/json/productlistdata';
import { getAllProducts } from '../service/operations/productApi';

const initialState = {
	products: [],
	toggle_header: false,
	product: null,
	loading: false,
	layoutstyledata: localStorage.getItem('layoutStyling'),
};

const productSlice = createSlice({
	name: 'product',
	initialState: initialState,
	reducers: {
		setLoading: (state, action) => {
			state.loading = action.payload;
		},
		setProducts: (state, action) => {
			state.products = action.payload;
			state.loading = false;
		},
		setProduct: (state, action) => {
			state.product = action.payload;
			state.loading = false;
		},
		addProduct: (state, action) => {
			state.products.push(action.payload);
			state.loading = false;
		},
		updateProduct: (state, action) => {
			const index = state.products.findIndex(
				(product) => product.id === action.payload.id
			);
			if (index !== -1) {
				state.products[index] = action.payload;
			}
			state.loading = false;
		},
		removeProduct: (state, action) => {
			state.products = state.products.filter(
				(product) => product.id !== action.payload
			);
			state.loading = false;
		},
		setToggleHeader: (state, action) => {
			state.toggle_header = action.payload;
		},

		toggleHeaderState: (state) => {
			state.toggle_header = !state.toggle_header;
		},
		setLayoutStyleData: (state, action) => {
			state.layoutstyledata = action.payload;
			localStorage.setItem('layoutStyling', action.payload); // Update localStorage
		},
	},
});

export function refreshProducts() {
	return async (dispatch, getState) => {
		const token = getState().auth.token;
		try {
			const response = await getAllProducts(token);
			dispatch(setProducts(response));
		} catch (error) {
			console.error('Failed to refresh products:', error);
		}
	};
}

export const {
	setLoading,
	setProducts,
	setProduct,
	addProduct,
	updateProduct,
	removeProduct,
	setToggleHeader,
	toggleHeaderState,
	setLayoutStyleData,
} = productSlice.actions;
export default productSlice.reducer;
