/** @format */

import toast from 'react-hot-toast';
import { locationEndpoints } from '../api';
import { apiConnector } from '../apiConnector';

const {
	GET_ALL_LOCATIONS,
	CREATE_LOCATION,
	UPDATE_LOCATION,
	GET_LOCATION,
	DELETE_LOCATION,
} = locationEndpoints;

export const createLocation = async (token, data) => {
	try {
		const response = await apiConnector('POST', CREATE_LOCATION, data, {
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'application/json',
		});

		console.log('CREATE LOCATION API RESPONSE---', response.data);

		if (response.status !== 201) throw new Error("Couldn't create location");

		toast.success('Location created successfully');
		return response?.data;
	} catch (error) {
		console.log('', error);
		const errorMessage = error.response?.data?.errors || 'An Error Occurred';
		toast.error(errorMessage);
	}
};

export const getAllLocations = async (token) => {
	let result = [];
	try {
		const response = await apiConnector('GET', GET_ALL_LOCATIONS, null, {
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'application/json',
		});

		console.log('Get All Locations api response---', response);
		if (response.status !== 200) {
			throw new Error("Couldn't get all locations");
		}

		result = response?.data;
	} catch (error) {
		console.log('Get All locations Api Error', error);
		if (error.response.status !== 404) {
			const errorMessage = error.response?.data?.error;
			toast.error(errorMessage);
		}
	}
	return result;
};

export const getLocation = async (token, locationId) => {
	let result;
	try {
		const response = await apiConnector('GET', GET_LOCATION(locationId), null, {
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'application/json',
		});

		console.log('Get Location Api response---', response);
		if (response.status === 200) throw new Error("Couldn't get location");
		result = response?.data;
	} catch (error) {
		console.log('Get Location Api error', error);
		if (error.response.status === 404) {
			const errorMessage = error.response?.data?.error;
			toast.error(errorMessage);
		}
	}
	return result;
};

export const updateLocation = async (token, data) => {
	try {
		const response = await apiConnector('PUT', UPDATE_LOCATION, data, {
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'application/json',
		});

		console.log('Update LOCATION API RESPONSE---', response.data);

		if (response.status !== 200) throw new Error("Couldn't update location");

		toast.success('Location updated successfully');
		return response?.data;
	} catch (error) {
		console.log('', error);
		const errorMessage = error.response?.data?.errors || 'An Error Occurred';
		toast.error(errorMessage);
	}
};

export const deleteLocation = async (token, locationId) => {
	let result = false;
	try {
		const response = await apiConnector(
			'DELETE',
			DELETE_LOCATION(locationId),
			null,
			{
				'Authorization': `Bearer ${token}`,
				'Content-Type': 'application/json',
			}
		);

		console.log('Delete Location Api response---', response);
		if (response.status === 200) throw new Error("Couldn't delete location");
		result = true;
	} catch (error) {
		console.log('Delete Location Api error', error);
		if (error.response.status === 404) {
			const errorMessage = error.response?.data?.error;
			toast.error(errorMessage);
		}
	}
	return result;
};
