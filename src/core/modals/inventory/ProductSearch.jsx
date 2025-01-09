/** @format */

// import { PlusCircle } from 'feather-icons-react/build/IconComponents';
import { Switch } from 'antd';
import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { createMakes } from '../../../service/operations/MakesApi';
// import { refreshMakes } from '../../../slices/makesSlice';

const ProductSearch = () => {
	// const { token } = useSelector((state) => state.auth);
	const modalRef = useRef(null);
	// const dispatch = useDispatch();
	const {
		register,
		handleSubmit,
		setValue,
		watch,
		formState: { isSubmitSuccessful },
		reset,
	} = useForm({
		defaultValues: {
			name: '',
			code: '',
		},
	});

	const allProducts = watch('allProducts');
	const stockAllShops = watch('stockAllShops');
	const stockHere = watch('stockHere');
	const stockAt = watch('stockAt');
	const notInStock = watch('notInStock');

	const onSubmit = async (data) => {
		console.log(data);
		// try {
		// 	const response = await createMakes(token, data);
		// 	// console.log('create category response.....', response);
		// 	if (response?.success) {
		// 		if (modalRef.current) {
		// 			modalRef.current.click();
		// 		}
		// 		dispatch(refreshMakes());
		// 	}
		// } catch (error) {
		// 	console.log(error);
		// }
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
				<div className='modal-dialog modal-dialog-centered modal-lg custom-modal-two'>
					<div className='modal-content'>
						<div className='page-wrapper-new p-0'>
							<div className='content'>
								<div className='modal-header border-0 custom-modal-header'>
									<div className='page-title'>
										<h4>Product Search</h4>
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
										<div className='row'>
											<div className='col-lg-4'>
												<div className='mb-3'>
													<label className='form-label'>Make</label>
													<input
														type='text'
														className='form-control'
														{...register('make')}
														placeholder='Enter Make'
													/>
												</div>
											</div>
											<div className='col-lg-4'>
												<div className='mb-3'>
													<label className='form-label'>Supplier</label>
													<input
														type='text'
														className='form-control'
														{...register('supplier')}
														placeholder='Enter Supplier'
													/>
												</div>
											</div>
											<div className='col-lg-4'>
												<div className='mb-3'>
													<label className='form-label'>Search 1</label>
													<input
														type='text'
														className='form-control'
														{...register('search1')}
														placeholder='Enter Search keyword'
													/>
												</div>
											</div>
											<div className='col-lg-4'>
												<div className='mb-3'>
													<label className='form-label'>Search 2</label>
													<input
														type='text'
														className='form-control'
														{...register('search2')}
													/>
												</div>
											</div>
											<div className='col-lg-4'>
												<div className='mb-3'>
													<label className='form-label'>MFR No.</label>
													<input
														type='text'
														className='form-control'
														{...register('mfrno')}
														placeholder='Enter MFR Number'
													/>
												</div>
											</div>
											<div className='col-lg-4'>
												<div className='mb-3'>
													<label className='form-label'>Details</label>
													<input
														type='text'
														className='form-control'
														{...register('details')}
														placeholder='Enter Details'
													/>
												</div>
											</div>
											<div className='col-lg-4'>
												<div className='row'>
													<div className='col-lg-6'>
														<div className='mb-3'>
															<label className='form-label'>Size</label>
															<input
																type='text'
																className='form-control'
																{...register('size')}
																placeholder='Enter Size'
															/>
														</div>
													</div>
													<div className='col-lg-6'>
														<div className='mb-3'>
															<label className='form-label'>Color</label>
															<input
																type='text'
																className='form-control'
																{...register('color')}
																placeholder='Enter Color'
															/>
														</div>
													</div>
												</div>
											</div>

											<div className='col-lg-4'>
												<div className='row'>
													<div className='col-lg-6'>
														<div className='mb-3'>
															<label className='form-label'>Gender</label>
															<input
																type='text'
																className='form-control'
																{...register('gender')}
																placeholder='Enter Gender'
															/>
														</div>
													</div>
													<div className='col-lg-6'>
														<div className='mb-3'>
															<label className='form-label'>Year</label>
															<input
																type='text'
																className='form-control'
																{...register('year')}
																placeholder='Enter Year'
															/>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className='col-lg-12'>
											<div className='mb-1'>
												<label className=''>
													<Switch
														checked={allProducts}
														onChange={(value) => {
															setValue('allProducts', value);
														}}
														style={{ marginRight: '6px' }}
													/>
													All Products
												</label>
											</div>
											<div className='mb-1'>
												<label className=''>
													<Switch
														checked={stockAllShops}
														onChange={(value) => {
															setValue('stockAllShops', value);
														}}
														style={{ marginRight: '6px' }}
													/>
													Stock (All Shops)
												</label>
											</div>
											<div className='mb-1'>
												<label className=''>
													<Switch
														checked={stockHere}
														onChange={(value) => {
															setValue('stockHere', value);
														}}
														style={{ marginRight: '6px' }}
													/>
													Stock Here
												</label>
											</div>
											<div className='mb-1'>
												<label className=''>
													<Switch
														checked={stockAt}
														onChange={(value) => {
															setValue('stockAt', value);
														}}
														style={{ marginRight: '6px' }}
													/>
													Stock At
												</label>
											</div>
											<div className='mb-1'>
												<label className=''>
													<Switch
														checked={notInStock}
														onChange={(value) => {
															setValue('notInStock', value);
														}}
														style={{ marginRight: '6px' }}
													/>
													Not In Stock (All Shops)
												</label>
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
										<div className='modal-footer-btn mt-0'>
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
