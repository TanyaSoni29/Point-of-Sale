/** @format */

import React, { useEffect } from 'react';
import Select from 'react-select';
import ImageWithBasePath from '../../img/imagewithbasebath';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { DatePicker, Switch } from 'antd';
import { Calendar } from 'feather-icons-react/build/IconComponents';

const CustomerModal = () => {
	const {
		register,
		handleSubmit,
		watch,
		setValue,
		formState: { errors, isSubmitSuccessful },
		reset,
	} = useForm();

	const current = watch('current');
	const tradeCustomer = watch('tradeCustomer');
	const vatExempt = watch('vatExempt');
	const exportSwitch = watch('export');
	const autoPayments = watch('autoPayments');
	const sendLetter = watch('sendLetter');
	const accountOnStop = watch('accountOnStop');

	const onSubmit = (data) => {
		console.log(data);
	};

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

	const varrelOptions = [{ value: 'varrel', label: 'Varrel' }];

	const germanyOptions = [
		{ value: 'germany', label: 'Germany' },
		{ value: 'unitedStates', label: 'United States' },
	];
	return (
		<>
			{/* Add Customer */}
			<div
				className='modal fade'
				id='add-units'
			>
				<div className='modal-dialog modal-dialog-centered modal-xl custom-modal-two'>
					<div className='modal-content'>
						<div className='page-wrapper-new p-0'>
							<div className='content'>
								<div className='modal-header border-0 custom-modal-header'>
									<div className='page-title'>
										<h4>Add Customer</h4>
									</div>
									<button
										type='button'
										className='close'
										data-bs-dismiss='modal'
										aria-label='Close'
									>
										<span aria-hidden='true'>×</span>
									</button>
								</div>
								<div className='modal-body custom-modal-body'>
									<form onSubmit={handleSubmit(onSubmit)}>
										{/* <div className="modal-title-head people-cust-avatar">
                      <h6>Avatar</h6>
                    </div>
                    <div className="new-employee-field">
                      <div className="profile-pic-upload">
                        <div className="profile-pic">
                          <span>
                            <i
                              data-feather="plus-circle"
                              className="plus-down-add"
                            />{" "}
                            Add Image
                          </span>
                        </div>
                        <div className="mb-3">
                          <div className="image-upload mb-0">
                            <input type="file" />
                            <div className="image-uploads">
                              <h4>Change Image</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
										<div className='row'>
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
												<div className='d-flex gap-2 justify-content-center align-items-center'>
													<div className='mb-3 d-flex justify-content-start align-items-center gap-2'>
														<Switch
															checked={sendLetter}
															onChange={(val) => setValue('sendLetter', val)}
															// {...register('contractAmount1', {
															// 	required: 'Contract Amount is required',
															// })}
														/>
														<label>Send Letter</label>
														{errors?.sendLetter && (
															<p className='text-danger'>
																{errors?.sendLetter?.message}
															</p>
														)}
													</div>
													<div className='mb-3 d-flex justify-content-start align-items-center gap-2'>
														<Switch
															checked={accountOnStop}
															onChange={(val) => setValue('accountOnStop', val)}
															// {...register('contractAmount1', {
															// 	required: 'Contract Amount is required',
															// })}
														/>
														<label>Account On Stop</label>
														{errors?.accountOnStop && (
															<p className='text-danger'>
																{errors?.accountOnStop?.message}
															</p>
														)}
													</div>
													<div className='d-flex justify-content-end align-items-center'>
														<button className='btn btn-submit'>
															Same As Billing
														</button>
													</div>
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
													<div className='col-lg-4'>
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
													<div className='col-lg-4'>
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
													<div className='col-lg-4'>
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
												</div>

												<div className='row'>
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
													<div className='col-lg-4'>
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
													<div className='col-lg-4'>
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
													<div className='col-lg-4'>
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
												</div>

												<div className='row'>
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
													<div className='col-lg-6'>
														<div className='mb-3'>
															<label>D.O.B</label>
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
													<div className='col-lg-6'>
														<div className='mb-3'>
															<label>Notes</label>
															<input
																type='text'
																className='form-control'
																{...register('notes')}
															/>
															{errors?.notes && (
																<p className='text-danger'>
																	{errors?.notes?.message}
																</p>
															)}
														</div>
													</div>
												</div>
											</div>
											<div className='col-md-6'>
												<h4 className='mb-3'>Discounts</h4>
												<div className='row'>
													<div className='col-lg-6'>
														<div className='mb-3'>
															<label>Major Items</label>
															<input
																type='text'
																className='form-control'
																{...register(
																	'majorItems'
																	// {
																	// 	required: 'Major items is required',
																	// }
																)}
															/>
															{errors?.majorItems && (
																<p className='text-danger'>
																	{errors?.majorItems?.message}
																</p>
															)}
														</div>
													</div>
													<div className='col-lg-6'>
														<div className='mb-3'>
															<label>Minor Items</label>
															<input
																type='text'
																className='form-control'
																{...register(
																	'minorItems'
																	// {
																	// 	required: 'Major items is required',
																	// }
																)}
															/>
															{errors?.minorItems && (
																<p className='text-danger'>
																	{errors?.minorItems?.message}
																</p>
															)}
														</div>
													</div>
													<div className='col-lg-6'>
														<div className='mb-3'>
															<label>Vat No.</label>
															<input
																type='text'
																className='form-control'
																{...register('vat', {
																	required: 'vat is required',
																})}
															/>
															{errors?.vat && (
																<p className='text-danger'>
																	{errors?.vat?.message}
																</p>
															)}
														</div>
													</div>

													<div className='col-lg-6'>
														<div className='mb-3'>
															<label>Credit Limit</label>
															<input
																type='text'
																className='form-control'
																{...register('creditLimit')}
															/>
															{errors?.creditLimit && (
																<p className='text-danger'>
																	{errors?.creditLimit?.message}
																</p>
															)}
														</div>
													</div>

													<div className='col-md-6'>
														<div className='mb-3'>
															<label>Loyalty Card No.</label>
															<input
																type='text'
																className='form-control'
																{...register('loyaltyCardNo')}
															/>
															{errors?.vat && (
																<p className='text-danger'>
																	{errors?.vat?.message}
																</p>
															)}
														</div>
													</div>
													<div className='col-lg-6'>
														<div className='mb-3'>
															<label>Points</label>
															<input
																type='text'
																className='form-control'
																{...register('points')}
															/>
															{errors?.points && (
																<p className='text-danger'>
																	{errors?.points?.message}
																</p>
															)}
														</div>
													</div>
												</div>
											</div>
											<div className='col-md-6'>
												<h4 className='mb-3'>Contract Amounts</h4>
												<div className='row'>
													<div className='col-lg-4'>
														<div className='mb-3'>
															<label>1</label>
															<input
																type='text'
																className='form-control'
																{...register('contractAmount1', {
																	required: 'Contract Amount is required',
																})}
															/>
															{errors?.contractAmount1 && (
																<p className='text-danger'>
																	{errors?.contractAmount1?.message}
																</p>
															)}
														</div>
													</div>
													<div className='col-lg-4'>
														<div className='mb-3'>
															<label>2</label>
															<input
																type='text'
																className='form-control'
																{...register('contractAmount2')}
															/>
															{errors?.contractAmount2 && (
																<p className='text-danger'>
																	{errors?.contractAmount2?.message}
																</p>
															)}
														</div>
													</div>
													<div className='col-lg-4'>
														<div className='mb-3'>
															<label>3</label>
															<input
																type='text'
																className='form-control'
																{...register('contractAmount3')}
															/>
															{errors?.contractAmount3 && (
																<p className='text-danger'>
																	{errors?.contractAmount3?.message}
																</p>
															)}
														</div>
													</div>
												</div>
											</div>
											<div className='col-md-6'>
												<h4 className='mb-3'>Options</h4>
												<div className='row'>
													<div className='col-lg-4'>
														<div className='mb-3 d-flex justify-content-start align-items-center gap-2'>
															<Switch
																checked={tradeCustomer}
																onChange={(val) =>
																	setValue('tradeCustomer', val)
																}
																// {...register('contractAmount1', {
																// 	required: 'Contract Amount is required',
																// })}
															/>
															<label>Trade Customer</label>
															{errors?.contractAmount1 && (
																<p className='text-danger'>
																	{errors?.contractAmount1?.message}
																</p>
															)}
														</div>
													</div>
													<div className='col-lg-4'>
														<div className='mb-3 d-flex justify-content-start align-items-center gap-2'>
															<Switch
																checked={vatExempt}
																onChange={(val) => setValue('vatExempt', val)}
																// className='form-control'
																// {...register('contractAmount2')}
															/>
															<label>Vat Exempt</label>
															{errors?.contractAmount2 && (
																<p className='text-danger'>
																	{errors?.contractAmount2?.message}
																</p>
															)}
														</div>
													</div>
													<div className='col-lg-4'>
														<div className='mb-3 d-flex justify-content-start align-items-center gap-2'>
															<Switch
																checked={exportSwitch}
																onChange={(val) => setValue('export', val)}
																// className='form-control'
																// {...register('contractAmount3')}
															/>
															<label>Export</label>
															{errors?.contractAmount3 && (
																<p className='text-danger'>
																	{errors?.contractAmount3?.message}
																</p>
															)}
														</div>
													</div>
													<div className='col-lg-4'>
														<div className='mb-3 d-flex justify-content-start align-items-center gap-2'>
															<Switch
																checked={autoPayments}
																onChange={(val) =>
																	setValue('autoPayments', val)
																}
																// className='form-control'
																// {...register('contractAmount3')}
															/>
															<label>Auto Payments</label>
															{errors?.contractAmount3 && (
																<p className='text-danger'>
																	{errors?.contractAmount3?.message}
																</p>
															)}
														</div>
													</div>
													<div className='col-lg-4'>
														<div className='mb-3 d-flex justify-content-start align-items-center gap-2'>
															<Switch
																checked={current}
																onChange={(val) => setValue('current', val)}
																// {...register('contractAmount3')}
															/>
															<label>Current</label>
															{errors?.contractAmount3 && (
																<p className='text-danger'>
																	{errors?.contractAmount3?.message}
																</p>
															)}
														</div>
													</div>
												</div>
											</div>
										</div>
										{/* <div className='row'>
											<div className='col-lg-4 pe-0'>
												<div className='mb-3'>
													<label className='form-label'>Customer Name</label>
													<input
														type='text'
														className='form-control'
													/>
												</div>
											</div>
											<div className='col-lg-4 pe-0'>
												<div className='mb-3'>
													<label className='form-label'>Email</label>
													<input
														type='email'
														className='form-control'
													/>
												</div>
											</div>
											<div className='col-lg-4 pe-0'>
												<div className='input-blocks'>
													<label className='mb-2'>Phone</label>
													<input
														className='form-control form-control-lg group_formcontrol'
														id='phone'
														name='phone'
														type='text'
													/>
												</div>
											</div>
											<div className='col-lg-12 pe-0'>
												<div className='mb-3'>
													<label className='form-label'>Address</label>
													<input
														type='text'
														className='form-control'
													/>
												</div>
											</div>
											<div className='col-lg-6 pe-0'>
												<div className='mb-3'>
													<label className='form-label'>City</label>
													<input
														type='text'
														className='form-control'
													/>
												</div>
											</div>
											<div className='col-lg-6 pe-0'>
												<div className='mb-3'>
													<label className='form-label'>Country</label>
													<Select
														classNamePrefix='react-select'
														options={countriesOptions}
													/>
												</div>
											</div>
											<div className='col-lg-12'>
												<div className='mb-3 input-blocks'>
													<label className='form-label'>Descriptions</label>
													<textarea
														className='form-control mb-1'
														defaultValue={''}
													/>
													<p>Maximum 60 Characters</p>
												</div>
											</div>
										</div> */}
										<div className='modal-footer-btn mt-3'>
											<button
												type='button'
												className='btn btn-cancel me-2'
												data-bs-dismiss='modal'
											>
												Cancel
											</button>
											<button
												type='submit'
												className='btn btn-submit'
											>
												Submit
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* /Add Customer */}

			{/* Edit Customer */}
			<div
				className='modal fade'
				id='edit-units'
			>
				<div className='modal-dialog modal-dialog-centered custom-modal-two'>
					<div className='modal-content'>
						<div className='page-wrapper-new p-0'>
							<div className='content'>
								<div className='modal-header border-0 custom-modal-header'>
									<div className='page-title'>
										<h4>Edit Customer</h4>
									</div>
									<button
										type='button'
										className='close'
										data-bs-dismiss='modal'
										aria-label='Close'
									>
										<span aria-hidden='true'>×</span>
									</button>
								</div>
								<div className='modal-body custom-modal-body'>
									<form>
										<div className='modal-title-head people-cust-avatar'>
											<h6>Avatar</h6>
										</div>
										<div className='new-employee-field'>
											<div className='profile-pic-upload'>
												<div className='profile-pic people-profile-pic'>
													<ImageWithBasePath
														src='assets/img/profiles/profile.png'
														alt='Img'
													/>
													<Link to='#'>
														<i
															data-feather='x-square'
															className='x-square-add'
														/>
													</Link>
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
										</div>
										<div className='row'>
											<div className='col-lg-4 pe-0'>
												<div className='mb-3'>
													<label className='form-label'>Customer Name</label>
													<input
														type='text'
														className='form-control'
														defaultValue='Thomas'
													/>
												</div>
											</div>
											<div className='col-lg-4 pe-0'>
												<div className='mb-3'>
													<label className='form-label'>Email</label>
													<input
														type='email'
														className='form-control'
														defaultValue='thomas@example.com'
													/>
												</div>
											</div>
											<div className='col-lg-4 pe-0'>
												<div className='input-blocks'>
													<label className='mb-2'>Phone</label>
													<input
														className='form-control form-control-lg group_formcontrol'
														id='phone2'
														name='phone2'
														type='text'
													/>
												</div>
											</div>
											<div className='col-lg-12 pe-0'>
												<div className='mb-3'>
													<label className='form-label'>Address</label>
													<input
														type='text'
														className='form-control'
														defaultValue='Budapester Strasse 2027259 '
													/>
												</div>
											</div>
											<div className='col-lg-6 pe-0'>
												<div className='mb-3'>
													<label className='form-label'>City</label>
													<Select
														classNamePrefix='react-select'
														options={varrelOptions}
													/>
												</div>
											</div>
											<div className='col-lg-6 pe-0'>
												<div className='mb-3'>
													<label className='form-label'>Country</label>
													<Select
														classNamePrefix='react-select'
														options={germanyOptions}
													/>
												</div>
											</div>
											<div className='col-lg-12'>
												<div className='mb-0 input-blocks'>
													<label className='form-label'>Descriptions</label>
													<textarea
														className='form-control mb-1'
														defaultValue={''}
													/>
													<p>Maximum 60 Characters</p>
												</div>
											</div>
										</div>
										<div className='modal-footer-btn'>
											<button
												type='button'
												className='btn btn-cancel me-2'
												data-bs-dismiss='modal'
											>
												Cancel
											</button>
											<button
												type='submit'
												className='btn btn-submit'
											>
												Save Changes
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* /Edit Customer */}
		</>
	);
};

export default CustomerModal;
