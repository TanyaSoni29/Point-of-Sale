/** @format */

import { Switch } from 'antd';
import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { createCategory } from '../../../service/operations/categoryApi';
import { useDispatch, useSelector } from 'react-redux';
import { refreshCategories } from '../../../slices/categorySlice';
// import { Link } from 'react-router-dom';

const AddCategoryList = () => {
	const dispatch = useDispatch();
	const { token } = useSelector((state) => state.auth);
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
	const modalRef = useRef(null);

	const mainCategory = watch('a');
	const subCategory = watch('b');
	const subCategory2 = watch('c');
	const majorCategory = watch('major');

	const onSubmit = async (data) => {
		console.log(data);
		try {
			const response = await createCategory(token, data);
			console.log('create category response.....', response);
			if (response?.success) {
				if (modalRef.current) {
					modalRef.current.click();
				}
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
			<div
				className='modal fade'
				id='add-category'
			>
				<div className='modal-dialog modal-dialog-centered custom-modal-two'>
					<div className='modal-content'>
						<div className='page-wrapper-new p-0'>
							<div className='content'>
								<div className='modal-header border-0 custom-modal-header'>
									<div className='page-title'>
										<h4>Create Category</h4>
									</div>
									<button
										type='button'
										className='close'
										data-bs-dismiss='modal'
										aria-label='Close'
										ref={modalRef}
									>
										<span aria-hidden='true'>×</span>
									</button>
								</div>
								<div className='modal-body custom-modal-body'>
									<form onSubmit={handleSubmit(onSubmit)}>
										<div className='mb-3'>
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
										<div className='mb-3'>
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
										<div className='mb-1'>
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
												Create Category
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* /Add Category */}
		</div>
	);
};

export default AddCategoryList;
