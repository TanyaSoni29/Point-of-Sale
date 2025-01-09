/** @format */

import {
	Box,
	ChevronUp,
	Edit,
	Eye,
	Filter,
	GitMerge,
	PlusCircle,
	RotateCcw,
	Sliders,
	StopCircle,
	Trash2,
} from 'feather-icons-react/build/IconComponents';
import React, { useEffect, useState } from 'react';
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
import CloseImg from '../../assets/img/icons/closes.svg';
import {
	refreshProducts,
	setProduct,
	setToggleHeader,
} from '../../slices/productListSlice';
import { useForm } from 'react-hook-form';

const ProductList = () => {
	const route = all_routes;
	const dispatch = useDispatch();
	const { products } = useSelector((state) => state.product);
	const { toggle_header } = useSelector((state) => state.product);

	const [isFilterVisible, setIsFilterVisible] = useState(false);
	const { register, handleSubmit } = useForm();
	const options = [
		{ value: 'sortByDate', label: 'Sort by Date' },
		{ value: '140923', label: '14 09 23' },
		{ value: '110923', label: '11 09 23' },
	];
	const productlist = [
		{ value: 'choose', label: 'Choose Product' },
		{ value: 'lenovo', label: 'Lenovo 3rd Generation' },
		{ value: 'nike', label: 'Nike Jordan' },
	];
	const categorylist = [
		{ value: 'choose', label: 'Choose Category' },
		{ value: 'laptop', label: 'Laptop' },
		{ value: 'shoe', label: 'Shoe' },
	];
	const subcategorylist = [
		{ value: 'choose', label: 'Choose Sub Category' },
		{ value: 'computers', label: 'Computers' },
		{ value: 'fruits', label: 'Fruits' },
	];
	const brandlist = [
		{ value: 'all', label: 'All Brand' },
		{ value: 'lenovo', label: 'Lenovo' },
		{ value: 'nike', label: 'Nike' },
	];
	const price = [
		{ value: 'price', label: 'Price' },
		{ value: '12500', label: '$12,500.00' },
		{ value: '13000', label: '$13,000.00' },
	];

	const toggleFilterVisibility = () => {
		setIsFilterVisible((prevVisibility) => !prevVisibility);
	};

	const onSubmit = async (data) => {
		console.log(data);
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
		dispatch(setProduct(product));
		// try {
		// 	console.log(product);
		// } catch (error) {
		// 	console.log(error);
		// }
	};

	useEffect(() => {
		dispatch(refreshProducts());
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
							to={route.editproduct}
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

	const showConfirmationAlert = () => {
		MySwal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			showCancelButton: true,
			confirmButtonColor: '#00ff00',
			confirmButtonText: 'Yes, delete it!',
			cancelButtonColor: '#ff0000',
			cancelButtonText: 'Cancel',
		}).then((result) => {
			if (result.isConfirmed) {
				MySwal.fire({
					title: 'Deleted!',
					text: 'Your file has been deleted.',
					className: 'btn btn-success',
					confirmButtonText: 'OK',
					customClass: {
						confirmButton: 'btn btn-success',
					},
				});
			} else {
				MySwal.close();
			}
		});
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
															<div className='search-input'>
																<label>Make</label>
																<input
																	type='text'
																	placeholder='Make'
																	className='form-control form-control-sm formsearch'
																	{...register('make')}
																/>
															</div>
														</div>
													</div>
													<div className='col-lg-2 col-sm-6 col-12'>
														<div className='input-blocks'>
															<div className='search-input'>
																<label>Supplier</label>
																<input
																	type='text'
																	placeholder='Supplier'
																	className='form-control form-control-sm formsearch'
																	{...register('supplier')}
																/>
															</div>
														</div>
													</div>
													<div className='col-lg-2 col-sm-6 col-12'>
														<div className='input-blocks'>
															<div className='search-input'>
																<label>Search 1</label>

																<input
																	type='text'
																	placeholder='Search 1'
																	className='form-control form-control-sm formsearch'
																	{...register('search1')}
																/>
															</div>
														</div>
													</div>
													<div className='col-lg-2 col-sm-6 col-12'>
														<div className='input-blocks'>
															<div className='search-input'>
																<label>Search 2</label>

																<input
																	type='text'
																	placeholder='Search 2'
																	className='form-control form-control-sm formsearch'
																	{...register('search2')}
																/>
															</div>
														</div>
													</div>
													<div className='col-lg-2 col-sm-6 col-12'>
														<div className='input-blocks'>
															<div className='search-input'>
																<label>MFR No</label>

																<input
																	type='text'
																	placeholder='MFR No.'
																	className='form-control form-control-sm formsearch'
																	{...register('mfrno')}
																/>
															</div>
														</div>
													</div>
													<div className='col-lg-2 col-sm-6 col-12'>
														<div className='input-blocks'>
															<div className='search-input'>
																<label>Details</label>

																<input
																	type='text'
																	placeholder='Details'
																	className='form-control form-control-sm formsearch'
																	{...register('details')}
																/>
															</div>
														</div>
													</div>
													<div className='col-lg-1 col-sm-4 col-12'>
														<div className='input-blocks'>
															<div className='search-input'>
																<label>Size</label>

																<input
																	type='text'
																	placeholder='Size'
																	className='form-control form-control-sm formsearch'
																	{...register('size')}
																/>
															</div>
														</div>
													</div>
													<div className='col-lg-1 col-sm-4 col-12'>
														<div className='input-blocks'>
															<div className='search-input'>
																<label>Color</label>

																<input
																	type='text'
																	placeholder='Color'
																	className='form-control form-control-sm formsearch'
																	{...register('color')}
																/>
															</div>
														</div>
													</div>
													<div className='col-lg-1 col-sm-4 col-12'>
														<div className='input-blocks'>
															<div className='search-input'>
																<label>Gender</label>

																<input
																	type='text'
																	placeholder='Gender'
																	className='form-control form-control-sm formsearch'
																	{...register('gender')}
																/>
															</div>
														</div>
													</div>
													<div className='col-lg-1 col-sm-4 col-12'>
														<div className='input-blocks'>
															<div className='search-input'>
																<label>Year</label>

																<input
																	type='text'
																	placeholder='Year'
																	className='form-control form-control-sm formsearch'
																	{...register('year')}
																/>
															</div>
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
							<div className='search-path'>
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
										<img
											src={CloseImg}
											alt='img'
										/>
									</span>
								</Link>
							</div>
							<div className='form-sort me-2'>
								<Sliders className='info-img' />
								<Select
									className='img-select'
									classNamePrefix='react-select'
									options={options}
									placeholder='14 09 23'
								/>
							</div>
						</div>

						{/* /Filter */}
						<div
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
													<Box className='info-img' />
													<Select
														className='img-select'
														classNamePrefix='react-select'
														options={productlist}
														placeholder='Choose Product'
													/>
												</div>
											</div>
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
						</div>
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
