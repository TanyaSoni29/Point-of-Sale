/** @format */

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { all_routes } from '../../Router/all_routes';
import { DatePicker, Switch } from 'antd';
import Addunits from '../../core/modals/inventory/addunits';
import AddCategory from '../../core/modals/inventory/addcategory';
import AddBrand from '../../core/modals/addbrand';
import {
	ArrowLeft,
	Calendar,
	ChevronDown,
	ChevronUp,
	Info,
	LifeBuoy,
	List,
	PlusCircle,
	Trash2,
	X,
} from 'feather-icons-react/build/IconComponents';
import { useDispatch, useSelector } from 'react-redux';
import { setToogleHeader } from '../../core/redux/action';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import ImageWithBasePath from '../../core/img/imagewithbasebath';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
	const route = all_routes;
	const dispatch = useDispatch();

	const data = useSelector((state) => state.toggle_header);

	const [selectedDate, setSelectedDate] = useState(new Date());
	const handleDateChange = (date) => {
		setSelectedDate(date);
	};
	const [selectedDate1, setSelectedDate1] = useState(new Date());

	const {
		register,
		handleSubmit,
		reset,
		formState: { isSubmitSuccessful, errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log('Form Data:', data);
		// Handle form submission (e.g., send data to your backend)
		reset(); // Reset form after successful submission
	};

	const genders = [
		{ value: 'Unisex', label: 'Unisex' },
		{ value: 'Male', label: 'Male' },
		{ value: 'Female', label: 'Female' },
	];
	// const suitabilityOptions = [
	// 	{ value: 'Any', label: 'Any' },
	// 	{ value: 'one', label: 'one' },
	// ];
	const majorMinorOption = [
		{ value: 'Major', label: 'Major' },
		{ value: 'Minor', label: 'Minor' },
	];

	const handleDateChange1 = (date) => {
		setSelectedDate1(date);
	};
	const renderCollapseTooltip = (props) => (
		<Tooltip
			id='refresh-tooltip'
			{...props}
		>
			Collapse
		</Tooltip>
	);
	// const store = [
	// 	{ value: 'choose', label: 'Choose' },
	// 	{ value: 'thomas', label: 'Thomas' },
	// 	{ value: 'rasmussen', label: 'Rasmussen' },
	// 	{ value: 'fredJohn', label: 'Fred John' },
	// ];
	// const warehouse = [
	// 	{ value: 'choose', label: 'Choose' },
	// 	{ value: 'legendary', label: 'Legendary' },
	// 	{ value: 'determined', label: 'Determined' },
	// 	{ value: 'sincere', label: 'Sincere' },
	// ];
	// const category = [
	// 	{ value: 'choose', label: 'Choose' },
	// 	{ value: 'lenovo', label: 'Lenovo' },
	// 	{ value: 'electronics', label: 'Electronics' },
	// ];
	// const subcategory = [
	// 	{ value: 'choose', label: 'Choose' },
	// 	{ value: 'lenovo', label: 'Lenovo' },
	// 	{ value: 'electronics', label: 'Electronics' },
	// ];
	// const subsubcategories = [
	// 	{ value: 'Fruits', label: 'Fruits' },
	// 	{ value: 'Computer', label: 'Computer' },
	// 	{ value: 'Shoes', label: 'Shoes' },
	// ];
	// const brand = [
	// 	{ value: 'choose', label: 'Choose' },
	// 	{ value: 'nike', label: 'Nike' },
	// 	{ value: 'bolt', label: 'Bolt' },
	// ];
	// const unit = [
	// 	{ value: 'choose', label: 'Choose' },
	// 	{ value: 'kg', label: 'Kg' },
	// 	{ value: 'pc', label: 'Pc' },
	// ];
	// const sellingtype = [
	// 	{ value: 'choose', label: 'Choose' },
	// 	{ value: 'transactionalSelling', label: 'Transactional selling' },
	// 	{ value: 'solutionSelling', label: 'Solution selling' },
	// ];
	// const barcodesymbol = [
	// 	{ value: 'choose', label: 'Choose' },
	// 	{ value: 'code34', label: 'Code34' },
	// 	{ value: 'code35', label: 'Code35' },
	// 	{ value: 'code36', label: 'Code36' },
	// ];
	// const taxtype = [
	// 	{ value: 'exclusive', label: 'Exclusive' },
	// 	{ value: 'salesTax', label: 'Sales Tax' },
	// ];
	// const discounttype = [
	// 	{ value: 'choose', label: 'Choose' },
	// 	{ value: 'percentage', label: 'Percentage' },
	// 	{ value: 'cash', label: 'Cash' },
	// ];
	// const discounttype1 = [
	// 	{ value: 'choose', label: 'Choose' },
	// 	{ value: 'percentage', label: 'Percentage' },
	// 	{ value: 'cash', label: 'Cash' },
	// ];
	const [isImageVisible, setIsImageVisible] = useState(true);

	const handleRemoveProduct = () => {
		setIsImageVisible(false);
	};
	const [isImageVisible1, setIsImageVisible1] = useState(true);

	const handleRemoveProduct1 = () => {
		setIsImageVisible1(false);
	};

	useEffect(() => {
		if (isSubmitSuccessful) {
			reset({
				id: 0,
				mfrPartNumber: '',
				major: true,
				gender: 'Unisex',
				suitability: 'Any',
				exipryDate: '2024-12-10T07:04:59.765Z',
				makeCode: '',
				search1: '',
				search2: '',
				details: '',
				size: '',
				color: '',
				barcode: '',
				current: true,
				printLabel: 'Yes',
				allowDiscount: true,
				year: '',
				boxQuantity: 0,
				nominalSection: '',
				nominalCode: '',
				season: 'All',
				costPrice: 0,
				discount: 0,
				discountPercentage: 0,
				markup: 0,
				vatCode: 0,
				suggestedRRP: 0,
				storePrice: 0,
				tradePrice: 0,
				mailOrderPrice: 0,
				webPrice: 0,
				offerCode: '',
				tillNote1: '',
				tillNote2: '',
				tillNote3: '',
				tillNote4: '',
				tillNote5: '',
				tillNote6: '',
				note1PrintPO: true,
				note2PrintPO: true,
				note3PrintPO: true,
				note4PrintPO: true,
				note5PrintPO: true,
				note6PrintPO: true,
				note1PrintInvoice: true,
				note2PrintInvoice: true,
				note3PrintInvoice: true,
				note4PrintInvoice: true,
				note5PrintInvoice: true,
				note6PrintInvoice: true,
				keyItem: true,
				allowPoints: true,
				website: true,
				webOnly: true,
				binLocation1: '',
				binLocation2: '',
				partsGarunteeMonths: 0,
				labourGarunteeMonths: 0,
				weight: 0,
				imageMain: '',
				image2: '',
				image3: '',
				image4: '',
				promoPrice: 0,
				promoStart: '2024-12-10T07:04:59.765Z',
				promoEnd: '2024-12-10T07:04:59.765Z',
				multibuyQuantity: 0,
				multibuySave: 0,
				estimatedArrivalDate: '2024-12-10T07:04:59.765Z',
				leadTime: 'Unknown',
				supplier1Code: '',
				supplier2Code: '',
				catACode: '',
				catBCode: '',
				catCCode: '',
				webCat1Code: '',
				webCat2Code: '',
				webCat3Code: '',
				webCat4Code: '',
				clickAndCollect: 'InStoreAndHomeDelivery',
				shortDescription: '',
				fullDescription: '',
				websiteTitle: '',
				ebayTitle: '',
				googleShoppingTitle: '',
				specifications: '',
				geometry: '',
				itemId: '',
				range: '',
				finish: '',
				webRef: 0,
				make: '',
				catA: '',
				catB: '',
				catC: '',
				mfrPartNumber2: '',
				createdOn: '2024-12-10T07:04:59.765Z',
				updatedOn: '2024-12-10T07:04:59.765Z',
				promoName: '',
				deliveryOption: 'Standard',
				eBaySyncStock: true,
				eBayStockLevel: 0,
				boxCost: 0,
				isDiscontinued: true,
				doNotReOrder: true,
			});
		}
	}, [reset, isSubmitSuccessful]);
	return (
		<div className='page-wrapper'>
			<div className='content'>
				<div className='page-header'>
					<div className='add-item d-flex'>
						<div className='page-title'>
							<h4>New Product</h4>
							<h6>Create new product</h6>
						</div>
					</div>
					<ul className='table-top-head'>
						<li>
							<div className='page-btn'>
								<Link
									to={route.productlist}
									className='btn btn-secondary'
								>
									<ArrowLeft className='me-2' />
									Back to Product
								</Link>
							</div>
						</li>
						<li>
							<OverlayTrigger
								placement='top'
								overlay={renderCollapseTooltip}
							>
								<Link
									data-bs-toggle='tooltip'
									data-bs-placement='top'
									title='Collapse'
									id='collapse-header'
									className={data ? 'active' : ''}
									onClick={() => {
										dispatch(setToogleHeader(!data));
									}}
								>
									<ChevronUp className='feather-chevron-up' />
								</Link>
							</OverlayTrigger>
						</li>
					</ul>
				</div>
				{/* /add */}
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className='card'>
						<div className='card-body add-product pb-0'>
							<div
								className='accordion-card-one accordion'
								id='accordionExample'
							>
								<div className='accordion-item'>
									<div
										className='accordion-header'
										id='headingOne'
									>
										<div
											className='accordion-button'
											data-bs-toggle='collapse'
											data-bs-target='#collapseOne'
											aria-controls='collapseOne'
										>
											<div className='addproduct-icon'>
												<h5>
													<Info className='add-info' />

													<span>Product Information</span>
												</h5>
												<Link to='#'>
													<ChevronDown className='chevron-down-add' />
												</Link>
											</div>
										</div>
									</div>
									<div
										id='collapseOne'
										className='accordion-collapse collapse show'
										aria-labelledby='headingOne'
										data-bs-parent='#accordionExample'
									>
										<div className='accordion-body'>
											<div className='row'>
												<div className='col-lg-4 col-sm-6 col-12'>
													<div className='mb-3 add-product'>
														<label className='form-label'>
															Manufacture Part Code
														</label>
														<input
															type='text'
															{...register('mfrPartNumber', { required: true })}
															className='form-control'
														/>
														{errors.mfrPartNumber && (
															<div className='error'>
																{errors.mfrPartNumber.message}
															</div>
														)}
													</div>

													{/* <div className='mb-3 add-product'>
														<label className='form-label'>Store</label>
														<Select
															classNamePrefix='react-select'
															options={store}
															placeholder='Choose'
														/>
													</div> */}
												</div>
												<div className='col-lg-4 col-sm-6 col-12'>
													<div className='mb-3 add-product'>
														<label className='form-label'>MFR Barcode</label>
														<input
															type='text'
															// {...register('mfrPartNumber', { required: true })}
															className='form-control'
														/>
														{/* {errors.mfrPartNumber && (
															<div className='error'>
																{errors.mfrPartNumber.message}
															</div>
														)} */}
													</div>

													{/* <div className='mb-3 add-product'>
														<label className='form-label'>Store</label>
														<Select
															classNamePrefix='react-select'
															options={store}
															placeholder='Choose'
														/>
													</div> */}
												</div>
												<div className='col-lg-4 col-sm-6 col-12'>
													<div className='mb-3 add-product'>
														<label className='form-label'>
															Instantly Update Web Shop
														</label>
														<Switch
															// checked={}
															// {...register('mfrPartNumber', { required: true })}
															className='form-control'
														/>
														{/* {errors.mfrPartNumber && (
															<div className='error'>
																{errors.mfrPartNumber.message}
															</div>
														)} */}
													</div>

													{/* <div className='mb-3 add-product'>
														<label className='form-label'>Store</label>
														<Select
															classNamePrefix='react-select'
															options={store}
															placeholder='Choose'
														/>
													</div> */}
												</div>
												{/* <div className='col-lg-4 col-sm-6 col-12'>
													<div className='mb-3 add-product'>
														<label className='form-label'>Warehouse</label>
														<Select
															classNamePrefix='react-select'
															options={warehouse}
															placeholder='Choose'
														/>
													</div>
												</div> */}
											</div>
											<div className='row'>
												<div className='col-lg-4 col-sm-6 col-12'>
													<div className='mb-3 add-product'>
														<label className='form-label'>Major/Minor</label>
														<Select
															classNamePrefix='react-select'
															options={majorMinorOption}
															placeholder='Choose'
														/>
													</div>
												</div>
												<div className='col-lg-4 col-sm-6 col-12'>
													<div className='mb-3 add-product'>
														<label className='form-label'>Gender</label>
														<Select
															{...register('gender')}
															classNamePrefix='react-select'
															options={genders}
															placeholder='Choose'
														/>
													</div>
												</div>
											</div>
											<div className='row'>
												<div className='col-lg-4 col-sm-6 col-12'>
													<div className='mb-3 add-product'>
														<label className='form-label'>Make</label>
														<input
															type='text'
															{...register('make', { required: true })}
															className='form-control'
														/>
														{errors.make && (
															<div className='error'>{errors.make.message}</div>
														)}
													</div>
												</div>
											</div>

											<div className='row'>
												{/* <div className='col-lg-4 col-sm-6 col-12'>
													<div className='mb-3 add-product'>
														<label className='form-label'>Product Name</label>
														<input
															type='text'
															className='form-control'
														/>
													</div>
												</div>
												<div className='col-lg-4 col-sm-6 col-12'>
													<div className='mb-3 add-product'>
														<label className='form-label'>Slug</label>
														<input
															type='text'
															className='form-control'
														/>
													</div>
												</div>
												<div className='col-lg-4 col-sm-6 col-12'>
													<div className='input-blocks add-product list'>
														<label>SKU</label>
														<input
															type='text'
															className='form-control list'
															placeholder='Enter SKU'
														/>
														<Link
															to={route.addproduct}
															className='btn btn-primaryadd'
														>
															Generate Code
														</Link>
													</div>
												</div> */}
											</div>
											<div className='addservice-info'>
												<div className='row'>
													<div className='col-lg-4 col-sm-6 col-12'>
														<div className='mb-3 add-product'>
															<label className='form-label'>Search 1</label>
															<input
																type='text'
																{...register('search1', { required: true })}
																className='form-control'
															/>
															{errors.search1 && (
																<div className='error'>
																	{errors.search1.message}
																</div>
															)}
														</div>
													</div>
													<div className='col-lg-4 col-sm-6 col-12'>
														<div className='mb-3 add-product'>
															<label className='form-label'>Search 2</label>
															<input
																type='text'
																{...register('search2', { required: true })}
																className='form-control'
															/>
															{errors.search2 && (
																<div className='error'>
																	{errors.search2.message}
																</div>
															)}
														</div>
													</div>
													<div className='col-lg-4 col-sm-6 col-12'>
														<div className='mb-3 add-product'>
															<label className='form-label'>Search 3</label>
															<input
																type='text'
																{...register('search3', { required: true })}
																className='form-control'
															/>
															{errors.search3 && (
																<div className='error'>
																	{errors.search3.message}
																</div>
															)}
														</div>
													</div>
												</div>
											</div>
											{/* <div className='mb-3 add-product'>
												<label className='form-label'>details</label>
												<input
													type='text'
													{...register('details', { required: true })}
													className='form-control'
												/>
												{errors.details && (
													<div className='error'>{errors.details.message}</div>
												)}
											</div> */}
											{/* Editor */}
											<div className='col-lg-12'>
												<div className='input-blocks summer-description-box transfer mb-3'>
													<label>Details</label>
													<textarea
														className='form-control h-100'
														rows={3}
														{...register('details')}
														defaultValue={''}
													/>
													{errors.details && (
														<div className='error'>
															{errors.details.message}
														</div>
													)}
													<p className='mt-1'>Maximum 60 Characters</p>
												</div>
											</div>
											<div className='row'>
												<div className='col-lg-4 col-sm-6 col-12'>
													<div className='mb-3 add-product'>
														<label className='form-label'>Size</label>
														<input
															type='text'
															{...register('size', { required: true })}
															className='form-control'
														/>
														{errors.size && (
															<div className='error'>{errors.size.message}</div>
														)}
													</div>
												</div>
												<div className='col-lg-4 col-sm-6 col-12'>
													<div className='mb-3 add-product'>
														<label className='form-label'>Weight</label>
														<input
															type='text'
															{...register('weight', { required: true })}
															className='form-control'
														/>
														{errors.weight && (
															<div className='error'>
																{errors.weight.message}
															</div>
														)}
													</div>
												</div>
											</div>
											<div className='addservice-info'>
												<div className='row'>
													<div className='col-lg-4 col-sm-6 col-12'>
														{/* <div className='mb-3 add-product'>
															<div className='add-newplus'>
																<label className='form-label'>Category</label>
																<Link
																	to='#'
																	data-bs-toggle='modal'
																	data-bs-target='#add-units-category'
																>
																	<PlusCircle className='plus-down-add' />
																	<span>Add New</span>
																</Link>
															</div>
															<Select
																classNamePrefix='react-select'
																options={category}
																placeholder='Choose'
															/>
														</div> */}
														<label className='form-label'>Category A</label>
														<input
															type='text'
															{...register('catA', { required: true })}
															className='form-control'
														/>
														{errors.catA && (
															<div className='error'>{errors.catA.message}</div>
														)}
													</div>
													<div className='col-lg-4 col-sm-6 col-12'>
														{/* <div className='mb-3 add-product'> */}
														<label className='form-label'>Category B</label>
														<input
															type='text'
															{...register('catB', { required: true })}
															className='form-control'
														/>
														{errors.catB && (
															<div className='error'>{errors.catB.message}</div>
														)}
														{/* <label className='form-label'>Sub Category</label>
															<Select
																classNamePrefix='react-select'
																options={subcategory}
																placeholder='Choose'
															/> */}
														{/* </div> */}
													</div>
													<div className='col-lg-4 col-sm-6 col-12'>
														<label className='form-label'>Category C</label>
														<input
															type='text'
															{...register('catC', { required: true })}
															className='form-control'
														/>
														{errors.catC && (
															<div className='error'>{errors.catC.message}</div>
														)}
														{/* <div className='mb-3 add-product'>
															<label className='form-label'>
																Sub Sub Category
															</label>
															<Select
																classNamePrefix='react-select'
																options={subsubcategories}
																placeholder='Choose'
															/>
														</div> */}
													</div>
												</div>
											</div>
											<div className='add-product-new'>
												<div className='row'>
													{/* <div className='col-lg-4 col-sm-6 col-12'>
														<div className='mb-3 add-product'>
															<div className='add-newplus'>
																<label className='form-label'>Brand</label>
																<Link
																	to='#'
																	data-bs-toggle='modal'
																	data-bs-target='#add-units-brand'
																>
																	<PlusCircle className='plus-down-add' />
																	<span>Add New</span>
																</Link>
															</div>
															<Select
																classNamePrefix='react-select'
																options={brand}
																placeholder='Choose'
															/>
														</div>
													</div> */}
													{/* <div className='col-lg-4 col-sm-6 col-12'>
														<div className='mb-3 add-product'>
															<div className='add-newplus'>
																<label className='form-label'>Unit</label>
																<Link
																	to='#'
																	data-bs-toggle='modal'
																	data-bs-target='#add-unit'
																>
																	<PlusCircle className='plus-down-add' />
																	<span>Add New</span>
																</Link>
															</div>
															<Select
																classNamePrefix='react-select'
																options={unit}
																placeholder='Choose'
															/>
														</div>
													</div>
													<div className='col-lg-4 col-sm-6 col-12'>
														<div className='mb-3 add-product'>
															<label className='form-label'>Selling Type</label>
															<Select
																classNamePrefix='react-select'
																options={sellingtype}
																placeholder='Choose'
															/>
														</div>
													</div> */}
												</div>
											</div>
											<div className='row'>
												<div className='col-lg-6 col-sm-6 col-12'>
													<div className='mb-3 add-product'>
														<label className='form-label'>Barcode</label>
														<input
															type='text'
															{...register('barcode')}
															className='form-control'
														/>
														{errors.barcode && (
															<div className='error'>
																{errors.barcode.message}
															</div>
														)}
														{/* <Select
															classNamePrefix='react-select'
															options={barcodesymbol}
															placeholder='Choose'
														/> */}
													</div>
												</div>
												<div className='col-lg-6 col-sm-6 col-12'>
													<div className='input-blocks add-product list'>
														<label>Item Code</label>
														<input
															type='text'
															className='form-control list'
															placeholder='Please Enter Item Code'
														/>
														<Link
															to={route.addproduct}
															className='btn btn-primaryadd'
														>
															Generate Code
														</Link>
													</div>
												</div>
											</div>

											{/* /Editor */}
										</div>
									</div>
								</div>
							</div>
							<div
								className='accordion-card-one accordion'
								id='accordionExample2'
							>
								<div className='accordion-item'>
									<div
										className='accordion-header'
										id='headingTwo'
									>
										<div
											className='accordion-button'
											data-bs-toggle='collapse'
											data-bs-target='#collapseTwo'
											aria-controls='collapseTwo'
										>
											<div className='text-editor add-list'>
												<div className='addproduct-icon list icon'>
													<h5>
														<LifeBuoy className='add-info' />
														<span>Pricing &amp; Stocks</span>
													</h5>
													<Link to='#'>
														<ChevronDown className='chevron-down-add' />
													</Link>
												</div>
											</div>
										</div>
									</div>
									<div
										id='collapseTwo'
										className='accordion-collapse collapse show'
										aria-labelledby='headingTwo'
										data-bs-parent='#accordionExample2'
									>
										<div className='accordion-body'>
											<div className='input-blocks add-products'>
												<label className='d-block'>Product Type</label>
												<div className='single-pill-product'>
													<ul
														className='nav nav-pills'
														id='pills-tab1'
														role='tablist'
													>
														<li
															className='nav-item'
															role='presentation'
														>
															<span
																className='custom_radio me-4 mb-0 active'
																id='pills-home-tab'
																data-bs-toggle='pill'
																data-bs-target='#pills-home'
																role='tab'
																aria-controls='pills-home'
																aria-selected='true'
															>
																<input
																	type='radio'
																	className='form-control'
																	name='payment'
																/>
																<span className='checkmark' /> Single Product
															</span>
														</li>
														<li
															className='nav-item'
															role='presentation'
														>
															<span
																className='custom_radio me-2 mb-0'
																id='pills-profile-tab'
																data-bs-toggle='pill'
																data-bs-target='#pills-profile'
																role='tab'
																aria-controls='pills-profile'
																aria-selected='false'
															>
																<input
																	type='radio'
																	className='form-control'
																	name='sign'
																/>
																<span className='checkmark' /> Variable Product
															</span>
														</li>
													</ul>
												</div>
											</div>
											<div
												className='tab-content'
												id='pills-tabContent'
											>
												<div
													className='tab-pane fade show active'
													id='pills-home'
													role='tabpanel'
													aria-labelledby='pills-home-tab'
												>
													<div className='row'>
														<div className='col-lg-4 col-sm-6 col-12'>
															<div className='input-blocks add-product'>
																<label>Cost Price</label>
																<input
																	type='text'
																	{...register('price', { required: true })}
																	className='form-control'
																/>
																{errors.price && (
																	<div className='error'>
																		{errors.price.message}
																	</div>
																)}
															</div>
														</div>
														<div className='col-lg-4 col-sm-6 col-12'>
															<div className='input-blocks add-product'>
																<label>Quantity</label>
																<input
																	type='text'
																	className='form-control'
																/>
															</div>
														</div>
														<div className='col-lg-4 col-sm-6 col-12'>
															<div className='input-blocks add-product'>
																<label>VAT Code</label>
																<input
																	type='text'
																	{...register('vatCode')}
																/>
																{errors.vatCode && (
																	<div className='error'>
																		{errors.vatCode.message}
																	</div>
																)}

																{/* <Select
																	classNamePrefix='react-select'
																	options={taxtype}
																	placeholder='Select Option'
																/> */}
															</div>
														</div>
													</div>
													<div className='row'>
														<div className='col-lg-4 col-sm-6 col-12'>
															<div className='input-blocks add-product'>
																<label>Settlement Discount</label>
																<input
																	type='text'
																	// {...register('discount')}
																	placeholder='0.00'
																/>
																{/* {errors.discount && (
																	<div className='error'>
																		{errors.discount.message}
																	</div>
																)} */}
																{/* <Select
																	classNamePrefix='react-select'
																	options={discounttype}
																	placeholder='Choose'
																/> */}
															</div>
														</div>
														<div className='col-lg-4 col-sm-6 col-12'>
															<div className='input-blocks add-product'>
																<label>Discount</label>
																<input
																	type='text'
																	{...register('discount')}
																	placeholder='Choose'
																/>
																{errors.discount && (
																	<div className='error'>
																		{errors.discount.message}
																	</div>
																)}
															</div>
														</div>
														<div className='col-lg-4 col-sm-6 col-12'>
															<div className='input-blocks add-product'>
																<label>Markup</label>
																<input
																	type='text'
																	{...register('markup')}
																	className='form-control'
																/>
																{errors.markup && (
																	<div className='error'>
																		{errors.markup.message}
																	</div>
																)}
															</div>
														</div>
													</div>
													<div
														className='accordion-card-one accordion'
														id='accordionExample3'
													>
														<div className='accordion-item'>
															<div
																className='accordion-header'
																id='headingThree'
															>
																<div
																	className='accordion-button'
																	data-bs-toggle='collapse'
																	data-bs-target='#collapseThree'
																	aria-controls='collapseThree'
																>
																	<div className='addproduct-icon list'>
																		<h5>
																			<i
																				data-feather='image'
																				className='add-info'
																			/>
																			<span>Images</span>
																		</h5>
																		<Link to='#'>
																			<ChevronDown className='chevron-down-add' />
																		</Link>
																	</div>
																</div>
															</div>
															<div
																id='collapseThree'
																className='accordion-collapse collapse show'
																aria-labelledby='headingThree'
																data-bs-parent='#accordionExample3'
															>
																<div className='accordion-body'>
																	<div className='text-editor add-list add'>
																		<div className='col-lg-12'>
																			<div className='add-choosen'>
																				<div className='input-blocks'>
																					<div className='image-upload'>
																						<input type='file' />
																						<div className='image-uploads'>
																							<PlusCircle className='plus-down-add me-0' />
																							<h4>Add Images</h4>
																						</div>
																					</div>
																				</div>
																				{isImageVisible1 && (
																					<div className='phone-img'>
																						<ImageWithBasePath
																							src='assets/img/products/phone-add-2.png'
																							alt='image'
																						/>
																						<Link to='#'>
																							<X
																								className='x-square-add remove-product'
																								onClick={handleRemoveProduct1}
																							/>
																						</Link>
																					</div>
																				)}
																				{isImageVisible && (
																					<div className='phone-img'>
																						<ImageWithBasePath
																							src='assets/img/products/phone-add-1.png'
																							alt='image'
																						/>
																						<Link to='#'>
																							<X
																								className='x-square-add remove-product'
																								onClick={handleRemoveProduct}
																							/>
																						</Link>
																					</div>
																				)}
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div
													className='tab-pane fade'
													id='pills-profile'
													role='tabpanel'
													aria-labelledby='pills-profile-tab'
												>
													<div className='row select-color-add'>
														<div className='col-lg-6 col-sm-6 col-12'>
															<div className='input-blocks add-product'>
																<label>Variant Attribute</label>
																<div className='row'>
																	<div className='col-lg-10 col-sm-10 col-10'>
																		<select
																			className='form-control variant-select select-option'
																			id='colorSelect'
																		>
																			<option>Choose</option>
																			<option>Color</option>
																			<option value='red'>Red</option>
																			<option value='black'>Black</option>
																		</select>
																	</div>
																	<div className='col-lg-2 col-sm-2 col-2 ps-0'>
																		<div className='add-icon tab'>
																			<Link
																				className='btn btn-filter'
																				data-bs-toggle='modal'
																				data-bs-target='#add-units'
																			>
																				<PlusCircle className='feather feather-plus-circle' />
																			</Link>
																		</div>
																	</div>
																</div>
															</div>
															<div
																className='selected-hide-color'
																id='input-show'
															>
																<div className='row align-items-center'>
																	<div className='col-sm-10'>
																		<div className='input-blocks'>
																			<input
																				className='input-tags form-control'
																				id='inputBox'
																				type='text'
																				data-role='tagsinput'
																				name='specialist'
																				defaultValue='red, black'
																			/>
																		</div>
																	</div>
																	<div className='col-lg-2'>
																		<div className='input-blocks '>
																			<Link
																				to='#'
																				className='remove-color'
																			>
																				<Trash2 />
																			</Link>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div
														className='modal-body-table variant-table'
														id='variant-table'
													>
														<div className='table-responsive'>
															<table className='table'>
																<thead>
																	<tr>
																		<th>Variantion</th>
																		<th>Variant Value</th>
																		<th>SKU</th>
																		<th>Quantity</th>
																		<th>Price</th>
																		<th className='no-sort'>Action</th>
																	</tr>
																</thead>
																<tbody>
																	<tr>
																		<td>
																			<div className='add-product'>
																				<input
																					type='text'
																					className='form-control'
																					defaultValue='color'
																				/>
																			</div>
																		</td>
																		<td>
																			<div className='add-product'>
																				<input
																					type='text'
																					className='form-control'
																					defaultValue='red'
																				/>
																			</div>
																		</td>
																		<td>
																			<div className='add-product'>
																				<input
																					type='text'
																					className='form-control'
																					defaultValue={1234}
																				/>
																			</div>
																		</td>
																		<td>
																			<div className='product-quantity'>
																				<span className='quantity-btn'>
																					<i
																						data-feather='minus-circle'
																						className='feather-search'
																					/>
																				</span>
																				<input
																					type='text'
																					className='quntity-input'
																					defaultValue={2}
																				/>
																				<span className='quantity-btn'>
																					+
																					<i
																						data-feather='plus-circle'
																						className='plus-circle'
																					/>
																				</span>
																			</div>
																		</td>
																		<td>
																			<div className='add-product'>
																				<input
																					type='text'
																					className='form-control'
																					defaultValue={50000}
																				/>
																			</div>
																		</td>
																		<td className='action-table-data'>
																			<div className='edit-delete-action'>
																				<div className='input-block add-lists'>
																					<label className='checkboxs'>
																						<input
																							type='checkbox'
																							defaultChecked=''
																						/>
																						<span className='checkmarks' />
																					</label>
																				</div>
																				<Link
																					className='me-2 p-2'
																					to='#'
																					data-bs-toggle='modal'
																					data-bs-target='#add-variation'
																				>
																					<i
																						data-feather='plus'
																						className='feather-edit'
																					/>
																				</Link>
																				<Link
																					className='confirm-text p-2'
																					to='#'
																				>
																					<i
																						data-feather='trash-2'
																						className='feather-trash-2'
																					/>
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<div className='add-product'>
																				<input
																					type='text'
																					className='form-control'
																					defaultValue='color'
																				/>
																			</div>
																		</td>
																		<td>
																			<div className='add-product'>
																				<input
																					type='text'
																					className='form-control'
																					defaultValue='black'
																				/>
																			</div>
																		</td>
																		<td>
																			<div className='add-product'>
																				<input
																					type='text'
																					className='form-control'
																					defaultValue={2345}
																				/>
																			</div>
																		</td>
																		<td>
																			<div className='product-quantity'>
																				<span className='quantity-btn'>
																					<i
																						data-feather='minus-circle'
																						className='feather-search'
																					/>
																				</span>
																				<input
																					type='text'
																					className='quntity-input'
																					defaultValue={3}
																				/>
																				<span className='quantity-btn'>
																					+
																					<i
																						data-feather='plus-circle'
																						className='plus-circle'
																					/>
																				</span>
																			</div>
																		</td>
																		<td>
																			<div className='add-product'>
																				<input
																					type='text'
																					className='form-control'
																					defaultValue={50000}
																				/>
																			</div>
																		</td>
																		<td className='action-table-data'>
																			<div className='edit-delete-action'>
																				<div className='input-block add-lists'>
																					<label className='checkboxs'>
																						<input
																							type='checkbox'
																							defaultChecked=''
																						/>
																						<span className='checkmarks' />
																					</label>
																				</div>
																				<Link
																					className='me-2 p-2'
																					to='#'
																					data-bs-toggle='modal'
																					data-bs-target='#edit-units'
																				>
																					<i
																						data-feather='plus'
																						className='feather-edit'
																					/>
																				</Link>
																				<Link
																					className='confirm-text p-2'
																					to='#'
																				>
																					<i
																						data-feather='trash-2'
																						className='feather-trash-2'
																					/>
																				</Link>
																			</div>
																		</td>
																	</tr>
																</tbody>
															</table>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div
								className='accordion-card-one accordion'
								id='accordionExample4'
							>
								<div className='accordion-item'>
									<div
										className='accordion-header'
										id='headingFour'
									>
										<div
											className='accordion-button'
											data-bs-toggle='collapse'
											data-bs-target='#collapseFour'
											aria-controls='collapseFour'
										>
											<div className='text-editor add-list'>
												<div className='addproduct-icon list'>
													<h5>
														<List className='add-info' />
														<span>Custom Fields</span>
													</h5>
													<Link to='#'>
														<ChevronDown className='chevron-down-add' />
													</Link>
												</div>
											</div>
										</div>
									</div>
									<div
										id='collapseFour'
										className='accordion-collapse collapse show'
										aria-labelledby='headingFour'
										data-bs-parent='#accordionExample4'
									>
										<div className='accordion-body'>
											<div className='text-editor add-list add'>
												<div className='custom-filed'>
													<div className='input-block add-lists'>
														<label className='checkboxs'>
															<input type='checkbox' />
															<span className='checkmarks' />
															Warranties
														</label>
														<label className='checkboxs'>
															<input type='checkbox' />
															<span className='checkmarks' />
															Manufacturer
														</label>
														<label className='checkboxs'>
															<input type='checkbox' />
															<span className='checkmarks' />
															Expiry
														</label>
													</div>
												</div>
												<div className='row'>
													<div className='col-lg-4 col-sm-6 col-12'>
														<div className='input-blocks add-product'>
															{/* <label>Discount Type</label>
															<Select
																classNamePrefix='react-select'
																options={discounttype1}
																placeholder='Choose'
															/> */}
														</div>
													</div>
												</div>
												<div className='row'>
													<div className='col-lg-4 col-sm-6 col-12'>
														<div className='input-blocks add-product'>
															<label>Quantity Alert</label>
															<input
																type='text'
																className='form-control'
															/>
														</div>
													</div>
													<div className='col-lg-4 col-sm-6 col-12'>
														<div className='input-blocks'>
															<label>Manufactured Date</label>
															<div className='input-groupicon calender-input'>
																<Calendar className='info-img' />
																<DatePicker
																	selected={selectedDate}
																	onChange={handleDateChange}
																	type='date'
																	className='datetimepicker'
																	dateFormat='dd-MM-yyyy'
																	placeholder='Choose Date'
																/>
															</div>
														</div>
													</div>
													<div className='col-lg-4 col-sm-6 col-12'>
														<div className='input-blocks'>
															<label>Expiry On</label>
															<div className='input-groupicon calender-input'>
																<Calendar className='info-img' />
																<DatePicker
																	selected={selectedDate1}
																	onChange={handleDateChange1}
																	type='date'
																	className='datetimepicker'
																	dateFormat='dd-MM-yyyy'
																	placeholder='Choose Date'
																/>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='col-lg-12'>
						<div className='btn-addproduct mb-4'>
							<button
								type='button'
								className='btn btn-cancel me-2'
							>
								Cancel
							</button>
							<Link
								to={route.addproduct}
								className='btn btn-submit'
							>
								Save Product
							</Link>
						</div>
					</div>
				</form>
				{/* /add */}
			</div>
			<Addunits />
			<AddCategory />
			<AddBrand />
		</div>
	);
};

export default AddProduct;
