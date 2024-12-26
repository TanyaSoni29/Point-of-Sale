/** @format */

import React, { useEffect, useState } from 'react';
import Breadcrumbs from '../../core/breadcrumbs';
import { Link } from 'react-router-dom';
import { Filter, Sliders, User, Globe, Edit, Eye, Trash2 } from 'react-feather';
// import ImageWithBasePath from '../../core/img/imagewithbasebath';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import Table from '../../core/pagination/datatable';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import SupplierModal from '../../core/modals/peoples/supplierModal';
import CloseImg from '../../assets/img/icons/closes.svg';
import { refreshSuppliers, setSupplier } from '../../slices/supplierSlice';
import { deleteSupplier } from '../../service/operations/suppliersApi';

const Suppliers = () => {
	const dispatch = useDispatch();
	const { suppliers } = useSelector((state) => state.suppliers);
	const { token } = useSelector((state) => state.auth);
	const [isFilterVisible, setIsFilterVisible] = useState(false);
	const toggleFilterVisibility = () => {
		setIsFilterVisible((prevVisibility) => !prevVisibility);
	};

	const options = [
		{ value: 'sortByDate', label: 'Sort by Date' },
		{ value: '140923', label: '14 09 23' },
		{ value: '110923', label: '11 09 23' },
	];
	const optionsTwo = [
		{ label: 'Choose Customer Name', value: '' },
		{ label: 'Benjamin', value: 'Benjamin' },
		{ label: 'Ellen', value: 'Ellen' },
		{ label: 'Freda', value: 'Freda' },
		{ label: 'Kaitlin', value: 'Kaitlin' },
	];

	const countries = [
		{ label: 'Choose Country', value: '' },
		{ label: 'India', value: 'India' },
		{ label: 'USA', value: 'USA' },
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

	const handleEdit = async (supplier) => {
		dispatch(setSupplier(supplier));
	};

	const handleDelete = async (supplier) => {
		const isConfirmed = await showConfirmationAlert();
		if (!isConfirmed) return;
		try {
			const response = await deleteSupplier(token, supplier.accountNo);
			if (response) {
				dispatch(refreshSuppliers());
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		dispatch(refreshSuppliers());
	}, [dispatch]);

	const columns = [
		{
			title: 'Account No.',
			dataIndex: 'accountNo',
			sorter: (a, b) => a.accountNo.localCompare(b.accountNo),
		},
		{
			title: 'Name',
			dataIndex: 'name',
			sorter: (a, b) => a.name.localeCompare(b.name),
		},
		{
			title: 'Email',
			dataIndex: 'email',
			sorter: (a, b) => a.email.length - b.email.length,
		},

		{
			title: 'Phone',
			dataIndex: 'telephone',
			sorter: (a, b) => a.phone.length - b.phone.length,
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

	return (
		<div className='page-wrapper'>
			<div className='content'>
				<Breadcrumbs
					maintitle='Supplier List '
					subtitle='Manage Your Supplier'
					addButton='Add New Supplier'
				/>
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
                      src="assets/img/icons/closes.svg"
                      alt="img"
                    /> */}
										<img
											src={CloseImg}
											alt='img'
										/>
									</span>
								</Link>
							</div>
							<div className='form-sort stylewidth'>
								<Sliders className='info-img' />

								<Select
									classNamePrefix='react-select'
									className='img-select'
									options={options}
									placeholder='Sort by Date'
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
												classNamePrefix='react-select'
												className='img-select'
												options={optionsTwo}
												placeholder='Choose Customer Name'
											/>
										</div>
									</div>
									<div className='col-lg-3 col-sm-6 col-12'>
										<div className='input-blocks'>
											<Globe className='info-img' />
											<Select
												classNamePrefix='react-select'
												className='img-select'
												options={countries}
												placeholder='Choose Country'
											/>
										</div>
									</div>
									<div className='col-lg-3 col-sm-6 col-12 ms-auto'>
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
								className='table datanew'
								columns={columns}
								dataSource={suppliers}
								rowKey={(record) => record.id}
							/>
						</div>
					</div>
				</div>
				{/* /product list */}
			</div>

			<SupplierModal />
		</div>
	);
};

export default Suppliers;
