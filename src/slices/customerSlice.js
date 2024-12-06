/** @format */

import { createSlice } from '@reduxjs/toolkit';
import { getAllCustomers } from '../service/operations/customersApi';

const initialState = {
	customers: [],
	customer: null,
	loading: false,
};

const customersSlice = createSlice({
	name: 'customers',
	initialState: initialState,
	reducers: {
		setLoading: (state, action) => {
			state.loading = action.payload;
		},
		setCustomers: (state, action) => {
			state.customers = action.payload;
			state.loading = false;
		},
		setCustomer: (state, action) => {
			state.customer = action.payload;
			state.loading = false;
		},
		addCustomer: (state, action) => {
			state.customers.push(action.payload);
			state.loading = false;
		},
		updateCustomer: (state, action) => {
			const index = state.customers.findIndex(
				(customer) => customer.id === action.payload.id
			);
			if (index !== -1) {
				state.customers[index] = action.payload;
			}
			state.loading = false;
		},
		removeCustomer: (state, action) => {
			state.customers = state.customers.filter(
				(customer) => customer.id !== action.payload
			);
			state.loading = false;
		},
	},
});

export function refreshCustomers() {
	return async (dispatch, getState) => {
		const token = getState().auth.token;
		try {
			const response = await getAllCustomers(token);
			dispatch(setCustomers(response));
		} catch (error) {
			console.error('Failed to refresh customers:', error);
		}
	};
}

export const {
	setLoading,
	setCustomers,
	setCustomer,
	addCustomer,
	updateCustomer,
	removeCustomer,
} = customersSlice.actions;
export default customersSlice.reducer;
