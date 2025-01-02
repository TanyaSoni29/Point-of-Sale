/** @format */

import toast from 'react-hot-toast';
import { purchaseOrderEndpoints } from '../api';
import { apiConnector } from '../apiConnector';

const {
	ORDER_PART,
	REMOVE_PART_FROM_RAISED_ORDER,
	REMOVE_FROM_PENDING_PART_ORDER,
	RAISE_ORDERS,
	RETURN_ORDER_DATA,
	LIST_ORDER_NUMBERS,
	CREATE_OR_UPDATE_B2B_FILE,
	CANCEL_FULL_ORDER,
	GET_BACK_ORDER_COUNT,
	UPDATE_ITEM_QUANTITY_REQUIRED,
	UPDATE_ITEM,
	GET_REPORT_DATA_BY_ORDER_NUMBER,
	GET_REPORT_DATA,
	GET_OUTSTANDING_ORDERS,
	LIST_SUPPLIERS_WITH_ORDERS,
	GET_ORDERS_BY_SUPPLIER,
	GET_ORDERS_BY_STATUS,
	GET_PRODUCTS_TO_REORDER,
	GET_SPLITTED_ORDER_QTY_BY_LOC,
	GET_OUTSTANDING_ORDERS_REPORT,
	GET_REORDER_LEVEL_REPORT,
	GET_SYSTEM_OPTIONS,
	RECIEVE_FULL_ORDER,
	RECIEVE_SINGLE_PART_OF_ORDER,
} = purchaseOrderEndpoints;

export const orderPart = async (token, data) => {
	try {
		const response = await apiConnector('POST', ORDER_PART, data, {
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'application/json',
		});

		console.log('ORDER PART API RESPONSE---', response.data);

		if (response.status !== 200) throw new Error("Couldn't Post Order Part");

		toast.success('Post Order Part successfully');
		return response?.data;
	} catch (error) {
		console.log('', error);
		const errorMessage = error.response?.data || 'An Error Occurred';
		toast.error(errorMessage);
	}
};

export const removePartFromRaisedOrder = async (token, data) => {
	try {
		const response = await apiConnector(
			'POST',
			REMOVE_PART_FROM_RAISED_ORDER,
			data,
			{
				'Authorization': `Bearer ${token}`,
				'Content-Type': 'application/json',
			}
		);

		console.log('REMOVE PART FROM RAISED ORDER API RESPONSE---', response.data);

		if (response.status !== 200)
			throw new Error("Couldn't Remove Part From Raised Order");

		toast.success('Remove Part From Raised Order successfully');
		return response?.data;
	} catch (error) {
		console.log('', error);
		const errorMessage = error.response?.data || 'An Error Occurred';
		toast.error(errorMessage);
	}
};

export const removeFromPendingPartOrder = async (token, data) => {
	try {
		const response = await apiConnector(
			'POST',
			REMOVE_FROM_PENDING_PART_ORDER,
			data,
			{
				'Authorization': `Bearer ${token}`,
				'Content-Type': 'application/json',
			}
		);

		console.log(
			'REMOVE FROM PENDING PART ORDER  API RESPONSE---',
			response.data
		);

		if (response.status !== 200)
			throw new Error("Couldn't Remove from Pending Part Order");

		toast.success('Remove from Pending Part Order successfully');
		return response?.data;
	} catch (error) {
		console.log('', error);
		const errorMessage = error.response?.data || 'An Error Occurred';
		toast.error(errorMessage);
	}
};

export const raiseOrders = async (token, data) => {
	try {
		const response = await apiConnector('POST', RAISE_ORDERS, data, {
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'application/json',
		});

		console.log('RAISE ORDERS API RESPONSE---', response.data);

		if (response.status !== 200) throw new Error("Couldn't Raise Orders");

		toast.success('Raise Orders successfully');
		return response?.data;
	} catch (error) {
		console.log('', error);
		const errorMessage = error.response?.data || 'An Error Occurred';
		toast.error(errorMessage);
	}
};

export const returnOrderData = async (token, data) => {
	try {
		const response = await apiConnector('POST', RETURN_ORDER_DATA, data, {
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'application/json',
		});

		console.log('RETURN ORDER DATA API RESPONSE---', response.data);

		if (response.status !== 200) throw new Error("Couldn't Return Order Data");

		toast.success('Return Order Data successfully');
		return response?.data;
	} catch (error) {
		console.log('', error);
		const errorMessage = error.response?.data || 'An Error Occurred';
		toast.error(errorMessage);
	}
};

export const listOrderNumbers = async (token, data) => {
	try {
		const response = await apiConnector('POST', LIST_ORDER_NUMBERS, data, {
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'application/json',
		});

		console.log('LIST ORDER NUMBERS API RESPONSE---', response.data);

		if (response.status !== 200) throw new Error("Couldn't List Order Numbers");

		toast.success('List Order Numbers successfully');
		return response?.data;
	} catch (error) {
		console.log('', error);
		const errorMessage = error.response?.data || 'An Error Occurred';
		toast.error(errorMessage);
	}
};

export const createOrUpdateB2BFile = async (token, data) => {
	try {
		const response = await apiConnector(
			'POST',
			CREATE_OR_UPDATE_B2B_FILE,
			data,
			{
				'Authorization': `Bearer ${token}`,
				'Content-Type': 'application/json',
			}
		);

		console.log('CREATE OR UPDATE B2B FILE API RESPONSE---', response.data);

		if (response.status !== 200)
			throw new Error("Couldn't Create Or Update B2b File");

		toast.success('Create or update B2B file successfully');
		return response?.data;
	} catch (error) {
		console.log('', error);
		const errorMessage = error.response?.data || 'An Error Occurred';
		toast.error(errorMessage);
	}
};

export const cancelFullOrder = async (token, data) => {
	try {
		const response = await apiConnector('POST', CANCEL_FULL_ORDER, data, {
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'application/json',
		});

		console.log('CANCEL FULL ORDER API RESPONSE---', response.data);

		if (response.status !== 200) throw new Error("Couldn't Cancel full order");

		toast.success('Cancel full order successfully');
		return response?.data;
	} catch (error) {
		console.log('', error);
		const errorMessage = error.response?.data || 'An Error Occurred';
		toast.error(errorMessage);
	}
};

export const getBackOrderCount = async (token, data) => {
	try {
		const response = await apiConnector('POST', GET_BACK_ORDER_COUNT, data, {
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'application/json',
		});

		console.log('GET BACK ORDER COUNT API RESPONSE---', response.data);

		if (response.status !== 200)
			throw new Error("Couldn't Get back order count");

		toast.success('Get back order count successfully');
		return response?.data;
	} catch (error) {
		console.log('', error);
		const errorMessage = error.response?.data || 'An Error Occurred';
		toast.error(errorMessage);
	}
};

export const updateItemQuantityRequired = async (token, data) => {
	try {
		const response = await apiConnector(
			'POST',
			UPDATE_ITEM_QUANTITY_REQUIRED,
			data,
			{
				'Authorization': `Bearer ${token}`,
				'Content-Type': 'application/json',
			}
		);

		console.log('UPDATE ITEM QUANTITY REQUIRED API RESPONSE---', response.data);

		if (response.status !== 200)
			throw new Error("Couldn't Update item quantity required");

		toast.success('Update item quantity required successfully');
		return response?.data;
	} catch (error) {
		console.log('', error);
		const errorMessage = error.response?.data || 'An Error Occurred';
		toast.error(errorMessage);
	}
};

export const updateItem = async (token, data) => {
	try {
		const response = await apiConnector('POST', UPDATE_ITEM, data, {
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'application/json',
		});

		console.log('UPDATE ITEM API RESPONSE---', response.data);

		if (response.status !== 200) throw new Error("Couldn't Update item");

		toast.success('Update item successfully');
		return response?.data;
	} catch (error) {
		console.log('', error);
		const errorMessage = error.response?.data || 'An Error Occurred';
		toast.error(errorMessage);
	}
};

export const getReportDataByOrderNumber = async (token, data) => {
	try {
		const response = await apiConnector(
			'POST',
			GET_REPORT_DATA_BY_ORDER_NUMBER,
			data,
			{
				'Authorization': `Bearer ${token}`,
				'Content-Type': 'application/json',
			}
		);

		console.log(
			'GET REPORT DATA BY ORDER NUMBER API RESPONSE---',
			response.data
		);

		if (response.status !== 200)
			throw new Error("Couldn't Get report data by order number");

		toast.success('Get report data by order number successfully');
		return response?.data;
	} catch (error) {
		console.log('', error);
		const errorMessage = error.response?.data || 'An Error Occurred';
		toast.error(errorMessage);
	}
};

export const getReportData = async (token, data) => {
	try {
		const response = await apiConnector('POST', GET_REPORT_DATA, data, {
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'application/json',
		});

		console.log('GET REPORT DATA API RESPONSE---', response.data);

		if (response.status !== 200) throw new Error("Couldn't Get report data");

		toast.success('Get report data successfully');
		return response?.data;
	} catch (error) {
		console.log('', error);
		const errorMessage = error.response?.data || 'An Error Occurred';
		toast.error(errorMessage);
	}
};

export const getOutstandingOrders = async (token, data) => {
	try {
		const response = await apiConnector('POST', GET_OUTSTANDING_ORDERS, data, {
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'application/json',
		});

		console.log('GET OUTSTANDING ORDERS API RESPONSE---', response.data);

		if (response.status !== 200)
			throw new Error("Couldn't Get outstanding orders");

		toast.success('Get outstanding orders successfully');
		return response?.data;
	} catch (error) {
		console.log('', error);
		const errorMessage = error.response?.data || 'An Error Occurred';
		toast.error(errorMessage);
	}
};

export const listSuppliersWithOrders = async (token, data) => {
	try {
		const response = await apiConnector(
			'POST',
			LIST_SUPPLIERS_WITH_ORDERS,
			data,
			{
				'Authorization': `Bearer ${token}`,
				'Content-Type': 'application/json',
			}
		);

		console.log('LIST SUPPLIERS WITH ORDERS API RESPONSE---', response.data);

		if (response.status !== 200)
			throw new Error("Couldn't List suppliers with orders");

		toast.success('List suppliers with orders successfully');
		return response?.data;
	} catch (error) {
		console.log('', error);
		const errorMessage = error.response?.data || 'An Error Occurred';
		toast.error(errorMessage);
	}
};

export const getOrdersBySupplier = async (token, data) => {
	try {
		const response = await apiConnector('POST', GET_ORDERS_BY_SUPPLIER, data, {
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'application/json',
		});

		console.log('GET ORDERS BY SUPPLIER API RESPONSE---', response.data);

		if (response.status !== 200)
			throw new Error("Couldn't Get orders by supplier");

		toast.success('Get orders by supplier successfully');
		return response?.data;
	} catch (error) {
		console.log('', error);
		const errorMessage = error.response?.data || 'An Error Occurred';
		toast.error(errorMessage);
	}
};

export const getOrdersByStatus = async (token, status) => {
	try {
		const response = await apiConnector(
			'GET',
			GET_ORDERS_BY_STATUS(status),
			null,
			{
				'Authorization': `Bearer ${token}`,
				'Content-Type': 'application/json',
			}
		);

		console.log('GET ORDER BY STATUS API RESPONSE---', response.data);

		if (response.status !== 200)
			throw new Error("Couldn't Get order by status");

		toast.success('Get order by status successfully');
		return response?.data;
	} catch (error) {
		console.log('', error);
		const errorMessage = error.response?.data || 'An Error Occurred';
		toast.error(errorMessage);
	}
};

export const getProductsToReorder = async (token, data) => {
	try {
		const response = await apiConnector('POST', GET_PRODUCTS_TO_REORDER, data, {
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'application/json',
		});

		console.log('GET PRODUCTS TO REORDER API RESPONSE---', response.data);

		if (response.status !== 200)
			throw new Error("Couldn't Get products to reorder");

		toast.success('Get products to reorder successfully');
		return response?.data;
	} catch (error) {
		console.log('', error);
		const errorMessage = error.response?.data || 'An Error Occurred';
		toast.error(errorMessage);
	}
};

export const getSplittedOrderQtyByLoc = async (token, data) => {
	try {
		const response = await apiConnector(
			'POST',
			GET_SPLITTED_ORDER_QTY_BY_LOC,
			data,
			{
				'Authorization': `Bearer ${token}`,
				'Content-Type': 'application/json',
			}
		);

		console.log(
			'GET SPLITTED ORDER QTY. BY LOCATION API RESPONSE---',
			response.data
		);

		if (response.status !== 200)
			throw new Error("Couldn't Get splitted order qty. by location");

		toast.success('Get splitted order qty. by location successfully');
		return response?.data;
	} catch (error) {
		console.log('', error);
		const errorMessage = error.response?.data || 'An Error Occurred';
		toast.error(errorMessage);
	}
};

export const getOutstandingOrdersReport = async (token, data) => {
	try {
		const response = await apiConnector(
			'POST',
			GET_OUTSTANDING_ORDERS_REPORT,
			data,
			{
				'Authorization': `Bearer ${token}`,
				'Content-Type': 'application/json',
			}
		);

		console.log('GET OUTSTANDING ORDERS REPORT API RESPONSE---', response.data);

		if (response.status !== 200)
			throw new Error("Couldn't Get outstanding orders report");

		toast.success('Get outstanding orders report successfully');
		return response?.data;
	} catch (error) {
		console.log('', error);
		const errorMessage = error.response?.data || 'An Error Occurred';
		toast.error(errorMessage);
	}
};

export const getReOrderLevelReport = async (token, data) => {
	try {
		const response = await apiConnector(
			'POST',
			GET_REORDER_LEVEL_REPORT,
			data,
			{
				'Authorization': `Bearer ${token}`,
				'Content-Type': 'application/json',
			}
		);

		console.log('GET REORDER LEVEL REPORT API RESPONSE---', response.data);

		if (response.status !== 200)
			throw new Error("Couldn't Get reorder level report");

		toast.success('Get reorder level report successfully');
		return response?.data;
	} catch (error) {
		console.log('', error);
		const errorMessage = error.response?.data || 'An Error Occurred';
		toast.error(errorMessage);
	}
};

export const getSystemOptions = async (token) => {
	try {
		const response = await apiConnector('GET', GET_SYSTEM_OPTIONS, null, {
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'application/json',
		});

		console.log('GET SYSTEM OPTIONS API RESPONSE---', response.data);

		if (response.status !== 200) throw new Error("Couldn't Get system options");

		toast.success('Get system options successfully');
		return response?.data;
	} catch (error) {
		console.log('', error);
		const errorMessage = error.response?.data || 'An Error Occurred';
		toast.error(errorMessage);
	}
};

export const receiveFullOrder = async (token, data) => {
	try {
		const response = await apiConnector('POST', RECIEVE_FULL_ORDER, data, {
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'application/json',
		});

		console.log('RECEIVE FULL ORDER API RESPONSE---', response.data);

		if (response.status !== 200) throw new Error("Couldn't Receive full order");

		toast.success('Receive full order successfully');
		return response?.data;
	} catch (error) {
		console.log('', error);
		const errorMessage = error.response?.data || 'An Error Occurred';
		toast.error(errorMessage);
	}
};

export const receiveSinglePartOfOrder = async (token, data) => {
	try {
		const response = await apiConnector(
			'POST',
			RECIEVE_SINGLE_PART_OF_ORDER,
			data,
			{
				'Authorization': `Bearer ${token}`,
				'Content-Type': 'application/json',
			}
		);

		console.log('RECEIVE SINGLE PART OF ORDER API RESPONSE---', response.data);

		if (response.status !== 200)
			throw new Error("Couldn't Receive single part of order");

		toast.success('Receive single part of order successfully');
		return response?.data;
	} catch (error) {
		console.log('', error);
		const errorMessage = error.response?.data || 'An Error Occurred';
		toast.error(errorMessage);
	}
};
