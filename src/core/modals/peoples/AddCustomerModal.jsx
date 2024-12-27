/** @format */

import { ArrowLeft, ChevronUp } from 'feather-icons-react/build/IconComponents';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import React from 'react';
import Select from 'react-select';
import { all_routes } from '../../../Router/all_routes';
import { useDispatch, useSelector } from 'react-redux';
import { setToggleHeader } from '../../../slices/productListSlice';
import { Link } from 'react-router-dom';
// import ImageWithBasePath from "../../img/imagewithbasebath";
// import { Link } from "react-router-dom";

const AddCustomerModal = () => {
	const route = all_routes;
	const dispatch = useDispatch();
	const { toggle_header } = useSelector((state) => state.product);
	const renderCollapseTooltip = (props) => (
		<Tooltip
			id='refresh-tooltip'
			{...props}
		>
			Collapse
		</Tooltip>
	);
	const countriesOptions = [
		{ value: 'choose', label: 'Choose' },
		{ value: 'unitedKingdom', label: 'United Kingdom' },
		{ value: 'unitedStates', label: 'United States' },
	];

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
					<form>
						<div className='card'>
							<div className='card-body add-product pb-0'>
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
								</div>
							</div>
						</div>
						<div className='modal-footer-btn'>
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

			{/* /Add Customer */}
		</>
	);
};

export default AddCustomerModal;
