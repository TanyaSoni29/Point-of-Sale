/** @format */

import React, { useEffect } from 'react';
import Select from 'react-select';
// import ImageWithBasePath from '../../img/imagewithbasebath';
// import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { updateLocation } from '../../../service/operations/locationApi';
import { updateLocations } from '../../../Slices/locationSlice';

const StoreModal = () => {
	const { location } = useSelector((state) => state.location);
	const { token } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	console.log('store location---', location);
	const {
		register: editRegister,
		handleSubmit: editHandleSubmit,
		reset: editReset,
		formState: {
			errors: editErrors,
			isSubmitSuccessful: isEditSubmitSuccessful,
		},
	} = useForm();

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
			};
			const response = await updateLocation(token, newData);
			console.log(response);
			if (response?.success) {
				dispatch(updateLocations(newData));
				editReset();
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (isEditSubmitSuccessful) {
			editReset({
				name: '',
				adminEmail: '',
				mainTelephone: '',
			});
		}
	}, [editReset, isEditSubmitSuccessful]);

	const countriesOptions = [
		{ value: 'choose', label: 'Choose' },
		{ value: 'unitedKingdom', label: 'United Kingdom' },
		{ value: 'unitedStates', label: 'United States' },
	];

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
									<form>
										<div className='modal-title-head people-cust-avatar'>
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
										</div>
										<div className='row'>
											<div className='col-lg-4 pe-0'>
												<div className='mb-3'>
													<label className='form-label'>Store Name</label>
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
														defaultValue={location?.name}
														{...editRegister('name', { required: true })}
													/>
													{editErrors.name && (
														<p className=''>{editErrors.name.message}</p>
													)}
												</div>
											</div>
											<div className='col-lg-4 pe-0'>
												<div className='mb-3'>
													<label className='form-label'>Email</label>
													<input
														type='email'
														className='form-control'
														defaultValue={location?.adminEmail}
														{...editRegister('adminEmail', { required: true })}
													/>
													{editErrors.adminEmail && (
														<p className=''>{editErrors.adminEmail.message}</p>
													)}
												</div>
											</div>
											<div className='col-lg-4 pe-0'>
												<div className='input-blocks'>
													<label className='mb-2'>Phone</label>
													<input
														className='form-control form-control-lg group_formcontrol'
														type='text'
														defaultValue={location?.mainTelephone}
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
											<div className='col-lg-12 pe-0'>
												<div className='mb-3'>
													<label className='form-label'>Address 1</label>
													<input
														type='text'
														className='form-control'
														defaultValue={location?.address1}
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
														defaultValue={location?.address2}
														{...editRegister('address2', {
															required: true,
														})}
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
														defaultValue={location?.address3}
														{...editRegister('address3', {
															required: true,
														})}
													/>
													{editErrors.address3 && (
														<p className=''>{editErrors.address3.message}</p>
													)}
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

export default StoreModal;
