/** @format */

import React, { useEffect, useRef, useState } from 'react';
// import Select from 'react-select';
// import ImageWithBasePath from '../../img/imagewithbasebath';
// import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import {
	createLocation,
	updateLocation,
} from '../../../service/operations/locationApi';
import { addLocation, updateLocations } from '../../../slices/locationSlice';
import { Switch } from 'antd';
import { IoIosArrowDown } from 'react-icons/io';
const StoreModal = () => {
	const { location, locations } = useSelector((state) => state.location);
	const { token } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const [selectedCode, setSelectedCode] = useState('');
	const [isOpen, setIsOpen] = useState(false);

	console.log('store location---', locations);

	const {
		register: addRegister,
		handleSubmit: addHandleSubmit,
		reset: addReset,
		formState: { errors: addErrors, isSubmitSuccessful: isAddSubmitSuccessful },
		// getValues,
		setValue: addSetValue,
		watch: addWatch,
	} = useForm();

	const {
		register: editRegister,
		handleSubmit: editHandleSubmit,
		reset: editReset,
		formState: {
			errors: editErrors,
			isSubmitSuccessful: isEditSubmitSuccessful,
		},
		watch: editWatch,
		setValue: editSetValue,
	} = useForm();

	const addModal = useRef(null);
	const editModal = useRef(null);

	const keyLocation1 = addWatch('keyLocation');
	const keyLocation2 = editWatch('keyLocation');

	const availableCodes = Array.from({ length: 30 }, (_, i) =>
		(i + 1).toString().padStart(2, '0')
	).filter((code) => !locations.some((loc) => loc.code === code));

	// const availableOptions = availableCodes?.map((code) => {
	// 	return { value: code, label: code };
	// });

	// console.log(availableOptions);
	const handleSelect = (code) => {
		setSelectedCode(code);
		setIsOpen(false);
	};

	const onAddSubmit = async (data) => {
		try {
			const newData = {
				code: selectedCode,
				companyNumber: data?.companyNumber || '',
				name: data?.name || '',
				postcode: data?.postcode || '',
				generalEmailAddress: data?.generalEmailAddress || '',
				mainTelephone: data?.mainTelephone || '',
				address1: data?.address1 || '',
				address2: data?.address2 || '',
				address3: data?.address3 || '',
				address4: data?.address4 || '',
				storeWebsiteURL: data?.storeWebsiteURL || '',
				adminName: data?.adminName || '',
				adminEmail: data?.adminEmail || '',
				accountName: data?.accountName || '',
				accountEmail: data?.accountEmail || '',
				keyLocation: data?.keyLocation || false,
				isDeleted: false,
				id: 0,
				// dateCreated: '2024-11-29T08:08:40.758',
				// dateUpdated: '2024-11-29T08:08:40.758',
				// isValid: true,
			};
			console.log('reqbody---', newData);
			const response = await createLocation(token, newData);
			console.log(response);
			if (response?.success) {
				dispatch(addLocation(newData));
				if (addModal?.current) {
					addModal.current.click();
				}
				addReset();
			}
		} catch (error) {
			console.log(error);
		}
	};

	const onEditSubmit = async (data) => {
		try {
			const newData = {
				...location,
				name: data.name,
				adminEmail: data.adminEmail,
				mainTelephone: data.mainTelephone,
				address1: data.address1,
				address2: data.address2,
				address3: data.address3,
				address4: data.address4,
				keyLocation: data?.keyLocation,
				companyNumber: data?.companyNumber || '',
				postcode: data?.postcode || '',
				generalEmailAddress: data?.generalEmailAddress || '',
				storeWebsiteURL: data?.storeWebsiteURL || '',
				adminName: data?.adminName || '',
				accountName: data?.accountName || '',
				accountEmail: data?.accountEmail || '',
			};
			const response = await updateLocation(token, newData);
			console.log(response);
			if (response?.success) {
				dispatch(updateLocations(newData));
				if (editModal?.current) {
					editModal.current.click();
				}
				editReset();
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (isAddSubmitSuccessful) {
			addReset({
				name: '',
				adminEmail: '',
				mainTelephone: '',
				address1: '',
				address2: '',
				address3: '',
				address4: '',
				keyLocation: false,
			});
		}
	}, [addReset, isAddSubmitSuccessful]);

	useEffect(() => {
		if (location) {
			editReset({
				code: location?.code,
				name: location?.name,
				adminEmail: location?.adminEmail,
				mainTelephone: location?.mainTelephone,
				address1: location?.address1,
				address2: location?.address2,
				address3: location?.address3,
				address4: location?.address4,
				keyLocation: location?.keyLocation,
				companyNumber: location?.companyNumber || '',
				postcode: location?.postcode || '',
				generalEmailAddress: location?.generalEmailAddress || '',
				storeWebsiteURL: location?.storeWebsiteURL || '',
				adminName: location?.adminName || '',
				accountName: location?.accountName || '',
				accountEmail: location?.accountEmail || '',
			});
		}
	}, [location, editReset]);

	useEffect(() => {
		if (isEditSubmitSuccessful) {
			editReset({
				name: '',
				adminEmail: '',
				mainTelephone: '',
				address1: '',
				address2: '',
				address3: '',
				address4: '',
				keyLocation: false,
			});
		}
	}, [editReset, isEditSubmitSuccessful]);

	// const countriesOptions = [
	// 	{ value: 'choose', label: 'Choose' },
	// 	{ value: 'unitedKingdom', label: 'United Kingdom' },
	// 	{ value: 'unitedStates', label: 'United States' },
	// ];

	// const varrelOptions = [{ value: 'varrel', label: 'Varrel' }];

	// const germanyOptions = [
	// 	{ value: 'germany', label: 'Germany' },
	// 	{ value: 'unitedStates', label: 'United States' },
	// ];
	return (
		<>
			{/* Add Customer */}
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
										<h4>Add Location</h4>
									</div>
									<button
										type='button'
										className='close'
										data-bs-dismiss='modal'
										aria-label='Close'
										ref={addModal}
									>
										<span aria-hidden='true'>×</span>
									</button>
								</div>
								<div className='modal-body custom-modal-body'>
									<form onSubmit={addHandleSubmit(onAddSubmit)}>
										{/* <div className='modal-title-head people-cust-avatar'>
											<h6>Avatar</h6>
										</div>
										<div className='new-employee-field'>
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
										<div className='row'>
											<div className='col-lg-4 pe-0'>
												<div className='custom-dropdown'>
													<label className='form-label'>Location Code</label>
													<div
														className='custom-dropdown position-relative'
														style={{
															display: 'flex',
															flexDirection: 'column',
															position: 'relative',
															width: '100%',
														}}
													>
														{/* Input-like Dropdown Header */}
														<div
															className='dropdown-header'
															onClick={() => setIsOpen(!isOpen)}
															style={{
																display: 'flex',
																alignItems: 'center',
																justifyContent: 'space-between',
																border: '1px solid #ced4da',
																borderRadius: '0.25rem',
																padding: '0.375rem 0.75rem',
																height: '38px',
																cursor: 'pointer',
																backgroundColor: '#fff',
																color: '#495057',
																fontSize: '1rem',
															}}
														>
															{selectedCode || 'Choose'}
															<IoIosArrowDown
																style={{ fontSize: '1.2rem', color: '#495057' }}
															/>
														</div>

														{/* Dropdown Options */}
														{isOpen && (
															<div
																className='dropdown-options'
																style={{
																	position: 'absolute',
																	top: '100%',
																	left: 0,
																	width: '100%', // Matches input width
																	backgroundColor: '#fff',
																	border: '1px solid #ced4da',
																	borderRadius: '0.25rem',
																	marginTop: '4px',
																	zIndex: 1000,
																	maxHeight: '150px',
																	overflowY: 'auto',
																	boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
																}}
															>
																{availableCodes.map((code) => (
																	<div
																		key={code}
																		onClick={() => handleSelect(code)}
																		onMouseEnter={(e) => {
																			e.target.style.backgroundColor =
																				'#ffa94d';
																			e.target.style.color = '#fff';
																		}}
																		onMouseLeave={(e) => {
																			e.target.style.backgroundColor = '#fff';
																			e.target.style.color = '#495057';
																		}}
																		style={{
																			padding: '0.375rem 0.75rem',
																			cursor: 'pointer',
																			fontSize: '1rem',
																			color: '#495057',
																			backgroundColor: '#fff',
																		}}
																	>
																		{code}
																	</div>
																))}
															</div>
														)}
													</div>
												</div>
											</div>
											<div className='col-lg-4 pe-0'>
												<div className='mb-3'>
													<label className='form-label'>Location Name</label>
													<input
														type='text'
														className='form-control'
														{...addRegister('name', { required: true })}
													/>
													{addErrors?.name && (
														<p className=''>{addErrors?.name.message}</p>
													)}
												</div>
											</div>
											<div className='col-lg-4 pe-0'>
												<div className='mb-3'>
													<label className='form-label'>Email</label>
													<input
														type='email'
														className='form-control'
														{...addRegister('adminEmail', { required: true })}
													/>
													{addErrors.adminEmail && (
														<p className=''>{addErrors.adminEmail.message}</p>
													)}
												</div>
											</div>
											<div className='col-lg-4 pe-0'>
												<div className='input-blocks'>
													<label className='mb-2'>Phone</label>
													<input
														className='form-control form-control-lg group_formcontrol'
														{...addRegister('mainTelephone', {
															required: true,
														})}
														type='text'
													/>
													{addErrors.mainTelephone && (
														<p className=''>
															{addErrors.mainTelephone.message}
														</p>
													)}
												</div>
											</div>
											<div className='col-lg-4 pe-0'>
												<div className='mb-3'>
													<label className='form-label'>Company Number</label>
													<input
														type='text'
														className='form-control'
														{...addRegister('componyNumber')}
													/>
													{addErrors.companyNumber && (
														<p className=''>
															{addErrors.companyNumber.message}
														</p>
													)}
												</div>
											</div>
											<div className='col-lg-4 pe-0'>
												<div className='mb-3'>
													<label className='form-label'>
														General Email Add.
													</label>
													<input
														type='text'
														className='form-control'
														{...addRegister('generalEmailAddress')}
													/>
													{addErrors.generalEmailAddress && (
														<p className=''>
															{addErrors.generalEmailAddress.message}
														</p>
													)}
												</div>
											</div>
											<div className='col-lg-12 pe-0'>
												<div className='mb-3'>
													<label className='form-label'>Address 1</label>
													<input
														type='text'
														className='form-control'
														{...addRegister('address1', {
															required: true,
														})}
													/>
													{addErrors.address1 && (
														<p className=''>{addErrors.address1.message}</p>
													)}
												</div>
											</div>
											<div className='col-lg-12 pe-0'>
												<div className='mb-3'>
													<label className='form-label'>Address 2</label>
													<input
														type='text'
														className='form-control'
														{...addRegister('address2', {
															required: true,
														})}
													/>
													{addErrors.address2 && (
														<p className=''>{addErrors.address2.message}</p>
													)}
												</div>
											</div>
											<div className='col-lg-12 pe-0'>
												<div className='mb-3'>
													<label className='form-label'>Address 3</label>
													<input
														type='text'
														className='form-control'
														{...addRegister('address3')}
													/>
													{addErrors.address3 && (
														<p className=''>{addErrors.address3.message}</p>
													)}
												</div>
											</div>
											<div className='col-lg-12 pe-0'>
												<div className='mb-3'>
													<label className='form-label'>Address 4</label>
													<input
														type='text'
														className='form-control'
														{...addRegister('address4')}
													/>
													{addErrors.address4 && (
														<p className=''>{addErrors.address4.message}</p>
													)}
												</div>
											</div>
											<div className='col-lg-4 pe-0'>
												<div className='mb-3'>
													<label className='form-label'>Postcode</label>
													<input
														type='text'
														className='form-control'
														{...addRegister('postcode')}
													/>
													{addErrors.postcode && (
														<p className=''>{addErrors.postcode.message}</p>
													)}
												</div>
											</div>

											<div className='col-lg-4 pe-0'>
												<div className='mb-3'>
													<label className='form-label'>
														Store Website URL
													</label>
													<input
														type='text'
														className='form-control'
														{...addRegister('storeWebsiteURL')}
													/>
													{addErrors?.storeWebsiteURL && (
														<p className=''>
															{addErrors?.storeWebsiteURL.message}
														</p>
													)}
												</div>
											</div>

											<div className='col-lg-4 pe-0'>
												<div className='mb-3'>
													<label className='form-label'>Admin Name</label>
													<input
														type='text'
														className='form-control'
														{...addRegister('adminName')}
													/>
													{addErrors.adminName && (
														<p className=''>{addErrors.adminName.message}</p>
													)}
												</div>
											</div>

											<div className='col-lg-4 pe-0'>
												<div className='mb-3'>
													<label className='form-label'>Account Name</label>
													<input
														type='text'
														className='form-control'
														{...addRegister('accountName')}
													/>
													{addErrors.accountName && (
														<p className=''>{addErrors.accountName.message}</p>
													)}
												</div>
											</div>

											<div className='col-lg-4 pe-0'>
												<div className='mb-3'>
													<label className='form-label'>Account Email</label>
													<input
														type='text'
														className='form-control'
														{...addRegister('accountEmail')}
													/>
													{addErrors.accountEmail && (
														<p className=''>{addErrors.accountEmail.message}</p>
													)}
												</div>
											</div>

											<div className='col-lg-1 pe-0'>
												<div className='mb-3'>
													<label className='form-label'>Key Location</label>
													<Switch
														checked={keyLocation1} // Get the current value of the switch
														onChange={(checked) =>
															addSetValue('keyLocation', checked)
														}
														// {...addRegister('keyLocation', { value: false })}
													/>
												</div>
											</div>

											{/* <div className='col-lg-6 pe-0'>
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
										<h4>{`Edit Location ${location?.code}`}</h4>
									</div>
									<button
										type='button'
										className='close'
										data-bs-dismiss='modal'
										aria-label='Close'
										ref={editModal}
									>
										<span aria-hidden='true'>×</span>
									</button>
								</div>
								<div className='modal-body custom-modal-body'>
									<form onSubmit={editHandleSubmit(onEditSubmit)}>
										{/* <div className='modal-title-head people-cust-avatar'>
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
										</div> */}
										<div className='row'>
											<div className='col-lg-4 pe-0'>
												<div className='mb-3'>
													<label className='form-label'>Location Name</label>
													<input
														type='text'
														className='form-control'
														{...editRegister('name', { required: true })}
													/>
													{editErrors?.name && (
														<p className=''>{editErrors?.name?.message}</p>
													)}
												</div>
											</div>
											<div className='col-lg-4 pe-0'>
												<div className='mb-3'>
													<label className='form-label'>Email</label>
													<input
														type='email'
														className='form-control'
														{...editRegister('adminEmail', { required: true })}
													/>
													{editErrors?.adminEmail && (
														<p className=''>
															{editErrors?.adminEmail?.message}
														</p>
													)}
												</div>
											</div>
											<div className='col-lg-4 pe-0'>
												<div className='input-blocks'>
													<label className='mb-2'>Phone</label>
													<input
														className='form-control form-control-lg group_formcontrol'
														type='text'
														{...editRegister('mainTelephone', {
															required: true,
														})}
													/>
													{editErrors.mainTelephone && (
														<p className=''>
															{editErrors.mainTelephone.message}
														</p>
													)}
												</div>
											</div>
											<div className='col-lg-4 pe-0'>
												<div className='mb-3'>
													<label className='form-label'>Company Number</label>
													<input
														type='text'
														className='form-control'
														{...editRegister('companyNumber')}
													/>
													{editErrors.companyNumber && (
														<p className=''>
															{addErrors.companyNumber.message}
														</p>
													)}
												</div>
											</div>
											<div className='col-lg-4 pe-0'>
												<div className='mb-3'>
													<label className='form-label'>
														General Email Add.
													</label>
													<input
														type='text'
														className='form-control'
														{...editRegister('generalEmailAddress')}
													/>
													{editErrors.generalEmailAddress && (
														<p className=''>
															{editErrors.generalEmailAddress.message}
														</p>
													)}
												</div>
											</div>
											<div className='col-lg-12 pe-0'>
												<div className='mb-3'>
													<label className='form-label'>Address 1</label>
													<input
														type='text'
														className='form-control'
														{...editRegister('address1', {
															required: true,
														})}
													/>
													{editErrors.address1 && (
														<p className=''>{editErrors.address1.message}</p>
													)}
												</div>
											</div>
											<div className='col-lg-12 pe-0'>
												<div className='mb-3'>
													<label className='form-label'>Address 2</label>
													<input
														type='text'
														className='form-control'
														{...editRegister('address2')}
													/>
													{editErrors.address2 && (
														<p className=''>{editErrors.address2.message}</p>
													)}
												</div>
											</div>
											<div className='col-lg-12 pe-0'>
												<div className='mb-3'>
													<label className='form-label'>Address 3</label>
													<input
														type='text'
														className='form-control'
														{...editRegister('address3')}
													/>
													{editErrors.address3 && (
														<p className=''>{editErrors.address3.message}</p>
													)}
												</div>
											</div>
											<div className='col-lg-12 pe-0'>
												<div className='mb-3'>
													<label className='form-label'>Address 4</label>
													<input
														type='text'
														className='form-control'
														{...editRegister('address4')}
													/>
													{editErrors.address4 && (
														<p className=''>{editErrors.address4.message}</p>
													)}
												</div>
											</div>
											<div className='col-lg-4 pe-0'>
												<div className='mb-3'>
													<label className='form-label'>Postcode</label>
													<input
														type='text'
														className='form-control'
														{...editRegister('postcode')}
													/>
													{editErrors.postcode && (
														<p className=''>{editErrors.postcode.message}</p>
													)}
												</div>
											</div>
											<div className='col-lg-4 pe-0'>
												<div className='mb-3'>
													<label className='form-label'>
														Store Website URL
													</label>
													<input
														type='text'
														className='form-control'
														{...editRegister('storeWebsiteURL')}
													/>
													{editErrors.storeWebsiteURL && (
														<p className=''>
															{editErrors.storeWebsiteURL.message}
														</p>
													)}
												</div>
											</div>

											<div className='col-lg-4 pe-0'>
												<div className='mb-3'>
													<label className='form-label'>Admin Name</label>
													<input
														type='text'
														className='form-control'
														{...editRegister('adminName')}
													/>
													{editErrors.adminName && (
														<p className=''>{editErrors.adminName.message}</p>
													)}
												</div>
											</div>

											<div className='col-lg-4 pe-0'>
												<div className='mb-3'>
													<label className='form-label'>Account Name</label>
													<input
														type='text'
														className='form-control'
														{...editRegister('accountName')}
													/>
													{editErrors.accountName && (
														<p className=''>{editErrors.accountName.message}</p>
													)}
												</div>
											</div>

											<div className='col-lg-4 pe-0'>
												<div className='mb-3'>
													<label className='form-label'>Account Email</label>
													<input
														type='text'
														className='form-control'
														{...editRegister('accountEmail')}
													/>
													{editErrors.accountEmail && (
														<p className=''>
															{editErrors.accountEmail.message}
														</p>
													)}
												</div>
											</div>

											<div className='col-lg-1 pe-0'>
												<div className='mb-3'>
													<label className='form-label'>Key Location</label>
													<Switch
														checked={keyLocation2} // Get the current value of the switch
														onChange={(checked) =>
															editSetValue('keyLocation', checked)
														}
														// {...editRegister('keyLocation')}
													/>
													{/* {editErrors.keyLocation && (
														<p className=''>{editErrors.keyLocation.message}</p>
													)} */}
												</div>
											</div>

											{/* <div className='col-lg-6 pe-0'>
												<div className='mb-3'>
													<label className='form-label'>City</label>
													<Select
														classNamePrefix='react-select'
														options={varrelOptions}
													/>
												</div>
											</div> */}
											{/* <div className='col-lg-6 pe-0'>
												<div className='mb-3'>
													<label className='form-label'>Country</label>
													<Select
														classNamePrefix='react-select'
														options={germanyOptions}
													/>
												</div>
											</div> */}
											{/* <div className='col-lg-12'>
												<div className='mb-0 input-blocks'>
													<label className='form-label'>Descriptions</label>
													<textarea
														className='form-control mb-1'
														defaultValue={''}
													/>
													<p>Maximum 60 Characters</p>
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

export default StoreModal;
