/** @format */

import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { updateStaffUsers } from '../../../service/operations/staffUsersApi';
import {
	refreshStaffUsers,
	updateStaffUser,
} from '../../../slices/staffUserSlice';
import { Switch } from 'antd';
// import { Link } from 'react-router-dom'
// import Select from 'react-select'
// import ImageWithBasePath from '../../img/imagewithbasebath';

const EditUser = () => {
	const { staffUser } = useSelector((state) => state.staffUsers);
	const { token } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const {
		register,
		handleSubmit,
		setValue,
		watch,
		formState: { errors, isSubmitSuccessful },
		reset,
	} = useForm();

	const modalRef = useRef(null);

	const allowDiscount = watch('allowDiscount');
	const allowPriceChange = watch('allowPriceChange');
	const allowCredit = watch('allowCredit');
	const isMechanic = watch('isMechanic');

	const onSubmit = async (data) => {
		try {
			const response = await updateStaffUsers(token, data);
			if (response?.success) {
				dispatch(refreshStaffUsers());
				dispatch(updateStaffUser(data));
				if (modalRef.current) {
					modalRef.current.click();
				}
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (staffUser) {
			reset({
				name: staffUser?.name || '',
				code: staffUser?.code || '',
				pin: staffUser?.pin || '',
				allowCredit: staffUser?.allowCredit || false,
				allowPriceChange: staffUser?.allowPriceChange || false,
				allowDiscount: staffUser?.allowDiscount || false,
				isMechanic: staffUser?.isMechanic || false,
			});
		}
	}, [staffUser, reset]);

	useEffect(() => {
		if (isSubmitSuccessful) {
			reset({
				name: '',
				code: '',
				pin: '',
				allowCredit: false,
				allowPriceChange: false,
				allowDiscount: false,
				isMechanic: false,
			});
		}
	}, [reset, isSubmitSuccessful]);

	// const status = [
	//     { value: 'Choose', label: 'Choose' },
	//     { value: 'Manager', label: 'Manager' },
	//     { value: 'Admin', label: 'Admin' },
	// ];
	// const [showPassword, setShowPassword] = useState(false);

	// const handleTogglePassword = () => {
	//   setShowPassword((prevShowPassword) => !prevShowPassword);
	// };
	// const [showConfirmPassword, setConfirmPassword] = useState(false);

	// const handleToggleConfirmPassword = () => {
	//     setConfirmPassword((prevShowPassword) => !prevShowPassword);
	// };
	return (
		<div>
			{/* Edit User */}
			<div
				className='modal fade'
				id='edit-units'
			>
				<div className='modal-dialog modal-dialog-centered custom-modal-two'>
					<div className='modal-content'>
						<div className='page-wrapper-new p-0'>
							<div className='content'>
								<div className='modal-header border-0 custom-modal-header'>
									<div className='page-title'>
										<h4>
											Edit User<span> {staffUser?.code}</span>
										</h4>
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
										<div className='row'>
											{/* <div className="col-lg-12">
                                                <div className="new-employee-field">
                                                    <span>Avatar</span>
                                                    <div className="profile-pic-upload edit-pic">
                                                        <div className="profile-pic">
                                                            <span>
                                                                <ImageWithBasePath
                                                                    src="assets/img/users/edit-user.jpg"
                                                                    className="user-editer"
                                                                    alt="User"
                                                                />
                                                            </span>
                                                            <div className="close-img">
                                                                <i data-feather="x" className="info-img" />
                                                            </div>
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
											{/* <div className='col-lg-4'>
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
															<p className='text-danger'>
																{errors?.code?.message}
															</p>
														)}
													</div>
												</div>
											</div> */}
											<div className='col-lg-6'>
												<div className='mb-3'>
													<div className='input-blocks'>
														<label>Name</label>
														<input
															type='text'
															className='form-control'
															{...register('name', {
																required: 'Staff User Name is required',
															})}
															placeholder='Enter Staff User Name'
														/>
														{errors?.name && (
															<p className='text-danger'>
																{errors?.name?.message}
															</p>
														)}
													</div>
												</div>
											</div>
											<div className='col-lg-6'>
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
															<p className='text-danger'>
																{errors?.pin?.message}
															</p>
														)}
													</div>
												</div>
											</div>

											{/* <div className="col-lg-6">
                                                <div className="input-blocks">
                                                    <label>Role</label>
                                                    <Select
                                                    classNamePrefix="react-select"
                                                    options={status}
                                                    placeholder="Choose Status"
                                                />
                                                </div>
                                            </div> */}
											{/* <div className="col-lg-6">
                                                <div className="input-blocks">
                                                    <label>Password</label>
                                                    <div className="pass-group">
                                                        <input
                                                            type={showPassword ? 'text' : 'password'}
                                                            className="pass-input"
                                                            placeholder="**********"
                                                        />
                                                        <span
                                                            className={`fas toggle-password ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`}
                                                            onClick={handleTogglePassword}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="input-blocks">
                                                    <label>Confirm Passworrd</label>
                                                    <div className="pass-group">
                                                    <input
                                                        type={showConfirmPassword ? 'text' : 'password'}
                                                        className="pass-input"
                                                        placeholder="*********"
                                                    />
                                                    <span
                                                        className={`fas toggle-password ${showConfirmPassword ? 'fa-eye' : 'fa-eye-slash'}`}
                                                        onClick={handleToggleConfirmPassword}
                                                    />
                                                </div>
                                                </div>
                                            </div> */}
											{/* <div className="col-lg-12">
                                                <div className="mb-0 input-blocks">
                                                    <label className="form-label">Descriptions</label>
                                                    <textarea
                                                        className="form-control mb-1"
                                                        defaultValue={""}
                                                    />
                                                    <p>Maximum 600 Characters</p>
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
										</div>
										<div className='modal-footer-btn mt-1'>
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
			{/* /Edit User */}
		</div>
	);
};

export default EditUser;
