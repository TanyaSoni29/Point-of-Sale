/** @format */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import ImageWithBasePath from '../../core/img/imagewithbasebath';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import {
	ChevronUp,
	Eye,
	FileText,
	PlusCircle,
	RotateCcw,
} from 'feather-icons-react/build/IconComponents';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Filter, Sliders, StopCircle, User } from 'react-feather';
import Select from 'react-select';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import Table from '../../core/pagination/datatable';
import AddQuotation from '../../core/modals/sales/addquotation';
import EditQuotation from '../../core/modals/sales/editquotation';
import PdfImg from '../../assets/img/icons/pdf.svg';
import ExcelImg from '../../assets/img/icons/excel.svg';
import CloseImg from '../../assets/img/icons/closes.svg';
import { setToggleHeader } from '../../slices/productListSlice';

const QuotationList = () => {
	const dispatch = useDispatch();
	const { toggle_header } = useSelector((state) => state.product);
	const dataSource = useSelector((state) => state.quotationlist_data);

	const [isFilterVisible, setIsFilterVisible] = useState(false);
	const toggleFilterVisibility = () => {
		setIsFilterVisible((prevVisibility) => !prevVisibility);
	};
	const oldandlatestvalue = [
		{ value: 'date', label: 'Sort by Date' },
		{ value: 'newest', label: 'Newest' },
		{ value: 'oldest', label: 'Oldest' },
	];
	const products = [
		{ value: 'Choose product', label: 'Choose product' },
		{ value: 'Bold V3.2', label: 'Bold V3.2' },
		{ value: 'Apple Series 5 Watch', label: 'Apple Series 5 Watch' },
	];
	const status = [
		{ value: 'Choose product', label: 'Choose Status' },
		{ value: 'Ordered', label: 'Ordered' },
		{ value: 'Sent', label: 'Sent' },
	];
	const customername = [
		{ value: 'Choose Custmer', label: 'Choose Customer' },
		{ value: 'walk-in-customer', label: 'walk-in-customer' },
		{ value: 'John Smith', label: 'John Smith' },
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

	const handleDelete = async (data) => {
		try {
			showConfirmationAlert();
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	};

	const handleEdit = async (data) => {
		try {
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	};

	const columns = [
		{
			title: 'Product Name',
			dataIndex: 'productname',
			sorter: (a, b) => a.productname.length - b.productname.length,
		},
		{
			title: 'Reference',
			dataIndex: 'reference',
			sorter: (a, b) => a.reference.length - b.reference.length,
		},
		{
			title: 'Customer Name',
			dataIndex: 'customername',
			sorter: (a, b) => a.customername.length - b.customername.length,
		},
		{
			title: 'Status',
			dataIndex: 'status',
			render: (text) => (
				<div>
					{text === 'Sent' && (
						<span className='badges status-badge'>{text}</span>
					)}
					{text === 'Ordered' && (
						<span className='badges order-badge'>{text}</span>
					)}
					{text === 'Pending' && (
						<span className='badges unstatus-badge'>{text}</span>
					)}
				</div>
			),
			sorter: (a, b) => a.status.length - b.status.length,
		},
		{
			title: 'Grand Total ($)',
			dataIndex: 'grandtotal',
			sorter: (a, b) => a.grandtotal.length - b.grandtotal.length,
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
							<Eye className='feather-view' />
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
							onClick={() => handleDelete(record)}
						>
							<i
								data-feather='trash-2'
								className='feather-trash-2'
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
	return (
		<div>
			<div className='page-wrapper'>
				<div className='content'>
					<div className='page-header'>
						<div className='add-item d-flex'>
							<div className='page-title'>
								<h4>Quotation List</h4>
								<h6>Manage Your Quotation</h6>
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
							<Link
								to='#'
								className='btn btn-added'
								data-bs-toggle='modal'
								data-bs-target='#add-units'
							>
								<PlusCircle className='me-2' />
								Add New Quotation
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
									<div className='d-flex align-items-center'>
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
										<div className='col-lg-2 col-sm-6 col-12'>
											<div className='input-blocks'>
												<Box className='info-img' />
												<Select
													className='img-select'
													classNamePrefix='react-select'
													options={products}
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
													options={status}
													placeholder='Choose Status'
												/>
											</div>
										</div>
										<div className='col-lg-2 col-sm-6 col-12'>
											<div className='input-blocks'>
												<User className='info-img' />
												<Select
													className='img-select'
													classNamePrefix='react-select'
													options={customername}
													placeholder='Choose Custmer'
												/>
											</div>
										</div>
										<div className='col-lg-2 col-sm-6 col-12'>
											<div className='input-blocks'>
												<FileText className='info-img' />
												<div className='input-groupicon'>
													<input
														type='text'
														className='form-control'
														placeholder='Enter Reference'
													/>
												</div>
											</div>
										</div>
										<div className='col-lg-4 col-sm-6 col-12'>
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
									dataSource={dataSource}
								/>
							</div>
						</div>
					</div>
					{/* /product list */}
				</div>
			</div>
			<AddQuotation />
			<EditQuotation />
		</div>
	);
};

export default QuotationList;
