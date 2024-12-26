/** @format */

// const BASE_URL = process.env.REACT_APP_BASE_URL;
const BASE_URL = 'http://192.168.1.10/api';

console.log(BASE_URL);

export const authEndpoints = {
	AUTHENTICATE: `${BASE_URL}/Auth/Authenticate`,
	REFRESH_TOKEN: `${BASE_URL}/Auth/RefreshToken`,
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
	GET_PRODUCTS_BY_CATEGORY: `${BASE_URL}/Products/GetProductsByCategory`,
	GET_PRODUCT_PARTNO: (id) => `${BASE_URL}/Products/GetProduct/${id}`,
	UPDATE_PRODUCT: `${BASE_URL}/Products/Update`,
	DELETE_PRODUCT: (id) => `${BASE_URL}/Products/Delete/${id}`,
	GET_PRODUCT_BY_SUPPLIER: (id) =>
		`${BASE_URL}/Products/GetProductsBySupplier/${id}`,
	GET_PRODUCT_BY_MAKE: (id) => `${BASE_URL}/Products/GetProductsByMake/${id}`,
};

export const customerEndpoints = {
	CREATE_CUSTOMER: `${BASE_URL}/Customers/Create`,
	GET_ALL_CUSTOMERS: `${BASE_URL}/Customers/GetAllCustomers`,
	GET_CUSTOMER: (id) => `${BASE_URL}/Customers/GetCustomer/${id}`,
	UPDATE_CUSTOMER: `${BASE_URL}/Customers/Update`,
	DELETE_CUSTOMER: (id) => `${BASE_URL}/Customers/Delete/${id}`,
};
