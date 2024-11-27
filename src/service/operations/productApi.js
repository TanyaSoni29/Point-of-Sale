/** @format */

import toast from 'react-hot-toast';
import { productEndpoints } from '../api';
import { apiConnector } from '../apiConnector';

const {
	GET_ALL_PRODUCTS,
	GET_PRODUCT,
	UPDATE_PRODUCT,
	DELETE_PRODUCT,
	CREATE_PRODUCT,
} = productEndpoints;

export const createProduct = async (token, data) => {
	try {
		const response = await apiConnector('POST', CREATE_PRODUCT, data, {
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'application/json',
		});

		console.log('CREATE PRODUCT API RESPONSE---', response.data);

		if (response.status !== 201) throw new Error("Couldn't create product");

		toast.success('Product created successfully');
		return response?.data;
	} catch (error) {
		console.log('', error);
		const errorMessage = error.response?.data?.errors || 'An Error Occurred';
		toast.error(errorMessage);
	}
};

export const getAllProducts = async (token) => {
	let result = [];
	try {
		const response = await apiConnector('GET', GET_ALL_PRODUCTS, null, {
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'application/json',
		});

		console.log('Get All Product api response---', response);
		if (response.status !== 200) {
			throw new Error("Couldn't get all product");
		}

		result = response?.data;
	} catch (error) {
		console.log('Get All product Api Error', error);
		if (error.response.status !== 404) {
			const errorMessage = error.response?.data?.error;
			toast.error(errorMessage);
		}
	}
	return result;
};

export const getProduct = async (token, productId) => {
	let result;
	try {
		const response = await apiConnector('GET', GET_PRODUCT(productId), null, {
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'application/json',
		});

		console.log('Get Product Api response---', response);
		if (response.status === 200) throw new Error("Couldn't get product");
		result = response?.data;
	} catch (error) {
		console.log('Get Product Api error', error);
		if (error.response.status === 404) {
			const errorMessage = error.response?.data?.error;
			toast.error(errorMessage);
		}
	}
	return result;
};

export const updateProduct = async (token, data) => {
	try {
		const response = await apiConnector('PUT', UPDATE_PRODUCT, data, {
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'application/json',
		});

		console.log('Update PRODUCT API RESPONSE---', response.data);

		if (response.status !== 201) throw new Error("Couldn't update product");

		toast.success('Product updated successfully');
		return response?.data;
	} catch (error) {
		console.log('', error);
		const errorMessage = error.response?.data?.errors || 'An Error Occurred';
		toast.error(errorMessage);
	}
};

export const deleteProduct = async (token, productId) => {
	let result = false;
	try {
		const response = await apiConnector(
			'DELETE',
			DELETE_PRODUCT(productId),
			null,
			{
				'Authorization': `Bearer ${token}`,
				'Content-Type': 'application/json',
			}
		);

		console.log('Delete Product Api response---', response);
		if (response.status === 200) throw new Error("Couldn't delete product");
		result = true;
	} catch (error) {
		console.log('Delete Product Api error', error);
		if (error.response.status === 404) {
			const errorMessage = error.response?.data?.error;
			toast.error(errorMessage);
		}
	}
	return result;
};
