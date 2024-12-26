/** @format */

import React, { useEffect, useState } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import ImageWithBasePath from '../../core/img/imagewithbasebath';
import { ChevronUp, RotateCcw } from 'feather-icons-react/build/IconComponents';
import { useDispatch, useSelector } from 'react-redux';
import {
	Filter,
	PlusCircle,
	Sliders,
	StopCircle,
	User,
	Zap,
} from 'react-feather';
import Select from 'react-select';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import Table from '../../core/pagination/datatable';
import AddUsers from '../../core/modals/usermanagement/addusers';
import EditUser from '../../core/modals/usermanagement/edituser';
import PdfImg from '../../assets/img/icons/pdf.svg';
import ExcelImg from '../../assets/img/icons/excel.svg';
import CloseImg from '../../assets/img/icons/closes.svg';
import { setToggleHeader } from '../../slices/productListSlice';
import {
	refreshStaffUsers,
	setStaffUser,
	updateStaffUser,
} from '../../slices/staffUserSlice';
import { Switch } from 'antd';
import { updateStaffUsers } from '../../service/operations/staffUsersApi';

const Users = () => {
	const oldandlatestvalue = [
		{ value: 'date', label: 'Sort by Date' },
		{ value: 'newest', label: 'Newest' },
		{ value: 'oldest', label: 'Oldest' },
	];
	const users = [
		{ value: 'Choose Name', label: 'Choose Name' },
		{ value: 'Lilly', label: 'Lilly' },
		{ value: 'Benjamin', label: 'Benjamin' },
	];
	const status = [
		{ value: 'Choose Name', label: 'Choose Status' },
		{ value: 'Active', label: 'Active' },
		{ value: 'InActive', label: 'InActive' },
	];
	const role = [
		{ value: 'Choose Role', label: 'Choose Role' },
		{ value: 'AcStore Keeper', label: 'Store Keeper' },
		{ value: 'Salesman', label: 'Salesman' },
	];

	const dispatch = useDispatch();
	const { toggle_header } = useSelector((state) => state.product);
	const { staffUsers } = useSelector((state) => state.staffUsers);
	const { token } = useSelector((state) => state.auth);
	const [isFilterVisible, setIsFilterVisible] = useState(false);
	const toggleFilterVisibility = () => {
		setIsFilterVisible((prevVisibility) => !prevVisibility);
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

	const handleDelete = async (user) => {
		try {
			showConfirmationAlert();
			console.log(user);
		} catch (error) {
			console.log(error);
		}
	};

	const handleEdit = async (user) => {
		dispatch(setStaffUser(user));
	};

	const handleToggle = async (user, field, checked) => {
		try {
			const newData = {
				...user,
				[field]: checked,
			};
			const response = await updateStaffUsers(token, newData);
			if (response?.success) {
				dispatch(updateStaffUser(newData));
			}
		} catch (error) {
			console.log(error);
		}
	};

	const columns = [
		{
			title: 'User Code',
			dataIndex: 'code',
			render: (text) => (
				<span className='userimgname'>
					{/* <Link
						to='#'
						className='userslist-img bg-img'
					>
						<ImageWithBasePath
							alt=''
							src={record.img}
						/>
					</Link> */}
					<div>
						<Link to='#'>{text}</Link>
					</div>
				</span>
			),
			sorter: (a, b) => a.code.localeCompare(b.code),
		},

		{
			title: 'User Name',
			dataIndex: 'name',
			sorter: (a, b) => a.name.localeCompare(b.name),
		},
		{
			title: 'Pin',
			dataIndex: 'pin',
			sorter: (a, b) => a.pin.localeCompare(b.pin),
		},
		{
			title: 'Allow Discount',
			dataIndex: 'allowDiscount',
			render: (value, record) => (
				<Switch
					checked={value} // True or false for switch state
					onChange={(checked) => handleToggle(record, 'allowDiscount', checked)} // API call handler
				/>
			),
			sorter: (a, b) => a.allowDiscount - b.allowDiscount,
		},
		{
			title: 'Allow Price Change',
			dataIndex: 'allowPriceChange',
			render: (value, record) => (
				<Switch
					checked={value} // True or false for switch state
					onChange={(checked) =>
						handleToggle(record, 'allowPriceChange', checked)
					} // API call handler
				/>
			),
			sorter: (a, b) => a.allowPriceChange - b.allowPriceChange,
		},
		{
			title: 'Allow Credit',
			dataIndex: 'allowCredit',
			render: (value, record) => (
				<Switch
					checked={value} // True or false for switch state
					onChange={(checked) => handleToggle(record, 'allowCredit', checked)} // API call handler
				/>
			),
			sorter: (a, b) => a.allowCredit - b.allowCredit,
		},
		{
			title: 'Mechanic',
			dataIndex: 'isMachanic',
			render: (value, record) => (
				<Switch
					checked={value} // True or false for switch state
					onChange={(checked) => handleToggle(record, 'isMachanic', checked)} // API call handler
				/>
			),
			sorter: (a, b) => a.isMachanic - b.isMachanic,
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
						>
							<i
								data-feather='eye'
								className='feather feather-eye action-eye'
							></i>
						</Link>
						<Link
							className='me-2 p-2'
							to='#'
							data-bs-toggle='modal'
							data-bs-target='#edit-units'
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
						>
							<i
								data-feather='trash-2'
								className='feather-trash-2'
								onClick={() => handleDelete(record)}
							></i>
						</Link>
					</div>
				</div>
			),
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

	useEffect(() => {
		dispatch(refreshStaffUsers());
	}, [dispatch]);

	return (
		<div>
			<div className='page-wrapper'>
				<div className='content'>
					<div className='page-header'>
						<div className='add-item d-flex'>
							<div className='page-title'>
								<h4>User List</h4>
								<h6>Manage Your Users</h6>
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
                      src="assets/img/icons/pdf.svg"
                      alt="img"
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
							<a
								to='#'
								className='btn btn-added'
								data-bs-toggle='modal'
								data-bs-target='#add-units'
							>
								<PlusCircle className='me-2' />
								Add New User
							</a>
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
												<User className='info-img' />
												<Select
													className='img-select'
													classNamePrefix='react-select'
													options={users}
													placeholder='Newest'
												/>
											</div>
										</div>
										<div className='col-lg-3 col-sm-6 col-12'>
											<div className='input-blocks'>
												<StopCircle className='info-img' />

												<Select
													className='img-select'
													classNamePrefix='react-select'
													options={status}
													placeholder='Choose Status'
												/>
											</div>
										</div>
										<div className='col-lg-3 col-sm-6 col-12'>
											<div className='input-blocks'>
												<Zap className='info-img' />

												<Select
													className='img-select'
													classNamePrefix='react-select'
													options={role}
													placeholder='Choose Role'
												/>
											</div>
										</div>
										<div className='col-lg-3 col-sm-6 col-12'>
											<div className='input-blocks'>
												<a className='btn btn-filters ms-auto'>
													{' '}
													<i
														data-feather='search'
														className='feather-search'
													/>{' '}
													Search{' '}
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							{/* /Filter */}
							<div className='table-responsive'>
								<Table
									columns={columns}
									dataSource={staffUsers}
								/>
							</div>
						</div>
					</div>
					{/* /product list */}
				</div>
			</div>
			<AddUsers />
			<EditUser />
		</div>
	);
};

export default Users;
