/** @format */

// import { PlusCircle } from 'feather-icons-react/build/IconComponents';
import { Switch } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import Select from 'react-select';
import Table from '../../../core/pagination/datatable';

// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { createMakes } from '../../../service/operations/MakesApi';
// import { refreshMakes } from '../../../slices/makesSlice';

const ProductSearch = () => {
	const [data, setData] = useState([]);
	// const { token } = useSelector((state) => state.auth);
	const modalRef = useRef(null);
	const {
		register,
		handleSubmit,
		setValue,
		watch,
		formState: { isSubmitSuccessful },
		reset,
	} = useForm({
		defaultValues: {
			make: '',
			supplier: '',
			search1: '',
			search2: '',
			details: '',
			mfrNo: '',
			size: '',
			color: '',
			gender: '',
			year: new Date().getFullYear(),
			allProducts: true,
			stockAllShops: false,
			stockHere: false,
			stockAt: false,
			notInStock: false,
			currentOnly: true,
			promoOnly: false,
		},
	});

	const allProducts = watch('allProducts');
	const stockAllShops = watch('stockAllShops');
	const stockHere = watch('stockHere');
	const stockAt = watch('stockAt');
	const notInStock = watch('notInStock');
	const currentOnly = watch('currentOnly');
	const promoOnly = watch('promoOnly');

	const genders = [
		{ value: 'Unisex', label: 'Unisex' },
		{ value: 'Male', label: 'Male' },
		{ value: 'Female', label: 'Female' },
	];

	const majorMinorOption = [
		{ value: 'Major', label: 'Major' },
		{ value: 'Minor', label: 'Minor' },
		{ value: 'Both', label: 'Both' },
	];

	const priceOptions = [
		{ value: 0, label: '0' },
		{ value: 99, label: '99' },
		{ value: 999, label: '999' },
		{ value: 9999, label: '9999' },
		{ value: 99999, label: '99999' },
	];

	const columns = [
		{
			title: 'Code',
			dataIndex: 'code',
			sorter: (a, b) => a.code.localCompare(b.code),
		},
		{
			title: 'Make',
			dataIndex: 'name',
			sorter: (a, b) => a.name.localCompare(b.name),
		},

		// {
		// 	title: 'Logo',
		// 	dataIndex: 'logo',
		// 	render: (text, record) => (
		// 		<span className='productimgname'>
		// 			<Link
		// 				to='#'
		// 				className='product-img stock-img'
		// 			>
		// 				<ImageWithBasePath
		// 					alt=''
		// 					src={record.logo}
		// 				/>
		// 			</Link>
		// 		</span>
		// 	),
		// 	sorter: (a, b) => a.logo.length - b.logo.length,
		// 	width: '5%',
		// },
		// {
		// 	title: 'Createdon',
		// 	dataIndex: 'createdon',
		// 	sorter: (a, b) => a.createdon.length - b.createdon.length,
		// },
		// {
		// 	title: 'Status',
		// 	dataIndex: 'status',
		// 	render: (text) => (
		// 		<span className='badge badge-linesuccess'>
		// 			<Link to='#'> {text}</Link>
		// 		</span>
		// 	),
		// 	sorter: (a, b) => a.status.length - b.status.length,
		// },
		// {
		// 	title: 'Actions',
		// 	dataIndex: 'actions',
		// 	key: 'actions',
		// 	render: (_, record) => (
		// 		<div className='action-table-data'>
		// 			<div className='edit-delete-action'>
		// 				<Link
		// 					className='me-2 p-2'
		// 					to='#'
		// 					data-bs-toggle='modal'
		// 					data-bs-target='#edit-brand'
		// 					onClick={() => handleEdit(record)}
		// 				>
		// 					<i
		// 						data-feather='edit'
		// 						className='feather-edit'
		// 					></i>
		// 				</Link>
		// 				<Link
		// 					className='confirm-text p-2'
		// 					to='#'
		// 					onClick={() => handleDelete(record)}
		// 				>
		// 					<i
		// 						data-feather='trash-2'
		// 						className='feather-trash-2'
		// 						onClick={showConfirmationAlert}
		// 					></i>
		// 				</Link>
		// 			</div>
		// 		</div>
		// 	),
		// },
	];

	const onSubmit = async (data) => {
		console.log(data);
		try {
			// const response = await createMakes(token, data);
			// console.log('create category response.....', response);
			// if (response?.success) {
			// 	if (modalRef.current) {
			// 		modalRef.current.click();
			// 	}
			// }
			setData(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (isSubmitSuccessful) {
			reset({
				make: '',
				supplier: '',
				search1: '',
				search2: '',
				details: '',
				mfrNo: '',
				size: '',
				color: '',
				gender: '',
				year: '',
				allProducts: true,
				stockAllShops: false,
				stockHere: false,
				stockAt: false,
				notInStock: false,
				currentOnly: true,
				promoOnly: false,
			});
		}
	}, [reset, isSubmitSuccessful]);
	return (
		<>
			{/* Add Brand */}
			<div
				className='modal fade'
				id='product-search'
			>
				<div className='modal-dialog modal-dialog-centered modal-xl custom-modal-two'>
					<div className='modal-content'>
						<div className='page-wrapper-new p-0'>
							<div className='content'>
								<div className='modal-header border-0 custom-modal-header'>
									<div className='page-title'>
										<h4>Product Search</h4>
									</div>
									<button
										type='button'
										className='close'
										data-bs-dismiss='modal'
										aria-label='Close'
										ref={modalRef}
									>
										<span aria-hidden='true'>×</span>
									</button>
								</div>
								<div className='modal-body custom-modal-body new-employee-field'>
									<form onSubmit={handleSubmit(onSubmit)}>
										<div className='row'>
											<div className='col-lg-2'>
												<div className='mb-2'>
													<label className='form-label'>Make</label>
													<input
														type='text'
														className='form-control'
														{...register('make')}
														placeholder='Enter Make'
													/>
												</div>
											</div>
											<div className='col-lg-2'>
												<div className='mb-2'>
													<label className='form-label'>Supplier</label>
													<input
														type='text'
														className='form-control'
														{...register('supplier')}
														placeholder='Enter Supplier'
													/>
												</div>
											</div>
											<div className='col-lg-2'>
												<div className='mb-2'>
													<label className='form-label'>Search 1</label>
													<input
														type='text'
														className='form-control'
														{...register('search1')}
														placeholder='Enter Search keyword'
													/>
												</div>
											</div>
											<div className='col-lg-2'>
												<div className='mb-2'>
													<label className='form-label'>Search 2</label>
													<input
														type='text'
														className='form-control'
														{...register('search2')}
													/>
												</div>
											</div>
											<div className='col-lg-2'>
												<div className='mb-2'>
													<label className='form-label'>MFR No.</label>
													<input
														type='text'
														className='form-control'
														{...register('mfrno')}
														placeholder='Enter MFR Number'
													/>
												</div>
											</div>
											<div className='col-lg-2'>
												<div className='mb-2'>
													<label className='form-label'>Details</label>
													<input
														type='text'
														className='form-control'
														{...register('details')}
														placeholder='Enter Details'
													/>
												</div>
											</div>

											<div className='col-lg-2'>
												<div className='mb-2'>
													<label className='form-label'>CatA</label>
													<input
														type='text'
														className='form-control'
														{...register('catA')}
														placeholder='Enter Category A'
													/>
												</div>
											</div>
											<div className='col-lg-2'>
												<div className='mb-2'>
													<label className='form-label'>CatB</label>
													<input
														type='text'
														className='form-control'
														{...register('catB')}
														placeholder='Enter Category B'
													/>
												</div>
											</div>
											<div className='col-lg-2'>
												<div className='mb-2'>
													<label className='form-label'>CatC</label>
													<input
														type='text'
														className='form-control'
														{...register('catC')}
														placeholder='Enter Category C'
													/>
												</div>
											</div>
											<div className='col-lg-2'>
												<div className='mb-2'>
													<label className='form-label'>Major/Minor</label>
													<Select
														id='majorMinor'
														classNamePrefix='react-select'
														options={majorMinorOption}
														onChange={(selected) =>
															setValue('majorMinor', selected?.value)
														}
														placeholder='Choose'
													/>
												</div>
											</div>
											<div className='col-lg-2'>
												<div className='row'>
													<div className='col-lg-6'>
														<div className='mb-2'>
															<label className='form-label'>Size</label>
															<input
																type='text'
																className='form-control'
																{...register('size')}
																placeholder='Enter Size'
															/>
														</div>
													</div>
													<div className='col-lg-6'>
														<div className='mb-2'>
															<label className='form-label'>Color</label>
															<input
																type='text'
																className='form-control'
																{...register('color')}
																placeholder='Enter Color'
															/>
														</div>
													</div>
												</div>
											</div>

											<div className='col-lg-2'>
												<div className='row'>
													<div className='col-lg-6'>
														<div className='mb-2'>
															<label className='form-label'>Gender</label>
															<Select
																id='gender'
																classNamePrefix='react-select'
																options={genders}
																onChange={(selected) =>
																	setValue('gender', selected?.value)
																}
																placeholder='Choose'
															/>
														</div>
													</div>
													<div className='col-lg-6'>
														<div className='mb-2'>
															<label className='form-label'>Year</label>
															<input
																type='text'
																className='form-control'
																{...register('year')}
																placeholder='Enter Year'
															/>
														</div>
													</div>
												</div>
											</div>

											<div className='col-lg-4'>
												<div className='row'>
													<div className='col-lg-6'>
														<div className='mb-2'>
															<label className='form-label'>Price From</label>
															<Select
																id='from'
																classNamePrefix='react-select'
																options={priceOptions}
																onChange={(selected) =>
																	setValue('from', selected?.value)
																}
																placeholder='Choose'
															/>
														</div>
													</div>
													<div className='col-lg-6'>
														<div className='mb-2'>
															<label className='form-label'>Price To</label>
															<Select
																id='to'
																classNamePrefix='react-select'
																options={priceOptions}
																onChange={(selected) =>
																	setValue('to', selected?.value)
																}
																placeholder='Choose'
															/>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className='col-lg-12'>
											<div className='row'>
												<div className='col-lg-4'>
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
																checked={promoOnly}
																onChange={(value) => {
																	setValue('promoOnly', value);
																}}
																style={{ marginRight: '6px' }}
															/>
															Promo Only
														</label>
													</div>
												</div>
												<div className='col-lg-4'>
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
																checked={notInStock}
																onChange={(value) => {
																	setValue('notInStock', value);
																}}
																style={{ marginRight: '6px' }}
															/>
															Not In Stock (All Shops)
														</label>
													</div>
												</div>
												<div className='col-lg-4'>
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
											</div>
										</div>

										{/* <label className='form-label'>Logo</label>
										<div className='profile-pic-upload mb-3'>
											<div className='profile-pic brand-pic'>
												<span>
													<PlusCircle className='plus-down-add' />
													Add Image
												</span>
											</div>
											<div className='image-upload mb-0'>
												<input type='file' />
												<div className='image-uploads'>
													<h4>Change Image</h4>
												</div>
											</div>
										</div>
										<div className='mb-0'>
											<div className='status-toggle modal-status d-flex justify-content-between align-items-center'>
												<span className='status-label'>Status</span>
												<input
													type='checkbox'
													id='user2'
													className='check'
													defaultChecked='true'
												/>
												<label
													htmlFor='user2'
													className='checktoggle'
												/>
											</div>
										</div> */}
										<div className='modal-footer-btn mt-0'>
											{/* <button
												type='button'
												className='btn btn-cancel me-2'
												data-bs-dismiss='modal'
											>
												Cancel
											</button> */}
											<button
												type='submit'
												className='btn btn-submit'
											>
												Submit
											</button>
										</div>
									</form>
									<div
										className='table-container mt-2'
										style={{
											maxHeight: '300px', // Adjust the height as needed
											overflowY: 'auto',
											border: '1px solid #ddd',
											borderRadius: '4px',
											padding: '10px',
										}}
									>
										<div className='table-responsive'>
											<Table
												columns={columns}
												dataSource={data}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* /Add Brand */}
		</>
	);
};

export default ProductSearch;
