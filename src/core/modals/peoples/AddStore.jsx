/** @format */

import React, { useEffect } from 'react';
// import Select from 'react-select';
// import ImageWithBasePath from '../../img/imagewithbasebath';
// import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { createLocation } from '../../../service/operations/locationApi';
import { addLocation } from '../../../slices/locationSlice';
import { Switch } from 'antd';
import { ArrowLeft, ChevronUp } from 'feather-icons-react/build/IconComponents';
import { Link } from 'react-router-dom';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { all_routes } from '../../../Router/all_routes';
import { setToggleHeader } from '../../../slices/productListSlice';

const AddStore = () => {
	const route = all_routes;
	const { token } = useSelector((state) => state.auth);
	const { toggle_header } = useSelector((state) => state.product);
	const dispatch = useDispatch();
	// console.log('store location---', location);

	const {
		register: addRegister,
		handleSubmit: addHandleSubmit,
		reset: addReset,
		formState: { errors: addErrors, isSubmitSuccessful: isAddSubmitSuccessful },
		getValues,
		setValue,
	} = useForm();

	const onAddSubmit = async (data) => {
		try {
			const newData = {
				code: data?.code,
				companyNumber: data?.companyNumber || '',
				name: data?.name || '',
				postcode: data?.postcode || '',
				generalEmailAddress: data?.generalEmailAddress || '',
				mainTelephone: data?.mainTelephone || '',
				address1: data?.address1 || '',
				address2: data?.address2 || '',
				address3: data?.address3 || '',
				address4: data?.address4 || '',
				storeWebsiteURL: data.storeWebsiteURL || '',
				adminName: data.adminName || '',
				adminEmail: data.adminEmail || '',
				accountName: data.accountName || '',
				accountEmail: data.accountEmail || '',
				keyLocation: data.keyLocation || false,
				isDeleted: false,
				id: 0,
				// dateCreated: '2024-11-29T08:08:40.758',
				// dateUpdated: '2024-11-29T08:08:40.758',
				// isValid: true,
			};
			const response = await createLocation(token, newData);
			// console.log(response);
			if (response?.success) {
				dispatch(addLocation(newData));
				addReset();
			}
		} catch (error) {
			console.log(error);
		}
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
		if (isAddSubmitSuccessful) {
			addReset({
				name: '',
				adminEmail: '',
				mainTelephone: '',
				address1: '',
				address2: '',
				address3: '',
				address4: '',
			});
		}
	}, [addReset, isAddSubmitSuccessful]);

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
			<div className='page-wrapper'>
				<div className='content'>
					<div className='page-header'>
						<div className='add-item d-flex'>
							<div className='page-title'>
								<h4>New Location</h4>
								<h6>Create new location</h6>
							</div>
						</div>
						<ul className='table-top-head'>
							<li>
								<div className='page-btn'>
									<Link
										to={route.storelist}
										className='btn btn-secondary'
									>
										<ArrowLeft className='me-2' />
										Back to Locations
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
					<form onSubmit={addHandleSubmit(onAddSubmit)}>
						<div className='card'>
							<div className='card-body add-product pb-0'>
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
										<div className='mb-3'>
											<label className='form-label'>Location Code</label>
											<input
												type='text'
												className='form-control'
												{...addRegister('code', { required: true })}
											/>
											{addErrors.code && (
												<p className=''>{addErrors.code.message}</p>
											)}
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
											{addErrors.name && (
												<p className=''>{addErrors.name.message}</p>
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
												<p className=''>{addErrors.mainTelephone.message}</p>
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
												<p className=''>{addErrors.companyNumber.message}</p>
											)}
										</div>
									</div>
									<div className='col-lg-4 pe-0'>
										<div className='mb-3'>
											<label className='form-label'>General Email Add.</label>
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
											<label className='form-label'>Store Website URL</label>
											<input
												type='text'
												className='form-control'
												{...addRegister('storeWebsiteURL')}
											/>
											{addErrors.storeWebsiteURL && (
												<p className=''>{addErrors.storeWebsiteURL.message}</p>
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

									<div className='col-lg-4 pe-0 mb-2'>
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

									<div className='col-lg-4 pe-0 mb-2'>
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

									<div className='col-lg-1 pe-0 mb-2'>
										<div className='mb-3'>
											<label className='form-label'>Key Location</label>
											<Switch
												checked={getValues('keyLocation')} // Get the current value of the switch
												onChange={(checked) => setValue('keyLocation', checked)}
												{...addRegister('keyLocation')}
											/>
											{addErrors.keyLocation && (
												<p className=''>{addErrors.keyLocation.message}</p>
											)}
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
							</div>
						</div>
						<div className='modal-footer-btn'>
							<button
								type='submit'
								className='btn btn-submit'
							>
								Create Location
							</button>
						</div>
					</form>
				</div>
			</div>

			{/* /Add Customer */}
		</>
	);
};

export default AddStore;
