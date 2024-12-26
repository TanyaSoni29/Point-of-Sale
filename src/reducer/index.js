/** @format */

import { combineReducers } from '@reduxjs/toolkit';

import authReducer from '../slices/authSlice.js';
import staffUsersReducer from '../slices/staffUserSlice.js';
import productsReducer from '../slices/productListSlice.js';
import makesReducer from '../slices/makesSlice.js';
import locationReducer from '../slices/locationSlice.js';
import categoryReducer from '../slices/categorySlice.js';
import customersReducer from '../slices/customerSlice.js';
import suppliersReducer from '../slices/supplierSlice.js';

const rootReducer = combineReducers({
	auth: authReducer,
	category: categoryReducer,
	customers: customersReducer,
	location: locationReducer,
	makes: makesReducer,
	product: productsReducer,
	staffUsers: staffUsersReducer,
	suppliers: suppliersReducer,
});

export default rootReducer;
