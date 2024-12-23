/** @format */

import toast from 'react-hot-toast';
import { makesEndpoints } from '../api';
import { apiConnector } from '../apiConnector';

const { GET_ALL_MAKES, GET_MAKE, UPDATE_MAKE, DELETE_MAKES, CREATE_MAKES } =
	makesEndpoints;

export const createMakes = async (token, data) => {
	try {
		const response = await apiConnector('POST', CREATE_MAKES, data, {
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'application/json',
		});

		console.log('CREATE MAKES API RESPONSE---', response.data);

		if (response.status !== 201) throw new Error("Couldn't create makes");

		toast.success('Makes created successfully');
		return response?.data;
	} catch (error) {
		console.log('', error);
		const errorMessage = error.response?.data?.errors || 'An Error Occurred';
		toast.error(errorMessage);
	}
};

export const getAllMakes = async (token) => {
	let result = [];
	try {
		const response = await apiConnector('GET', GET_ALL_MAKES, null, {
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'application/json',
		});

		console.log('Get All Makes api response---', response);
		if (response.status !== 200) {
			throw new Error("Couldn't get all makes");
		}

		result = response?.data;
	} catch (error) {
		console.log('Get All makes Api Error', error);
		if (error.response.status !== 404) {
			const errorMessage = error.response?.data?.error;
			toast.error(errorMessage);
		}
	}
	return result;
};

export const getMake = async (token, makeId) => {
	let result;
	try {
		const response = await apiConnector('GET', GET_MAKE(makeId), null, {
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'application/json',
		});

		console.log('Get Makes Api response---', response);
		if (response.status === 200) throw new Error("Couldn't get makes");
		result = response?.data;
	} catch (error) {
		console.log('Get Makes Api error', error);
		if (error.response.status === 404) {
			const errorMessage = error.response?.data?.error;
			toast.error(errorMessage);
		}
	}
	return result;
};

export const updateMakes = async (token, data) => {
	try {
		const response = await apiConnector('PUT', UPDATE_MAKE, data, {
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'application/json',
		});

		console.log('Update MAKES API RESPONSE---', response.data);

		if (response.status !== 200) throw new Error("Couldn't update makes");

		toast.success('MAKES updated successfully');
		return response?.data;
	} catch (error) {
		console.log('', error);
		const errorMessage = error.response?.data?.error || 'An Error Occurred';
		toast.error(errorMessage);
	}
};

export const deleteMake = async (token, makeId) => {
	let result = false;
	try {
		const response = await apiConnector('DELETE', DELETE_MAKES(makeId), null, {
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'application/json',
		});

		console.log('Delete Makes Api response---', response);
		if (response.status === 200) throw new Error("Couldn't delete makes");
		result = true;
	} catch (error) {
		console.log('Delete Makes Api error', error);
		if (error.response.status === 404) {
			const errorMessage = error.response?.data?.error;
			toast.error(errorMessage);
		}
	}
	return result;
};
