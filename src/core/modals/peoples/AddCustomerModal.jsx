/** @format */

import {
	ArrowLeft,
	Calendar,
	ChevronUp,
} from 'feather-icons-react/build/IconComponents';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import React, { useEffect } from 'react';
// import Select from 'react-select';
import { all_routes } from '../../../Router/all_routes';
import { useDispatch, useSelector } from 'react-redux';
import { setToggleHeader } from '../../../slices/productListSlice';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { DatePicker } from 'antd';
import './AddCustomerModal.css';
// import ImageWithBasePath from "../../img/imagewithbasebath";
// import { Link } from "react-router-dom";

const AddCustomerModal = () => {
	const route = all_routes;
	const dispatch = useDispatch();
	const { toggle_header } = useSelector((state) => state.product);
	const {
		register,
		handleSubmit,
		// setValue,
		formState: { errors, isSubmitSuccessful },
		reset,
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
	};

	const renderCollapseTooltip = (props) => (
		<Tooltip
			id='refresh-tooltip'
			{...props}
		>
			Collapse
		</Tooltip>
	);

	useEffect(() => {
		if (isSubmitSuccessful) {
			reset({
				name: '',
			});
		}
	}, [reset, isSubmitSuccessful]);

	// const countriesOptions = [
	// 	{ value: 'choose', label: 'Choose' },
	// 	{ value: 'unitedKingdom', label: 'United Kingdom' },
	// 	{ value: 'unitedStates', label: 'United States' },
	// ];

	return (
		<>
			{/* Add Customer */}
			<div className='page-wrapper'>
				<div className='content'>
					<div className='page-header'>
						<div className='add-item d-flex'>
							<div className='page-title'>
								<h4>New Customer</h4>
								<h6>Create new customer</h6>
							</div>
						</div>
						<ul className='table-top-head'>
							<li>
								<div className='page-btn'>
									<Link
										to={route.customers}
										className='btn btn-secondary'
									>
										<ArrowLeft className='me-2' />
										Back to Customers
									</Link>
								</div>
							</li>
							<li>
								<OverlayTrigger
									placement='top'
									overlay={renderCollapseTooltip}
								>
									<Link
										data-bs-toggle='tooltip'
										data-bs-placement='top'
										title='Collapse'
										id='collapse-header'
										className={toggle_header ? 'active' : ''}
										onClick={() => {
											dispatch(setToggleHeader(!toggle_header));
										}}
									>
										<ChevronUp className='feather-chevron-up' />
									</Link>
								</OverlayTrigger>
							</li>
						</ul>
					</div>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className='card'>
							<div className='card-body add-product pb-0'>
								{/* <div className='modal-title-head people-cust-avatar'>
									<h6>Avatar</h6>
								</div> */}
								{/* <div className='new-employee-field'>
									<div className='profile-pic-upload'>
										<div className='profile-pic'>
											<span>
												<i
													data-feather='plus-circle'
													className='plus-down-add'
												/>{' '}
												Add Image
											</span>
										</div>
										<div className='mb-3'>
											<div className='image-upload mb-0'>
												<input type='file' />
												<div className='image-uploads'>
													<h4>Change Image</h4>
												</div>
											</div>
										</div>
									</div>
								</div> */}
								<div className='row mb-3'>
									<div className='col-md-4'>
										<div className='mb-3'>
											<label className='form-label'>Account No.</label>
											<input
												type='text'
												className='form-control'
												placeholder='Enter Account Number'
												{...register('accountNo', {
													required: 'Account Number is required',
												})}
											/>
											{errors?.accountNo && (
												<p className='text-danger'>
													{errors?.accountNo?.message}
												</p>
											)}
										</div>
									</div>
									<div className='col-md-8 d-flex justify-content-end align-items-end'>
										<div className='d-flex justify-content-end align-items-center'>
											<button className='btn btn-submit'>
												Same As Billing
											</button>
										</div>
									</div>
								</div>

								<div className='row'>
									<div className='col-md-6 border-end'>
										<h4 className='mb-3'>Billing Details</h4>
										<div className='row'>
											<div className='col-lg-6'>
												<div className='mb-3'>
													<label>Surname</label>
													<input
														type='text'
														className='form-control'
														{...register('surname', {
															required: 'Surname is required',
														})}
													/>
													{errors?.surname && (
														<p className='text-danger'>
															{errors?.surname?.message}
														</p>
													)}
												</div>
											</div>
											<div className='col-lg-6'>
												<div className='mb-3'>
													<label>Name</label>
													<input
														type='text'
														className='form-control'
														{...register('name', {
															required: 'Name is required',
														})}
													/>
													{errors?.name && (
														<p className='text-danger'>
															{errors?.name?.message}
														</p>
													)}
												</div>
											</div>
										</div>

										<div className='row'>
											<div className='col-lg-6'>
												<div className='mb-3'>
													<label>Title</label>
													<input
														type='text'
														className='form-control'
														{...register('title', {
															required: 'title is required',
														})}
													/>
													{errors?.title && (
														<p className='text-danger'>
															{errors?.title?.message}
														</p>
													)}
												</div>
											</div>
											<div className='col-lg-6'>
												<div className='mb-3'>
													<label>Initials</label>
													<input
														type='text'
														className='form-control'
														{...register('initials', {
															required: 'Initials is required',
														})}
													/>
													{errors?.initials && (
														<p className='text-danger'>
															{errors?.initials?.message}
														</p>
													)}
												</div>
											</div>
										</div>

										<div className='mb-3'>
											<label>House Name</label>
											<input
												type='text'
												className='form-control'
												{...register('houseName', {
													required: 'House Name is required',
												})}
											/>
											{errors?.houseName && (
												<p className='text-danger'>
													{errors?.houseName?.message}
												</p>
											)}
										</div>
										<div className='mb-3'>
											<label>Address</label>
											<input
												type='text'
												className='form-control'
												{...register('address1', {
													required: 'Address is required',
												})}
											/>
											{errors?.address1 && (
												<p className='text-danger'>
													{errors?.address1?.message}
												</p>
											)}
										</div>
										<div className='mb-3'>
											{/* <label>Address</label> */}
											<input
												type='text'
												className='form-control'
												{...register('address2')}
											/>
											{errors?.address2 && (
												<p className='text-danger'>
													{errors?.address2?.message}
												</p>
											)}
										</div>
										<div className='mb-3'>
											{/* <label>Address</label> */}
											<input
												type='text'
												className='form-control'
												{...register('address3')}
											/>
											{errors?.address3 && (
												<p className='text-danger'>
													{errors?.address3?.message}
												</p>
											)}
										</div>
										<div className='mb-3'>
											{/* <label>Address</label> */}
											<input
												type='text'
												className='form-control'
												{...register('address4')}
											/>
											{errors?.address4 && (
												<p className='text-danger'>
													{errors?.address4?.message}
												</p>
											)}
										</div>

										<div className='row'>
											<div className='col-lg-6'>
												<div className='mb-3'>
													<label>Country</label>
													<input
														type='text'
														className='form-control'
														{...register('country', {
															required: 'Country is required',
														})}
													/>
													{errors?.country && (
														<p className='text-danger'>
															{errors?.country?.message}
														</p>
													)}
												</div>
											</div>
											<div className='col-lg-6'>
												<div className='mb-3'>
													<label>Postcode</label>
													<input
														type='text'
														className='form-control'
														{...register('postcode')}
													/>
													{errors?.postcode && (
														<p className='text-danger'>
															{errors?.postcode?.message}
														</p>
													)}
												</div>
											</div>
										</div>
									</div>
									<div className='col-md-6'>
										<h4 className='mb-3'>Shipping Details</h4>
										<div className='row'>
											<div className='col-lg-6'>
												<div className='mb-3'>
													<label>Surname</label>
													<input
														type='text'
														className='form-control'
														{...register('surname', {
															required: 'Surname is required',
														})}
													/>
													{errors?.surname && (
														<p className='text-danger'>
															{errors?.surname?.message}
														</p>
													)}
												</div>
											</div>
											<div className='col-lg-6'>
												<div className='mb-3'>
													<label>Name</label>
													<input
														type='text'
														className='form-control'
														{...register('name', {
															required: 'Name is required',
														})}
													/>
													{errors?.name && (
														<p className='text-danger'>
															{errors?.name?.message}
														</p>
													)}
												</div>
											</div>
										</div>

										<div className='row'>
											<div className='col-lg-6'>
												<div className='mb-3'>
													<label>Title</label>
													<input
														type='text'
														className='form-control'
														{...register('title', {
															required: 'title is required',
														})}
													/>
													{errors?.title && (
														<p className='text-danger'>
															{errors?.title?.message}
														</p>
													)}
												</div>
											</div>
											<div className='col-lg-6'>
												<div className='mb-3'>
													<label>Initials</label>
													<input
														type='text'
														className='form-control'
														{...register('initials', {
															required: 'Initials is required',
														})}
													/>
													{errors?.initials && (
														<p className='text-danger'>
															{errors?.initials?.message}
														</p>
													)}
												</div>
											</div>
										</div>

										<div className='mb-3'>
											<label>House Name</label>
											<input
												type='text'
												className='form-control'
												{...register('houseName', {
													required: 'House Name is required',
												})}
											/>
											{errors?.houseName && (
												<p className='text-danger'>
													{errors?.houseName?.message}
												</p>
											)}
										</div>
										<div className='mb-3'>
											<label>Address</label>
											<input
												type='text'
												className='form-control'
												{...register('address1', {
													required: 'Address is required',
												})}
											/>
											{errors?.address1 && (
												<p className='text-danger'>
													{errors?.address1?.message}
												</p>
											)}
										</div>
										<div className='mb-3'>
											{/* <label>Address</label> */}
											<input
												type='text'
												className='form-control'
												{...register('address2')}
											/>
											{errors?.address2 && (
												<p className='text-danger'>
													{errors?.address2?.message}
												</p>
											)}
										</div>
										<div className='mb-3'>
											{/* <label>Address</label> */}
											<input
												type='text'
												className='form-control'
												{...register('address3')}
											/>
											{errors?.address3 && (
												<p className='text-danger'>
													{errors?.address3?.message}
												</p>
											)}
										</div>
										<div className='mb-3'>
											{/* <label>Address</label> */}
											<input
												type='text'
												className='form-control'
												{...register('address4')}
											/>
											{errors?.address4 && (
												<p className='text-danger'>
													{errors?.address4?.message}
												</p>
											)}
										</div>

										<div className='row'>
											<div className='col-lg-6'>
												<div className='mb-3'>
													<label>Country</label>
													<input
														type='text'
														className='form-control'
														{...register('country', {
															required: 'Country is required',
														})}
													/>
													{errors?.country && (
														<p className='text-danger'>
															{errors?.country?.message}
														</p>
													)}
												</div>
											</div>
											<div className='col-lg-6'>
												<div className='mb-3'>
													<label>Postcode</label>
													<input
														type='text'
														className='form-control'
														{...register('postcode')}
													/>
													{errors?.postcode && (
														<p className='text-danger'>
															{errors?.postcode?.message}
														</p>
													)}
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className='row'>
									<div className='col-md-6'>
										<h4 className='mb-3'>Contact Details</h4>
										<div className='row'>
											<div className='col-lg-6'>
												<div className='mb-3'>
													<label>Telephone</label>
													<input
														type='text'
														className='form-control'
														{...register('telephone', {
															required: 'Telephone is required',
														})}
													/>
													{errors?.telephone && (
														<p className='text-danger'>
															{errors?.telephone?.message}
														</p>
													)}
												</div>
											</div>
											<div className='col-lg-6'>
												<div className='mb-3'>
													<label>Work Phone</label>
													<input
														type='text'
														className='form-control'
														{...register('workPhone', {
															required: 'Work Phone is required',
														})}
													/>
													{errors?.workPhone && (
														<p className='text-danger'>
															{errors?.workPhone?.message}
														</p>
													)}
												</div>
											</div>
										</div>

										<div className='row'>
											<div className='col-lg-6'>
												<div className='mb-3'>
													<label>Mobile</label>
													<input
														type='text'
														className='form-control'
														{...register('mobile', {
															required: 'mobile is required',
														})}
													/>
													{errors?.mobile && (
														<p className='text-danger'>
															{errors?.mobile?.message}
														</p>
													)}
												</div>
											</div>
											<div className='col-lg-6'>
												<div className='mb-3'>
													<label>Email</label>
													<input
														type='email'
														className='form-control'
														{...register('email', {
															required: 'Email is required',
														})}
													/>
													{errors?.email && (
														<p className='text-danger'>
															{errors?.email?.message}
														</p>
													)}
												</div>
											</div>
										</div>
									</div>
									<div className='col-md-6'>
										<div className='mb-3'>
											<label className='form-label'>D.O.B</label>
											<div className='input-group'>
												<DatePicker
													className='form-control border-end-0'
													dateFormat='dd-MM-yyyy'
													placeholderText='Choose Date'
												/>
												<span
													className='d-flex align-items-center justify-content-center bg-white border-start-0'
													style={{
														padding: '0.375rem 0.75rem',
														border: '1px solid #ced4da',
														borderRadius: '0 0.25rem 0.25rem 0',
													}}
												>
													<Calendar className='info-img' />
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='modal-footer-btn'>
							<button
								type='submit'
								className='btn btn-submit'
							>
								Create Customer
							</button>
						</div>
					</form>
				</div>
			</div>

			{/* /Add Customer */}
		</>
	);
};

export default AddCustomerModal;
