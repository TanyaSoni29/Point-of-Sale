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
import Select from 'react-select';
import { IoIosArrowDown } from 'react-icons/io';
const Header = () => {
	const dispatch = useDispatch();
	// const navigate = useNavigate();
	const { user } = useSelector((state) => state.auth);
	const { locations } = useSelector((state) => state.location);
	// console.log(locations);
	const route = all_routes;
	const [themeMode, setThemeMode] = useState(
		document.documentElement.getAttribute('data-layout-mode') || 'light_mode'
	);
	const [toggle, SetToggle] = useState(false);
	const [isFullscreen, setIsFullscreen] = useState(false);
	const [selectedLocation, setSelectedLocation] = useState(null); // Manage selected store
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const locationOptions = locations?.map((location) => ({
		value: location.code,
		label: location.name,
	}));

	// Handle selection change
	const handleSelectLocation = (selectedOption) => {
		setSelectedLocation(selectedOption);
		console.log('Selected Store:', selectedOption); // Perform additional actions here
	};

	const isElementVisible = (element) => {
		return element.offsetWidth > 0 || element.offsetHeight > 0;
	};

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

	useEffect(() => {
		const observer = new MutationObserver(() => {
			setThemeMode(document.documentElement.getAttribute('data-layout-mode'));
		});

		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ['data-layout-mode'],
		});

		return () => observer.disconnect();
	}, []);

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

	const customStyles = (themeMode) => ({
		control: (provided) => ({
			...provided,
			'animation': 'fadeIn 0.3s ease',
			'backgroundColor': themeMode === 'dark_mode' ? '#141432' : '#fff',
			'borderColor': themeMode === 'dark_mode' ? '#353570' : '#ccc',
			'color': themeMode === 'dark_mode' ? '#97A2D2' : '#333',
			'borderRadius': '4px',
			'padding': '2px',
			'minHeight': '32px',
			'boxShadow': 'none',
			'&:hover': {
				borderColor: themeMode === 'dark_mode' ? '#495057' : '#888',
			},
		}),
		menu: (provided) => ({
			...provided,
			backgroundColor: themeMode === 'dark_mode' ? '#141432' : '#fff',
			color: themeMode === 'dark_mode' ? '#97A2D2' : '#333',
			zIndex: 1000,
			animation: 'slideDown 0.3s ease', // Apply slide-down animation
			transformOrigin: 'top',
		}),
		option: (provided, state) => ({
			...provided,
			'backgroundColor': state.isFocused
				? themeMode === 'dark_mode'
					? '#495057'
					: '#f0f0f0'
				: themeMode === 'dark_mode'
				? '#141432'
				: '#fff',
			'color': themeMode === 'dark_mode' ? '#97A2D2' : '#333',
			'animation': 'fadeIn 0.2s ease',
			'&:hover': {
				backgroundColor: '#e6e6e6',
			},
		}),
		singleValue: (provided) => ({
			...provided,
			color: themeMode === 'dark_mode' ? '#97A2D2' : '#333',
		}),
	});

	const CustomOption = (props) => {
		const { data, innerRef, innerProps } = props;
		return (
			<div
				ref={innerRef}
				{...innerProps}
				style={{
					display: 'flex',
					alignItems: 'center',
					padding: '8px 12px',
					cursor: 'pointer',
				}}
			>
				<Home style={{ marginRight: '6px', color: '#555' }} />
				{data.label}
			</div>
		);
	};

	// Custom selected value with Home icon
	const CustomSingleValue = (props) => {
		const { data } = props;
		return (
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<Home style={{ marginRight: '6px', color: '#555' }} />
				{data.label}
			</div>
		);
	};

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
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
					<div style={{ display: 'inline-block', minWidth: '170px' }}>
						<Select
							id='store-select'
							options={locationOptions}
							styles={customStyles(themeMode)} // Apply custom styles
							value={selectedLocation} // Controlled component
							onChange={handleSelectLocation} // Handle selection
							placeholder='Select a store'
							isClearable
							components={{
								Option: CustomOption, // Custom option rendering
								SingleValue: CustomSingleValue, // Custom single value rendering
							}} // Allows clearing the selection
						/>
					</div>
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
					<li
						className='nav-item dropdown has-arrow main-drop'
						style={{ position: 'relative', display: 'inline-block' }}
					>
						{/* Dropdown Trigger */}
						<button
							// className='dropdown-toggle nav-link userset'
							onClick={toggleDropdown}
							style={{
								background: 'none',
								border: 'none',
								cursor: 'pointer',
								display: 'flex',
								alignItems: 'center',
								width: '170px',
							}}
						>
							<span
								// className='user-info'
								style={{ display: 'flex', alignItems: 'center' }}
							>
								<span className='user-letter'>
									{/* Replace with user's profile image */}
									<img
										src={user?.profileImage || 'https://via.placeholder.com/40'} // Fallback image
										alt='Profile'
										style={{
											width: '40px',
											height: '40px',
											borderRadius: '50%',
											objectFit: 'cover',
										}}
									/>
								</span>
								<span
									// className='user-detail'
									style={{ marginLeft: '10px', textAlign: 'left' }}
								>
									<span
										// className='user-name'
										style={{
											display: 'block',
											fontWeight: 'bold',
											fontSize: '14px',
											color: themeMode === 'dark_mode' ? '#97A2D2' : '#333', // Dynamic color
										}}
									>
										{user?.username || 'User Name'}
									</span>
									<span
										// className='user-role'
										style={{
											display: 'block',
											fontSize: '12px',
											color: themeMode === 'dark_mode' ? '#adb5bd' : '#777',
										}}
									>
										{user?.role || 'Super Admin'}
									</span>
								</span>
								{/* Arrow Icon */}
								<span
									style={{
										marginLeft: 'auto',
										transition: 'transform 0.3s ease',
										transform: isDropdownOpen
											? 'rotate(180deg)'
											: 'rotate(0deg)',
									}}
								>
									<IoIosArrowDown fontSize={16} />
								</span>
							</span>
						</button>

						{/* Dropdown Menu */}
						{isDropdownOpen && (
							<div
								className='menu-drop-user'
								style={{
									position: 'absolute',
									top: '50px',
									right: '0',
									background: themeMode === 'dark_mode' ? '#141432' : '#fff', // Dynamic background
									color: themeMode === 'dark_mode' ? '#97A2D2' : '#333',
									boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
									borderRadius: '5px',
									width: '170px',
									zIndex: '1000',
									animation: 'slideDown 0.3s ease-out',
								}}
							>
								{/* User Profile Section */}
								<div
									className='profilename'
									// style={{ padding: '10px' }}
								>
									<div
										className='profileset'
										style={{ display: 'flex', alignItems: 'center' }}
									>
										<span
											className='user-img'
											style={{ marginRight: '10px' }}
										>
											<img
												src={
													user?.profileImage || 'https://via.placeholder.com/40'
												} // Fallback image
												alt='Profile'
												style={{
													width: '40px',
													height: '40px',
													borderRadius: '50%',
													objectFit: 'cover',
												}}
											/>
											<span
												className='status online'
												style={{
													position: 'absolute',
													bottom: '5px',
													right: '5px',
													background: 'green',
													width: '10px',
													height: '10px',
													borderRadius: '50%',
												}}
											></span>
										</span>
										<div
											className='profilesets'
											style={{ textAlign: 'left', lineHeight: '1.2' }}
										>
											<h6
												style={{
													margin: '0',
													fontSize: '14px',
													fontWeight: 'bold',
													color: themeMode === 'dark_mode' ? '#97A2D2' : '#333', // Dynamic color
												}}
											>
												{user?.username || 'User Name'}
											</h6>
											<h5
												style={{
													margin: '0',
													fontSize: '12px',
													color: themeMode === 'dark_mode' ? '#adb5bd' : '#777', // Dynamic color,
												}}
											>
												{user?.role || 'Super Admin'}
											</h5>
										</div>
									</div>
								</div>

								<hr
									style={{
										margin: '0 0',
										borderColor: themeMode === 'dark_mode' ? '#495057' : '#ddd',
									}}
								/>

								{/* Menu Links */}
								<Link
									className='dropdown-item'
									to={route.profile}
									style={{
										display: 'flex',
										alignItems: 'center',
										color: themeMode === 'dark_mode' ? '#97A2D2' : '#333', // Dynamic color
										textDecoration: 'none',
										fontSize: '14px',
										animation: 'slideDown 0.3s ease-out',
									}}
								>
									<User
										className='me-2'
										style={{ marginRight: '10px' }}
									/>{' '}
									My Profile
								</Link>
								<Link
									className='dropdown-item'
									to={route.generalsettings}
									style={{
										display: 'flex',
										alignItems: 'center',
										color: themeMode === 'dark_mode' ? '#97A2D2' : '#333', // Dynamic color
										textDecoration: 'none',
										fontSize: '14px',
										animation: 'slideDown 0.3s ease-out',
									}}
								>
									<Settings
										className='me-2'
										style={{ marginRight: '10px' }}
									/>
									Settings
								</Link>

								<hr
									style={{
										margin: '0 0',
										borderColor: themeMode === 'dark_mode' ? '#495057' : '#ddd',
									}}
								/>

								{/* Logout */}
								<button
									className='dropdown-item logout pb-0'
									onClick={handleLogOutClick}
									style={{
										color: themeMode === 'dark_mode' ? '#FF0000' : '#d9534f',
										border: 'none',
										cursor: 'pointer',
										fontSize: '14px',
										width: '100%',
										animation: 'slideDown 0.3s ease-out',
									}}
								>
									<img
										src={LogOutImg}
										alt='Logout'
										style={{
											marginRight: '10px',
											width: '16px',
											height: '16px',
										}}
									/>
									Logout
								</button>
							</div>
						)}
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
