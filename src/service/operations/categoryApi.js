/** @format */

import toast from 'react-hot-toast';
import { categoriesEndpoints } from '../api';
import { apiConnector } from '../apiConnector';

const {
	GET_ALL_CATEGORIES,
	CREATE_CATEGORY,
	UPDATE_CATEGORY,
	GET_CATEGORY,
	DELETE_CATEGORY,
} = categoriesEndpoints;

export const createCategory = async (token, data) => {
	try {
		const response = await apiConnector('POST', CREATE_CATEGORY, data, {
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'application/json',
		});

		console.log('CREATE CATEGORY API RESPONSE---', response.data);

		if (response.status !== 200) throw new Error("Couldn't create category");

		toast.success('Category created successfully');
		return response?.data;
	} catch (error) {
		console.log('', error);
		if (error.status === 400) {
			console.log('', error.response.data);

			const errorMessages = error.response?.data || 'An Error Occurred';
			toast.error(errorMessages);
		}
	}
};

export const GetAllCategories = async (token) => {
	let result = [];
	try {
		const response = await apiConnector('GET', GET_ALL_CATEGORIES, null, {
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'application/json',
		});

		console.log('Get All Categories api response---', response);
		if (response.status !== 200) {
			throw new Error("Couldn't get all categories");
		}

		result = response?.data;
	} catch (error) {
		console.log('Get All categories Api Error', error);
		if (error.response.status !== 404) {
			const errorMessage = error.response?.data?.error;
			toast.error(errorMessage);
		}
	}
	return result;
};

export const getCategory = async (token, categoryId) => {
	let result;
	try {
		const response = await apiConnector('GET', GET_CATEGORY(categoryId), null, {
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'application/json',
		});

		console.log('Get Category Api response---', response);
		if (response.status === 200) throw new Error("Couldn't get category");
		result = response?.data;
	} catch (error) {
		console.log('Get Category Api error', error);
		if (error.response.status === 404) {
			const errorMessage = error.response?.data?.error;
			toast.error(errorMessage);
		}
	}
	return result;
};

export const updateCategories = async (token, data) => {
	try {
		const response = await apiConnector('PUT', UPDATE_CATEGORY, data, {
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'application/json',
		});

		console.log('Update CATEGORY API RESPONSE---', response.data);

		if (response.status !== 200) throw new Error("Couldn't update category");

		toast.success('Category updated successfully');
		return response?.data;
	} catch (error) {
		console.log('', error);
		const errorMessage = error.response?.data?.errors || 'An Error Occurred';
		toast.error(errorMessage);
	}
};

export const deleteCategory = async (token, categoryId) => {
	let result = false;
	try {
		const response = await apiConnector(
			'DELETE',
			DELETE_CATEGORY(categoryId),
			null,
			{
				'Authorization': `Bearer ${token}`,
				'Content-Type': 'application/json',
			}
		);

		console.log('Delete Category Api response---', response);
		if (response.status !== 200) throw new Error("Couldn't delete category");
		result = true;
	} catch (error) {
		console.log('Delete Category Api error', error);
		if (error.response.status === 404) {
			const errorMessage = error.response?.data?.error;
			toast.error(errorMessage);
		}
	}
	return result;
};
