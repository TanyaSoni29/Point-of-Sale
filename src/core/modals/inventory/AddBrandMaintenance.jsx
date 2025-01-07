/** @format */

// import { PlusCircle } from 'feather-icons-react/build/IconComponents';
import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import { createMakes } from '../../../service/operations/MakesApi';
import { refreshMakes } from '../../../slices/makesSlice';
import { all_routes } from '../../../Router/all_routes';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronUp } from 'feather-icons-react/build/IconComponents';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { setToggleHeader } from '../../../slices/productListSlice';

const AddBrandPage = () => {
	const route = all_routes;
	const { token } = useSelector((state) => state.auth);
	const { toggle_header } = useSelector((state) => state.product);
	const modalRef = useRef(null);
	const dispatch = useDispatch();
	const {
		register,
		handleSubmit,
		// setValue,
		// watch,
		formState: { errors, isSubmitSuccessful },
		reset,
	} = useForm({
		defaultValues: {
			name: '',
			code: '',
		},
	});

	const onSubmit = async (data) => {
		// console.log(data);
		try {
			const response = await createMakes(token, data);
			// console.log('create category response.....', response);
			if (response?.success) {
				if (modalRef.current) {
					modalRef.current.click();
				}
				dispatch(refreshMakes());
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
		if (isSubmitSuccessful) {
			reset({
				name: '',
				code: '',
			});
		}
	}, [reset, isSubmitSuccessful]);
	return (
		<>
			{/* Add Brand */}
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
						<div className='card'>
							<div className='card-body add-product pb-0'>
								<div className='mb-3'>
									<label className='form-label'>Make Code</label>
									<input
										type='text'
										className='form-control'
										{...register('code', {
											required: 'Make Code is required',
										})}
										placeholder='Enter Make Code'
									/>
									{errors?.code && (
										<p className='text-danger'>{errors?.code?.message}</p>
									)}
								</div>
								<div className='mb-4'>
									<label className='form-label'>Make Name</label>
									<input
										type='text'
										className='form-control'
										{...register('name', {
											required: 'Make Name is required',
										})}
										placeholder='Enter Make Name'
									/>
									{errors?.name && (
										<p className='text-danger'>{errors?.name?.message}</p>
									)}
								</div>
							</div>
						</div>

						{/* <label className='form-label'>Logo</label>
										<div className='profile-pic-upload mb-3'>
											<div className='profile-pic brand-pic'>
												<span>
													<PlusCircle className='plus-down-add' />
													Add Image
												</span>
											</div>
											<div className='image-upload mb-0'>
												<input type='file' />
												<div className='image-uploads'>
													<h4>Change Image</h4>
												</div>
											</div>
										</div>
										<div className='mb-0'>
											<div className='status-toggle modal-status d-flex justify-content-between align-items-center'>
												<span className='status-label'>Status</span>
												<input
													type='checkbox'
													id='user2'
													className='check'
													defaultChecked='true'
												/>
												<label
													htmlFor='user2'
													className='checktoggle'
												/>
											</div>
										</div> */}
						<div className='modal-footer-btn'>
							<button
								type='submit'
								className='btn btn-submit'
							>
								Create Make
							</button>
						</div>
					</form>
				</div>
			</div>

			{/* /Add Brand */}
		</>
	);
};

export default AddBrandPage;
