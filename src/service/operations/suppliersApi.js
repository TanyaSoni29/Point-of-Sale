/** @format */

import toast from 'react-hot-toast';
import { suppliersEndpoints } from '../api';
import { apiConnector } from '../apiConnector';

const {
	GET_ALL_SUPPLIERS,
	GET_SUPPLIER,
	UPDATE_SUPPLIER,
	DELETE_SUPPLIER,
	CREATE_SUPPLIER,
} = suppliersEndpoints;

export const createSupplier = async (token, data) => {
	try {
		const response = await apiConnector('POST', CREATE_SUPPLIER, data, {
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'application/json',
		});

		console.log('CREATE SUPPLIER API RESPONSE---', response.data);

		if (response.status !== 200) throw new Error("Couldn't create supplier");

		toast.success('Supplier created successfully');
		return response?.data;
	} catch (error) {
		console.log('', error);
		const errorMessage = error.response?.data || 'An Error Occurred';
		toast.error(errorMessage);
	}
};

export const getAllSupplier = async (token) => {
	let result = [];
	try {
		const response = await apiConnector('GET', GET_ALL_SUPPLIERS, null, {
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'application/json',
		});

		console.log('Get All Supplier api response---', response);
		if (response.status !== 200) {
			throw new Error("Couldn't get all supplier");
		}

		result = response?.data;
	} catch (error) {
		console.log('Get All supplier Api Error', error);
		if (error.response.status !== 404) {
			const errorMessage = error.response?.data?.error;
			toast.error(errorMessage);
		}
	}
	return result;
};

export const getSupplier = async (token, supplierId) => {
	let result;
	try {
		const response = await apiConnector('GET', GET_SUPPLIER(supplierId), null, {
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'application/json',
		});

		console.log('Get Supplier Api response---', response);
		if (response.status !== 200) throw new Error("Couldn't get supplier");
		result = response?.data;
	} catch (error) {
		console.log('Get Supplier Api error', error);
		if (error.response.status === 404) {
			const errorMessage = error.response?.data?.error;
			toast.error(errorMessage);
		}
	}
	return result;
};

export const updateSuppliers = async (token, data) => {
	try {
		const response = await apiConnector('PUT', UPDATE_SUPPLIER, data, {
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'application/json',
		});

		console.log('Update Supplier API RESPONSE---', response.data);

		if (response.status !== 200) throw new Error("Couldn't update supplier");

		toast.success('Supplier updated successfully');
		return response?.data;
	} catch (error) {
		console.log('', error);
		const errorMessage = error.response?.data || 'An Error Occurred';
		toast.error(errorMessage);
	}
};

export const deleteSupplier = async (token, supplierId) => {
	let result = false;
	try {
		const response = await apiConnector(
			'DELETE',
			DELETE_SUPPLIER(supplierId),
			null,
			{
				'Authorization': `Bearer ${token}`,
				'Content-Type': 'application/json',
			}
		);

		console.log('Delete Supplier Api response---', response);
		if (response.status !== 200) throw new Error("Couldn't delete supplier");
		toast.success('Supplier deleted successfully');
		result = true;
	} catch (error) {
		console.log('Delete Supplier Api error', error);
		if (error.response.status === 404) {
			const errorMessage = error.response?.data?.error;
			toast.error(errorMessage);
		}
	}
	return result;
};
