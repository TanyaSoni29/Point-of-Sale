/** @format */

import toast from 'react-hot-toast';
import { inventoryEndpoints } from '../api';
import { apiConnector } from '../apiConnector';

const {
	GET_INVENTORY_BY_LOCATION,
	GET_INVENTORY_BY_PART_NO,
	UPDATE_INVENTORY,
	CREATE_INVENTORY,
	INVENTORY_BULK_UPDATE,
	INVENTORY_STOCK_ENTRY,
} = inventoryEndpoints;

export const createInventory = async (token, data) => {
	try {
		const response = await apiConnector('POST', CREATE_INVENTORY, data, {
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'application/json',
		});

		console.log('CREATE INVENTORY API RESPONSE---', response.data);

		if (response.status !== 201) throw new Error("Couldn't create inventory");

		toast.success('Inventory created successfully');
		return response?.data;
	} catch (error) {
		console.log('', error);
		const errorMessage = error.response?.data?.errors || 'An Error Occurred';
		toast.error(errorMessage);
	}
};

export const getInventoryByPartNo = async (token, partNo) => {
	let result = [];
	try {
		const response = await apiConnector(
			'GET',
			GET_INVENTORY_BY_PART_NO(partNo),
			null,
			{
				'Authorization': `Bearer ${token}`,
				'Content-Type': 'application/json',
			}
		);

		console.log('Get Inventory By Part No. api response---', response);
		if (response.status !== 200) {
			throw new Error("Couldn't get inventory of given Part No.");
		}

		result = response?.data;
	} catch (error) {
		console.log('Get inventory By Part No. Api Error', error);
		if (error.response.status !== 404) {
			const errorMessage = error.response?.data?.error;
			toast.error(errorMessage);
		}
	}
	return result;
};

export const getInventoryByLocation = async (token, data) => {
	let result;
	try {
		const response = await apiConnector(
			'GET',
			GET_INVENTORY_BY_LOCATION,
			data,
			{
				'Authorization': `Bearer ${token}`,
				'Content-Type': 'application/json',
			}
		);

		console.log('Get Inventory By Location Api response---', response);
		if (response.status === 200)
			throw new Error("Couldn't get inventory of given Location");
		result = response?.data;
	} catch (error) {
		console.log('Get Inventory By Location Api error', error);
		if (error.response.status === 404) {
			const errorMessage = error.response?.data?.error;
			toast.error(errorMessage);
		}
	}
	return result;
};

export const updateInventory = async (token, data) => {
	try {
		const response = await apiConnector('PUT', UPDATE_INVENTORY, data, {
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'application/json',
		});

		console.log('Update INVENTORY API RESPONSE---', response.data);

		if (response.status !== 201) throw new Error("Couldn't update inventory");

		toast.success('Inventory updated successfully');
		return response?.data;
	} catch (error) {
		console.log('', error);
		const errorMessage = error.response?.data?.errors || 'An Error Occurred';
		toast.error(errorMessage);
	}
};

export const inventoryBulkUpdate = async (token, data) => {
	let result;
	try {
		const response = await apiConnector('POST', INVENTORY_BULK_UPDATE, data, {
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'application/json',
		});

		console.log('Inventory Bulk Update Api response---', response);
		if (response.status === 200)
			throw new Error("Couldn't update bulk inventory");
		result = response.data;
	} catch (error) {
		console.log('Inventory Bulk Update Api error', error);
		if (error.response.status === 404) {
			const errorMessage = error.response?.data?.error;
			toast.error(errorMessage);
		}
	}
	return result;
};

export const inventoryStockEntry = async (token, data) => {
	let result;
	try {
		const response = await apiConnector('POST', INVENTORY_STOCK_ENTRY, data, {
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'application/json',
		});

		console.log('Inventory Stock Entry Api response---', response);
		if (response.status === 200)
			throw new Error("Couldn't do Stock Entry Inventory");
		result = response.data;
	} catch (error) {
		console.log('Inventory Stock Entry Api error', error);
		if (error.response.status === 404) {
			const errorMessage = error.response?.data?.error;
			toast.error(errorMessage);
		}
	}
	return result;
};
