/** @format */

import { Switch } from 'antd';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { createCategory } from '../../../service/operations/categoryApi';
import { useDispatch, useSelector } from 'react-redux';
import { refreshCategories } from '../../../slices/categorySlice';
import { all_routes } from '../../../Router/all_routes';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronUp } from 'feather-icons-react/build/IconComponents';
import { setToggleHeader } from '../../../slices/productListSlice';

const AddCategoryPage = () => {
	const route = all_routes;
	const dispatch = useDispatch();
	const { token } = useSelector((state) => state.auth);
	const { toggle_header } = useSelector((state) => state.product);
	const {
		register,
		handleSubmit,
		setValue,
		watch,
		formState: { errors, isSubmitSuccessful },
		reset,
	} = useForm({
		defaultValues: {
			name: '',
			code: '',
			a: false, // Main Category
			b: false, // Sub Category
			c: false, // Sub Category 2
			major: false, // Major
		},
	});

	// const modalRef = useRef(null);

	const mainCategory = watch('a');
	const subCategory = watch('b');
	const subCategory2 = watch('c');
	const majorCategory = watch('major');
	const renderCollapseTooltip = (props) => (
		<Tooltip
			id='refresh-tooltip'
			{...props}
		>
			Collapse
		</Tooltip>
	);
	const onSubmit = async (data) => {
		console.log(data);
		try {
			const response = await createCategory(token, data);
			console.log('create category response.....', response);
			if (response?.success) {
				// if (modalRef.current) {
				// 	modalRef.current.click();
				// }
				dispatch(refreshCategories());
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (isSubmitSuccessful) {
			reset({
				name: '',
				code: '',
				a: false,
				b: false,
				c: false,
				major: false,
			});
		}
	}, [reset, isSubmitSuccessful]);

	return (
		<div>
			{/* Add Category */}
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
								<div className='row'>
									<div className='mb-3 col-lg-6'>
										<label className='form-label'>Category Code</label>
										<input
											type='text'
											className='form-control'
											{...register('code', {
												required: 'Category Code is required',
											})}
											placeholder='Enter Category Code'
										/>
										{errors?.code && (
											<p className='text-danger'>{errors?.code?.message}</p>
										)}
									</div>
									<div className='mb-3 col-lg-6'>
										<label className='form-label'>Category</label>
										<input
											type='text'
											className='form-control'
											{...register('name', {
												required: 'Category Name is required',
											})}
											placeholder='Enter Category Name'
										/>
										{errors?.name && (
											<p className='text-danger'>{errors?.name?.message}</p>
										)}
									</div>
								</div>

								{/* <div className="mb-3">
                                            <label className="form-label">Category Slug</label>
                                            <input type="text" className="form-control" />
                                        </div> */}
								<div className='mb-1'>
									<label className=''>
										<Switch
											checked={mainCategory}
											onChange={(value) => {
												setValue('a', value);
											}}
											style={{ marginRight: '6px' }}
										/>
										Main Category
									</label>
								</div>
								<div className='mb-1'>
									<label className=''>
										<Switch
											checked={subCategory}
											onChange={(value) => {
												setValue('b', value);
											}}
											style={{ marginRight: '6px' }}
										/>
										Sub Category
									</label>
								</div>
								<div className='mb-1'>
									<label className=''>
										<Switch
											checked={subCategory2}
											onChange={(value) => {
												setValue('c', value);
											}}
											style={{ marginRight: '6px' }}
										/>
										Sub Category 2
									</label>
								</div>
								<div className='mb-4'>
									<label className=''>
										<Switch
											checked={majorCategory}
											onChange={(value) => {
												setValue('major', value);
											}}
											style={{ marginRight: '6px' }}
										/>
										Major
									</label>
								</div>
							</div>
						</div>
						<div className='modal-footer-btn'>
							<button
								type='submit'
								className='btn btn-submit'
							>
								Create Category
							</button>
						</div>
					</form>
				</div>
			</div>
			{/* /Add Category */}
		</div>
	);
};

export default AddCategoryPage;
