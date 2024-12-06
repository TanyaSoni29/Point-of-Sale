/** @format */

import { createSlice } from '@reduxjs/toolkit';
import { getAllLocations } from '../service/operations/locationApi';

const initialState = {
	locations: [],
	location: null,
	loading: false,
};

const locationsSlice = createSlice({
	name: 'location',
	initialState: initialState,
	reducers: {
		setLoading: (state, action) => {
			state.loading = action.payload;
		},
		setLocations: (state, action) => {
			state.locations = action.payload;
			state.loading = false;
		},
		setLocation: (state, action) => {
			state.location = action.payload;
			state.loading = false;
		},
		addLocation: (state, action) => {
			state.locations.push(action.payload);
			state.loading = false;
		},
		updateLocations: (state, action) => {
			const index = state.locations.findIndex(
				(location) => location.id === action.payload.id
			);
			if (index !== -1) {
				state.locations[index] = action.payload;
			}
			state.loading = false;
		},
		removeLocation: (state, action) => {
			state.locations = state.locations.filter(
				(location) => location.id !== action.payload
			);
			state.loading = false;
		},
	},
});

export function refreshLocations() {
	return async (dispatch, getState) => {
		const token = getState().auth.token;
		try {
			const response = await getAllLocations(token);
			dispatch(setLocations(response));
		} catch (error) {
			console.error('Failed to refresh locations:', error);
		}
	};
}

export const {
	setLoading,
	setLocations,
	setLocation,
	addLocation,
	updateLocations,
	removeLocation,
} = locationsSlice.actions;
export default locationsSlice.reducer;
