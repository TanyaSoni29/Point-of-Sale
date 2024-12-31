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
								Create
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
