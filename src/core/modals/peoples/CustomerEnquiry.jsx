/** @format */

import { ArrowLeft, ChevronUp } from 'feather-icons-react/build/IconComponents';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import React, { useEffect } from 'react';
// import Select from 'react-select';
import { all_routes } from '../../../Router/all_routes';
import { useDispatch, useSelector } from 'react-redux';
import { setToggleHeader } from '../../../slices/productListSlice';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
// import ImageWithBasePath from "../../img/imagewithbasebath";
// import { Link } from "react-router-dom";

const CustomerEnquiry = () => {
	const route = all_routes;
	const dispatch = useDispatch();
	const { toggle_header } = useSelector((state) => state.product);
	const {
		register,
		handleSubmit,
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
								<h4>Customer Enquiry</h4>
								<h6>Inquire with the customer</h6>
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
									<div className='col-md-2'>
										<div className='mb-3'>
											<label className='form-label'>Customer Account</label>
											<input
												type='text'
												className='form-control'
												placeholder='Enter Account Number'
												{...register('customerAccount', {
													required: 'Customer Account is required',
												})}
											/>
											{errors?.customerAccount && (
												<p className='text-danger'>
													{errors?.customerAccount?.message}
												</p>
											)}
										</div>
									</div>
								</div>

								<div className='row'>
									<div className='col-md-6 border-end'>
										<h4 className='mb-3'>Customer Information</h4>
										<div className='row'>
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
											<div className='col-lg-6'>
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
											</div>
											<div className='col-lg-6'>
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
											</div>
											<div className='col-lg-6'>
												<div className='mb-3'>
													<label>Address 2</label>
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
											</div>
											<div className='col-lg-6'>
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
											</div>
											<div className='col-lg-6'>
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
											</div>
										</div>

										<div className='row'>
											<div className='col-lg-4'>
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
											<div className='col-lg-4'>
												<div className='mb-3'>
													<label>Telephone Home</label>
													<input
														type='text'
														className='form-control'
														{...register('telephoneHome', {
															required: 'Telephone Home is required',
														})}
													/>
													{errors?.telephoneHome && (
														<p className='text-danger'>
															{errors?.telephoneHome?.message}
														</p>
													)}
												</div>
											</div>
											<div className='col-lg-4'>
												<div className='mb-3'>
													<label>Telephone Work</label>
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
											<div className='col-lg-6'>
												<div className='row'>
													<div className='col-lg-8'>
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
													<div className='col-lg-4'>
														<div className='mt-4'>
															<button
																type='button'
																className='btn btn-submit'
															>
																Send Sms
															</button>
														</div>
													</div>
												</div>
											</div>
											<div className='col-lg-6'>
												<div className='row'>
													<div className='col-lg-8'>
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
													<div className='col-lg-4'>
														<div className='mt-4'>
															<button className='btn btn-submit'>
																Send Email
															</button>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='col-md-6'>
										<h4 className='mb-3'>Financial</h4>
										<div className='row'>
											<div className='col-lg-4'>
												<div className='mb-3'>
													<label>Balance</label>
													<input
														type='text'
														className='form-control'
														{...register('balance', {
															required: 'Balance is required',
														})}
													/>
													{errors?.balance && (
														<p className='text-danger'>
															{errors?.balance?.message}
														</p>
													)}
												</div>
											</div>
											<div className='col-lg-4'>
												<div className='mb-3'>
													<label>Current</label>
													<input
														type='text'
														className='form-control'
														{...register('current', {
															required: 'Current is required',
														})}
													/>
													{errors?.current && (
														<p className='text-danger'>
															{errors?.current?.message}
														</p>
													)}
												</div>
											</div>
											<div className='col-lg-4'>
												<div className='mb-3'>
													<label>Rental Balance</label>
													<input
														type='text'
														className='form-control'
														{...register('rentalBalance', {
															required: 'Rental Balance is required',
														})}
													/>
													{errors?.rentalBalance && (
														<p className='text-danger'>
															{errors?.rentalBalance?.message}
														</p>
													)}
												</div>
											</div>
										</div>

										<div className='row'>
											<div className='col-lg-4'>
												<div className='mb-3'>
													<label>1 Month</label>
													<input
														type='text'
														className='form-control'
														{...register('oneMonth', {
															required: '1 Month is required',
														})}
													/>
													{errors?.oneMonth && (
														<p className='text-danger'>
															{errors?.oneMonth?.message}
														</p>
													)}
												</div>
											</div>

											<div className='col-lg-4'>
												<div className='mb-3'>
													<label>2 Months</label>
													<input
														type='text'
														className='form-control'
														{...register('twoMonths', {
															required: '2 Month is required',
														})}
													/>
													{errors?.twoMonths && (
														<p className='text-danger'>
															{errors?.twoMonths?.message}
														</p>
													)}
												</div>
											</div>
											<div className='col-lg-4'>
												<div className='mb-3'>
													<label>3 Months</label>
													<input
														type='text'
														className='form-control'
														{...register('threeMonths', {
															required: '3 Month is required',
														})}
													/>
													{errors?.treeMonths && (
														<p className='text-danger'>
															{errors?.threeMonths?.message}
														</p>
													)}
												</div>
											</div>

											<div className='col-lg-4'>
												<div className='mb-3'>
													<label>4 Months</label>
													<input
														type='text'
														className='form-control'
														{...register('fourMonths', {
															required: '4 Months is required',
														})}
													/>
													{errors?.fourMonths && (
														<p className='text-danger'>
															{errors?.fourMonths?.message}
														</p>
													)}
												</div>
											</div>

											<div className='col-lg-4'>
												<div className='mb-3'>
													<label>TurnOver</label>
													<input
														type='text'
														className='form-control'
														{...register('turnover', {
															required: 'Turnover is required',
														})}
													/>
													{errors?.turnover && (
														<p className='text-danger'>
															{errors?.turnover?.message}
														</p>
													)}
												</div>
											</div>

											<div className='col-lg-4'>
												<div className='mb-3'>
													<label>Credit Limit</label>
													<input
														type='text'
														className='form-control'
														{...register('creditLimit', {
															required: 'Credit Limit is required',
														})}
													/>
													{errors?.creditLimit && (
														<p className='text-danger'>
															{errors?.creditLimit?.message}
														</p>
													)}
												</div>
											</div>

											<div className='col-lg-4'>
												<div className='mb-3'>
													<label>Loyalty Points</label>
													<input
														type='text'
														className='form-control'
														{...register('loyaltyPoints', {
															required: 'Loyalty Points is required',
														})}
													/>
													{errors?.loyaltyPoints && (
														<p className='text-danger'>
															{errors?.loyaltyPoints?.message}
														</p>
													)}
												</div>
											</div>

											<div className='col-lg-4'>
												<div className='mb-3'>
													<label>Last Invoice</label>
													<input
														type='text'
														className='form-control'
														{...register('lastInvoice', {
															required: 'Last Invoice is required',
														})}
													/>
													{errors?.lastInvoice && (
														<p className='text-danger'>
															{errors?.lastInvoice?.message}
														</p>
													)}
												</div>
											</div>

											<div className='col-lg-4'>
												<div className='mb-3'>
													<label>Amount</label>
													<input
														type='text'
														className='form-control'
														{...register('amount1')}
													/>
													{errors?.amount1 && (
														<p className='text-danger'>
															{errors?.amount1?.message}
														</p>
													)}
												</div>
											</div>

											<div className='col-lg-4'>
												<div className='mb-3'>
													<label>Suspense</label>
													<input
														type='text'
														className='form-control'
														{...register('suspense', {
															required: 'Suspense is required',
														})}
													/>
													{errors?.suspense && (
														<p className='text-danger'>
															{errors?.suspense?.message}
														</p>
													)}
												</div>
											</div>

											<div className='col-lg-4'>
												<div className='mb-3'>
													<label>Last Payment</label>
													<input
														type='text'
														className='form-control'
														{...register('lastPayment', {
															required: 'Last Payment is required',
														})}
													/>
													{errors?.lastPayment && (
														<p className='text-danger'>
															{errors?.lastPayment?.message}
														</p>
													)}
												</div>
											</div>
											<div className='col-lg-4'>
												<div className='mb-3'>
													<label>Amount</label>
													<input
														type='text'
														className='form-control'
														{...register('amount2')}
													/>
													{errors?.amount2 && (
														<p className='text-danger'>
															{errors?.amount2?.message}
														</p>
													)}
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='modal-footer-btn mt-3'>
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

export default CustomerEnquiry;
