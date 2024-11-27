/** @format */

import { combineReducers } from '@reduxjs/toolkit';

import authReducer from '../Slices/authSlice';
// import userProfileReducer from '../slices/userProfileSlice';
import productsReducer from '../Slices/ProductListSlice';
// import serviceReducer from '../slices/serviceSlice';
import locationReducer from '../Slices/locationSlice';
import categoryReducer from '../Slices/categorySlice';
// import customerReducer from '../slices/customerProfile';
const rootReducer = combineReducers({
	auth: authReducer,
	location: locationReducer,
	product: productsReducer,
	category: categoryReducer,
});

export default rootReducer;
