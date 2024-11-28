/** @format */

import toast from 'react-hot-toast';
import { customerEndpoints } from '../api';
import { apiConnector } from '../apiConnector';

const {
	GET_ALL_CUSTOMERS,
	CREATE_CUSTOMER,
	UPDATE_CUSTOMER,
	GET_CUSTOMER,
	DELETE_CUSTOMER,
} = customerEndpoints;

export const createCustomer = async (token, data) => {
	try {
		const response = await apiConnector('POST', CREATE_CUSTOMER, data, {
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'application/json',
		});

		console.log('CREATE CUSTOMER API RESPONSE---', response.data);

		if (response.status !== 201) throw new Error("Couldn't create customer");

		toast.success('Customer created successfully');
		return response?.data;
	} catch (error) {
		console.log('', error);
		const errorMessage = error.response?.data?.errors || 'An Error Occurred';
		toast.error(errorMessage);
	}
};

export const getAllCustomers = async (token) => {
	let result = [];
	try {
		const response = await apiConnector('GET', GET_ALL_CUSTOMERS, null, {
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'application/json',
		});

		console.log('Get All Customers api response---', response);
		if (response.status !== 200) {
			throw new Error("Couldn't get all customers");
		}

		result = response?.data;
	} catch (error) {
		console.log('Get All customers Api Error', error);
		if (error.response.status !== 404) {
			const errorMessage = error.response?.data?.error;
			toast.error(errorMessage);
		}
	}
	return result;
};

export const getCustomer = async (token, customerId) => {
	let result;
	try {
		const response = await apiConnector('GET', GET_CUSTOMER(customerId), null, {
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'application/json',
		});

		console.log('Get Customer Api response---', response);
		if (response.status === 200) throw new Error("Couldn't get customer");
		result = response?.data;
	} catch (error) {
		console.log('Get Customer Api error', error);
		if (error.response.status === 404) {
			const errorMessage = error.response?.data?.error;
			toast.error(errorMessage);
		}
	}
	return result;
};

export const updateCustomer = async (token, data) => {
	try {
		const response = await apiConnector('PUT', UPDATE_CUSTOMER, data, {
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'application/json',
		});

		console.log('Update CUSTOMER API RESPONSE---', response.data);

		if (response.status !== 201) throw new Error("Couldn't update customer");

		toast.success('Customer updated successfully');
		return response?.data;
	} catch (error) {
		console.log('', error);
		const errorMessage = error.response?.data?.errors || 'An Error Occurred';
		toast.error(errorMessage);
	}
};

export const deleteCustomer = async (token, customerId) => {
	let result = false;
	try {
		const response = await apiConnector(
			'DELETE',
			DELETE_CUSTOMER(customerId),
			null,
			{
				'Authorization': `Bearer ${token}`,
				'Content-Type': 'application/json',
			}
		);

		console.log('Delete Customer Api response---', response);
		if (response.status === 200) throw new Error("Couldn't delete customer");
		result = true;
	} catch (error) {
		console.log('Delete Customer Api error', error);
		if (error.response.status === 404) {
			const errorMessage = error.response?.data?.error;
			toast.error(errorMessage);
		}
	}
	return result;
};
