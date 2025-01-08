/** @format */

// import { PlusCircle } from 'feather-icons-react/build/IconComponents';
import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import { createMakes } from '../../../service/operations/MakesApi';
import { refreshMakes } from '../../../slices/makesSlice';

const ProductSearch = () => {
	const { token } = useSelector((state) => state.auth);
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
			<div
				className='modal fade'
				id='product-search'
			>
				<div className='modal-dialog modal-dialog-centered custom-modal-two'>
					<div className='modal-content'>
						<div className='page-wrapper-new p-0'>
							<div className='content'>
								<div className='modal-header border-0 custom-modal-header'>
									<div className='page-title'>
										<h4>Create Make</h4>
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
								<div className='modal-body custom-modal-body new-employee-field'>
									<form onSubmit={handleSubmit(onSubmit)}>
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
										<div className='mb-3'>
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
			{/* /Add Brand */}
		</>
	);
};

export default ProductSearch;
