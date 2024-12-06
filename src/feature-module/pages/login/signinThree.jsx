/** @format */

import React, { useEffect, useState } from 'react';
// import ImageWithBasePath from '../../../core/img/imagewithbasebath';
import { Link, useNavigate } from 'react-router-dom';
import { all_routes } from '../../../Router/all_routes';
import MailImg from '../../../assets/img/icons/mail.svg';
import LogoImg from '../../../assets/img/logo.png';
import LogoWhiteImg from '../../../assets/img/logo-white.png';
import facebookLogoImg from '../../../assets/img/icons/facebook-logo.svg';
import GoogleImgLogo from '../../../assets/img/icons/google.png';
import AppleImgLogo from '../../../assets/img/icons/apple-logo.svg';
import { useForm } from 'react-hook-form';
// import { useDispatch } from 'react-redux';
// import { login } from '../../../service/operations/authApi';
const SigninThree = () => {
	// const dispatch = useDispatch();
	const navigate = useNavigate();
	const route = all_routes;
	const [isPasswordVisible, setPasswordVisible] = useState(false);
	const [rememberMe, setRememberMe] = useState(false);
	const togglePasswordVisibility = () => {
		setPasswordVisible((prevState) => !prevState);
	};

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitSuccessful },
	} = useForm();

	const onSubmit = (data) => {
		navigate('/admin-dashboard');
		console.log(data);
		// dispatch(login(data.userName, data.password, navigate));
	};

	const handleRememberMe = (e) => {
		setRememberMe(e.target.checked);
	};

	useEffect(() => {
		if (isSubmitSuccessful) {
			reset({
				userName: '',
				password: '',
			});
		}
	}, [reset, isSubmitSuccessful]);

	return (
		<div className='main-wrapper'>
			<div className='account-content'>
				<div className='login-wrapper login-new'>
					<div className='container'>
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
							<form onSubmit={handleSubmit(onSubmit)}>
								<div className='login-userset'>
									<div className='login-userheading'>
										<h3>Sign In</h3>
										<h4>
											Access the Point of Sale panel using your username and
											passcode.
										</h4>
									</div>
									<div className='form-login'>
										<label className='form-label'>User Name</label>
										<div className='form-addons'>
											<input
												type='text'
												className='form-control'
												{...register('userName', { required: true })}
											/>
											{errors?.userName && <p>{errors?.userName?.message}</p>}
											{/* <ImageWithBasePath
												src='assets/img/icons/mail.svg'
												alt='img'
											/> */}
											<img src={MailImg} />
										</div>
									</div>
									<div className='form-login'>
										<label>Password</label>
										<div className='pass-group'>
											<input
												type={isPasswordVisible ? 'text' : 'password'}
												{...register('password', { required: true })}
												className='pass-input form-control'
											/>
											{errors?.password && <p>{errors?.password?.message}</p>}
											<span
												className={`fas toggle-password ${
													isPasswordVisible ? 'fa-eye' : 'fa-eye-slash'
												}`}
												onClick={togglePasswordVisibility}
											></span>
										</div>
									</div>
									<div className='form-login authentication-check'>
										<div className='row'>
											<div className='col-6'>
												<div className='custom-control custom-checkbox'>
													<label className='checkboxs ps-4 mb-0 pb-0 line-height-1'>
														<input
															type='checkbox'
															checked={rememberMe}
															onChange={handleRememberMe}
														/>
														<span className='checkmarks' />
														Remember me
													</label>
												</div>
											</div>
											<div className='col-6 text-end'>
												<Link
													className='forgot-link'
													to={route.forgotPasswordThree}
												>
													Forgot Password?
												</Link>
											</div>
										</div>
									</div>
									<div className='form-login'>
										<Link
											className='btn btn-login'
											to={route.signin}
										>
											Sign In
										</Link>
									</div>
									<div className='signinform'>
										<h4>
											New on our platform?
											<Link
												to={route.registerThree}
												className='hover-a'
											>
												{' '}
												Create an account
											</Link>
										</h4>
									</div>
									<div className='form-setlogin or-text'>
										<h4>OR</h4>
									</div>
									<div className='form-sociallink'>
										<ul className='d-flex'>
											<li>
												<Link
													to='#'
													className='facebook-logo'
												>
													{/* <ImageWithBasePath
														src='assets/img/icons/facebook-logo.svg'
														alt='Facebook'
													/> */}
													<img src={facebookLogoImg} />
												</Link>
											</li>
											<li>
												<Link to='#'>
													{/* <ImageWithBasePath
														src='assets/img/icons/google.png'
														alt='Google'
													/> */}
													<img src={GoogleImgLogo} />
												</Link>
											</li>
											<li>
												<Link
													to='#'
													className='apple-logo'
												>
													{/* <ImageWithBasePath
														src='assets/img/icons/apple-logo.svg'
														alt='Apple'
													/> */}
													<img src={AppleImgLogo} />
												</Link>
											</li>
										</ul>
									</div>
								</div>
							</form>
						</div>
						<div className='my-4 d-flex justify-content-center align-items-center copyright-text'>
							<p>Copyright © 2023 DreamsPOS. All rights reserved</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SigninThree;
