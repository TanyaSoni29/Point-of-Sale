/** @format */

import { ArrowLeft, ChevronUp } from 'feather-icons-react/build/IconComponents';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Select from 'react-select';
import { setToggleHeader } from '../../../slices/productListSlice';
import { Link } from 'react-router-dom';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { all_routes } from '../../../Router/all_routes';
import { useDispatch, useSelector } from 'react-redux';
// import ImageWithBasePath from '../../img/imagewithbasebath';
// import { Link } from 'react-router-dom';

const StockInput = () => {
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
				partNo: '',
			});
		}
	}, [reset, isSubmitSuccessful]);

	const options1 = [
		{ value: 'choose', label: 'Choose' },
		{ value: 'lobarHandy', label: 'Lobar Handy' },
		{ value: 'quaintWarehouse', label: 'Quaint Warehouse' },
	];

	const options2 = [
		{ value: 'choose', label: 'Choose' },
		{ value: 'selosy', label: 'Selosy' },
		{ value: 'logerro', label: 'Logerro' },
	];

	const options3 = [
		{ value: 'choose', label: 'Choose' },
		{ value: 'steven', label: 'Steven' },
		{ value: 'gravely', label: 'Gravely' },
	];
	return (
		<>
			{/* Add Stock */}
			<div className='page-wrapper'>
				<div className='content'>
					<div className='page-header'>
						<div className='add-item d-flex'>
							<div className='page-title'>
								<h4>New Category</h4>
								<h6>Create new category</h6>
							</div>
						</div>
						<ul className='table-top-head'>
							<li>
								<div className='page-btn'>
									<Link
										to={route.categorylist}
										className='btn btn-secondary'
									>
										<ArrowLeft className='me-2' />
										Back to Categories
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
						<div className='row'>
							<div className='col-lg-6'>
								<div className='input-blocks'>
									<label>Warehouse</label>
									<Select
										classNamePrefix='react-select'
										options={options1}
									/>
								</div>
							</div>
							<div className='col-lg-6'>
								<div className='input-blocks'>
									<label>Shop</label>
									<Select
										classNamePrefix='react-select'
										options={options2}
									/>
								</div>
							</div>
							<div className='col-lg-12'>
								<div className='input-blocks'>
									<label>Responsible Person</label>
									<Select
										classNamePrefix='react-select'
										options={options3}
									/>
								</div>
							</div>
							<div className='col-lg-12'>
								<div className='input-blocks search-form mb-0'>
									<label>Part Number</label>
									<input
										type='text'
										className='form-control'
										placeholder='Enter Part Number'
										{...register('partNo', {
											required: 'Part number is required',
										})}
									/>
									{errors.partNo && (
										<p className='text-danger'>{errors?.partNo?.message}</p>
									)}
									<i
										data-feather='search'
										className='feather-search custom-search'
									/>
								</div>
							</div>
							<div className='col-lg-12'>
								<div className='input-blocks search-form mb-0'>
									<label>Quantity In</label>
									<input
										type='text'
										className='form-control'
										placeholder='Enter Quantity'
										{...register('quantityIn', {
											required: 'Quantity is required',
										})}
									/>
									{errors.quantityIn && (
										<p className='text-danger'>{errors?.quantityIn?.message}</p>
									)}
								</div>
							</div>
							<div className='col-lg-12'>
								<div className='input-blocks search-form mb-0'>
									<label>Date In</label>
									<input
										type='text'
										className='form-control'
										placeholder='Enter date'
										{...register('dateIn', {
											required: 'Date In is required',
										})}
									/>
									{errors.dateIn && (
										<p className='text-danger'>{errors?.dateIn?.message}</p>
									)}
								</div>
							</div>
							<div className='col-lg-12'>
								<div className='input-blocks search-form mb-0'>
									<label>Invoice No.</label>
									<input
										type='text'
										className='form-control'
										placeholder='Enter Invoice Number'
										{...register('invoiceNo', {
											required: 'Invoice No. is required',
										})}
									/>
									{errors.invoiceNo && (
										<p className='text-danger'>{errors?.invoiceNo?.message}</p>
									)}
								</div>
							</div>
							<div className='col-lg-12'>
								<div className='input-blocks search-form mb-0'>
									<label>Cost Each</label>
									<input
										type='text'
										className='form-control'
										placeholder='Enter Cost Each'
										{...register('costEach', {
											required: 'Cost each is required',
										})}
									/>
									{errors.costEach && (
										<p className='text-danger'>{errors?.costEach?.message}</p>
									)}
								</div>
							</div>
							<div className='col-lg-12'>
								<div className='input-blocks search-form mb-0'>
									<label>Total Cost</label>
									<input
										type='text'
										className='form-control'
										placeholder='Enter Total Cost'
										{...register('totalCost', {
											required: 'Total Cost is required',
										})}
									/>
									{errors.totalCost && (
										<p className='text-danger'>{errors?.totalCost?.message}</p>
									)}
								</div>
							</div>
							<div className='col-lg-12'>
								<div className='input-blocks search-form mb-0'>
									<label>Supplier</label>
									<input
										type='text'
										className='form-control'
										placeholder='Enter Part Number'
										{...register('supplier', {
											required: 'Supplier is required',
										})}
									/>
									{errors.supplier && (
										<p className='text-danger'>{errors?.supplier?.message}</p>
									)}
								</div>
							</div>
							<div className='col-lg-12'>
								<div className='input-blocks search-form mb-0'>
									<label>Location</label>
									<input
										type='text'
										className='form-control'
										placeholder='Enter location'
										{...register('location', {
											required: 'Location is required',
										})}
									/>
									{errors.location && (
										<p className='text-danger'>{errors?.location?.message}</p>
									)}
								</div>
							</div>
							<div className='col-lg-12'>
								<div className='input-blocks search-form mb-0'>
									<label>Sales Code</label>
									<input
										type='text'
										className='form-control'
										placeholder='Enter sales code'
										{...register('salesCode')}
									/>
									{errors.salesCode && (
										<p className='text-danger'>{errors?.salesCode?.message}</p>
									)}
								</div>
							</div>
							<div className='row'>
								<h4 className='mb-3'>P/O No.</h4>
								<div className='col-lg-12'>
									<div className='input-blocks search-form mb-0'>
										<label>RRP</label>
										<input
											type='text'
											className='form-control'
											placeholder='Enter RRP'
											{...register('RRP')}
										/>
										{errors.RRP && (
											<p className='text-danger'>{errors?.RRP?.message}</p>
										)}
									</div>
								</div>
								<div className='col-lg-12'>
									<div className='input-blocks search-form mb-0'>
										<label>SRP</label>
										<input
											type='text'
											className='form-control'
											placeholder='Enter SRP'
											{...register('SRP')}
										/>
										{errors.SRP && (
											<p className='text-danger'>{errors?.SRP?.message}</p>
										)}
									</div>
								</div>
								<div className='col-lg-12'>
									<div className='input-blocks search-form mb-0'>
										<label>WRRP</label>
										<input
											type='text'
											className='form-control'
											placeholder='Enter WRRP'
											{...register('WRRP')}
										/>
										{errors.WRRP && (
											<p className='text-danger'>{errors?.WRRP?.message}</p>
										)}
									</div>
								</div>
							</div>
						</div>
						<div className='modal-footer-btn'>
							<button
								type='submit'
								className='btn btn-submit me-2'
							>
								Create Stock
							</button>
							<button
								type='button'
								className='btn btn-cancel'
							>
								Cancel
							</button>
						</div>
					</form>
				</div>
			</div>

			{/* /Add Stock */}
		</>
	);
};

export default StockInput;
