/** @format */

import { combineReducers } from '@reduxjs/toolkit';

import authReducer from '../Slices/authSlice';
import staffUsersReducer from '../Slices/staffUserSlice';
import productsReducer from '../Slices/ProductListSlice';
import makesReducer from '../Slices/MakesSlice';
import locationReducer from '../Slices/locationSlice';
import categoryReducer from '../Slices/categorySlice';
import customersReducer from '../Slices/customerSlice';
const rootReducer = combineReducers({
	auth: authReducer,
	category: categoryReducer,
	customers: customersReducer,
	location: locationReducer,
	makes: makesReducer,
	product: productsReducer,
	staffUsers: staffUsersReducer,
});

export default rootReducer;
