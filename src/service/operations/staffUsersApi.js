/** @format */

import toast from 'react-hot-toast';
import { staffUsersEndpoints } from '../api';
import { apiConnector } from '../apiConnector';

const {
	GET_ALL_STAFF_USERS,
	GET_STAFF_USER,
	UPDATE_STAFF_USER,
	DELETE_STAFF_USER,
	CREATE_STAFF_USER,
} = staffUsersEndpoints;

export const createStaffUsers = async (token, data) => {
	try {
		const response = await apiConnector('POST', CREATE_STAFF_USER, data, {
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'application/json',
		});

		console.log('CREATE STAFFUSERS API RESPONSE---', response.data);

		if (response.status !== 201) throw new Error("Couldn't create staffUsers");

		toast.success('StaffUsers created successfully');
		return response?.data;
	} catch (error) {
		console.log('', error);
		const errorMessage = error.response?.data?.errors || 'An Error Occurred';
		toast.error(errorMessage);
	}
};

export const getAllStaffUsers = async (token) => {
	let result = [];
	try {
		const response = await apiConnector('GET', GET_ALL_STAFF_USERS, null, {
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'application/json',
		});

		console.log('Get All StaffUsers api response---', response);
		if (response.status !== 200) {
			throw new Error("Couldn't get all staffUsers");
		}

		result = response?.data;
	} catch (error) {
		console.log('Get All staffUsers Api Error', error);
		if (error.response.status !== 404) {
			const errorMessage = error.response?.data?.error;
			toast.error(errorMessage);
		}
	}
	return result;
};

export const getStaffUser = async (token, staffUserId) => {
	let result;
	try {
		const response = await apiConnector(
			'GET',
			GET_STAFF_USER(staffUserId),
			null,
			{
				'Authorization': `Bearer ${token}`,
				'Content-Type': 'application/json',
			}
		);

		console.log('Get StaffUsers Api response---', response);
		if (response.status === 200) throw new Error("Couldn't get staffUsers");
		result = response?.data;
	} catch (error) {
		console.log('Get StaffUsers Api error', error);
		if (error.response.status === 404) {
			const errorMessage = error.response?.data?.error;
			toast.error(errorMessage);
		}
	}
	return result;
};

export const updateStaffUsers = async (token, data) => {
	try {
		const response = await apiConnector('PUT', UPDATE_STAFF_USER, data, {
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'application/json',
		});

		console.log('Update StaffUser API RESPONSE---', response.data);

		if (response.status !== 201) throw new Error("Couldn't update staffUser");

		toast.success('StaffUser updated successfully');
		return response?.data;
	} catch (error) {
		console.log('', error);
		const errorMessage = error.response?.data?.errors || 'An Error Occurred';
		toast.error(errorMessage);
	}
};

export const deleteMake = async (token, staffUserId) => {
	let result = false;
	try {
		const response = await apiConnector(
			'DELETE',
			DELETE_STAFF_USER(staffUserId),
			null,
			{
				'Authorization': `Bearer ${token}`,
				'Content-Type': 'application/json',
			}
		);

		console.log('Delete StaffUser Api response---', response);
		if (response.status === 200) throw new Error("Couldn't delete staffUser");
		result = true;
	} catch (error) {
		console.log('Delete StaffUser Api error', error);
		if (error.response.status === 404) {
			const errorMessage = error.response?.data?.error;
			toast.error(errorMessage);
		}
	}
	return result;
};
