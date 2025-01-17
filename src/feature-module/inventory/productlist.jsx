/** @format */

import {
	Box,
	ChevronUp,
	Edit,
	Eye,
	Filter,
	// GitMerge,
	PlusCircle,
	RotateCcw,
	// Sliders,
	StopCircle,
	Trash2,
} from 'feather-icons-react/build/IconComponents';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import ImageWithBasePath from '../../core/img/imagewithbasebath';
import Brand from '../../core/modals/inventory/brand';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import { all_routes } from '../../Router/all_routes';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import Table from '../../core/pagination/datatable';
import { Download } from 'react-feather';
import PdfImg from '../../assets/img/icons/pdf.svg';
import ExcelImg from '../../assets/img/icons/excel.svg';
// import CloseImg from '../../assets/img/icons/closes.svg';
import {
	// refreshProducts,
	setProduct,
	setProducts,
	setToggleHeader,
} from '../../slices/productListSlice';
import { useForm } from 'react-hook-form';
import { Switch } from 'antd';
import { refreshCategories } from '../../slices/categorySlice';
import { getProductSearch } from '../../service/operations/productApi';

const ProductList = () => {
	const route = all_routes;
	const dispatch = useDispatch();
	const { token } = useSelector((state) => state.auth);
	const { products, toggle_header } = useSelector((state) => state.product);
	const { categories } = useSelector((state) => state.category);
	// const [isFilterVisible, setIsFilterVisible] = useState(false);
	const { register, handleSubmit, setValue, watch } = useForm();

	const allProducts = watch('allProducts');
	const stockAllShops = watch('stockAllShops');
	const stockHere = watch('stockHere');
	const stockAt = watch('stockAt');
	const notInStock = watch('notInStock');
	const currentOnly = watch('currentOnly');
	const promoOnly = watch('promoOnly');

	const priceOptions = [
		{ value: 0, label: '0' },
		{ value: 99, label: '99' },
		{ value: 999, label: '999' },
		{ value: 9999, label: '9999' },
		{ value: 99999, label: '99999' },
	];
	// const options = [
	// 	{ value: 'sortByDate', label: 'Sort by Date' },
	// 	{ value: '140923', label: '14 09 23' },
	// 	{ value: '110923', label: '11 09 23' },
	// ];
	const genders = [
		{ value: 'Unisex', label: 'Unisex' },
		{ value: 'Male', label: 'Male' },
		{ value: 'Female', label: 'Female' },
	];

	const categorylist = categories?.map((category) => ({
		value: category.code, // Code
		label: `${category.code} - ${category.name}`, // Display both code and name
		name: category.name, // Name (used later)
	}));

	const majorMinorOption = [
		{ value: 'Major', label: 'Major' },
		{ value: 'Minor', label: 'Minor' },
		{ value: 'Both', label: 'Both' },
	];
	// const subcategorylist = [
	// 	{ value: 'choose', label: 'Choose Sub Category' },
	// 	{ value: 'computers', label: 'Computers' },
	// 	{ value: 'fruits', label: 'Fruits' },
	// ];
	// const brandlist = [
	// 	{ value: 'all', label: 'All Brand' },
	// 	{ value: 'lenovo', label: 'Lenovo' },
	// 	{ value: 'nike', label: 'Nike' },
	// ];
	// const toggleFilterVisibility = () => {
	// 	setIsFilterVisible((prevVisibility) => !prevVisibility);
	// };

	const onSubmit = async (data) => {
		console.log(data);
		try {
			const payload = {
				makeCode: data?.makeCode || '',
				supplierCode: data?.supplierCode || '',
				search1: data?.search1 || '',
				search2: data?.search2 || '',
				mfr: data?.mfr || '',
				details: data?.details || '',
				size: data?.size || '',
				color: data?.color || '',
				gender: data?.gender || 'Unisex',
				year: data?.year || '',
				catACode: data?.catACode || '',
				catBCode: data?.catBCode || '',
				catCCode: data?.catCCode || '',
				inventoryType: 'BOTH',
				priceRangeFrom: data?.priceRangeFrom || 0,
				priceRangeTo: data?.priceRangeTo || 0,
				currentOnly: data?.currentOnly || false,
				promoOnly: data?.promoOnly || false,
				searchType: 'AllProducts',
				stockAtLocCode: '',
			};
			const response = await getProductSearch(token, payload);
			if (response.length > 0) {
				dispatch(setProducts(response));
			}
		} catch (error) {
			console.log(error);
		}
	};

	const handleDelete = async (product) => {
		try {
			showConfirmationAlert();
			console.log('selected product printing', product);
		} catch (error) {
			console.log(error);
		}
	};

	const handleEdit = async (product) => {
		console.log(product.partNumber);
		dispatch(setProduct(product.partNumber));
		// try {
		// 	console.log(product);
		// } catch (error) {
		// 	console.log(error);
		// }
	};

	useEffect(() => {
		dispatch(refreshCategories());
	}, [dispatch]);

	const columns = [
		{
			title: 'Product',
			dataIndex: 'product',
			render: (text, record) => (
				<span className='productimgname'>
					<Link
						to='/profile'
						className='product-img stock-img'
					>
						<ImageWithBasePath
							alt=''
							src={record.productImage}
						/>
					</Link>
					<Link to='/profile'>{text}</Link>
				</span>
			),
			sorter: (a, b) => a.product.length - b.product.length,
		},
		{
			title: 'Part No.',
			dataIndex: 'partNumber',
			sorter: (a, b) => a.sku.length - b.sku.length,
		},

		{
			title: 'Category',
			dataIndex: 'category',
			sorter: (a, b) => a.category.length - b.category.length,
		},

		{
			title: 'Make',
			dataIndex: 'make',
			sorter: (a, b) => a.brand.length - b.brand.length,
		},
		{
			title: 'Price',
			dataIndex: 'webPrice',
			sorter: (a, b) => a.price.length - b.price.length,
		},
		{
			title: 'Unit',
			dataIndex: 'unit',
			sorter: (a, b) => a.unit.length - b.unit.length,
		},
		{
			title: 'Qty',
			dataIndex: 'qty',
			sorter: (a, b) => a.qty.length - b.qty.length,
		},

		{
			title: 'Created By',
			dataIndex: 'createdby',
			render: (text, record) => (
				<span className='userimgname'>
					<Link
						to='/profile'
						className='product-img'
					>
						<ImageWithBasePath
							alt=''
							src={record.img}
						/>
					</Link>
					<Link to='/profile'>{text}</Link>
				</span>
			),
			sorter: (a, b) => a.createdby.length - b.createdby.length,
		},
		{
			title: 'Action',
			dataIndex: 'action',
			render: (_, record) => (
				<div className='action-table-data'>
					<div className='edit-delete-action'>
						<div className='input-block add-lists'></div>
						<Link
							className='me-2 p-2'
							to={route.productdetails}
						>
							<Eye className='feather-view' />
						</Link>
						<Link
							className='me-2 p-2'
							to={route.addproduct}
							onClick={() => handleEdit(record)}
						>
							<Edit className='feather-edit' />
						</Link>
						<Link
							className='confirm-text p-2'
							to='#'
							onClick={() => handleDelete(record)}
						>
							<Trash2 className='feather-trash-2' />
						</Link>
					</div>
				</div>
			),
			sorter: (a, b) => a.createdby.length - b.createdby.length,
		},
	];
	const MySwal = withReactContent(Swal);

	const showConfirmationAlert = async () => {
		const result = await MySwal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			showCancelButton: true,
			reverseButtons: true,
			confirmButtonColor: '#00ff00',
			confirmButtonText: 'Yes, delete it!',
			cancelButtonColor: '#ff0000',
			cancelButtonText: 'Cancel',
		});
		return result.isConfirmed;
	};

	const renderTooltip = (props) => (
		<Tooltip
			id='pdf-tooltip'
			{...props}
		>
			Pdf
		</Tooltip>
	);
	const renderExcelTooltip = (props) => (
		<Tooltip
			id='excel-tooltip'
			{...props}
		>
			Excel
		</Tooltip>
	);
	const renderPrinterTooltip = (props) => (
		<Tooltip
			id='printer-tooltip'
			{...props}
		>
			Printer
		</Tooltip>
	);
	const renderRefreshTooltip = (props) => (
		<Tooltip
			id='refresh-tooltip'
			{...props}
		>
			Refresh
		</Tooltip>
	);
	const renderCollapseTooltip = (props) => (
		<Tooltip
			id='refresh-tooltip'
			{...props}
		>
			Collapse
		</Tooltip>
	);
	return (
		<div className='page-wrapper'>
			<div className='content'>
				<div className='page-header'>
					<div className='add-item d-flex'>
						<div className='page-title'>
							<h4>Product List</h4>
							<h6>Manage your products</h6>
						</div>
					</div>
					<ul className='table-top-head'>
						<li>
							<OverlayTrigger
								placement='top'
								overlay={renderTooltip}
							>
								<Link>
									{/* <ImageWithBasePath src="assets/img/icons/pdf.svg" alt="img" /> */}
									<img
										src={PdfImg}
										alt='img'
									/>
								</Link>
							</OverlayTrigger>
						</li>
						<li>
							<OverlayTrigger
								placement='top'
								overlay={renderExcelTooltip}
							>
								<Link
									data-bs-toggle='tooltip'
									data-bs-placement='top'
								>
									{/* <ImageWithBasePath
										src='assets/img/icons/excel.svg'
										alt='img'
									/> */}
									<img
										src={ExcelImg}
										alt='img'
									/>
								</Link>
							</OverlayTrigger>
						</li>
						<li>
							<OverlayTrigger
								placement='top'
								overlay={renderPrinterTooltip}
							>
								<Link
									data-bs-toggle='tooltip'
									data-bs-placement='top'
								>
									<i
										data-feather='printer'
										className='feather-printer'
									/>
								</Link>
							</OverlayTrigger>
						</li>
						<li>
							<OverlayTrigger
								placement='top'
								overlay={renderRefreshTooltip}
							>
								<Link
									data-bs-toggle='tooltip'
									data-bs-placement='top'
								>
									<RotateCcw />
								</Link>
							</OverlayTrigger>
						</li>
						<li>
							<OverlayTrigger
								placement='top'
								overlay={renderCollapseTooltip}
							>
								<Link
									data-bs-toggle='tooltip'
									data-bs-placement='top'
									id='collapse-header'
									className={toggle_header ? 'active' : ''}
									onClick={(e) => {
										e.preventDefault();
										dispatch(setToggleHeader(!toggle_header));
									}}
								>
									<ChevronUp />
								</Link>
							</OverlayTrigger>
						</li>
					</ul>
					<div className='page-btn'>
						<Link
							to={route.addproduct}
							className='btn btn-added'
						>
							<PlusCircle className='me-2 iconsize' />
							Add New Product
						</Link>
					</div>

					<div className='page-btn import'>
						<Link
							to='#'
							className='btn btn-added color'
							data-bs-toggle='modal'
							data-bs-target='#view-notes'
						>
							<Download className='me-2' />
							Import Product
						</Link>
					</div>
				</div>
				{/* /product list */}
				<div className='card table-list-card'>
					<div className='card-body'>
						<div className='table-top mb-0'>
							<div className='search-set'>
								<form onSubmit={handleSubmit(onSubmit)}>
									<div className='card-body pb-0'>
										<div className='row'>
											<div className='col-lg-12 col-sm-12'>
												<div className='row'>
													<div className='col-lg-2 col-sm-6 col-12'>
														<div className='input-blocks'>
															<label className='form-label'>Make</label>
															<input
																type='text'
																placeholder='Make'
																className='form-control form-control-sm formsearch'
																{...register('makeCode')}
															/>
														</div>
													</div>
													<div className='col-lg-2 col-sm-6 col-12'>
														<div className='input-blocks'>
															<label>Supplier</label>
															<input
																type='text'
																placeholder='Supplier'
																className='form-control form-control-sm formsearch'
																{...register('supplierCode')}
															/>
														</div>
													</div>
													<div className='col-lg-2 col-sm-6 col-12'>
														<div className='input-blocks'>
															<label>Search 1</label>

															<input
																type='text'
																placeholder='Search 1'
																className='form-control form-control-sm formsearch'
																{...register('search1')}
															/>
														</div>
													</div>
													<div className='col-lg-2 col-sm-6 col-12'>
														<div className='input-blocks'>
															<label>Search 2</label>

															<input
																type='text'
																placeholder='Search 2'
																className='form-control form-control-sm formsearch'
																{...register('search2')}
															/>
														</div>
													</div>
													<div className='col-lg-2 col-sm-6 col-12'>
														<div className='input-blocks'>
															<label>MFR No</label>

															<input
																type='text'
																placeholder='MFR No.'
																className='form-control form-control-sm formsearch'
																{...register('mfr')}
															/>
														</div>
													</div>
													<div className='col-lg-2 col-sm-6 col-12'>
														<div className='input-blocks'>
															<label>Details</label>

															<input
																type='text'
																placeholder='Details'
																className='form-control form-control-sm formsearch'
																{...register('details')}
															/>
														</div>
													</div>
													<div className='col-lg-2 col-sm-6 col-12'>
														<label className='form-label'>CatA</label>
														<div className='input-blocks'>
															<Box className='info-img' />
															<Select
																className='img-select'
																classNamePrefix='react-select'
																options={categorylist}
																onChange={(selected) =>
																	setValue('catACode', selected?.value)
																}
																placeholder='Choose Category'
															/>
														</div>
													</div>
													<div className='col-lg-2 col-sm-6 col-12'>
														<label className='form-label'>CatB</label>
														<div className='input-blocks'>
															<Box className='info-img' />
															<Select
																className='img-select'
																classNamePrefix='react-select'
																options={categorylist}
																onChange={(selected) =>
																	setValue('catBCode', selected?.value)
																}
																placeholder='Choose Category'
															/>
														</div>
													</div>
													<div className='col-lg-2 col-sm-6 col-12'>
														<label className='form-label'>CatC</label>
														<div className='input-blocks'>
															<Box className='info-img' />
															<Select
																className='img-select'
																classNamePrefix='react-select'
																options={categorylist}
																onChange={(selected) =>
																	setValue('catCCode', selected?.value)
																}
																placeholder='Choose Category'
															/>
														</div>
													</div>
													<div className='col-lg-2 col-sm-6 col-12'>
														<label className='form-label'>Major/Minor</label>
														<div className='input-blocks'>
															<Filter className='info-img' />
															<Select
																className='img-select'
																classNamePrefix='react-select'
																options={majorMinorOption}
																onChange={(selected) =>
																	setValue('majorMinor', selected?.value)
																}
																placeholder='Choose'
															/>
														</div>
													</div>
													<div className='col-lg-1 col-sm-4 col-12'>
														<div className='input-blocks'>
															<label>Size</label>

															<input
																type='text'
																placeholder='Size'
																className='form-control form-control-sm formsearch'
																{...register('size')}
															/>
														</div>
													</div>
													<div className='col-lg-1 col-sm-4 col-12'>
														<div className='input-blocks'>
															<label>Color</label>

															<input
																type='text'
																placeholder='Color'
																className='form-control form-control-sm formsearch'
																{...register('color')}
															/>
														</div>
													</div>
													<div className='col-lg-1 col-sm-4 col-12'>
														<label className='form-label'>Gender</label>
														<div className='input-blocks'>
															<StopCircle className='info-img' />
															<Select
																className='img-select'
																classNamePrefix='react-select'
																options={genders}
																onChange={(selected) =>
																	setValue('gender', selected?.value)
																}
																placeholder='Choose'
															/>
														</div>
													</div>
													<div className='col-lg-1 col-sm-4 col-12'>
														<div className='input-blocks'>
															<label>Year</label>

															<input
																type='text'
																placeholder='Year'
																className='form-control form-control-sm formsearch'
																{...register('year')}
															/>
														</div>
													</div>
													<div className='col-lg-1 col-sm-4 col-12'>
														<label className='form-label'>Price From</label>
														<div className='input-blocks'>
															<i className='fas fa-money-bill info-img' />

															<Select
																className='img-select'
																classNamePrefix='react-select'
																options={priceOptions}
																onChange={(selected) =>
																	setValue('priceRangeFrom', selected?.value)
																}
																placeholder='Price'
															/>
														</div>
													</div>
													<div className='col-lg-1 col-sm-4 col-12'>
														<label className='form-label'>Price To</label>
														<div className='input-blocks'>
															<i className='fas fa-money-bill info-img' />

															<Select
																className='img-select'
																classNamePrefix='react-select'
																options={priceOptions}
																onChange={(selected) =>
																	setValue('priceRangeTo', selected?.value)
																}
																placeholder='Price'
															/>
														</div>
													</div>
													<div className='col-lg-2 col-sm-6 col-12'>
														<div className='mb-1'>
															<label className=''>
																<Switch
																	checked={allProducts}
																	onChange={(value) => {
																		setValue('allProducts', value);
																	}}
																	style={{ marginRight: '6px' }}
																/>
																All Products
															</label>
														</div>

														<div className='mb-1'>
															<label className=''>
																<Switch
																	checked={stockAt}
																	onChange={(value) => {
																		setValue('stockAt', value);
																	}}
																	style={{ marginRight: '6px' }}
																/>
																Stock At
															</label>
														</div>
														<div className='mb-1'>
															<label className=''>
																<Switch
																	checked={stockAllShops}
																	onChange={(value) => {
																		setValue('stockAllShops', value);
																	}}
																	style={{ marginRight: '6px' }}
																/>
																Stock (All Shops)
															</label>
														</div>
														<div className='mb-1'>
															<label className=''>
																<Switch
																	checked={stockHere}
																	onChange={(value) => {
																		setValue('stockHere', value);
																	}}
																	style={{ marginRight: '6px' }}
																/>
																Stock Here
															</label>
														</div>
													</div>
													<div className='col-lg-2 col-sm-6 col-12'>
														<div className='mb-1'>
															<label className=''>
																<Switch
																	checked={notInStock}
																	onChange={(value) => {
																		setValue('notInStock', value);
																	}}
																	style={{ marginRight: '6px' }}
																/>
																Not In Stock (All Shops)
															</label>
														</div>
														<div className='mb-1'>
															<label className=''>
																<Switch
																	checked={promoOnly}
																	onChange={(value) => {
																		setValue('promoOnly', value);
																	}}
																	style={{ marginRight: '6px' }}
																/>
																Promo Only
															</label>
														</div>
														<div className='mb-1'>
															<label className=''>
																<Switch
																	checked={currentOnly}
																	onChange={(value) => {
																		setValue('currentOnly', value);
																	}}
																	style={{ marginRight: '6px' }}
																/>
																Current Only
															</label>
														</div>
													</div>

													<div className='col-lg-2 col-sm-6 col-12'>
														<div className='mt-4 p-1'>
															<button
																className='btn btn-submit ms-auto'
																type='submit'
															>
																{' '}
																<i
																	data-feather='search'
																	className='feather-search'
																/>{' '}
																Search{' '}
															</button>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
						<div className='d-flex justify-content-end align-items-end mb-3 mt-0'>
							{/* <div className='search-path'>
								<Link
									className={`btn btn-filter ${
										isFilterVisible ? 'setclose' : ''
									}`}
									id='filter_search'
								>
									<Filter
										className='filter-icon'
										onClick={toggleFilterVisibility}
									/>
									<span onClick={toggleFilterVisibility}>
										{/* <ImageWithBasePath
											src='assets/img/icons/closes.svg'
											alt='img'
										/> */}
							{/* <img
											src={CloseImg}
											alt='img'
										/>
									</span>
								</Link>
							</div> */}
							{/* <div className='form-sort me-2'>
								<Sliders className='info-img' />
								<Select
									className='img-select'
									classNamePrefix='react-select'
									options={options}
									placeholder='14 09 23'
								/>
							</div> */}
						</div>

						{/* /Filter */}
						{/* <div
							className={`card${isFilterVisible ? ' visible' : ''}`}
							id='filter_inputs'
							style={{ display: isFilterVisible ? 'block' : 'none' }}
						>
							<div className='card-body pb-0'>
								<div className='row'>
									<div className='col-lg-12 col-sm-12'>
										<div className='row'>
											<div className='col-lg-2 col-sm-6 col-12'>
												<div className='input-blocks'>
													<StopCircle className='info-img' />
													<Select
														className='img-select'
														classNamePrefix='react-select'
														options={categorylist}
														placeholder='Choose Category'
													/>
												</div>
											</div>
											<div className='col-lg-2 col-sm-6 col-12'>
												<div className='input-blocks'>
													<GitMerge className='info-img' />
													<Select
														className='img-select'
														classNamePrefix='react-select'
														options={subcategorylist}
														placeholder='Choose Sub Category'
													/>
												</div>
											</div>
											<div className='col-lg-2 col-sm-6 col-12'>
												<div className='input-blocks'>
													<StopCircle className='info-img' />
													<Select
														className='img-select'
														classNamePrefix='react-select'
														options={brandlist}
														placeholder='Nike'
													/>
												</div>
											</div>
											<div className='col-lg-2 col-sm-6 col-12'>
												<div className='input-blocks'>
													<i className='fas fa-money-bill info-img' />

													<Select
														className='img-select'
														classNamePrefix='react-select'
														options={price}
														placeholder='Price'
													/>
												</div>
											</div>
											<div className='col-lg-2 col-sm-6 col-12'>
												<div className='input-blocks'>
													<Link className='btn btn-filters ms-auto'>
														{' '}
														<i
															data-feather='search'
															className='feather-search'
														/>{' '}
														Search{' '}
													</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div> */}
						{/* /Filter */}
						<div className='table-responsive'>
							<Table
								columns={columns}
								dataSource={products}
							/>
						</div>
					</div>
				</div>
				{/* /product list */}
				<Brand />
			</div>
		</div>
	);
};

export default ProductList;
