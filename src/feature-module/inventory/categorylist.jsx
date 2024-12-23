/** @format */

import React, { useEffect, useState } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
// import ImageWithBasePath from '../../core/img/imagewithbasebath';
import { Link } from 'react-router-dom';
import {
	Calendar,
	ChevronUp,
	Filter,
	PlusCircle,
	RotateCcw,
	Sliders,
	StopCircle,
	Zap,
} from 'feather-icons-react/build/IconComponents';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { DatePicker, Switch } from 'antd';
import AddCategoryList from '../../core/modals/inventory/addcategorylist';
import EditCategoryList from '../../core/modals/inventory/editcategorylist';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import Table from '../../core/pagination/datatable';
import PdfImg from '../../assets/img/icons/pdf.svg';
import ExcelImg from '../../assets/img/icons/excel.svg';
import CloseImg from '../../assets/img/icons/closes.svg';
import {
	refreshCategories,
	setCategory,
	updateCategory,
} from '../../slices/categorySlice';
import {
	deleteCategory,
	updateCategories,
} from '../../service/operations/categoryApi';
import { setToggleHeader } from '../../slices/productListSlice';

const CategoryList = () => {
	const dispatch = useDispatch();
	const { toggle_header } = useSelector((state) => state.product);
	const { categories } = useSelector((state) => state.category);
	const { token } = useSelector((state) => state.auth);

	const [isFilterVisible, setIsFilterVisible] = useState(false);
	const toggleFilterVisibility = () => {
		setIsFilterVisible((prevVisibility) => !prevVisibility);
	};
	const [selectedDate, setSelectedDate] = useState(new Date());
	const [searchQuery, setSearchQuery] = useState('');
	const handleDateChange = (date) => {
		setSelectedDate(date);
	};

	const oldandlatestvalue = [
		{ value: 'date', label: 'Sort by Date' },
		{ value: 'newest', label: 'Newest' },
		{ value: 'oldest', label: 'Oldest' },
	];
	const category = [
		{ value: 'chooseCategory', label: 'Choose Category' },
		{ value: 'laptop', label: 'Laptop' },
		{ value: 'electronics', label: 'Electronics' },
		{ value: 'shoe', label: 'Shoe' },
	];
	const status = [
		{ value: 'chooseStatus', label: 'Choose Status' },
		{ value: 'active', label: 'Active' },
		{ value: 'inactive', label: 'Inactive' },
	];

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
		return result.isConfirmed; // Return the isConfirmed value
	};

	const handleToggle = async (category, field, checked) => {
		try {
			const newData = {
				...category,
				[field]: checked,
			};
			const response = await updateCategories(token, newData);
			if (response?.success) {
				dispatch(updateCategory(newData));
			}
		} catch (error) {
			console.log(error);
		}
	};

	const handleDelete = async (category) => {
		const isConfirmed = await showConfirmationAlert();
		console.log(isConfirmed);
		if (!isConfirmed) {
			return;
		}
		try {
			const response = await deleteCategory(token, category.code);
			if (response) {
				dispatch(refreshCategories());
			}
		} catch (error) {
			console.log(error);
		}
	};

	const handleEdit = (category) => {
		// console.log(category);
		dispatch(setCategory(category));
	};

	const columns = [
		{
			title: 'Code',
			dataIndex: 'code',
			sorter: (a, b) => a.code.localeCompare(b.code),
		},
		{
			title: 'Category',
			dataIndex: 'name',
			sorter: (a, b) => a.name.localeCompare(b.name),
		},
		{
			title: 'Main Category',
			dataIndex: 'a',
			render: (value, record) => (
				<Switch
					checked={value} // True or false for switch state
					onChange={(checked) => handleToggle(record, 'a', checked)} // API call handler
				/>
			),
			sorter: (a, b) => a.a - b.a,
		},
		{
			title: 'Sub Category',
			dataIndex: 'b',
			render: (value, record) => (
				<Switch
					checked={value} // True or false for switch state
					onChange={(checked) => handleToggle(record, 'b', checked)} // API call handler
				/>
			),
			sorter: (a, b) => a.a - b.a,
		},
		{
			title: 'Sub Category 2',
			dataIndex: 'c',
			render: (value, record) => (
				<Switch
					checked={value} // True or false for switch state
					onChange={(checked) => handleToggle(record, 'c', checked)} // API call handler
				/>
			),
			sorter: (a, b) => a.a - b.a,
		},
		{
			title: 'Major',
			dataIndex: 'major',
			render: (value, record) => (
				<Switch
					checked={value}
					onChange={(checked) => handleToggle(record, 'major', checked)}
				/>
			),
			sorter: (a, b) => a.major - b.major,
		},
		{
			title: 'Actions',
			dataIndex: 'actions',
			key: 'actions',
			render: (_, record) => (
				<div className='action-table-data'>
					<div className='edit-delete-action'>
						<Link
							className='me-2 p-2'
							to='#'
							data-bs-toggle='modal'
							data-bs-target='#edit-category'
							onClick={() => handleEdit(record)}
						>
							<i
								data-feather='edit'
								className='feather-edit'
							></i>
						</Link>
						<Link
							className='confirm-text p-2'
							to='#'
							onClick={() => handleDelete(record)}
						>
							<i
								data-feather='trash-2'
								className='feather-trash-2'
								onClick={showConfirmationAlert}
							></i>
						</Link>
					</div>
				</div>
			),
		},
	];

	useEffect(() => {
		dispatch(refreshCategories());
	}, [dispatch]);

	const filterCategory = categories?.filter(
		(category) =>
			category?.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
			category?.code?.toLowerCase().includes(searchQuery.toLowerCase())
	);

	return (
		<div>
			<div className='page-wrapper'>
				<div className='content'>
					<div className='page-header'>
						<div className='add-item d-flex'>
							<div className='page-title'>
								<h4>Category</h4>
								<h6>Manage your categories</h6>
							</div>
						</div>
						<ul className='table-top-head'>
							<li>
								<OverlayTrigger
									placement='top'
									overlay={renderTooltip}
								>
									<Link>
										{/* <ImageWithBasePath
											src='assets/img/icons/pdf.svg'
											alt='img'
										/> */}
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
										onClick={() => {
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
								to='#'
								className='btn btn-added'
								data-bs-toggle='modal'
								data-bs-target='#add-category'
							>
								<PlusCircle className='me-2' />
								Add New Category
							</Link>
						</div>
					</div>
					{/* /product list */}
					<div className='card table-list-card'>
						<div className='card-body'>
							<div className='table-top'>
								<div className='search-set'>
									<div className='search-input'>
										<input
											type='text'
											placeholder='Search'
											className='form-control form-control-sm formsearch'
											onChange={(e) => setSearchQuery(e.target.value)}
											value={searchQuery}
										/>
										<Link
											to
											className='btn btn-searchset'
										>
											<i
												data-feather='search'
												className='feather-search'
											/>
										</Link>
									</div>
								</div>
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
								<div className='form-sort'>
									<Sliders className='info-img' />
									<Select
										className='img-select'
										classNamePrefix='react-select'
										options={oldandlatestvalue}
										placeholder='Newest'
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
										<div className='col-lg-3 col-sm-6 col-12'>
											<div className='input-blocks'>
												<Zap className='info-img' />
												<Select
													className='img-select'
													options={category}
													classNamePrefix='react-select'
													placeholder='Choose Category'
												/>
											</div>
										</div>
										<div className='col-lg-3 col-sm-6 col-12'>
											<div className='input-blocks'>
												<Calendar className='info-img' />
												<div className='input-groupicon'>
													<DatePicker
														selected={selectedDate}
														onChange={handleDateChange}
														type='date'
														className='filterdatepicker'
														dateFormat='dd-MM-yyyy'
														placeholder='Choose Date'
													/>
												</div>
											</div>
										</div>
										<div className='col-lg-3 col-sm-6 col-12'>
											<div className='input-blocks'>
												<StopCircle className='info-img' />

												<Select
													className='img-select'
													options={status}
													classNamePrefix='react-select'
													placeholder='Choose Status'
												/>
											</div>
										</div>
										<div className='col-lg-3 col-sm-6 col-12 ms-auto'>
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
							{/* /Filter */}
							<div className='table-responsive'>
								<Table
									columns={columns}
									dataSource={filterCategory}
								/>
							</div>
						</div>
					</div>
					{/* /product list */}
				</div>
			</div>
			<AddCategoryList />
			<EditCategoryList />
		</div>
	);
};

export default CategoryList;
