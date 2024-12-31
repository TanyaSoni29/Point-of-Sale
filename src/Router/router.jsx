/** @format */

import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Header from '../InitialPage/Sidebar/Header';
import Sidebar from '../InitialPage/Sidebar/Sidebar';
import { pagesRoute, posRoutes, publicRoutes } from './router.link';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ThemeSettings from '../InitialPage/themeSettings';
import PrivateRoute from '../utils/PrivateRoute';

const AllRoutes = () => {
	const { toggle_header } = useSelector((state) => state.product);
	const HeaderLayout = () => (
		<div className={`main-wrapper ${toggle_header ? 'header-collapse' : ''}`}>
			{/* <Loader /> */}
			<Header />
			<Sidebar />
			<Outlet />
			<ThemeSettings />
		</div>
	);

	const Authpages = () => (
		<div className={toggle_header ? 'header-collapse' : ''}>
			<Outlet />
			{/* <Loader /> */}
			<ThemeSettings />
		</div>
	);

	const Pospages = () => (
		<div>
			<Header />
			<Outlet />
			{/* <Loader /> */}
			<ThemeSettings />
		</div>
	);

	return (
		<div>
			<Routes>
				<Route
					path='/'
					element={<Navigate to='/signin' />}
				/>
				<Route
					path={'/'}
					element={<Authpages />}
				>
					{pagesRoute.map((route, id) => (
						<Route
							path={route.path}
							element={route.element}
							key={id}
						/>
					))}
				</Route>
				<Route
					path='/pos'
					element={<PrivateRoute element={<Pospages />} />}
				>
					{posRoutes.map((route, id) => (
						<Route
							path={route.path}
							element={route.element}
							key={id}
						/>
					))}
				</Route>
				<Route
					path={'/'}
					element={<PrivateRoute element={<HeaderLayout />} />}
				>
					{publicRoutes.map((route, id) => (
						<Route
							path={route.path}
							element={route.element}
							key={id}
						/>
					))}
				</Route>
			</Routes>
		</div>
	);
};
export default AllRoutes;
