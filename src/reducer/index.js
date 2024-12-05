/** @format */

import { combineReducers } from '@reduxjs/toolkit';

import authReducer from '../slices/authSlice';
import staffUsersReducer from '../slices/staffUserSlice';
import productsReducer from '../slices/ProductListSlice';
import makesReducer from '../slices/MakesSlice';
import locationReducer from '../slices/locationSlice';
import categoryReducer from '../slices/categorySlice';
import customersReducer from '../slices/customerSlice';
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
