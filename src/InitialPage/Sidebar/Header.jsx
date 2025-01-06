/** @format */

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
// import ImageWithBasePath from '../../core/img/imagewithbasebath';
import { Home, Settings, User } from 'react-feather';
import { all_routes } from '../../Router/all_routes';
import LogoImg from '../../assets/img/logo.png';
import LogoWhiteImg from '../../assets/img/logo-white.png';
import LogoSmallImg from '../../assets/img/logo-small.png';
// import ProfileImg from '../../assets/img/profiles/profile.png';
import LogOutImg from '../../assets/img/icons/log-out.svg';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../service/operations/authApi';
import { refreshLocations } from '../../slices/locationSlice';
const Header = () => {
	const dispatch = useDispatch();
	// const navigate = useNavigate();
	const { user } = useSelector((state) => state.auth);
	const { locations } = useSelector((state) => state.location);
	console.log(locations);
	const route = all_routes;
	const [toggle, SetToggle] = useState(false);
	const [isFullscreen, setIsFullscreen] = useState(false);

	const isElementVisible = (element) => {
		return element.offsetWidth > 0 || element.offsetHeight > 0;
	};

	useEffect(() => {
		dispatch(refreshLocations());
	}, [dispatch]);

	useEffect(() => {
		const handleMouseover = (e) => {
			e.stopPropagation();

			const body = document.body;
			const toggleBtn = document.getElementById('toggle_btn');

			if (
				body.classList.contains('mini-sidebar') &&
				isElementVisible(toggleBtn)
			) {
				e.preventDefault();
			}
		};

		document.addEventListener('mouseover', handleMouseover);

		return () => {
			document.removeEventListener('mouseover', handleMouseover);
		};
	}, []);
	useEffect(() => {
		const handleFullscreenChange = () => {
			setIsFullscreen(
				document.fullscreenElement ||
					document.mozFullScreenElement ||
					document.webkitFullscreenElement ||
					document.msFullscreenElement
			);
		};

		document.addEventListener('fullscreenchange', handleFullscreenChange);
		document.addEventListener('mozfullscreenchange', handleFullscreenChange);
		document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
		document.addEventListener('msfullscreenchange', handleFullscreenChange);

		return () => {
			document.removeEventListener('fullscreenchange', handleFullscreenChange);
			document.removeEventListener(
				'mozfullscreenchange',
				handleFullscreenChange
			);
			document.removeEventListener(
				'webkitfullscreenchange',
				handleFullscreenChange
			);
			document.removeEventListener(
				'msfullscreenchange',
				handleFullscreenChange
			);
		};
	}, []);

	const handleLogOutClick = () => {
		dispatch(logout());
		// navigate('/signin');
	};

	const handlesidebar = () => {
		document.body.classList.toggle('mini-sidebar');
		SetToggle((current) => !current);
	};
	const expandMenu = () => {
		document.body.classList.remove('expand-menu');
	};
	const expandMenuOpen = () => {
		document.body.classList.add('expand-menu');
	};
	const sidebarOverlay = () => {
		document?.querySelector('.main-wrapper')?.classList?.toggle('slide-nav');
		document?.querySelector('.sidebar-overlay')?.classList?.toggle('opened');
		document?.querySelector('html')?.classList?.toggle('menu-opened');
	};

	let pathname = location.pathname;

	const exclusionArray = ['/dream-pos/index-three', '/dream-pos/index-one'];
	if (exclusionArray.indexOf(window.location.pathname) >= 0) {
		return '';
	}

	const toggleFullscreen = (elem) => {
		elem = elem || document.documentElement;
		if (
			!document.fullscreenElement &&
			!document.mozFullScreenElement &&
			!document.webkitFullscreenElement &&
			!document.msFullscreenElement
		) {
			if (elem.requestFullscreen) {
				elem.requestFullscreen();
			} else if (elem.msRequestFullscreen) {
				elem.msRequestFullscreen();
			} else if (elem.mozRequestFullScreen) {
				elem.mozRequestFullScreen();
			} else if (elem.webkitRequestFullscreen) {
				elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
			}
		} else {
			if (document.exitFullscreen) {
				document.exitFullscreen();
			} else if (document.msExitFullscreen) {
				document.msExitFullscreen();
			} else if (document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
			} else if (document.webkitExitFullscreen) {
				document.webkitExitFullscreen();
			}
		}
	};

	return (
		<>
			<div className='header'>
				{/* Logo */}
				<div
					className={`header-left ${toggle ? '' : 'active'}`}
					onMouseLeave={expandMenu}
					onMouseOver={expandMenuOpen}
				>
					<Link
						to='/dashboard'
						className='logo logo-normal'
					>
						<img src={LogoImg} />
					</Link>
					<Link
						to='/dashboard'
						className='logo logo-white'
					>
						<img src={LogoWhiteImg} />
					</Link>
					<Link
						to='/dashboard'
						className='logo-small'
					>
						<img src={LogoSmallImg} />
					</Link>
					<Link
						id='toggle_btn'
						to='#'
						style={{
							display:
								pathname.includes('tasks') || pathname.includes('pos')
									? 'none'
									: pathname.includes('compose')
									? 'none'
									: '',
						}}
						onClick={handlesidebar}
					>
						<FeatherIcon
							icon='chevrons-left'
							className='feather-16'
						/>
					</Link>
				</div>
				{/* /Logo */}
				<Link
					id='mobile_btn'
					className='mobile_btn'
					to='#'
					onClick={sidebarOverlay}
				>
					<span className='bar-icon'>
						<span />
						<span />
						<span />
					</span>
				</Link>
				{/* Header Menu */}
				<ul className='nav user-menu'>
					{/* Search */}
					<li className='nav-item nav-searchinputs'>
						{/* <div className='top-nav-search'>
							<Link
								to='#'
								className='responsive-search'
							>
								<Search />
							</Link>
							<form
								action='#'
								className='dropdown'
							>
								<div
									className='searchinputs dropdown-toggle'
									id='dropdownMenuClickable'
									data-bs-toggle='dropdown'
									data-bs-auto-close='false'
								>
									<input
										type='text'
										placeholder='Search'
									/>
									<div className='search-addon'>
										<span>
											<XCircle className='feather-14' />
										</span>
									</div>
								</div>
								<div
									className='dropdown-menu search-dropdown'
									aria-labelledby='dropdownMenuClickable'
								>
									<div className='search-info'>
										<h6>
											<span>
												<i
													data-feather='search'
													className='feather-16'
												/>
											</span>
											Recent Searches
										</h6>
										<ul className='search-tags'>
											<li>
												<Link to='#'>Products</Link>
											</li>
											<li>
												<Link to='#'>Sales</Link>
											</li>
											<li>
												<Link to='#'>Applications</Link>
											</li>
										</ul>
									</div>
									<div className='search-info'>
										<h6>
											<span>
												<i
													data-feather='help-circle'
													className='feather-16'
												/>
											</span>
											Help
										</h6>
										<p>
											How to Change Product Volume from 0 to 200 on Inventory
											management
										</p>
										<p>Change Product Name</p>
									</div>
									<div className='search-info'>
										<h6>
											<span>
												<i
													data-feather='user'
													className='feather-16'
												/>
											</span>
											Customers
										</h6>
										<ul className='customers'>
											<li>
												<Link to='#'>
													Aron Varu
													<img
														src={ProfileImg}
														alt='img'
													/>
												</Link>
											</li>
											<li>
												<Link to='#'>
													Jonita
													<img
														src={ProfileImg}
														alt='img'
													/>
												</Link>
											</li>
											<li>
												<Link to='#'>
													Aaron
													<img
														src={ProfileImg}
														alt='img'
													/>
												</Link>
											</li>
										</ul>
									</div>
								</div>
							</form>
						</div> */}
					</li>
					{/* /Search */}

					{/* Select Store */}
					<li className='nav-item dropdown has-arrow main-drop select-store-dropdown'>
						<Link
							to='#'
							className='dropdown-toggle nav-link select-store'
							data-bs-toggle='dropdown'
						>
							<span className='user-info'>
								<span className='user-letter'>
									<Home />
								</span>
								<span className='user-detail'>
									<span className='user-name'>Select Store</span>
								</span>
							</span>
						</Link>
						<div className='dropdown-menu dropdown-menu-right'>
							{locations?.map((location) => (
								<>
									<Link
										to='#'
										className='dropdown-item'
										key={location?.code}
									>
										<Home />{' '}
										<span style={{ marginLeft: '6px' }}>{location?.name}</span>
									</Link>
								</>
							))}
						</div>
					</li>
					{/* /Select Store */}

					{/* Flag */}
					{/* <li className='nav-item dropdown has-arrow flag-nav nav-item-box'>
						<Link
							className='nav-link dropdown-toggle'
							data-bs-toggle='dropdown'
							to='#'
							role='button'
						> */}
					{/* <i data-feather="globe" /> */}
					{/* <FeatherIcon icon="globe" /> */}
					{/* <ImageWithBasePath
								src='assets/img/flags/us.png'
								alt='img'
								height={16}
							/>
						</Link>
						<div className='dropdown-menu dropdown-menu-right'>
							<Link
								to='#'
								className='dropdown-item active'
							>
								<ImageWithBasePath
									src='assets/img/flags/us.png'
									alt='img'
									height={16}
								/>
								English
							</Link>
							<Link
								to='#'
								className='dropdown-item'
							>
								<ImageWithBasePath
									src='assets/img/flags/fr.png'
									alt='img'
									height={16}
								/>{' '}
								French
							</Link>
							<Link
								to='#'
								className='dropdown-item'
							>
								<ImageWithBasePath
									src='assets/img/flags/es.png'
									alt='img'
									height={16}
								/>{' '}
								Spanish
							</Link>
							<Link
								to='#'
								className='dropdown-item'
							>
								<ImageWithBasePath
									src='assets/img/flags/de.png'
									alt='img'
									height={16}
								/>{' '}
								German
							</Link>
						</div>
					</li> */}
					{/* /Flag */}
					<li className='nav-item nav-item-box'>
						<Link
							to='#'
							id='btnFullscreen'
							onClick={() => toggleFullscreen()}
							className={isFullscreen ? 'Exit Fullscreen' : 'Go Fullscreen'}
						>
							{/* <i data-feather="maximize" /> */}
							<FeatherIcon icon='maximize' />
						</Link>
					</li>
					{/* <li className='nav-item nav-item-box'>
						<Link to='/email'> */}
					{/* <i data-feather="mail" /> */}
					{/* <FeatherIcon icon='mail' />
							<span className='badge rounded-pill'>1</span>
						</Link>
					</li> */}
					{/* Notifications */}
					{/* <li className='nav-item dropdown nav-item-box'> */}
					{/* <Link
							to='#'
							className='dropdown-toggle nav-link'
							data-bs-toggle='dropdown'
						> */}
					{/* <i data-feather="bell" /> */}
					{/* <FeatherIcon icon='bell' />
							<span className='badge rounded-pill'>2</span>
						</Link> */}
					{/* <div className='dropdown-menu notifications'>
							<div className='topnav-dropdown-header'>
								<span className='notification-title'>Notifications</span>
								<Link
									to='#'
									className='clear-noti'
								>
									{' '}
									Clear All{' '}
								</Link>
							</div>
							<div className='noti-content'>
								<ul className='notification-list'>
									<li className='notification-message active'>
										<Link to='/activities'>
											<div className='media d-flex'>
												<span className='avatar flex-shrink-0'>
													<img
														src={ProfileImg}
														alt='img'
													/>
												</span>
												<div className='media-body flex-grow-1'>
													<p className='noti-details'>
														<span className='noti-title'>John Doe</span> added
														new task{' '}
														<span className='noti-title'>
															Patient appointment booking
														</span>
													</p>
													<p className='noti-time'>
														<span className='notification-time'>
															4 mins ago
														</span>
													</p>
												</div>
											</div>
										</Link>
									</li>
									<li className='notification-message'>
										<Link to='/activities'>
											<div className='media d-flex'>
												<span className='avatar flex-shrink-0'>
													<img
														src={ProfileImg}
														alt='img'
													/>
												</span>
												<div className='media-body flex-grow-1'>
													<p className='noti-details'>
														<span className='noti-title'>Tarah Shropshire</span>{' '}
														changed the task name{' '}
														<span className='noti-title'>
															Appointment booking with payment gateway
														</span>
													</p>
													<p className='noti-time'>
														<span className='notification-time'>
															6 mins ago
														</span>
													</p>
												</div>
											</div>
										</Link>
									</li>
									<li className='notification-message'>
										<Link to='/activities'>
											<div className='media d-flex'>
												<span className='avatar flex-shrink-0'>
													<img
														src={ProfileImg}
														alt='img'
													/>
												</span>
												<div className='media-body flex-grow-1'>
													<p className='noti-details'>
														<span className='noti-title'>Misty Tison</span>{' '}
														added{' '}
														<span className='noti-title'>Domenic Houston</span>{' '}
														and <span className='noti-title'>Claire Mapes</span>{' '}
														to project{' '}
														<span className='noti-title'>
															Doctor available module
														</span>
													</p>
													<p className='noti-time'>
														<span className='notification-time'>
															8 mins ago
														</span>
													</p>
												</div>
											</div>
										</Link>
									</li>
									<li className='notification-message'>
										<Link to='/activities'>
											<div className='media d-flex'>
												<span className='avatar flex-shrink-0'>
													<img
														src={ProfileImg}
														alt='img'
													/>
												</span>
												<div className='media-body flex-grow-1'>
													<p className='noti-details'>
														<span className='noti-title'>Rolland Webber</span>{' '}
														completed task{' '}
														<span className='noti-title'>
															Patient and Doctor video conferencing
														</span>
													</p>
													<p className='noti-time'>
														<span className='notification-time'>
															12 mins ago
														</span>
													</p>
												</div>
											</div>
										</Link>
									</li>
									<li className='notification-message'>
										<Link to='/activities'>
											<div className='media d-flex'>
												<span className='avatar flex-shrink-0'>
													<img
														src={ProfileImg}
														alt='img'
													/>
												</span>
												<div className='media-body flex-grow-1'>
													<p className='noti-details'>
														<span className='noti-title'>Bernardo Galaviz</span>{' '}
														added new task{' '}
														<span className='noti-title'>
															Private chat module
														</span>
													</p>
													<p className='noti-time'>
														<span className='notification-time'>
															2 days ago
														</span>
													</p>
												</div>
											</div>
										</Link>
									</li>
								</ul>
							</div>
							<div className='topnav-dropdown-footer'>
								<Link to='/activities'>View all Notifications</Link>
							</div>
						</div> */}
					{/* </li> */}
					{/* /Notifications */}
					<li className='nav-item nav-item-box'>
						<Link to='/general-settings'>
							{/* <i data-feather="settings" /> */}
							<FeatherIcon icon='settings' />
						</Link>
					</li>
					<li className='nav-item dropdown has-arrow main-drop'>
						<Link
							to='#'
							className='dropdown-toggle nav-link userset'
							data-bs-toggle='dropdown'
						>
							<span className='user-info'>
								<span className='user-letter'>
									{/* <img
										src={ProfileImg}
										alt='img'
									/> */}
								</span>
								<span className='user-detail'>
									<span className='user-name'>{user?.username}</span>
									<span className='user-role'>Super Admin</span>
								</span>
							</span>
						</Link>
						<div className='dropdown-menu menu-drop-user'>
							<div className='profilename'>
								<div className='profileset'>
									<span className='user-img'>
										{/* <img
											src={ProfileImg}
											alt='img'
										/> */}
										<span className='status online' />
									</span>
									<div className='profilesets'>
										<h6>{user?.username}</h6>
										<h5>Super Admin</h5>
									</div>
								</div>
								<hr className='m-0' />
								<Link
									className='dropdown-item'
									to={route.profile}
								>
									<User className='me-2' /> My Profile
								</Link>
								<Link
									className='dropdown-item'
									to={route.generalsettings}
								>
									<Settings className='me-2' />
									Settings
								</Link>
								<hr className='m-0' />
								<Link
									className='dropdown-item logout pb-0'
									to='signin'
									onClick={handleLogOutClick}
								>
									<img
										src={LogOutImg}
										alt='img'
										className='me-2'
									/>
									Logout
								</Link>
							</div>
						</div>
					</li>
				</ul>
				{/* /Header Menu */}
				{/* Mobile Menu */}
				<div className='dropdown mobile-user-menu'>
					<Link
						to='#'
						className='nav-link dropdown-toggle'
						data-bs-toggle='dropdown'
						aria-expanded='false'
					>
						<i className='fa fa-ellipsis-v' />
					</Link>
					<div className='dropdown-menu dropdown-menu-right'>
						<Link
							className='dropdown-item'
							to='profile'
						>
							My Profile
						</Link>
						<Link
							className='dropdown-item'
							to='generalsettings'
						>
							Settings
						</Link>
						<Link
							className='dropdown-item'
							to='signin'
							onClick={handleLogOutClick}
						>
							Logout
						</Link>
					</div>
				</div>
				{/* /Mobile Menu */}
			</div>
		</>
	);
};

export default Header;
