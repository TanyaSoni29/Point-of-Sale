/** @format */

// const BASE_URL = process.env.REACT_APP_BASE_URL;
const BASE_URL = 'http://192.168.1.10/api';
// const BASE_URL =
// 	'http://abacusonline-002-site4.atempurl.com/swagger/index.html';
// console.log(BASE_URL);

export const authEndpoints = {
	AUTHENTICATE: `${BASE_URL}/Auth/Authenticate`,
	REFRESH_TOKEN: `${BASE_URL}/Auth/RefreshToken`,
};

export const concreteUserEndpoints = {
	REGISTER: `${BASE_URL}/ConcreteAppUsers/Register`,
};

export const categoriesEndpoints = {
	CREATE_CATEGORY: `${BASE_URL}/Categories/Create`,
	GET_ALL_CATEGORIES: `${BASE_URL}/Categories/GetAllCategories`,
	GET_CATEGORY: (id) => `${BASE_URL}/Categories/GetCategory/${id}`,
	UPDATE_CATEGORY: `${BASE_URL}/Categories/Update`,
	DELETE_CATEGORY: (id) => `${BASE_URL}/Categories/Delete/${id}`,
};

export const locationEndpoints = {
	CREATE_LOCATION: `${BASE_URL}/Locations/Create`,
	GET_ALL_LOCATIONS: `${BASE_URL}/Locations/GetAllLocations`,
	GET_LOCATION: (id) => `${BASE_URL}/Locations/GetLocation/${id}`,
	UPDATE_LOCATION: `${BASE_URL}/Locations/Update`,
	DELETE_LOCATION: (id) => `${BASE_URL}/Locations/Delete/${id}`,
};

export const inventoryEndpoints = {
	CREATE_INVENTORY: `${BASE_URL}/Inventory/Create`,
	GET_INVENTORY_BY_PART_NO: (partNum) =>
		`${BASE_URL}/Inventory/ByPartNo?partno=${partNum}`,
	GET_INVENTORY_BY_LOCATION: `${BASE_URL}/Inventory/ByLocation`,
	UPDATE_INVENTORY: `${BASE_URL}/Inventory/Update`,
	INVENTORY_BULK_UPDATE: `${BASE_URL}/Inventory/BulkUpdate`,
	INVENTORY_STOCK_ENTRY: `${BASE_URL}/Inventory/StockEntry`,
};

export const makesEndpoints = {
	CREATE_MAKES: `${BASE_URL}/Makes/Create`,
	GET_ALL_MAKES: `${BASE_URL}/Makes/GetAllMakes`,
	GET_MAKE: (id) => `${BASE_URL}/Makes/GetMake/${id}`,
	UPDATE_MAKE: `${BASE_URL}/Makes/Update`,
	DELETE_MAKES: (id) => `${BASE_URL}/Makes/Delete/${id}`,
};

export const staffUsersEndpoints = {
	CREATE_STAFF_USER: `${BASE_URL}/StaffUsers/Create`,
	GET_ALL_STAFF_USERS: `${BASE_URL}/StaffUsers/GetAllStaffUsers`,
	GET_STAFF_USER: (id) => `${BASE_URL}/StaffUsers/GetStaffUser/${id}`,
	UPDATE_STAFF_USER: `${BASE_URL}/StaffUsers/Update`,
	DELETE_STAFF_USER: (id) => `${BASE_URL}/StaffUsers/Delete/${id}`,
};

export const suppliersEndpoints = {
	CREATE_SUPPLIER: `${BASE_URL}/Suppliers/Create`,
	GET_ALL_SUPPLIERS: `${BASE_URL}/Suppliers/GetAllSuppliers`,
	GET_SUPPLIER: (id) => `${BASE_URL}/Suppliers/GetSupplier/${id}`,
	UPDATE_SUPPLIER: `${BASE_URL}/Suppliers/Update`,
	DELETE_SUPPLIER: (id) => `${BASE_URL}/Suppliers/Delete/${id}`,
};

export const productEndpoints = {
	CREATE_PRODUCT: `${BASE_URL}/Products/Create`,
	GET_ALL_PRODUCTS: `${BASE_URL}/Products/GetAllProducts`,
	GET_PRODUCTS_BY_CATEGORY: (code) =>
		`${BASE_URL}/Products/GetProductsByCategory?catACode=${code}&catBCode=${code}&catCCode=${code}`,
	GET_PRODUCT_PARTNO: (id) => `${BASE_URL}/Products/GetProduct/${id}`,
	UPDATE_PRODUCT: `${BASE_URL}/Products/Update`,
	DELETE_PRODUCT: (id) => `${BASE_URL}/Products/Delete/${id}`,
	GET_PRODUCT_BY_SUPPLIER: (id) =>
		`${BASE_URL}/Products/GetProductsBySupplier/${id}`,
	GET_PRODUCT_BY_MAKE: (id) => `${BASE_URL}/Products/GetProductsByMake/${id}`,
	PRODUCT_SEARCH: `${BASE_URL}/Products/Search`,
};

export const customerEndpoints = {
	CREATE_CUSTOMER: `${BASE_URL}/Customers/Create`,
	GET_ALL_CUSTOMERS: `${BASE_URL}/Customers/GetAllCustomers`,
	GET_CUSTOMER: (id) => `${BASE_URL}/Customers/GetCustomer/${id}`,
	UPDATE_CUSTOMER: `${BASE_URL}/Customers/Update`,
	DELETE_CUSTOMER: (id) => `${BASE_URL}/Customers/Delete/${id}`,
};

export const purchaseOrderEndpoints = {
	ORDER_PART: `${BASE_URL}/PurchaseOrders/OrderPart`,
	REMOVE_PART_FROM_RAISED_ORDER: `${BASE_URL}/PurchaseOrders/RemovePartFromRaisedOrder`,
	REMOVE_FROM_PENDING_PART_ORDER: `${BASE_URL}/PurchaseOrders/RemoveFromPendingPartOrder`,
	RAISE_ORDERS: `${BASE_URL}/PurchaseOrders/RaiseOrders`,
	RETURN_ORDER_DATA: `${BASE_URL}/PurchaseOrders/ReturnOrderData`,
	LIST_ORDER_NUMBERS: `${BASE_URL}/PurchaseOrders/ListOrderNumbers`,
	CREATE_OR_UPDATE_B2B_FILE: `${BASE_URL}/PurchaseOrders/CreateOrUpdateB2BFile`,
	CANCEL_FULL_ORDER: `${BASE_URL}/PurchaseOrders/CancelFullOrder`,
	GET_BACK_ORDER_COUNT: `${BASE_URL}/PurchaseOrders/GetBackOrderCount`,
	UPDATE_ITEM_QUANTITY_REQUIRED: `${BASE_URL}/PurchaseOrders/UpdateItemQuantityRequired`,
	UPDATE_ITEM: `${BASE_URL}/PurchaseOrders/UpdateItem`,
	GET_REPORT_DATA_BY_ORDER_NUMBER: `${BASE_URL}/PurchaseOrders/GetReportDataByOrderNumber`,
	GET_REPORT_DATA: `${BASE_URL}/PurchaseOrders/GetReportData`,
	GET_OUTSTANDING_ORDERS: `${BASE_URL}/PurchaseOrders/GetOutstandingOrders`,
	LIST_SUPPLIERS_WITH_ORDERS: `${BASE_URL}/PurchaseOrders/ListSuppliersWithOrders`,
	GET_ORDERS_BY_SUPPLIER: `${BASE_URL}/PurchaseOrders/GetOrdersBySupplier`,
	GET_ORDERS_BY_STATUS: (status) =>
		`${BASE_URL}/PurchaseOrders/GetOrdersByStatus/${status}`,
	GET_PRODUCTS_TO_REORDER: `${BASE_URL}/PurchaseOrders/GetProductsToReorder`,
	GET_SPLITTED_ORDER_QTY_BY_LOC: `${BASE_URL}/PurchaseOrders/GetSplittedOrderQtyByLoc`,
	GET_OUTSTANDING_ORDERS_REPORT: `${BASE_URL}/PurchaseOrders/GetOutstandingOrdersReport`,
	GET_REORDER_LEVEL_REPORT: `${BASE_URL}/PurchaseOrders/GetReOrderLevelReport`,
	GET_SYSTEM_OPTIONS: `${BASE_URL}/PurchaseOrders/GetSystemOptions`,
	RECIEVE_FULL_ORDER: `${BASE_URL}/PurchaseOrders/RecieveFullOrder`,
	RECIEVE_SINGLE_PART_OF_ORDER: `${BASE_URL}/PurchaseOrders/RecieveSinglePartOfOrder`,
};
