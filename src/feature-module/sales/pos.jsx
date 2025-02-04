/** @format */

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import ImageWithBasePath from '../../core/img/imagewithbasebath';
import {
	RefreshCcw,
	RotateCw,
	ShoppingCart,
} from 'feather-icons-react/build/IconComponents';
import { Edit, Trash2, UserPlus } from 'react-feather';
import Select from 'react-select';
import PlusCircle from 'feather-icons-react/build/IconComponents/PlusCircle';
import MinusCircle from 'feather-icons-react/build/IconComponents/MinusCircle';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
// import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import QrScanImg from '../../assets/img/icons/qr-scan.svg';
import CreditCardImg from '../../assets/img/icons/credit-card.svg';
import CashPayImg from '../../assets/img/icons/cash-pay.svg';
// import cat01Img from '../../assets/img/categories/category-01.png';
import { refreshCategories } from '../../slices/categorySlice';
import { useDispatch, useSelector } from 'react-redux';
// import { getProductSearch } from '../../service/operations/productApi';
import HoldOrders from '../../core/modals/sales/HoldOrders';
import PosEditProduct from '../../core/modals/sales/PosEditProduct';
import PosPaymentCompleted from '../../core/modals/sales/PosPaymentCompleted';
import PosPrintReceipt from '../../core/modals/sales/PosPrintReceipt';
import PosProducts from '../../core/modals/sales/PosProducts';
import PosAddCustomer from '../../core/modals/sales/PosAddCustomer';
import PosRecentTransaction from '../../core/modals/sales/PosRecentTransaction';
import PosViewOrders from '../../core/modals/sales/PosViewOrders';
const Pos = () => {
	const dispatch = useDispatch();
	// const { token } = useSelector((state) => state.auth);
	const { categories } = useSelector((state) => state.category);
	// const [selectedCategory, setSelectedCategory] = useState(null);
	const [selectedProducts, setSelectedProducts] = useState([
		{
			id: 1,
			code: 'PT0005',
			name: 'Red Nike Laser',
			price: 2000,
			quantity: 1,
			img: 'assets/img/products/pos-product-16.png',
		},
	]);
	// const [productList, setProductList] = useState([]);
	const customers = [
		{ value: 'walkInCustomer', label: 'Walk in Customer' },
		{ value: 'john', label: 'John' },
		{ value: 'smith', label: 'Smith' },
		{ value: 'ana', label: 'Ana' },
		{ value: 'elza', label: 'Elza' },
	];
	const products = [
		{ value: 'walkInCustomer', label: 'Walk in Customer' },
		{ value: 'john', label: 'John' },
		{ value: 'smith', label: 'Smith' },
		{ value: 'ana', label: 'Ana' },
		{ value: 'elza', label: 'Elza' },
	];
	const gst = [
		{ value: '5', label: 'GST 5%' },
		{ value: '10', label: 'GST 10%' },
		{ value: '15', label: 'GST 15%' },
		{ value: '20', label: 'GST 20%' },
		{ value: '25', label: 'GST 25%' },
		{ value: '30', label: 'GST 30%' },
	];
	const shipping = [
		{ value: '15', label: '15' },
		{ value: '20', label: '20' },
		{ value: '25', label: '25' },
		{ value: '30', label: '30' },
	];
	const discount = [
		{ value: '10', label: '10%' },
		{ value: '15', label: '15%' },
		{ value: '20', label: '20%' },
		{ value: '25', label: '25%' },
		{ value: '30', label: '30%' },
	];

	const handleIncrement = (productId) => {
		setSelectedProducts((prevProducts) =>
			prevProducts.map((product) =>
				product.id === productId
					? { ...product, quantity: product.quantity + 1 }
					: product
			)
		);
	};

	const handleDecrement = (productId) => {
		setSelectedProducts((prevProducts) =>
			prevProducts.map((product) =>
				product.id === productId && product?.quantity > 1
					? { ...product, quantity: product.quantity - 1 }
					: product
			)
		);
	};

	const handleRemoveProduct = async (productId) => {
		const isConfirmed = await showConfirmationAlert();
		if (!isConfirmed) return;
		setSelectedProducts((prevProducts) =>
			prevProducts.filter((product) => product.id !== productId)
		);
	};

	const clearAllProducts = () => {
		setSelectedProducts([]);
	};

	const MySwal = withReactContent(Swal);

	const showConfirmationAlert = async () => {
		const result = await MySwal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			showCancelButton: true,
			reverseButtons: true,
			confirmButtonColor: '#00ff00',
			confirmButtonText: 'Yes, delete it!',
			cancelButtonColor: '#ff0000',
			cancelButtonText: 'Cancel',
		});

		return result.isConfirmed;
	};

	// const settings = {
	// 	dots: false,
	// 	autoplay: false,
	// 	slidesToShow: 5,
	// 	margin: 0,
	// 	speed: 500,
	// 	responsive: [
	// 		{
	// 			breakpoint: 992,
	// 			settings: {
	// 				slidesToShow: 5,
	// 			},
	// 		},
	// 		{
	// 			breakpoint: 800,
	// 			settings: {
	// 				slidesToShow: 5,
	// 			},
	// 		},
	// 		{
	// 			breakpoint: 776,
	// 			settings: {
	// 				slidesToShow: 2,
	// 			},
	// 		},
	// 		{
	// 			breakpoint: 567,
	// 			settings: {
	// 				slidesToShow: 1,
	// 			},
	// 		},
	// 	],
	// };

	console.log(categories);

	// useEffect(() => {
	// 	async function getProductByCategoryCode() {
	// 		try {
	// 			const reqBody = {
	// 				makeCode: '',
	// 				supplierCode: '000001',
	// 				search1: '',
	// 				search2: 'SAFETY',
	// 				mfr: '',
	// 				details: '',
	// 				size: '',
	// 				color: '',
	// 				gender: 'Unisex',
	// 				year: '2020',
	// 				// catACode: selectedCategory,
	// 				catBCode: '',
	// 				catCCode: '',
	// 				inventoryType: 'BOTH',
	// 				priceRangeFrom: 0,
	// 				priceRangeTo: 0,
	// 				currentOnly: false,
	// 				promoOnly: false,
	// 				searchType: 'AllProducts',
	// 				stockAtLocCode: '',
	// 			};
	// 			// console.log('selected Category', selectedCategory);
	// 			const response = await getProductSearch(token, reqBody);
	// 			// setProductList(response || []);
	// 			console.log(response);
	// 		} catch (error) {
	// 			console.error(error);
	// 		}
	// 	}
	// 	if (selectedCategory) {
	// 		getProductByCategoryCode();
	// 	}
	// }, [selectedCategory]);

	useEffect(() => {
		dispatch(refreshCategories());
	}, [dispatch]);

	return (
		<div>
			<div className='page-wrapper pos-pg-wrapper ms-0'>
				<div className='content pos-design p-0'>
					<div className='btn-row d-sm-flex align-items-center'>
						<Link
							to='#'
							className='btn btn-secondary mb-xs-3'
							data-bs-toggle='modal'
							data-bs-target='#orders'
						>
							<span className='me-1 d-flex align-items-center'>
								<ShoppingCart className='feather-16' />
							</span>
							View Orders
						</Link>
						<Link
							to='#'
							className='btn btn-info'
						>
							<span className='me-1 d-flex align-items-center'>
								<RotateCw className='feather-16' />
							</span>
							Reset
						</Link>
						<Link
							to='#'
							className='btn btn-primary'
							data-bs-toggle='modal'
							data-bs-target='#recents'
						>
							<span className='me-1 d-flex align-items-center'>
								<RefreshCcw className='feather-16' />
							</span>
							Transaction
						</Link>
					</div>
					<div className='d-flex align-items-center justify-content-center'>
						<div className='row w-100 h-100 d-flex justify-content-center gap-2 align-items-start pos-wrapper'>
							{/* <div className='col-md-12 col-lg-8'>
							<div className='pos-categories tabs_wrapper'>
								<h5>Categories</h5>
								<p>Select From Below Categories</p>
								<Slider
									{...settings}
									className='tabs owl-carousel pos-category'
								>
									<div
										id='all'
										className='pos-slick-item'
									>
										<Link to='#'>
											<img
												src={cat01Img}
												alt='categories'
											/>
										</Link>
										<h6>
											<Link to='#'>All Categories</Link>
										</h6>
									</div>
									{categories &&
										categories?.length > 0 &&
										categories?.map((category) => (
											<div
												key={category?.code}
												id={category?.code}
												className={`pos-slick-item ${
													selectedCategory === category.code ? 'active' : ''
												}`}
												onClick={() => setSelectedCategory(category?.code)}
											>
												<h6>
													<Link to='#'>{category?.name}</Link>
												</h6>
											</div>
										))}
								</Slider>
								<div className='pos-products'>
									<div className='d-flex align-items-center justify-content-between'>
										<h5 className='mb-3'>Products</h5>
									</div>
									<div className='tabs_container'>
										<div
											className='tab_content active'
											data-tab={selectedCategory}
										>
											<div className='row'>
												{productList.length > 0 ? (
													productList.map((product) => (
														<div
															key={product.id}
															className='col-sm-2 col-md-6 col-lg-3 col-xl-3'
														>
															<div className='product-info default-cover card'>
																<Link
																	to='#'
																	className='img-bg'
																>
																	<ImageWithBasePath
																		src={
																			product.image ||
																			'assets/img/default-product.png'
																		}
																		alt={product.name}
																	/>
																	<span>
																		<Check className='feather-16' />
																	</span>
																</Link>
																<h6 className='cat-name'>
																	<Link to='#'>
																		{product.categoryName || 'Category'}
																	</Link>
																</h6>
																<h6 className='product-name'>
																	<Link to='#'>{product.name}</Link>
																</h6>
																<div className='d-flex align-items-center justify-content-between price'>
																	<span>{product.stock} Pcs</span>
																	<p>${product.price}</p>
																</div>
															</div>
														</div>
													))
												) : (
													<p>No products available for this category.</p>
												)}
											</div>
										</div>
									</div>
								</div>
							</div>
						  </div> */}
							<div className='col-md-12 col-lg-4 ps-0'>
								<aside className='product-order-list'>
									{/* <div className='head d-flex align-items-center justify-content-between w-100'>
									<div className=''>
										<h5>Order List</h5>
										<span>Transaction ID : #65565</span>
									</div>
									<div className=''>
										<Link
											className='confirm-text'
											to='#'
										>
											<Trash2 className='feather-16 text-danger me-1' />
										</Link>
										<Link
											to='#'
											className='text-default'
										>
											<MoreVertical className='feather-16' />
										</Link>
									</div>
								</div> */}
									<div className='customer-info block-section'>
										<h6>Customer Information</h6>
										<div className='input-block d-flex align-items-center'>
											<div className='flex-grow-1'>
												<Select
													options={customers}
													classNamePrefix='react-select'
													placeholder='Select an option'
												/>
											</div>
											<Link
												to='#'
												className='btn btn-primary btn-icon'
												data-bs-toggle='modal'
												data-bs-target='#create'
											>
												<UserPlus className='feather-16' />
											</Link>
										</div>
										<div className='input-block'>
											<Select
												options={products}
												classNamePrefix='react-select'
												placeholder='Select an option'
											/>
										</div>
									</div>
									<div
										className='product-added block-section'
										style={{
											height: '28.75rem',
										}}
									>
										<div className='head-text d-flex align-items-center justify-content-between'>
											<h6 className='d-flex align-items-center mb-0'>
												Product Added
												<span className='count'>
													{selectedProducts?.length}
												</span>
											</h6>
											<Link
												to='#'
												className='d-flex align-items-center text-danger'
												onClick={clearAllProducts}
											>
												<span className='me-1'>
													<i
														data-feather='x'
														className='feather-16'
													/>
												</span>
												Clear all
											</Link>
										</div>
										<div className='product-wrap'>
											{selectedProducts?.map((product) => (
												<div
													key={product.id}
													className='product-list d-flex align-items-center justify-content-between'
												>
													<div
														className='d-flex align-items-center product-info'
														data-bs-toggle='modal'
														data-bs-target='#products'
													>
														<Link
															to='#'
															className='img-bg'
														>
															{/* <ImageWithBasePath
															src='assets/img/products/pos-product-16.png'
															alt='Products'
														/> */}
															<img
																src={product.img}
																alt='Products'
															/>
														</Link>
														<div className='info'>
															<span>{product?.code}</span>
															<h6>
																<Link to='#'>{product?.name}</Link>
															</h6>
															<p>{product?.price}</p>
														</div>
													</div>
													<div className='qty-item text-center'>
														<OverlayTrigger
															placement='top'
															overlay={
																<Tooltip id='tooltip-minus'>Minus</Tooltip>
															}
														>
															<Link
																to='#'
																className='dec d-flex justify-content-center align-items-center'
																onClick={() => handleDecrement(product.id)}
															>
																<MinusCircle className='feather-14' />
															</Link>
														</OverlayTrigger>

														<input
															type='text'
															className='form-control text-center'
															name='qty'
															value={product?.quantity}
															readOnly
														/>
														<OverlayTrigger
															placement='top'
															overlay={
																<Tooltip id='tooltip-plus'>Plus</Tooltip>
															}
														>
															<Link
																to='#'
																onClick={() => handleIncrement(product?.id)}
																className='inc d-flex justify-content-center align-items-center'
																data-bs-toggle='tooltip'
																data-bs-placement='top'
																title='plus'
															>
																<PlusCircle className='feather-14' />
															</Link>
														</OverlayTrigger>
													</div>
													<div className='d-flex align-items-center action'>
														<Link
															className='btn-icon edit-icon me-2'
															to='#'
															data-bs-toggle='modal'
															data-bs-target='#edit-product'
														>
															<Edit className='feather-14' />
														</Link>
														<Link
															onClick={() => handleRemoveProduct(product.id)}
															className='btn-icon delete-icon confirm-text'
															to='#'
														>
															<Trash2 className='feather-14' />
														</Link>
													</div>
												</div>
											))}
										</div>
									</div>
								</aside>
							</div>
							<div className='col-md-12 col-lg-4 ps-0'>
								<aside className='product-order-list'>
									<div className='block-section'>
										<div className='selling-info'>
											<div className='row'>
												<div className='col-12 col-sm-4'>
													<div className='input-block'>
														<label>Order Tax</label>
														<Select
															classNamePrefix='react-select'
															options={gst}
															placeholder='GST 5%'
														/>
													</div>
												</div>
												<div className='col-12 col-sm-4'>
													<div className='input-block'>
														<label>Shipping</label>
														<Select
															classNamePrefix='react-select'
															options={shipping}
															placeholder='15'
														/>
													</div>
												</div>
												<div className='col-12 col-sm-4'>
													<div className='input-block'>
														<label>Discount</label>
														<Select
															classNamePrefix='react-select'
															options={discount}
															placeholder='10%'
														/>
													</div>
												</div>
											</div>
										</div>
										<div className='order-total'>
											<table className='table table-responsive table-borderless'>
												<tbody>
													<tr>
														<td>Sub Total</td>
														<td className='text-end'>$60,454</td>
													</tr>
													<tr>
														<td>Tax (GST 5%)</td>
														<td className='text-end'>$40.21</td>
													</tr>
													<tr>
														<td>Shipping</td>
														<td className='text-end'>$40.21</td>
													</tr>
													<tr>
														<td>Sub Total</td>
														<td className='text-end'>$60,454</td>
													</tr>
													<tr>
														<td className='danger'>Discount (10%)</td>
														<td className='danger text-end'>$15.21</td>
													</tr>
													<tr>
														<td>Total</td>
														<td className='text-end'>$64,024.5</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
									<div className='block-section payment-method'>
										<h6>Payment Method</h6>
										<div className='row d-flex align-items-center justify-content-center methods'>
											<div className='col-md-6 col-lg-4 item'>
												<div className='default-cover'>
													<Link to='#'>
														{/* <ImageWithBasePath
                            src="assets/img/icons/cash-pay.svg"
                            alt="Payment Method"
                          /> */}
														<img
															src={CashPayImg}
															alt='img'
														/>
														<span>Cash</span>
													</Link>
												</div>
											</div>
											<div className='col-md-6 col-lg-4 item'>
												<div className='default-cover'>
													<Link to='#'>
														{/* <ImageWithBasePath
														src='assets/img/icons/credit-card.svg'
														alt='Payment Method'
													/> */}
														<img
															src={CreditCardImg}
															alt='img'
														/>
														<span>Debit Card</span>
													</Link>
												</div>
											</div>
											<div className='col-md-6 col-lg-4 item'>
												<div className='default-cover'>
													<Link to='#'>
														{/* <ImageWithBasePath
														src='assets/img/icons/qr-scan.svg'
														alt='Payment Method'
													/> */}
														<img
															src={QrScanImg}
															alt='img'
														/>
														<span>Scan</span>
													</Link>
												</div>
											</div>
										</div>
									</div>
									<div className='d-grid btn-block mb-0'>
										<Link
											className='btn btn-secondary'
											to='#'
										>
											Grand Total : $64,024.5
										</Link>
									</div>
									<div className='btn-row d-sm-flex align-items-center justify-content-between'>
										<Link
											to='#'
											className='btn btn-info btn-icon flex-fill'
											data-bs-toggle='modal'
											data-bs-target='#hold-order'
										>
											<span className='me-1 d-flex align-items-center'>
												<i
													data-feather='pause'
													className='feather-16'
												/>
											</span>
											Hold
										</Link>
										<Link
											to='#'
											className='btn btn-danger btn-icon flex-fill'
										>
											<span className='me-1 d-flex align-items-center'>
												<i
													data-feather='trash-2'
													className='feather-16'
												/>
											</span>
											Void
										</Link>
										<Link
											to='#'
											className='btn btn-success btn-icon flex-fill'
											data-bs-toggle='modal'
											data-bs-target='#payment-completed'
										>
											<span className='me-1 d-flex align-items-center'>
												<i
													data-feather='credit-card'
													className='feather-16'
												/>
											</span>
											Payment
										</Link>
									</div>
								</aside>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Pos Modals */}

			{/* Payment Completed */}
			<PosPaymentCompleted />
			{/* /Payment Completed */}
			{/* Print Receipt */}
			<PosPrintReceipt />
			{/* /Print Receipt */}
			{/* Products */}
			<PosProducts />
			{/* /Products */}
			<PosAddCustomer />
			{/* Hold */}
			<HoldOrders />
			{/* /Hold */}
			{/* Edit Product */}
			<PosEditProduct />
			{/* /Edit Product */}
			{/* Recent Transactions */}
			<PosRecentTransaction />
			{/* /Recent Transactions */}
			{/* View Orders */}
			<PosViewOrders />
			{/* /View Orders */}
		</div>
	);
};

export default Pos;
