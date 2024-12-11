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
	ToggleRight,
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
	const [activeTab, setActiveTab] = useState('product-info');
	const [selectedDate, setSelectedDate] = useState(new Date());
	const handleDateChange = (date) => {
		setSelectedDate(date);
	};
	const [selectedDate1, setSelectedDate1] = useState(new Date());
	const [allowPoints, setAllowPoints] = useState(false);
	const [website, setWebsite] = useState(false);
	const [webOnly, setWebOnly] = useState(false);
	const [keyItem, setKeyItem] = useState(false);
	const [instantlyUpdateOnWebShop, setInstantlyUpdateWebShop] = useState(false);
	const [allowDiscount, setAllowDiscount] = useState(false);
	const [currentProduct, setCurrentProduct] = useState(false);
	const [isDiscontinued, setIsDiscontinued] = useState(false);
	const [doNotReOrder, setDoNotReOrder] = useState(false);
	const {
		register,
		handleSubmit,
		reset,
		setValue,
		getValues,
		formState: { isSubmitSuccessful, errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log('Form Data:', data);
		// Handle form submission (e.g., send data to your backend)
		reset(); // Reset form after successful submission
	};

	const handleNextTab = (nextTab) => {
		setActiveTab(nextTab);
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
		{ value: 'Both', label: 'Both' },
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

	const setAllFourPrice = () => {
		// Get the value of storePrice
		const storePriceValue = getValues('storePrice');

		// Update the other fields
		setValue('tradePrice', storePriceValue);
		setValue('mailOrderPrice', storePriceValue);
		setValue('webPrice', storePriceValue); // Replace `anotherField` with the actual name
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

				{/* Tab Section */}
				<div className='tabs-wrapper'>
					<ul
						className='nav nav-tabs'
						id='product-tabs'
						role='tabList'
					>
						<li
							className='nav-item'
							role='presentation'
						>
							<button
								className={`nav-link ${
									activeTab === 'product-info' ? 'active' : ''
								} `}
								onClick={() => setActiveTab('product-info')}
								type='button'
							>
								Product Info
							</button>
						</li>
						<li
							className='nav-item'
							role='presentation'
						>
							<button
								className={`nav-link ${
									activeTab === 'minmax' ? 'active' : ''
								} `}
								onClick={() => setActiveTab('minmax')}
								type='button'
							>
								Min/Max
							</button>
						</li>
						<li
							className='nav-item'
							role='presentation'
						>
							<button
								className={`nav-link ${
									activeTab === 'description' ? 'active' : ''
								} `}
								onClick={() => setActiveTab('description')}
								type='button'
							>
								Description
							</button>
						</li>
						<li
							className='nav-item'
							role='presentation'
						>
							<button
								className={`nav-link ${
									activeTab === 'specification' ? 'active' : ''
								} `}
								onClick={() => setActiveTab('specification')}
								type='button'
							>
								Specification
							</button>
						</li>
						<li
							className='nav-item'
							role='presentation'
						>
							<button
								className={`nav-link ${
									activeTab === 'geometry' ? 'active' : ''
								} `}
								onClick={() => setActiveTab('geometry')}
								type='button'
							>
								Geometry
							</button>
						</li>
						<li
							className='nav-item'
							role='presentation'
						>
							<button
								className={`nav-link ${
									activeTab === 'product-notes' ? 'active' : ''
								} `}
								onClick={() => setActiveTab('product-notes')}
								type='button'
							>
								Product Notes
							</button>
						</li>
					</ul>
				</div>
				{/* /add */}

				<form onSubmit={handleSubmit(onSubmit)}>
					<div
						className='tab-content'
						id='product-tabs-content'
					>
						<div
							className={`tab-pane ${
								activeTab === 'product-info' ? 'active' : ''
							}`}
						>
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
																	{...register('mfrPartNumber', {
																		required: true,
																	})}
																	className='form-control'
																/>
																{errors.mfrPartNumber && (
																	<div className='invalid-feedback'>
																		{errors.mfrPartNumber.message}
																	</div>
																)}
															</div>
															<div className='mb-3 add-product d-flex align-items-center justify-content-between'>
																<div className='flex-grow-1 me-3'>
																	<label className='form-label text-start d-block'>
																		Major/Minor
																	</label>
																	<Select
																		classNamePrefix='react-select'
																		options={majorMinorOption}
																		placeholder='Choose'
																	/>
																</div>

																<div className='flex-grow-1'>
																	<label className='form-label text-start d-block'>
																		Gender
																	</label>
																	<Select
																		id='gender'
																		classNamePrefix='react-select'
																		options={genders}
																		onChange={(selectedOption) =>
																			setValue('gender', selectedOption?.value)
																		}
																		placeholder='Choose'
																	/>
																	{errors.gender && (
																		<div className='invalid-feedback'>
																			{errors.gender.message}
																		</div>
																	)}
																</div>
															</div>

															<div className='mb-3 add-product d-flex align-items-center justify-content-between'>
																<div className='flex-grow-1 me-3'>
																	<label className='form-label text-start me-3'>
																		Search 1
																	</label>
																	<input
																		type='text'
																		{...register('search1', {
																			required: true,
																		})}
																		className='form-control'
																	/>
																	{errors.search1 && (
																		<div className='invalid-feedback'>
																			{errors.search1.message}
																		</div>
																	)}
																</div>
																<div className='flex-grow-1'>
																	<label className='form-label'>Search 2</label>
																	<input
																		type='text'
																		{...register('search2', {
																			required: true,
																		})}
																		className='form-control'
																	/>
																	{errors.search2 && (
																		<div className='invalid-feedback'>
																			{errors.search2.message}
																		</div>
																	)}
																</div>
															</div>

															<div className='input-blocks summer-description-box transfer mb-3'>
																<label className='form-label'>Details</label>
																<textarea
																	className='form-control h-100'
																	rows={3}
																	{...register('details')}
																	defaultValue={''}
																/>
																{errors.details && (
																	<div className='invalid-feedback'>
																		{errors.details.message}
																	</div>
																)}
																<p className='mt-1'>Maximum 60 Characters</p>
															</div>

															<div className='mb-3 add-product d-flex align-items-center justify-content-between'>
																<div className='flex-grow-1 me-3'>
																	<label className='form-label text-start d-flex justify-content-between'>
																		Store Price
																		<span>
																			<button
																				className='btn btn-submit text-white rounded-2'
																				style={{
																					paddingTop: '2px',
																					paddingBottom: '2px',
																				}}
																				onClick={setAllFourPrice}
																			>
																				All
																			</button>
																		</span>
																	</label>
																	<input
																		type='text'
																		{...register('storePrice', {
																			required: true,
																		})}
																		className='form-control'
																	/>
																	{errors.storePrice && (
																		<div className='invalid-feedback'>
																			{errors.storePrice.message}
																		</div>
																	)}
																</div>
																<div className='flex-grow-1'>
																	<label className='form-label text-start d-block'>
																		Mail Order
																	</label>
																	<input
																		type='text'
																		{...register('mailOrderPrice', {
																			required: true,
																		})}
																		className='form-control'
																	/>
																	{errors.mailOrderPrice && (
																		<div className='invalid-feedback'>
																			{errors.mailOrderPrice.message}
																		</div>
																	)}
																</div>
															</div>
														</div>

														<div className='col-lg-4 col-sm-6 col-12'>
															<div className='mb-3 add-product'>
																<label className='form-label'>Make</label>
																<input
																	type='text'
																	{...register('make', { required: true })}
																	className='form-control'
																/>
																{errors.make && (
																	<div className='invalid-feedback'>
																		{errors.make.message}
																	</div>
																)}
															</div>

															<div className='mb-3 add-product d-flex align-items-center justify-content-between'>
																<div className='flex-grow-1 me-3'>
																	<label className='form-label text-start d-block'>
																		Size
																	</label>
																	<input
																		type='text'
																		{...register('size', { required: true })}
																		className='form-control'
																	/>
																	{errors.size && (
																		<div className='invalid-feedback'>
																			{errors.size.message}
																		</div>
																	)}
																</div>

																<div className='flex-grow-1'>
																	<label className='form-label text-start d-block'>
																		Weight
																	</label>
																	<input
																		type='text'
																		{...register('weight', { required: true })}
																		className='form-control'
																	/>
																	{errors.weight && (
																		<div className='invalid-feedback'>
																			{errors.weight.message}
																		</div>
																	)}
																</div>
															</div>

															<div className='mb-3 add-product d-flex align-items-center justify-content-between'>
																<div className='flex-grow-1 me-3'>
																	<label className='form-label text-start d-block'>
																		Category A
																	</label>
																	<input
																		type='text'
																		{...register('catA', { required: true })}
																		className='form-control'
																	/>
																	{errors.catA && (
																		<div className='invalid-feedback'>
																			{errors.catA.message}
																		</div>
																	)}
																</div>

																<div className='flex-grow-1'>
																	<label className='form-label text-start d-block'>
																		Barcode
																	</label>
																	<input
																		type='text'
																		{...register('barcode')}
																		className='form-control'
																	/>
																	{errors.barcode && (
																		<div className='invalid-feedback'>
																			{errors.barcode.message}
																		</div>
																	)}
																</div>
															</div>

															<div className='mb-3 add-product d-flex align-items-center justify-content-between'>
																<div className='flex-grow-1 me-3'>
																	<label className='form-label text-start d-block'>
																		Category B
																	</label>
																	<input
																		type='text'
																		{...register('catB', { required: true })}
																		className='form-control'
																	/>
																	{errors.catB && (
																		<div className='invalid-feedback'>
																			{errors.catB.message}
																		</div>
																	)}
																</div>
																<div className='flex-grow-1'>
																	<label className='form-label text-start d-block'>
																		Range
																	</label>
																	<input
																		type='text'
																		{...register('range', { required: true })}
																		className='form-control list'
																	/>
																	{errors.range && (
																		<div className='invalid-feedback'>
																			{errors.range.message}
																		</div>
																	)}
																</div>
															</div>

															<div className='mb-3 add-product d-flex align-items-center justify-content-between'>
																<div className='flex-grow-1 me-3'>
																	<label className='form-label text-start d-block'>
																		Category C
																	</label>
																	<input
																		type='text'
																		{...register('catC', { required: true })}
																		className='form-control'
																	/>
																	{errors.catC && (
																		<div className='invalid-feedback'>
																			{errors.catC.message}
																		</div>
																	)}
																</div>
																<div className='flex-grow-1'>
																	<label className='form-label text-start d-block'>
																		Year/Style
																	</label>
																	<input
																		type='text'
																		{...register('year', { required: true })}
																		className='form-control list'
																	/>
																	{errors.year && (
																		<div className='invalid-feedback'>
																			{errors.year.message}
																		</div>
																	)}
																</div>
															</div>

															<div className='mb-3 add-product d-flex align-items-center justify-content-between'>
																<div className='flex-grow-1 me-3'>
																	<label className='form-label text-start d-block'>
																		Trade Price
																	</label>
																	<input
																		type='text'
																		{...register('tradePrice', {
																			required: true,
																		})}
																		className='form-control'
																	/>
																	{errors.tradePrice && (
																		<div className='invalid-feedback'>
																			{errors.tradePrice.message}
																		</div>
																	)}
																</div>
																<div className='flex-grow-1'>
																	<label className='form-label text-start d-block'>
																		Web Price
																	</label>
																	<input
																		type='text'
																		{...register('webPrice', {
																			required: true,
																		})}
																		className='form-control'
																	/>
																	{errors.webPrice && (
																		<div className='invalid-feedback'>
																			{errors.webPrice.message}
																		</div>
																	)}
																</div>
															</div>
														</div>

														<div className='col-lg-4 col-sm-6 col-12'>
															<div className='addproduct-icon list'>
																<h5>
																	<ToggleRight className='add-info' />
																	<span>Switches</span>
																</h5>
															</div>
															<div className='add-choosen'>
																<div className='input-block add-lists'>
																	<label className='checkboxs'>
																		<Switch
																			checked={currentProduct}
																			onChange={(value) => {
																				setCurrentProduct((prev) => !prev);
																				setValue('current', value);
																			}}
																			style={{ marginRight: '4px' }}
																		/>
																		Current Product
																	</label>
																	<label className='checkboxs'>
																		<Switch
																			checked={allowDiscount}
																			onChange={(value) => {
																				setAllowDiscount((prev) => !prev);
																				setValue('allowDiscount', value);
																			}}
																			style={{ marginRight: '4px' }}
																		/>
																		Allow Discount
																	</label>
																	<label className='checkboxs'>
																		<Switch
																			checked={allowPoints}
																			onChange={(value) => {
																				setAllowPoints((prev) => !prev);
																				setValue('allowPoints', value);
																			}}
																			style={{ marginRight: '4px' }}
																		/>
																		Allow Points
																	</label>
																	<label className='checkboxs'>
																		<Switch
																			checked={website}
																			onChange={(value) => {
																				setWebsite((prev) => !prev);
																				setValue('website', value);
																			}}
																			style={{ marginRight: '4px' }}
																		/>
																		Website
																	</label>
																	<label className='checkboxs'>
																		<Switch
																			checked={webOnly}
																			onChange={(value) => {
																				setWebOnly((prev) => !prev);
																				setValue('webOnly', value);
																			}}
																			style={{ marginRight: '4px' }}
																		/>
																		Web Only
																	</label>
																	<label className='checkboxs'>
																		<Switch
																			checked={keyItem}
																			onChange={(value) => {
																				setKeyItem((prev) => !prev);
																				setValue('keyItem', value);
																			}}
																			style={{ marginRight: '4px' }}
																		/>
																		Key Item
																	</label>
																	<label className='checkboxs'>
																		<Switch
																			checked={instantlyUpdateOnWebShop}
																			onChange={() => {
																				setInstantlyUpdateWebShop(
																					(prev) => !prev
																				);
																				// setValue('keyItem', value);
																			}}
																			style={{ marginRight: '4px' }}
																		/>
																		Instantly Update Web Shop
																	</label>

																	<label className='checkboxs'>
																		<Switch
																			checked={isDiscontinued}
																			onChange={(value) => {
																				setIsDiscontinued((prev) => !prev);
																				setValue('isDiscontinued', value);
																			}}
																			style={{ marginRight: '4px' }}
																		/>
																		Discontinued
																	</label>

																	<label className='checkboxs'>
																		<Switch
																			checked={doNotReOrder}
																			onChange={(value) => {
																				setDoNotReOrder((prev) => !prev);
																				setValue('doNotReOrder', value);
																			}}
																			style={{ marginRight: '4px' }}
																		/>
																		Don't ReOrder
																	</label>
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
																		<span className='checkmark' /> Single
																		Product
																	</span>
																</li>
																{/* <li
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
														</li> */}
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
																			<div className='invalid-feedback'>
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
																			<div className='invalid-feedback'>
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
																			{...register('discountPercentage')}
																			placeholder='0.00'
																		/>
																		{errors.discountPercentage && (
																			<div className='invalid-feedback'>
																				{errors.discountPercentage.message}
																			</div>
																		)}
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
																			<div className='invalid-feedback'>
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
																			<div className='invalid-feedback'>
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
																										onClick={
																											handleRemoveProduct1
																										}
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
																										onClick={
																											handleRemoveProduct
																										}
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
										id='accordionExample3'
									>
										<div className='accordion-item'>
											<div
												className='accordion-header'
												id='headingFive'
											>
												<div
													className='accordion-button'
													data-bs-toggle='collapse'
													data-bs-target='#collapseFive'
													aria-controls='collapseFive'
												></div>
											</div>
											<div
												id='collapseFive'
												className='accordion-collapse collapse show'
												aria-labelledby='headingFive'
												data-bs-parent='#accordionExample3'
											>
												<div className='accordion-body'>
													<div className='text-editor add-list add'>
														<div className='col-lg-12'></div>
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
																	<label>Promo Name</label>
																	<input
																		type='text'
																		{...register('promoName')}
																		className='form-control'
																	/>
																	{errors.promoName && (
																		<div className='invalid-feedback'>
																			{errors.promoName.message}
																		</div>
																	)}
																</div>
															</div>
															<div className='col-lg-4 col-sm-6 col-12'>
																<div className='input-blocks add-product'>
																	<label>Promo RRP</label>
																	<input
																		type='text'
																		{...register('promoPrice')}
																		className='form-control'
																	/>
																	{errors.promoPrice && (
																		<div className='invalid-feedback'>
																			{errors.promoPrice.message}
																		</div>
																	)}
																</div>
															</div>
															<div className='col-lg-4 col-sm-6 col-12'>
																<div className='row'>
																	<div className='col-lg-4 col-sm-6 col-12'>
																		<div className='input-blocks'>
																			<label>From</label>
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
																			<label>To</label>
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
															<div className='col-lg-4 col-sm-6 col-12'></div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='text-end'>
								<button
									type='button'
									className='btn btn-submit'
									onClick={() => handleNextTab('minmax')}
								>
									Save and Continue
								</button>
							</div>
						</div>

						<div
							className={`tab-pane ${activeTab === 'minmax' ? 'active' : ''}`}
						>
							<div className='card'>
								<h5>Min/Max</h5>
								<p>Min/Max content goes here.</p>
							</div>

							<div className='text-end'>
								<button
									type='button'
									className='btn btn-submit'
									onClick={() => handleNextTab('description')}
								>
									Save and Continue
								</button>
							</div>
						</div>

						<div
							className={`tab-pane ${
								activeTab === 'description' ? 'active' : ''
							}`}
						>
							<div className='card'>
								<h5>Description</h5>
								<textarea
									{...register('description')}
									className='form-control'
									rows={3}
									placeholder='Enter product description...'
								/>
								{errors.description && (
									<div className='invalid-feedback'>
										Description is required.
									</div>
								)}
							</div>
							<div className='text-end'>
								<button
									type='button'
									className='btn btn-submit'
									onClick={() => handleNextTab('specification')}
								>
									Save and Continue
								</button>
							</div>
						</div>

						<div
							className={`tab-pane ${
								activeTab === 'specification' ? 'active' : ''
							}`}
						>
							<div className='card'>
								<h5>Specification</h5>
								<textarea
									{...register('specification')}
									className='form-control'
									rows={3}
									placeholder='Enter product specifications...'
								/>
								{errors.specification && (
									<div className='invalid-feedback'>
										Specification is required.
									</div>
								)}
							</div>
							<div className='text-end'>
								<button
									type='button'
									className='btn btn-submit'
									onClick={() => handleNextTab('geometry')}
								>
									Save and Continue
								</button>
							</div>
						</div>

						<div
							className={`tab-pane ${activeTab === 'geometry' ? 'active' : ''}`}
						>
							<div className='card'>
								<h5>Geometry</h5>
								<textarea
									{...register('geometry')}
									className='form-control'
									rows={3}
									placeholder='Enter product geometry details...'
								/>
								{errors.geometry && (
									<div className='invalid-feedback'>Geometry is required.</div>
								)}
							</div>
							<div className='text-end'>
								<button
									type='button'
									className='btn btn-submit'
									onClick={() => handleNextTab('product-notes')}
								>
									Save and Continue
								</button>
							</div>
						</div>

						<div
							className={`tab-pane ${
								activeTab === 'product-notes' ? 'active' : ''
							}`}
						>
							<div className='card'>
								<h5>Product-notes</h5>
								<textarea
									{...register('productNotes')}
									className='form-control'
									rows={3}
									placeholder='Enter product notes...'
								/>
								{errors.productNotes && (
									<div className='invalid-feedback'>
										Product notes are required.
									</div>
								)}
							</div>

							<div className='text-end'>
								<button
									type='submit'
									className='btn btn-submit'
								>
									Save and Create
								</button>
							</div>
						</div>
					</div>
				</form>
			</div>
			{/* /add */}

			<Addunits />
			<AddCategory />
			<AddBrand />
		</div>
	);
};

export default AddProduct;
