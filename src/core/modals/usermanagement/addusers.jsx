/** @format */

// import { PlusCircle } from 'feather-icons-react/build/IconComponents';
import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import { createStaffUsers } from '../../../service/operations/staffUsersApi';
import { refreshStaffUsers } from '../../../slices/staffUserSlice';
import { Switch } from 'antd';
// import Select from 'react-select';

const AddUsers = () => {
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
			code: '',
			name: '',
			allowDiscount: false,
			allowPriceChange: false,
			pin: '',
			allowCredit: false,
			isMechanic: false,
		},
	});

	const modalRef = useRef(null);

	const allowDiscount = watch('allowDiscount');
	const allowPriceChange = watch('allowPriceChange');
	const allowCredit = watch('allowCredit');
	const isMechanic = watch('isMechanic');

	const onSubmit = async (data) => {
		try {
			const reqBody = {
				code: data?.code,
				name: data?.name,
				pin: data?.pin,
				allowCredit: data?.allowCredit,
				allowPriceChange: data?.allowPriceChange,
				isMechanic: data?.isMechanic,
				allowDiscount: data?.allowDiscount,
			};
			const response = await createStaffUsers(token, reqBody);
			if (response?.success) {
				if (modalRef.current) {
					modalRef.current.click();
				}
				dispatch(refreshStaffUsers());
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (isSubmitSuccessful) {
			reset({
				code: '',
				name: '',
				allowDiscount: false,
				allowPriceChange: false,
				pin: '',
				allowCredit: false,
				isMechanic: false,
			});
		}
	}, [reset, isSubmitSuccessful]);

	// const status = [
	// 	{ value: 'Choose', label: 'Choose' },
	// 	{ value: 'Manager', label: 'Manager' },
	// 	{ value: 'Admin', label: 'Admin' },
	// ];
	// const [showPassword, setShowPassword] = useState(false);

	// const handleTogglePassword = () => {
	// 	setShowPassword((prevShowPassword) => !prevShowPassword);
	// };
	// const [showConfirmPassword, setConfirmPassword] = useState(false);
	// const handleToggleConfirmPassword = () => {
	// 	setConfirmPassword((prevShowPassword) => !prevShowPassword);
	// };

	return (
		<div>
			{/* Add User */}
			<div
				className='modal fade'
				id='add-units'
			>
				<div className='modal-dialog modal-dialog-centered custom-modal-two'>
					<div className='modal-content'>
						<div className='page-wrapper-new p-0'>
							<div className='content'>
								<div className='modal-header border-0 custom-modal-header'>
									<div className='page-title'>
										<h4>Add User</h4>
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
										{/* <div className="col-lg-12">
                                                <div className="new-employee-field">
                                                    <span>Avatar</span>
                                                    <div className="profile-pic-upload mb-2">
                                                        <div className="profile-pic">
                                                            <span>
                                                                <PlusCircle className="plus-down-add" />
                                                                Profile Photo
                                                            </span>
                                                        </div>
                                                        <div className="input-blocks mb-0">
                                                            <div className="image-upload mb-0">
                                                                <input type="file" />
                                                                <div className="image-uploads">
                                                                    <h4>Change Image</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> */}
										<div className='mb-3'>
											<div className='input-blocks'>
												<label>User Name</label>
												<input
													type='text'
													className='form-control'
													{...register('username', {
														required: 'User name is required',
													})}
													placeholder='Enter Code'
												/>
												{errors?.username && (
													<p className='text-danger'>
														{errors?.username?.message}
													</p>
												)}
											</div>
										</div>
										<div className='mb-3'>
											<div className='input-blocks'>
												<label>Code</label>
												<input
													type='text'
													className='form-control'
													{...register('code', {
														required: 'Code is required',
													})}
													placeholder='Enter Code'
												/>
												{errors?.code && (
													<p className='text-danger'>{errors?.code?.message}</p>
												)}
											</div>
										</div>
										<div className='mb-3'>
											<div className='input-blocks'>
												<label>Full Name</label>
												<input
													type='text'
													className='form-control'
													{...register('name', {
														required: 'Staff Name is required',
													})}
													placeholder='Enter Staff Name'
												/>
												{errors?.name && (
													<p className='text-danger'>{errors?.name?.message}</p>
												)}
											</div>
										</div>
										<div className='mb-3'>
											<div className='input-blocks'>
												<label>Role Name</label>
												<input
													type='text'
													className='form-control'
													{...register('rolename', {
														required: 'Role Name is required',
													})}
													placeholder='Enter Roll Name'
												/>
												{errors?.rolename && (
													<p className='text-danger'>
														{errors?.rolename?.message}
													</p>
												)}
											</div>
										</div>
										<div className='mb-3'>
											<div className='input-blocks'>
												<label>Email Address</label>
												<input
													type='text'
													className='form-control'
													{...register('email')}
													placeholder='Enter email'
												/>
												{errors?.email && (
													<p className='text-danger'>
														{errors?.email?.message}
													</p>
												)}
											</div>
										</div>
										<div className='mb-3'>
											<div className='input-blocks'>
												<label>Phone Number</label>
												<input
													type='text'
													className='form-control'
													{...register('phoneNumber')}
													placeholder='Enter phone number'
												/>
												{errors?.phoneNumber && (
													<p className='text-danger'>
														{errors?.phoneNumber?.message}
													</p>
												)}
											</div>
										</div>
										<div className='mb-3'>
											<div className='input-blocks'>
												<label>Pin</label>
												<input
													type='text'
													className='form-control'
													{...register('pin')}
													placeholder='Enter pin'
												/>
												{errors?.pin && (
													<p className='text-danger'>{errors?.pin?.message}</p>
												)}
											</div>
										</div>

										{/* <div className='col-lg-6'>
												<div className='input-blocks'>
													<label>Password</label>
													<div className='pass-group'>
														<input
															type={showPassword ? 'text' : 'password'}
															className='pass-input'
															placeholder='Enter your password'
														/>
														<span
															className={`fas toggle-password ${
																showPassword ? 'fa-eye' : 'fa-eye-slash'
															}`}
															onClick={handleTogglePassword}
														/>
													</div>
												</div>
											</div>
											<div className='col-lg-6'>
												<div className='input-blocks'>
													<label>Confirm Passworrd</label>
													<div className='pass-group'>
														<input
															type={showConfirmPassword ? 'text' : 'password'}
															className='pass-input'
															placeholder='Enter your password'
														/>
														<span
															className={`fas toggle-password ${
																showConfirmPassword ? 'fa-eye' : 'fa-eye-slash'
															}`}
															onClick={handleToggleConfirmPassword}
														/>
													</div>
												</div>
											</div> */}
										<div className='mb-1'>
											<label className=''>
												<Switch
													checked={isMechanic}
													onChange={(value) => {
														setValue('isMechanic', value);
													}}
													style={{ marginRight: '6px' }}
												/>
												Is Mechanic
											</label>
										</div>
										<div className='mb-1'>
											<label className=''>
												<Switch
													checked={allowCredit}
													onChange={(value) => {
														setValue('allowCredit', value);
													}}
													style={{ marginRight: '6px' }}
												/>
												Allow Credit
											</label>
										</div>
										<div className='mb-1'>
											<label className=''>
												<Switch
													checked={allowDiscount}
													onChange={(value) => {
														setValue('allowDiscount', value);
													}}
													style={{ marginRight: '6px' }}
												/>
												Allow Discount
											</label>
										</div>
										<div className='mb-1'>
											<label className=''>
												<Switch
													checked={allowPriceChange}
													onChange={(value) => {
														setValue('allowPriceChange', value);
													}}
													style={{ marginRight: '6px' }}
												/>
												Allow Price Change
											</label>
										</div>

										{/* <div className='col-lg-12'>
												<div className='mb-0 input-blocks'>
													<label className='form-label'>Descriptions</label>
													<textarea
														className='form-control mb-1'
														defaultValue={'Type Message'}
													/>
													<p>Maximum 600 Characters</p>
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
			{/* /Add User */}
		</div>
	);
};

export default AddUsers;
