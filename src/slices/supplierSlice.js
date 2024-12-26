/** @format */

import { createSlice } from '@reduxjs/toolkit';
import { getAllSupplier } from '../service/operations/suppliersApi';

const initialState = {
	suppliers: [],
	supplier: null,
	loading: false,
};

const suppliersSlice = createSlice({
	name: 'suppliers',
	initialState: initialState,
	reducers: {
		setLoading: (state, action) => {
			state.loading = action.payload;
		},
		setSuppliers: (state, action) => {
			state.suppliers = action.payload;
			state.loading = false;
		},
		setSupplier: (state, action) => {
			state.supplier = action.payload;
			state.loading = false;
		},
		addSupplier: (state, action) => {
			state.suppliers.push(action.payload);
			state.loading = false;
		},
		updateSupplier: (state, action) => {
			const index = state.suppliers.findIndex(
				(supplier) => supplier.id === action.payload.id
			);
			if (index !== -1) {
				state.suppliers[index] = action.payload;
			}
			state.loading = false;
		},
		removeSupplier: (state, action) => {
			state.suppliers = state.suppliers.filter(
				(supplier) => supplier.id !== action.payload
			);
			state.loading = false;
		},
	},
});

export function refreshSuppliers() {
	return async (dispatch, getState) => {
		const token = getState().auth.token;
		try {
			const response = await getAllSupplier(token);
			dispatch(setSuppliers(response));
		} catch (error) {
			console.error('Failed to refresh suppliers:', error);
		}
	};
}

export const {
	setLoading,
	setSuppliers,
	setSupplier,
	addSupplier,
	updateSupplier,
	removeSupplier,
} = suppliersSlice.actions;
export default suppliersSlice.reducer;
