/** @format */

import React, { useEffect, useState } from 'react';
// import ImageWithBasePath from '../../../core/img/imagewithbasebath';
import { Link, useNavigate } from 'react-router-dom';
import { all_routes } from '../../../Router/all_routes';
import MailImg from '../../../assets/img/icons/mail.svg';
import PhoneNumber from '../../../assets/img/icons/phone-number.svg';
import RoleName from '../../../assets/img/icons/roleName.svg';
import FullName from '../../../assets/img/icons/fullName.svg';
import UserImg from '../../../assets/img/icons/user-icon.svg';
import UserCode from '../../../assets/img/icons/userCode.svg';
import LogoImg from '../../../assets/img/logo.png';
import LogoWhiteImg from '../../../assets/img/logo-white.png';
// import facebookLogoImg from '../../../assets/img/icons/facebook-logo.svg';
// import GoogleImgLogo from '../../../assets/img/icons/google.png';
// import AppleImgLogo from '../../../assets/img/icons/apple-logo.svg';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { signUp } from '../../../service/operations/authApi';

const RegisterThree = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const route = all_routes;
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitSuccessful },
		reset,
	} = useForm();
	const [passwordVisibility, setPasswordVisibility] = useState({
		password: false,
		confirmPassword: false,
	});

	const togglePasswordVisibility = (field) => {
		setPasswordVisibility((prevState) => ({
			...prevState,
			[field]: !prevState[field],
		}));
	};

	const onSubmit = (data) => {
		dispatch(signUp(data, navigate));
	};

	useEffect(() => {
		if (isSubmitSuccessful) {
			reset({
				username: '',
				fullname: '',
				phoneNumber: '',
				email: '',
				password: '',
				roleName: '',
			});
		}
	}, [reset, isSubmitSuccessful]);

	return (
		<div className='main-wrapper'>
			<div className='account-content'>
				<div className='login-wrapper login-new'>
					<div className='login-content user-login'>
						<div className='login-logo'>
							{/* <ImageWithBasePath src="assets/img/logo.png" alt="img" /> */}
							<img src={LogoImg} />
							<Link
								to={route.dashboard}
								className='login-logo logo-white'
							>
								{/* <ImageWithBasePath src="assets/img/logo-white.png" alt /> */}
								<img src={LogoWhiteImg} />
							</Link>
						</div>
						<form
							action='signin-3'
							onSubmit={handleSubmit(onSubmit)}
						>
							<div className='login-userset'>
								<div className='login-userheading'>
									<h3>Register</h3>
									<h4>Create New Point of Sales Account</h4>
								</div>
								<div className='row'>
									<div className='col-lg-6'>
										<div className='form-login'>
											<label>User Name</label>
											<div className='form-addons'>
												<input
													type='text'
													className='form-control'
													{...register('username', {
														required: 'User Name is required',
													})}
												/>
												{errors?.username && (
													<p className='text-danger'>
														{errors?.username?.message}
													</p>
												)}
												{/* <ImageWithBasePath
											src='assets/img/icons/user-icon.svg'
											alt='img'
										/> */}
												<img src={UserImg} />
											</div>
										</div>
									</div>
									<div className='col-lg-6'>
										<div className='form-login'>
											<label>User Code</label>
											<div className='form-addons'>
												<input
													type='text'
													className='form-control'
													{...register('code', {
														required: 'User Code is required',
													})}
												/>
												{errors?.code && (
													<p className='text-danger'>{errors?.code?.message}</p>
												)}
												{/* <ImageWithBasePath
											src='assets/img/icons/user-icon.svg'
											alt='img'
										/> */}
												<img src={UserCode} />
											</div>
										</div>
									</div>
								</div>

								<div className='row'>
									<div className='col-lg-6'></div>
									<div className='col-lg-6'></div>
								</div>
								<div className='form-login'>
									<label>Full Name</label>
									<div className='form-addons'>
										<input
											type='text'
											className='form-control'
											{...register('fullname', {
												required: 'Full Name is required',
											})}
										/>
										{errors?.fullname && (
											<p className='text-danger'>{errors?.fullname?.message}</p>
										)}
										{/* <ImageWithBasePath
											src='assets/img/icons/user-icon.svg'
											alt='img'
										/> */}
										<img src={FullName} />
									</div>
								</div>
								<div className='form-login'>
									<label>Role Name</label>
									<div className='form-addons'>
										<input
											type='text'
											className='form-control'
											{...register('roleName', {
												required: 'Role Name is required',
											})}
										/>
										{errors?.roleName && (
											<p className='text-danger'>{errors?.roleName?.message}</p>
										)}
										{/* <ImageWithBasePath
											src='assets/img/icons/user-icon.svg'
											alt='img'
										/> */}
										<img src={RoleName} />
									</div>
								</div>
								<div className='form-login'>
									<label>Email Address</label>
									<div className='form-addons'>
										<input
											type='text'
											className='form-control'
											{...register('email', { required: 'Email is required' })}
										/>
										{errors?.email && (
											<p className='text-danger'>{errors?.email?.message}</p>
										)}
										{/* <ImageWithBasePath
											src='assets/img/icons/mail.svg'
											alt='img'
										/> */}
										<img src={MailImg} />
									</div>
								</div>

								<div className='row'>
									<div className='col-lg-6'>
										<div className='form-login'>
											<label>Phone Number</label>
											<div className='form-addons'>
												<input
													type='text'
													className='form-control'
													{...register('phoneNumber', {
														required: 'Phone Number is required',
													})}
												/>
												{errors?.phoneNumber && (
													<p className='text-danger'>
														{errors?.phoneNumber?.message}
													</p>
												)}
												{/* <ImageWithBasePath
											src='assets/img/icons/mail.svg'
											alt='img'
										/> */}
												<img src={PhoneNumber} />
											</div>
										</div>
									</div>
									<div className='col-lg-6'>
										<div className='form-login'>
											<label>Password</label>
											<div className='pass-group'>
												<input
													type={
														passwordVisibility.password ? 'text' : 'password'
													}
													className='pass-input form-control'
													{...register('password', {
														required: 'Password is required',
													})}
												/>
												{errors?.password && (
													<p className='text-danger'>
														{errors?.password?.message}
													</p>
												)}
												<span
													className={`fas toggle-password ${
														passwordVisibility.password
															? 'fa-eye'
															: 'fa-eye-slash'
													}`}
													onClick={() => togglePasswordVisibility('password')}
												></span>
											</div>
										</div>
									</div>
								</div>

								{/* <div className='form-login'>
									<label>Confirm Passworrd</label>
									<div className='pass-group'>
										<input
											type={
												passwordVisibility.confirmPassword ? 'text' : 'password'
											}
											className='pass-input form-control'
										/>
										<span
											className={`fas toggle-password ${
												passwordVisibility.confirmPassword
													? 'fa-eye'
													: 'fa-eye-slash'
											}`}
											onClick={() =>
												togglePasswordVisibility('confirmPassword')
											}
										></span>
									</div>
								</div> */}
								{/* <div className='form-login authentication-check'>
									<div className='row'>
										<div className='col-sm-8'>
											<div className='custom-control custom-checkbox justify-content-start'>
												<div className='custom-control custom-checkbox'>
													<label className='checkboxs ps-4 mb-0 pb-0 line-height-1'>
														<input type='checkbox' />
														<span className='checkmarks' />I agree to the{' '}
														<Link
															to='#'
															className='hover-a'
														>
															Terms &amp; Privacy
														</Link>
													</label>
												</div>
											</div>
										</div>
									</div>
								</div> */}
								<div className='form-login'>
									<button
										type='submit'
										// to={route.signin}
										className='btn btn-login'
									>
										Sign Up
									</button>
								</div>
								<div className='signinform'>
									<h4>
										Already have an account ?{' '}
										<Link
											to={route.signinthree}
											className='hover-a'
										>
											Sign In Instead
										</Link>
									</h4>
								</div>
								{/* <div className='form-setlogin or-text'>
									<h4>OR</h4>
								</div> */}
								{/* <div className='form-sociallink'>
									<ul className='d-flex'>
										<li>
											<Link
												to='#'
												className='facebook-logo'
											>
												<img src={facebookLogoImg} />
											</Link>
										</li>
										<li>
											<Link to='#'>
												<img src={GoogleImgLogo} />
											</Link>
										</li>
										<li>
											<Link
												to='#'
												className='apple-logo'
											>
												<img src={AppleImgLogo} />
											</Link>
										</li>
									</ul>
								</div> */}
							</div>
						</form>
					</div>
					<div className='my-4 d-flex justify-content-center align-items-center copyright-text'>
						<p>Copyright © 2023 DreamsPOS. All rights reserved.</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RegisterThree;
