/** @format */

import { ArrowLeft, ChevronUp } from 'feather-icons-react/build/IconComponents';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import React, { useEffect } from 'react';
// import Select from 'react-select';
import { all_routes } from '../../Router/all_routes';
import { useDispatch, useSelector } from 'react-redux';
import { setToggleHeader } from '../../slices/productListSlice';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
// import ImageWithBasePath from "../../img/imagewithbasebath";
// import { Link } from "react-router-dom";

const ProductEnquiry = () => {
	const route = all_routes;
	const dispatch = useDispatch();
	const navigate = useNavigate();
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
								<h4>Product Enquiry</h4>
								<h6>Inquire with the product</h6>
							</div>
						</div>
						<ul className='table-top-head'>
							<li>
								<div className='page-btn'>
									<Link
										to={route.productlist}
										className='btn btn-secondary'
									>
										<ArrowLeft className='me-2' />
										Back to Product
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
									<div className='col-sm-4 col-md-2 col-lg-2'>
										<div className='mb-3'>
											<label className='form-label'>Part Number</label>
											<input
												type='text'
												className='form-control'
												placeholder='Enter Part Number'
												{...register('customerAccount', {
													required: 'Part Number is required',
												})}
											/>
											{errors?.partNo && (
												<p className='text-danger'>{errors?.partNo?.message}</p>
											)}
										</div>
									</div>
									<div className='col-sm-4 col-md-2 col-lg-2'>
										<div className='mb-3'>
											<label className='form-label'>MFR Part Number</label>
											<input
												type='text'
												className='form-control'
												placeholder='Enter MFR Part Number'
												{...register('mfrPartNo', {
													required: 'MFR Part No. is required',
												})}
											/>
											{errors?.mfrPartNo && (
												<p className='text-danger'>
													{errors?.mfrPartNo?.message}
												</p>
											)}
										</div>
									</div>
									<div className='col-sm-4 col-md-2 col-lg-2'>
										<div className='mb-3'>
											<label className='form-label'>Barcode</label>
											<input
												type='text'
												className='form-control'
												placeholder='Enter barcode'
												{...register('barcode', {
													required: 'Barcode is required',
												})}
											/>
											{errors?.barcode && (
												<p className='text-danger'>
													{errors?.barcode?.message}
												</p>
											)}
										</div>
									</div>
									<div className='col-sm-4 col-md-2 col-lg-2'>
										<div className='mb-3'>
											<label className='form-label'>Make</label>
											<input
												type='text'
												className='form-control'
												placeholder='Enter barcode'
												{...register('make', {
													required: 'Make is required',
												})}
											/>
											{errors?.make && (
												<p className='text-danger'>{errors?.make?.message}</p>
											)}
										</div>
									</div>
									<div className='col-sm-4 col-md-2 col-lg-2'>
										<div className='mb-3'>
											<label className='form-label'>Search 1/2</label>
											<input
												type='text'
												className='form-control'
												placeholder='Enter barcode'
												{...register('search1or2', {
													required: 'Search 1/2 is required',
												})}
											/>
											{errors?.search1or2 && (
												<p className='text-danger'>
													{errors?.search1or2?.message}
												</p>
											)}
										</div>
									</div>
									<div className='col-sm-4 col-md-2 col-lg-2'>
										<div className='mb-3'>
											<label className='form-label'>Size</label>
											<input
												type='text'
												className='form-control'
												placeholder='Enter barcode'
												{...register('size', {
													required: 'Size is required',
												})}
											/>
											{errors?.size && (
												<p className='text-danger'>{errors?.size?.message}</p>
											)}
										</div>
									</div>
									<div className='col-sm-4 col-md-2 col-lg-2'>
										<div className='mb-3'>
											<label className='form-label'>Total Stock Level</label>
											<input
												type='text'
												className='form-control'
												placeholder='Enter barcode'
												{...register('totalStockLevel', {
													required: 'Total Stock Level is required',
												})}
											/>
											{errors?.totalStockLevel && (
												<p className='text-danger'>
													{errors?.totalStockLevel?.message}
												</p>
											)}
										</div>
									</div>
									<div className='col-sm-4 col-md-2 col-lg-2'>
										<div className='mb-3'>
											<label className='form-label'>Color</label>
											<input
												type='text'
												className='form-control'
												placeholder='Enter barcode'
												{...register('color', {
													required: 'Color is required',
												})}
											/>
											{errors?.color && (
												<p className='text-danger'>{errors?.color?.message}</p>
											)}
										</div>
									</div>
								</div>

								<div className='row'>
									<div className='col-md-12 border-end'>
										<h4 className='mb-3'>Product Information</h4>
										<div className='row'>
											<div className='col-sm-4 col-md-2 col-lg-2'>
												<div className='mb-3'>
													<label>Supplier 1</label>
													<input
														type='text'
														className='form-control'
														{...register('supplier1', {
															required: 'Supplier 1 is required',
														})}
													/>
													{errors?.supplier1 && (
														<p className='text-danger'>
															{errors?.supplier1?.message}
														</p>
													)}
												</div>
											</div>
											<div className='col-sm-4 col-md-2 col-lg-2'>
												<div className='mb-3'>
													<label>Supplier 2</label>
													<input
														type='text'
														className='form-control'
														{...register('supplier2', {
															required: 'Supplier 2 is required',
														})}
													/>
													{errors?.supplier2 && (
														<p className='text-danger'>
															{errors?.supplier2?.message}
														</p>
													)}
												</div>
											</div>
											<div className='col-sm-4 col-md-2 col-lg-2'>
												<div className='mb-3'>
													<label>Last Sold On</label>
													<input
														type='text'
														className='form-control'
														{...register('lastSoldOn', {
															required: 'Address is required',
														})}
													/>
													{errors?.lastSoldOn && (
														<p className='text-danger'>
															{errors?.lastSoldOn?.message}
														</p>
													)}
												</div>
											</div>
											<div className='col-sm-4 col-md-2 col-lg-2'>
												<div className='mb-3'>
													<label>Total Quantity Sold</label>
													<input
														type='text'
														className='form-control'
														{...register('totalQtySold')}
													/>
													{errors?.totalQtySold && (
														<p className='text-danger'>
															{errors?.totalQtySold?.message}
														</p>
													)}
												</div>
											</div>
											<div className='col-sm-4 col-md-2 col-lg-2'>
												<div className='mb-3'>
													<label>Latest Cost Price</label>
													<input
														type='text'
														className='form-control'
														{...register('latestCostPrice')}
													/>
													{errors?.latestCostPrice && (
														<p className='text-danger'>
															{errors?.latestCostPrice?.message}
														</p>
													)}
												</div>
											</div>
											<div className='col-sm-4 col-md-2 col-lg-2'>
												<div className='mb-3'>
													<label>R.R.P</label>
													<input
														type='text'
														className='form-control'
														{...register('RRP')}
													/>
													{errors?.RRP && (
														<p className='text-danger'>
															{errors?.RRP?.message}
														</p>
													)}
												</div>
											</div>
											<div className='col-sm-4 col-md-2 col-lg-2'>
												<div className='mb-3'>
													<label>Average Cost Price</label>
													<input
														type='text'
														className='form-control'
														{...register('averageCostPrice')}
													/>
													{errors?.averageCostPrice && (
														<p className='text-danger'>
															{errors?.averageCostPrice?.message}
														</p>
													)}
												</div>
											</div>
											<div className='col-sm-4 col-md-2 col-lg-2'>
												<div className='mb-3'>
													<label>Total Cost</label>
													<input
														type='text'
														className='form-control'
														{...register('totalCost')}
													/>
													{errors?.totalCost && (
														<p className='text-danger'>
															{errors?.totalCost?.message}
														</p>
													)}
												</div>
											</div>
											<div className='col-sm-4 col-md-2 col-lg-2'>
												<div className='mb-3'>
													<label>Total Sales</label>
													<input
														type='text'
														className='form-control'
														{...register('totalSales')}
													/>
													{errors?.totalSales && (
														<p className='text-danger'>
															{errors?.totalSales?.message}
														</p>
													)}
												</div>
											</div>
											<div className='col-sm-4 col-md-2 col-lg-2'>
												<div className='mb-3'>
													<label>Total Vat</label>
													<input
														type='text'
														className='form-control'
														{...register('totalVat')}
													/>
													{errors?.totalVat && (
														<p className='text-danger'>
															{errors?.totalVat?.message}
														</p>
													)}
												</div>
											</div>
											<div className='col-sm-4 col-md-2 col-lg-2'>
												<div className='mb-3'>
													<label>Total Revenue</label>
													<input
														type='text'
														className='form-control'
														{...register('totalRevenue')}
													/>
													{errors?.totalRevenue && (
														<p className='text-danger'>
															{errors?.totalRevenue?.message}
														</p>
													)}
												</div>
											</div>
											<div className='col-sm-4 col-md-2 col-lg-2'>
												<div className='mb-3'>
													<label>Faulty Stock</label>
													<input
														type='text'
														className='form-control'
														{...register('faultyStock')}
													/>
													{errors?.faultyStock && (
														<p className='text-danger'>
															{errors?.faultyStock?.message}
														</p>
													)}
												</div>
											</div>
											<div className='col-sm-4 col-md-2 col-lg-2'>
												<div className='mb-3'>
													<label>Back Order</label>
													<input
														type='text'
														className='form-control'
														{...register('backOrder')}
													/>
													{errors?.backOrder && (
														<p className='text-danger'>
															{errors?.backOrder?.message}
														</p>
													)}
												</div>
											</div>
											<div className='col-sm-4 col-md-2 col-lg-2'>
												<div className='mb-3'>
													<label>Xmas Order</label>
													<input
														type='text'
														className='form-control'
														{...register('xmasOrder')}
													/>
													{errors?.xmasOrder && (
														<p className='text-danger'>
															{errors?.xmasOrder?.message}
														</p>
													)}
												</div>
											</div>
											<div className='col-sm-4 col-md-2 col-lg-2'>
												<div className='mb-3'>
													<label>Min. Stock</label>
													<input
														type='text'
														className='form-control'
														{...register('minStock')}
													/>
													{errors?.minStock && (
														<p className='text-danger'>
															{errors?.minStock?.message}
														</p>
													)}
												</div>
											</div>
											<div className='col-sm-4 col-md-2 col-lg-2'>
												<div className='mb-3'>
													<label>Max. Stock</label>
													<input
														type='text'
														className='form-control'
														{...register('maxStock')}
													/>
													{errors?.maxStock && (
														<p className='text-danger'>
															{errors?.maxStock?.message}
														</p>
													)}
												</div>
											</div>
											<div className='col-sm-4 col-md-2 col-lg-2'>
												<div className='mb-3'>
													<label>Allocated Stock</label>
													<input
														type='text'
														className='form-control'
														{...register('allocatedStock')}
													/>
													{errors?.allocatedStock && (
														<p className='text-danger'>
															{errors?.allocatedStock?.message}
														</p>
													)}
												</div>
											</div>
											<div className='col-sm-4 col-md-2 col-lg-2'>
												<div className='mb-3'>
													<label>Last Stock Check</label>
													<input
														type='text'
														className='form-control'
														{...register('lastStockCheck')}
													/>
													{errors?.lastStockCheck && (
														<p className='text-danger'>
															{errors?.lastStockCheck?.message}
														</p>
													)}
												</div>
											</div>
											<div className='col-sm-4 col-md-2 col-lg-2'>
												<div className='mb-3'>
													<label>MFR Part No. 1</label>
													<input
														type='text'
														className='form-control'
														{...register('mfrPartNo1')}
													/>
													{errors?.mfrPartNo1 && (
														<p className='text-danger'>
															{errors?.mfrPartNo1?.message}
														</p>
													)}
												</div>
											</div>
											<div className='col-sm-4 col-md-2 col-lg-2'>
												<div className='mb-3'>
													<label>MFR Part No. 2</label>
													<input
														type='text'
														className='form-control'
														{...register('mfrPartNo2')}
													/>
													{errors?.mfrPartNo2 && (
														<p className='text-danger'>
															{errors?.mfrPartNo2?.message}
														</p>
													)}
												</div>
											</div>
											<div className='col-sm-4 col-md-2 col-lg-2'>
												<div className='mb-3'>
													<label>Bin Location 1</label>
													<input
														type='text'
														className='form-control'
														{...register('binLocation1')}
													/>
													{errors?.binLocation1 && (
														<p className='text-danger'>
															{errors?.binLocation1?.message}
														</p>
													)}
												</div>
											</div>
											<div className='col-sm-4 col-md-2 col-lg-2'>
												<div className='mb-3'>
													<label>Bin Location 2</label>
													<input
														type='text'
														className='form-control'
														{...register('binLocation2')}
													/>
													{errors?.binLocation2 && (
														<p className='text-danger'>
															{errors?.binLocation2?.message}
														</p>
													)}
												</div>
											</div>
											<div className='col-sm-4 col-md-2 col-lg-2'>
												<div className='mb-3'>
													<label>Margin</label>
													<input
														type='text'
														className='form-control'
														{...register('margin')}
													/>
													{errors?.margin && (
														<p className='text-danger'>
															{errors?.margin?.message}
														</p>
													)}
												</div>
											</div>
											<div className='col-sm-4 col-md-2 col-lg-2'>
												<div className='mb-3'>
													<label>Category A</label>
													<input
														type='text'
														className='form-control'
														{...register('categoryA', {
															required: 'Category A is required',
														})}
													/>
													{errors?.categoryA && (
														<p className='text-danger'>
															{errors?.categoryA?.message}
														</p>
													)}
												</div>
											</div>
											<div className='col-sm-4 col-md-2 col-lg-2'>
												<div className='mb-3'>
													<label>Category B</label>
													<input
														type='email'
														className='form-control'
														{...register('categoryB')}
													/>
													{errors?.categoryB && (
														<p className='text-danger'>
															{errors?.categoryB?.message}
														</p>
													)}
												</div>
											</div>
											<div className='col-sm-4 col-md-2 col-lg-2'>
												<div className='mb-3'>
													<label>Category C</label>
													<input
														type='email'
														className='form-control'
														{...register('categoryC')}
													/>
													{errors?.categoryC && (
														<p className='text-danger'>
															{errors?.categoryC?.message}
														</p>
													)}
												</div>
											</div>
											<div className='col-sm-4 col-md-2 col-lg-2'>
												<div className='mt-4'>
													<button className='btn btn-submit'>
														Ask Admin To Review This Part
													</button>
												</div>
											</div>
										</div>
									</div>

									<div className='col-md-12'>
										<h4 className='mb-3'>Supplier Stock Availability</h4>
										<div className='row'>
											<div className='col-sm-4 col-md-2 col-lg-2'>
												<div className='mb-3'>
													<label>Availability</label>
													<input
														type='text'
														className='form-control'
														{...register('availability', {
															required: 'Availability is required',
														})}
													/>
													{errors?.availability && (
														<p className='text-danger'>
															{errors?.availability?.message}
														</p>
													)}
												</div>
											</div>
											<div className='col-sm-4 col-md-2 col-lg-2'>
												<div className='mb-3'>
													<label>Lead Time</label>
													<input
														type='text'
														className='form-control'
														{...register('leadTime', {
															required: 'Lead Time is required',
														})}
													/>
													{errors?.leadTime && (
														<p className='text-danger'>
															{errors?.leadTime?.message}
														</p>
													)}
												</div>
											</div>
											<div className='col-sm-4 col-md-2 col-lg-2'>
												<div className='mb-3'>
													<label>Qty In Stock</label>
													<input
														type='text'
														className='form-control'
														{...register('qtyInStock')}
													/>
													{errors?.qtyInStock && (
														<p className='text-danger'>
															{errors?.qtyInStock?.message}
														</p>
													)}
												</div>
											</div>
											<div className='col-sm-4 col-md-2 col-lg-2'>
												<div className='mb-3'>
													<label>Last Updated</label>
													<input
														type='text'
														className='form-control'
														{...register('lastUpdated', {
															required: 'Last Updated is required',
														})}
													/>
													{errors?.lastUpdated && (
														<p className='text-danger'>
															{errors?.lastUpdated?.message}
														</p>
													)}
												</div>
											</div>
											<div className='col-sm-4 col-md-2 col-lg-2'>
												<div className='mt-4'>
													<button className='btn btn-submit'>Check</button>
												</div>
											</div>
										</div>
									</div>
									<div className='col-md-12'>
										<div className='row'>
											<div className='d-flex gap-3 justify-content-start align-items-center mb-3'>
												<div className='d-flex justify-content-center align-items-center'>
													<button
														type='button'
														className='btn btn-submit '
													>
														View Product On webSite
													</button>
												</div>
												<div className='d-flex justify-content-center align-items-center'>
													<button
														type='button'
														className='btn btn-submit '
													>
														Order This Part
													</button>
												</div>
												<div className='d-flex justify-content-center align-items-center'>
													<button
														type='button'
														className='btn btn-submit '
													>
														Print Product Label
													</button>
												</div>
												<div className='d-flex justify-content-center align-items-center'>
													<button
														type='button'
														className='btn btn-submit '
													>
														Print Finance Label
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='modal-footer-btn mt-2'>
							<button
								type='submit'
								className='btn btn-submit me-3'
							>
								Create Customer
							</button>

							<button
								className='btn btn-submit'
								type='button'
								onClick={() => navigate('/add-product')}
							>
								Product Maintenance
							</button>
						</div>
					</form>
				</div>
			</div>

			{/* /Add Customer */}
		</>
	);
};

export default ProductEnquiry;
