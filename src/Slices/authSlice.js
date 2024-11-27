/** @format */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	loading: false,
	token: localStorage.getItem('token')
		? JSON.parse(localStorage.getItem('token'))
		: null,
	isAuth: localStorage.getItem('token') ? true : false,
	user: null,
};

const authSlice = createSlice({
	name: 'auth',
	initialState: initialState,
	reducers: {
		setLoading(state, action) {
			state.loading = action.payload;
		},
		setToken(state, action) {
			state.token = action.payload;
		},
		setUser(state, action) {
			state.user = action.payload;
		},
		setIsAuth(state, action) {
			state.isAuth = action.payload;
		},
	},
});

export const { setLoading, setIsAuth, setToken, setUser } = authSlice.actions;
export default authSlice.reducer;
