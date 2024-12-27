/** @format */

import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {
	createSupplier,
	updateSuppliers,
} from '../../../service/operations/suppliersApi';
import { refreshSuppliers } from '../../../slices/supplierSlice';
import { Switch } from 'antd';
// import Select from 'react-select';
// import ImageWithBasePath from "../../img/imagewithbasebath";

const SupplierModal = () => {
	const dispatch = useDispatch();
	const { supplier } = useSelector((state) => state.suppliers);
	const { token } = useSelector((state) => state.auth);
	const {
		register: addRegister,
		handleSubmit: addHandleSubmit,
		watch: addWatch,
		setValue: addSetValue,
		formState: { errors: addErrors, isSubmitSuccessful: addIsSubmitSuccessful },
		reset: addReset,
	} = useForm({
		defaultValues: {
			accountNo: '',
			name: '',
			address1: '',
			address2: '',
			address3: '',
			address4: '',
			postcode: '',
			telephone: '',
			fax: '',
			email: '',
			b2BFileName: '',
			b2BFileType: '',
			b2BFileHasHeaderRow: false,
			b2BFileAppendLocationCode: false,
			settlementDiscount: 0.0,
			carriagePaidAmount: 0.0,
		},
	});

	const {
		register: editRegister,
		handleSubmit: editHandleSubmit,
		watch: editWatch,
		setValue: editSetValue,
		formState: {
			errors: editErrors,
			isSubmitSuccessful: editIsSubmitSuccessful,
		},
		reset: editReset,
	} = useForm();

	const addModalRef = useRef(null);
	const editModalRef = useRef(null);

	const addb2BFileHasHeaderRow = addWatch('b2BFileHasHeaderRow');
	const addb2BFileAppendLocationCode = addWatch('b2BFileAppendLocationCode');
	const b2BFileHasHeaderRow = editWatch('b2BFileHasHeaderRow');
	const b2BFileAppendLocationCode = editWatch('b2BFileAppendLocationCode');

	const addOnSubmit = async (data) => {
		console.log(data);
		try {
			const response = await createSupplier(token, data);
			if (response.success) {
				if (addModalRef.current) {
					addModalRef.current.click();
				}
				dispatch(refreshSuppliers());
			}
		} catch (error) {
			console.log(error);
		}
	};

	const editOnSubmit = async (data) => {
		console.log(data);
		try {
			const response = await updateSuppliers(token, data);
			if (response.success) {
				if (editModalRef.current) {
					editModalRef.current.click();
				}
				dispatch(refreshSuppliers());
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (addIsSubmitSuccessful) {
			addReset({
				accountNo: '',
				name: '',
				address1: '',
				address2: '',
				address3: '',
				address4: '',
				postcode: '',
				telephone: '',
				fax: '',
				email: '',
				b2BFileName: '',
				b2BFileType: '',
				b2BFileHasHeaderRow: false,
				b2BFileAppendLocationCode: false,
				settlementDiscount: 0.0,
				carriagePaidAmount: 0.0,
			});
		}
	}, [addReset, addIsSubmitSuccessful]);

	useEffect(() => {
		if (supplier) {
			editReset({
				accountNo: supplier?.accountNo || '',
				name: supplier?.name || '',
				address1: supplier?.address1 || '',
				address2: supplier?.address2 || '',
				address3: supplier?.address3 || '',
				address4: supplier?.address4 || '',
				postcode: supplier?.postcode || '',
				telephone: supplier?.telephone || '',
				fax: supplier?.fax || '',
				email: supplier?.email || '',
				b2BFileName: supplier?.b2BFileName || '',
				b2BFileType: supplier?.b2BFileType || '',
				b2BFileHasHeaderRow: supplier?.b2BFileHasHeaderRow || false,
				b2BFileAppendLocationCode: supplier?.b2BFileAppendLocationCode || false,
				settlementDiscount: supplier?.settlementDiscount || 0.0,
				carriagePaidAmount: supplier?.carriagePaidAmount || 0.0,
			});
		}
	}, [supplier, editReset]);

	useEffect(() => {
		if (editIsSubmitSuccessful) {
			editReset({
				accountNo: '',
				name: '',
				address1: '',
				address2: '',
				address3: '',
				address4: '',
				postcode: '',
				telephone: '',
				fax: '',
				email: '',
				b2BFileName: '',
				b2BFileType: '',
				b2BFileHasHeaderRow: false,
				b2BFileAppendLocationCode: false,
				settlementDiscount: 0.0,
				carriagePaidAmount: 0.0,
			});
		}
	}, [editReset, editIsSubmitSuccessful]);

	// const options1 = [
	// 	{ value: 'Choose', label: 'Choose' },
	// 	{ value: 'Varrel', label: 'Varrel' },
	// ];

	// const options2 = [
	// 	{ value: 'Choose', label: 'Choose' },
	// 	{ value: 'Germany', label: 'Germany' },
	// 	{ value: 'Mexico', label: 'Mexico' },
	// ];

	// const options3 = [{ value: 'Varrel', label: 'Varrel' }];

	// const options4 = [
	// 	{ value: 'Germany', label: 'Germany' },
	// 	{ value: 'France', label: 'France' },
	// 	{ value: 'Mexico', label: 'Mexico' },
	// ];
	return (
		<div>
			{/* Add Supplier */}
			<div
				className='modal fade'
				id='add-units'
			>
				<div className='modal-dialog modal-dialog-centered custom-modal-two'>
					<div className='modal-content'>
						<div className='page-wrapper-new p-0'>
							<div className='content'>
								<div className='modal-header border-0 custom-modal-header'>
									<div className='page-title'>
										<h4>Add Supplier</h4>
									</div>
									<button
										type='button'
										className='close'
										data-bs-dismiss='modal'
										aria-label='Close'
										ref={addModalRef}
									>
										<span aria-hidden='true'>×</span>
									</button>
								</div>
								<div className='modal-body custom-modal-body'>
									<form onSubmit={addHandleSubmit(addOnSubmit)}>
										<div className='row'>
											{/* <div className="col-lg-12">
                        <div className="new-employee-field">
                          <span>Avatar</span>
                          <div className="profile-pic-upload mb-2">
                            <div className="profile-pic">
                              <span>
                                <i
                                  data-feather="plus-circle"
                                  className="plus-down-add"
                                />{" "}
                                Profile Photo
                              </span>
                            </div>
                            <div className="input-blocks mb-0">
                              <div className="image-upload mb-0">
                                <input type="file" />
                                <div className="image-uploads">
                                  <h4>Change Image</h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div> */}
											<div className='col-lg-6'>
												<div className='input-blocks'>
													<label>Account No.</label>
													<input
														type='text'
														className='form-control'
														{...addRegister('accountNo', {
															required: 'Supplier Account No. is required',
														})}
														placeholder='Enter Supplier Account No.'
													/>
													{addErrors?.accountNo && (
														<p className='text-danger'>
															{addErrors?.accountNo?.message}
														</p>
													)}
												</div>
											</div>
											<div className='col-lg-6'>
												<div className='input-blocks'>
													<label>Supplier Name</label>
													<input
														type='text'
														className='form-control'
														{...addRegister('name', {
															required: 'Supplier Name is required',
														})}
														placeholder='Enter Supplier Name'
													/>
													{addErrors?.name && (
														<p className='text-danger'>
															{addErrors?.name?.message}
														</p>
													)}
												</div>
											</div>
											<div className='col-lg-6'>
												<div className='input-blocks'>
													<label>Email</label>
													<input
														type='email'
														className='form-control'
														{...addRegister('email', {
															required: 'Email is required',
														})}
														placeholder='Enter Your Email'
													/>
													{addErrors?.email && (
														<p className='text-danger'>
															{addErrors?.email?.message}
														</p>
													)}
												</div>
											</div>
											<div className='col-lg-6'>
												<div className='input-blocks'>
													<label>Phone</label>
													<input
														type='text'
														className='form-control'
														{...addRegister('telephone', {
															required: 'Phone No. is required',
														})}
														placeholder='Enter Your Phone Number'
													/>
													{addErrors?.telephone && (
														<p className='text-danger'>
															{addErrors?.telephone?.message}
														</p>
													)}
												</div>
											</div>
											<div className='col-lg-12'>
												<div className='input-blocks'>
													<label>Address 1</label>
													<input
														type='text'
														className='form-control'
														{...addRegister('address1', {
															required: 'Address is required',
														})}
													/>
													{addErrors?.address1 && (
														<p className='text-danger'>
															{addErrors?.address1?.message}
														</p>
													)}
												</div>
											</div>
											<div className='col-lg-12'>
												<div className='input-blocks'>
													<label>Address 2</label>
													<input
														type='text'
														className='form-control'
														{...addRegister('address2')}
													/>
													{addErrors?.address2 && (
														<p>{addErrors?.address2?.message}</p>
													)}
												</div>
											</div>
											<div className='col-lg-12'>
												<div className='input-blocks'>
													<label>Address 3</label>
													<input
														type='text'
														className='form-control'
														{...addRegister('address3')}
													/>
													{addErrors?.address3 && (
														<p>{addErrors?.address3?.message}</p>
													)}
												</div>
											</div>
											<div className='col-lg-12'>
												<div className='input-blocks'>
													<label>Address 4</label>
													<input
														type='text'
														className='form-control'
														{...addRegister('address4')}
													/>
													{addErrors?.address4 && (
														<p>{addErrors?.address4?.message}</p>
													)}
												</div>
											</div>
											<div className='col-lg-6'>
												<div className='input-blocks'>
													<label>Postcode</label>
													<input
														type='text'
														className='form-control'
														{...addRegister('postcode')}
														placeholder='Enter postcode'
													/>
													{addErrors?.postcode && (
														<p>{addErrors?.postcode?.message}</p>
													)}
												</div>
											</div>
											<div className='col-lg-6'>
												<div className='input-blocks'>
													<label>Fax</label>
													<input
														type='text'
														className='form-control'
														{...addRegister('fax')}
														placeholder='Enter your fax'
													/>
													{addErrors?.fax && <p>{addErrors?.fax?.message}</p>}
												</div>
											</div>
											<div className='col-lg-6'>
												<div className='input-blocks'>
													<label>B2B File Name</label>
													<input
														type='text'
														className='form-control'
														{...addRegister('b2BFileName')}
														placeholder='Enter your B2B File Name'
													/>
													{addErrors?.b2BFileName && (
														<p>{addErrors?.b2BFileName?.message}</p>
													)}
												</div>
											</div>
											<div className='col-lg-6'>
												<div className='input-blocks'>
													<label>B2B File Type</label>
													<input
														type='text'
														className='form-control'
														{...addRegister('b2BFileType')}
														placeholder='Enter your B2B File Type'
													/>
													{addErrors?.b2BFileType && (
														<p>{addErrors?.b2BFileType?.message}</p>
													)}
												</div>
											</div>
											<div className='col-lg-6'>
												<div className='input-blocks'>
													<label>Settlement Discount</label>
													<input
														type='text'
														className='form-control'
														{...addRegister('settlementDiscount')}
														placeholder='Enter Settlement Discount'
													/>
													{addErrors?.settlementDiscount && (
														<p>{addErrors?.settlementDiscount?.message}</p>
													)}
												</div>
											</div>
											<div className='col-lg-6'>
												<div className='input-blocks'>
													<label>Carriage Paid Amount</label>
													<input
														type='text'
														className='form-control'
														{...addRegister('carriagePaidAmount')}
														placeholder='Enter Carriage Paid Amount'
													/>
													{addErrors?.carriagePaidAmount && (
														<p>{addErrors?.carriagePaidAmount?.message}</p>
													)}
												</div>
											</div>
											<div className='mb-1'>
												<label className=''>
													<Switch
														checked={addb2BFileHasHeaderRow}
														onChange={(value) => {
															addSetValue('b2BFileHasHeaderRow', value);
														}}
														style={{ marginRight: '6px' }}
													/>
													B2B File Has Header Row
												</label>
											</div>
											<div className='mb-1'>
												<label className=''>
													<Switch
														checked={addb2BFileAppendLocationCode}
														onChange={(value) => {
															addSetValue('b2BFileAppendLocationCode', value);
														}}
														style={{ marginRight: '6px' }}
													/>
													B2B File Append Location Code
												</label>
											</div>
											{/* <div className='col-lg-6 col-sm-10 col-10'>
												<div className='input-blocks'>
													<label>City</label>
													<Select
														classNamePrefix='react-select'
														options={options1}
													/>
												</div>
											</div>
											<div className='col-lg-6 col-sm-10 col-10'>
												<div className='input-blocks'>
													<label>Country</label>
													<Select
														classNamePrefix='react-select'
														options={options2}
													/>
												</div>
											</div> */}
											{/* <div className='col-md-12'>
												<div className='mb-0 input-blocks'>
													<label className='form-label'>Descriptions</label>
													<textarea
														className='form-control mb-1'
														defaultValue={''}
													/>
													<p>Maximum 600 Characters</p>
												</div>
											</div> */}
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
			{/* /Add Supplier */}
			{/* Edit Supplier */}
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
										<h4>Edit Supplier</h4>
									</div>
									<button
										type='button'
										className='close'
										data-bs-dismiss='modal'
										aria-label='Close'
										ref={editModalRef}
									>
										<span aria-hidden='true'>×</span>
									</button>
								</div>
								<div className='modal-body custom-modal-body'>
									<form onSubmit={editHandleSubmit(editOnSubmit)}>
										<div className='row'>
											{/* <div className="col-lg-12">
                        <div className="new-employee-field">
                          <span>Avatar</span>
                          <div className="profile-pic-upload mb-2">
                            <div className="profile-pic">
                              <span>
                                <i
                                  data-feather="plus-circle"
                                  className="plus-down-add"
                                />{" "}
                                Profile Photo
                              </span>
                            </div>
                            <div className="input-blocks mb-0">
                              <div className="image-upload mb-0">
                                <input type="file" />
                                <div className="image-uploads">
                                  <h4>Change Image</h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div> */}
											<div className='col-lg-6'>
												<div className='input-blocks'>
													<label>Account No.</label>
													<input
														type='text'
														className='form-control'
														{...editRegister('accountNo', {
															required: 'Supplier Account No. is required',
														})}
														placeholder='Enter Supplier Account No.'
													/>
													{editErrors?.accountNo && (
														<p className='text-danger'>
															{editErrors?.accountNo?.message}
														</p>
													)}
												</div>
											</div>
											<div className='col-lg-6'>
												<div className='input-blocks'>
													<label>Supplier Name</label>
													<input
														type='text'
														className='form-control'
														{...editRegister('name', {
															required: 'Supplier Name is required',
														})}
														placeholder='Enter Supplier Name'
													/>
													{editErrors?.name && (
														<p className='text-danger'>
															{editErrors?.name?.message}
														</p>
													)}
												</div>
											</div>
											<div className='col-lg-6'>
												<div className='input-blocks'>
													<label>Email</label>
													<input
														type='email'
														className='form-control'
														{...editRegister('email', {
															required: 'Email is required',
														})}
														placeholder='Enter Your Email'
													/>
													{editErrors?.email && (
														<p className='text-danger'>
															{editErrors?.email?.message}
														</p>
													)}
												</div>
											</div>
											<div className='col-lg-6'>
												<div className='input-blocks'>
													<label>Phone</label>
													<input
														type='text'
														className='form-control'
														{...editRegister('telephone', {
															required: 'Phone No. is required',
														})}
														placeholder='Enter Your Phone Number'
													/>
													{editErrors?.telephone && (
														<p className='text-danger'>
															{editErrors?.telephone?.message}
														</p>
													)}
												</div>
											</div>
											<div className='col-lg-12'>
												<div className='input-blocks'>
													<label>Address 1</label>
													<input
														type='text'
														className='form-control'
														{...editRegister('address1', {
															required: 'Address is required',
														})}
													/>
													{editErrors?.address1 && (
														<p className='text-danger'>
															{editErrors?.address1?.message}
														</p>
													)}
												</div>
											</div>
											<div className='col-lg-12'>
												<div className='input-blocks'>
													<label>Address 2</label>
													<input
														type='text'
														className='form-control'
														{...editRegister('address2')}
													/>
													{editErrors?.address2 && (
														<p>{editErrors?.address2?.message}</p>
													)}
												</div>
											</div>
											<div className='col-lg-12'>
												<div className='input-blocks'>
													<label>Address 3</label>
													<input
														type='text'
														className='form-control'
														{...editRegister('address3')}
													/>
													{editErrors?.address3 && (
														<p>{editErrors?.address3?.message}</p>
													)}
												</div>
											</div>
											<div className='col-lg-12'>
												<div className='input-blocks'>
													<label>Address 4</label>
													<input
														type='text'
														className='form-control'
														{...editRegister('address4')}
													/>
													{editErrors?.address4 && (
														<p>{editErrors?.address4?.message}</p>
													)}
												</div>
											</div>
											<div className='col-lg-6'>
												<div className='input-blocks'>
													<label>Postcode</label>
													<input
														type='text'
														className='form-control'
														{...editRegister('postcode')}
														placeholder='Enter postcode'
													/>
													{editErrors?.postcode && (
														<p>{editErrors?.postcode?.message}</p>
													)}
												</div>
											</div>
											<div className='col-lg-6'>
												<div className='input-blocks'>
													<label>Fax</label>
													<input
														type='text'
														className='form-control'
														{...editRegister('fax')}
														placeholder='Enter your fax'
													/>
													{editErrors?.fax && <p>{editErrors?.fax?.message}</p>}
												</div>
											</div>
											<div className='col-lg-6'>
												<div className='input-blocks'>
													<label>B2B File Name</label>
													<input
														type='text'
														className='form-control'
														{...editRegister('b2BFileName')}
														placeholder='Enter your B2B File Name'
													/>
													{editErrors?.b2BFileName && (
														<p>{editErrors?.b2BFileName?.message}</p>
													)}
												</div>
											</div>
											<div className='col-lg-6'>
												<div className='input-blocks'>
													<label>B2B File Type</label>
													<input
														type='text'
														className='form-control'
														{...editRegister('b2BFileType')}
														placeholder='Enter your B2B File Type'
													/>
													{editErrors?.b2BFileType && (
														<p>{editErrors?.b2BFileType?.message}</p>
													)}
												</div>
											</div>
											<div className='col-lg-6'>
												<div className='input-blocks'>
													<label>Settlement Discount</label>
													<input
														type='text'
														className='form-control'
														{...editRegister('settlementDiscount')}
														placeholder='Enter Settlement Discount'
													/>
													{editErrors?.settlementDiscount && (
														<p>{editErrors?.settlementDiscount?.message}</p>
													)}
												</div>
											</div>
											<div className='col-lg-6'>
												<div className='input-blocks'>
													<label>Carriage Paid Amount</label>
													<input
														type='text'
														className='form-control'
														{...editRegister('carriagePaidAmount')}
														placeholder='Enter Carriage Paid Amount'
													/>
													{editErrors?.carriagePaidAmount && (
														<p>{editErrors?.carriagePaidAmount?.message}</p>
													)}
												</div>
											</div>
											<div className='mb-1'>
												<label className=''>
													<Switch
														checked={b2BFileHasHeaderRow}
														onChange={(value) => {
															editSetValue('b2BFileHasHeaderRow', value);
														}}
														style={{ marginRight: '6px' }}
													/>
													B2B File Has Header Row
												</label>
											</div>
											<div className='mb-1'>
												<label className=''>
													<Switch
														checked={b2BFileAppendLocationCode}
														onChange={(value) => {
															editSetValue('b2BFileAppendLocationCode', value);
														}}
														style={{ marginRight: '6px' }}
													/>
													B2B File Append Location Code
												</label>
											</div>
											{/* <div className='col-lg-6 col-sm-10 col-10'>
												<div className='input-blocks'>
													<label>City</label>
													<Select
														classNamePrefix='react-select'
														options={options1}
													/>
												</div>
											</div>
											<div className='col-lg-6 col-sm-10 col-10'>
												<div className='input-blocks'>
													<label>Country</label>
													<Select
														classNamePrefix='react-select'
														options={options2}
													/>
												</div>
											</div> */}
											{/* <div className='col-md-12'>
												<div className='mb-0 input-blocks'>
													<label className='form-label'>Descriptions</label>
													<textarea
														className='form-control mb-1'
														defaultValue={''}
													/>
													<p>Maximum 600 Characters</p>
												</div>
											</div> */}
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
			{/* /Edit Supplier */}
		</div>
	);
};

export default SupplierModal;
