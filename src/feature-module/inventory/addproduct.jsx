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
	Camera,
	// List,
	ToggleRight,
	PlusCircle,
	Trash2,
	X,
	Search,
} from 'feather-icons-react/build/IconComponents';
import { useDispatch, useSelector } from 'react-redux';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
// import ImageWithBasePath from '../../core/img/imagewithbasebath';
import { useForm } from 'react-hook-form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './addProductReactQuill.css';
import { setToggleHeader } from '../../slices/productListSlice';
import Table from '../../core/pagination/datatable';
import { refreshCategories } from '../../slices/categorySlice';
import ProductSearch from '../../core/modals/inventory/ProductSearch';
import { Modal } from 'bootstrap';
import {
	createProduct,
	getProductByPartNo,
	updateProduct,
} from '../../service/operations/productApi';
const AddProduct = () => {
	const route = all_routes;
	const dispatch = useDispatch();
	const { toggle_header } = useSelector((state) => state.product);
	const { categories } = useSelector((state) => state.category);
	const { token } = useSelector((state) => state.auth);
	const [isEditMode, setIsEditMode] = useState(false);
	const [apiData, setApiData] = useState(null);
	const [activeTab, setActiveTab] = useState('product-info');
	const [selectedDate, setSelectedDate] = useState(new Date());
	const [selectedDate1, setSelectedDate1] = useState(new Date());
	// const [allowPoints, setAllowPoints] = useState(false);
	// const [website, setWebsite] = useState(false);
	// const [webOnly, setWebOnly] = useState(false);
	// const [keyItem, setKeyItem] = useState(false);
	// const [instantlyUpdateOnWebShop, setInstantlyUpdateWebShop] = useState(false);
	// const [isDiscontinued, setIsDiscontinued] = useState(false);
	// const [doNotReOrder, setDoNotReOrder] = useState(false);
	const {
		register,
		handleSubmit,
		reset,
		watch,
		setValue,
		getValues,
		trigger,
		formState: { isSubmitSuccessful, errors },
	} = useForm();

	const partNumber = watch('partNumber');

	const [longDescription, setLongDescription] = useState('');
	const [geometry, setGeometry] = useState('');
	const [specifications, setSpecifications] = useState('');
	const [data, setData] = useState([
		{
			key: '1',
			branch: '01',
			name: 'ROURKE CYCLES',
			min: 10,
			max: 150,
			replenish: false,
		},
		{
			key: '2',
			branch: '02',
			name: 'ROURKE CYCLES',
			min: 1,
			max: 15,
			replenish: false,
		},
		{
			key: '3',
			branch: '03',
			name: 'ROURKE CYCLES',
			min: 1,
			max: 15,
			replenish: false,
		},
	]);
	const [uploadedImages, setUploadedImages] = useState([]);
	const currentProduct = watch('current');
	const allowDiscount = watch('allowDiscount');
	const allowPoints = watch('allowPoints');
	const website = watch('website');
	const webOnly = watch('webOnly');
	const keyItem = watch('keyItem');
	const instantlyUpdateOnWebShop = watch('instantlyUpdateOnWebShop');
	const isDiscontinued = watch('isDiscontinued');
	const doNotReOrder = watch('doNotReOrder');
	const genders = [
		{ value: 'Unisex', label: 'Unisex' },
		{ value: 'Male', label: 'Male' },
		{ value: 'Female', label: 'Female' },
	];
	const suitabilityOptions = [
		{ value: 'Any', label: 'Any' },
		{ value: 'one', label: 'one' },
	];
	const majorMinorOption = [
		{ value: 'Major', label: 'Major' },
		{ value: 'Minor', label: 'Minor' },
		{ value: 'Both', label: 'Both' },
	];

	const seasonOptions = [
		{ value: 'All', label: 'All' },
		{ value: 'Winter', label: 'Winter' },
		{ value: 'Summer', label: 'Summer' },
	];

	const printLabelOptions = [
		{ value: 'Yes', label: 'Yes' },
		{ value: 'No', label: 'No' },
		{ value: 'One', label: 'One' },
	];

	const categoryOptions = categories?.map((category) => ({
		value: category.code, // Code
		label: `${category.code} - ${category.name}`, // Display both code and name
		name: category.name, // Name (used later)
	}));

	console.log(categories);

	const handleImageUpload = (e) => {
		const file = e.target.files[0];
		if (file) {
			setUploadedImages((prevImages) => {
				// Ensure only 4 images are allowed (mainImage + 3 additional)
				if (prevImages.length < 4) {
					return [...prevImages, file];
				} else {
					alert('You can only upload up to 4 images.');
					return prevImages;
				}
			});
		}
	};

	const handleDateChange = (date) => {
		setSelectedDate(date);
	};

	// Update react-hook-form value when React-Quill value changes

	const onSubmit = async (data) => {
		console.log('Form Data:', data);
		if (isEditMode) {
			try {
				const response = await updateProduct(token, data);
				console.log(response);
				reset();
			} catch (error) {
				console.log(error);
			}
		} else {
			try {
				const response = await createProduct(token, data);
				console.log(response);
				reset();
			} catch (error) {
				console.log(error);
			}
		}
		// Handle form submission (e.g., send data to your backend)
		// Reset form after successful submission
	};

	const handleInputChange = (key, field, value) => {
		setData((prev) =>
			prev.map((item) =>
				item.key === key ? { ...item, [field]: value } : item
			)
		);
	};

	const handleNextTab = async (nextTab, currentTabFields) => {
		const isValid = await trigger(currentTabFields);

		if (isValid) {
			setActiveTab(nextTab);
		} else {
			const firstErrorField = currentTabFields?.find((field) => errors[field]);
			document.getElementsByName(firstErrorField)?.[0]?.focus();
		}
	};

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

	// const [isImageVisible, setIsImageVisible] = useState(true);

	const handleRemoveImage = (index) => {
		setUploadedImages((prevImages) => prevImages.filter((_, i) => i !== index));
	};
	// const [isImageVisible1, setIsImageVisible1] = useState(true);

	// const handleRemoveProduct1 = () => {
	// 	setIsImageVisible1(false);
	// };

	const setAllFourPrice = () => {
		// Get the value of storePrice
		const storePriceValue = getValues('storePrice');

		// Update the other fields
		setValue('tradePrice', storePriceValue);
		setValue('mailOrderPrice', storePriceValue);
		setValue('webPrice', storePriceValue);
	};

	const columns = [
		{ title: 'Branch', dataIndex: 'branch', key: 'branch' },
		{ title: 'Name', dataIndex: 'name', key: 'name' },
		{
			title: 'Min',
			dataIndex: 'min',
			key: 'min',
			render: (text, record) => (
				<input
					type='number'
					value={record.min}
					onChange={(e) => handleInputChange(record.key, 'min', e.target.value)}
					style={{ width: '60px', textAlign: 'center' }}
				/>
			),
		},
		{
			title: 'Max',
			dataIndex: 'max',
			key: 'max',
			render: (text, record) => (
				<input
					type='number'
					value={record.max}
					onChange={(e) => handleInputChange(record.key, 'max', e.target.value)}
					style={{ width: '60px', textAlign: 'center' }}
				/>
			),
		},
		{
			title: 'Replenish',
			dataIndex: 'replenish',
			key: 'replenish',
			render: (text, record) => (
				<input
					type='checkbox'
					checked={record.replenish}
					onChange={(e) =>
						handleInputChange(record.key, 'replenish', e.target.checked)
					}
				/>
			),
		},
	];

	useEffect(() => {
		if (partNumber) {
			setIsEditMode(true); // Switch to edit mode

			// Define an async function to fetch product details
			const fetchProductByPartNumber = async () => {
				try {
					const response = await getProductByPartNo(token, partNumber); // Your API call function

					setApiData(response); // Store fetched data
					Object.keys(data).forEach((key) => {
						setValue(key, data[key]); // Populate form fields
					});
				} catch (error) {
					console.error('Error fetching product data:', error);
				}
			};

			fetchProductByPartNumber(); // Call the async function
		} else {
			setIsEditMode(false); // Switch to create mode
			reset(); // Reset form for new product
		}
	}, [partNumber, setValue, reset, token]);

	useEffect(() => {
		if (apiData) {
			// Populate the form fields with the data from the API
			Object.keys(apiData).forEach((key) => {
				setValue(key, apiData[key]); // Populate form fields
			});
		}
	}, [apiData, setValue]);

	useEffect(() => {
		// Set the default value of "year" to the current year
		const currentYear = new Date().getFullYear();
		setValue('year', currentYear.toString());
	}, [setValue]);

	useEffect(() => {
		setValue('longDescription', longDescription);
	}, [longDescription, setValue]);

	useEffect(() => {
		setValue('geometry', geometry);
	}, [geometry, setValue]);

	useEffect(() => {
		setValue('specifications', specifications);
	}, [specifications, setValue]);

	// console.log('Form Errors:', errors);

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

	useEffect(() => {
		// Add keydown listener
		const handleKeyDown = (event) => {
			// Check for F5 key press
			if (event.key === 'F5') {
				event.preventDefault(); // Prevent default browser behavior

				// Check if Part Number is empty
				const partNumber = getValues('partNumber');
				if (!partNumber) {
					// Open the Product Search modal
					const modalElement = document.getElementById('product-search');
					if (modalElement) {
						const modalInstance = new Modal(modalElement);
						modalInstance.show();
					}
				}
			}
		};

		// Attach the event listener
		window.addEventListener('keydown', handleKeyDown);

		// Cleanup the event listener on unmount
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [getValues]);

	useEffect(() => {
		dispatch(refreshCategories());
	}, [dispatch]);

	useEffect(() => {
		setValue('images', uploadedImages); // Register images in react-hook-form
	}, [uploadedImages, setValue]);

	return (
		<div className='page-wrapper'>
			<div className='content'>
				<div className='page-header'>
					<div className='add-item d-flex'>
						<div className='page-title'>
							<h4>{isEditMode ? 'Edit Product' : 'New Product'}</h4>
							<h6>{isEditMode ? 'Edit the product' : 'Create new product'}</h6>
						</div>
					</div>
					<ul className='table-top-head'>
						<li>
							<div className='page-btn'>
								<Link
									to='#'
									className='btn btn-added'
									data-bs-toggle='modal'
									data-bs-target='#product-search'
								>
									<Search
										className='me-2'
										style={{ color: '#fff' }}
									/>
									Product Search
								</Link>
							</div>
						</li>
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
									className={toggle_header ? 'active' : ''}
									onClick={() => {
										dispatch(setToggleHeader(!toggle_header));
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
				{/* /add */}(
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
															<div className='mb-3 add-product d-flex justify-content-between align-items-center'>
																<div className='flex-grow-1 me-3'>
																	<label className='form-label'>
																		Part Number{' '}
																		<span className='text-danger'> F5</span>
																	</label>
																	<input
																		type='text'
																		{...register('partNumber')}
																		readOnly={isEditMode}
																		className='form-control'
																	/>
																	{errors?.partNumber && (
																		<div className='text-danger'>
																			{errors?.partNumber?.message}
																		</div>
																	)}
																</div>
																<div className='flex-grow-1 me-3'>
																	<label className='form-label'>
																		Manufacture Part Code
																	</label>
																	<input
																		type='text'
																		{...register('mfrPartNumber', {
																			required: 'MFR Part Number is required',
																		})}
																		className='form-control'
																	/>
																	{errors?.mfrPartNumber && (
																		<div className='text-danger'>
																			{errors?.mfrPartNumber?.message}
																		</div>
																	)}
																</div>

																<div className='flex-grow-1'>
																	<label className='form-label'>Make</label>
																	<input
																		type='text'
																		{...register('make', {
																			required: 'Make is Required',
																		})}
																		className='form-control'
																	/>
																	{errors?.make && (
																		<div className='text-danger'>
																			{errors?.make?.message}
																		</div>
																	)}
																</div>
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
																	{errors?.gender && (
																		<div className='text-danger'>
																			{errors?.gender?.message}
																		</div>
																	)}
																</div>
															</div>

															<div className='mb-3 add-product d-flex align-items-center justify-content-between'>
																<div className='flex-grow-1 me-3'>
																	<label className='form-label text-start d-block'>
																		Suitability
																	</label>
																	<Select
																		classNamePrefix='react-select'
																		options={suitabilityOptions}
																		onChange={(selectedOption) =>
																			setValue(
																				'suitability',
																				selectedOption?.value
																			)
																		}
																		placeholder='Choose'
																	/>
																</div>

																<div className='flex-grow-1'>
																	<label className='form-label text-start d-block'>
																		Season
																	</label>
																	<Select
																		id='season'
																		classNamePrefix='react-select'
																		options={seasonOptions}
																		onChange={(selectedOption) =>
																			setValue('season', selectedOption?.value)
																		}
																		placeholder='Choose'
																	/>
																	{errors?.season && (
																		<div className='text-danger'>
																			{errors?.season?.message}
																		</div>
																	)}
																</div>
															</div>

															<div className='mb-3 add-product d-flex align-items-center justify-content-between'>
																<div className='flex-grow-1 me-3'>
																	<label className='form-label text-start d-block'>
																		Supplier 1
																	</label>
																	<input
																		type='text'
																		{...register('supplier1Code', {
																			required: 'Supplier is required',
																		})}
																		className='form-control'
																	/>
																	{errors?.supplier1Code && (
																		<div className='text-danger'>
																			{errors?.supplier1Code?.message}
																		</div>
																	)}
																</div>
																<div className='flex-grow-1'>
																	<label className='form-label text-start d-block'>
																		Supplier 2
																	</label>
																	<input
																		type='text'
																		{...register(
																			'supplier2Code'
																			// {
																			// 	required: true,
																			// }
																		)}
																		className='form-control'
																	/>
																	{errors?.supplier2Code && (
																		<div className='text-danger'>
																			{errors?.supplier2Code?.message}
																		</div>
																	)}
																</div>
															</div>

															<div className='mb-3 add-product d-flex align-items-center justify-content-between'>
																<div className='flex-grow-1 me-3'>
																	<label className='form-label text-start d-block'>
																		Bin Location 1
																	</label>
																	<input
																		type='text'
																		{...register(
																			'binLocation1'
																			// {
																			// 	required: true,
																			// }
																		)}
																		className='form-control'
																	/>
																	{errors?.binLocation1 && (
																		<div className='text-danger'>
																			{errors?.binLocation1?.message}
																		</div>
																	)}
																</div>
																<div className='flex-grow-1'>
																	<label className='form-label text-start d-block'>
																		Bin Location 2
																	</label>
																	<input
																		type='text'
																		{...register(
																			'binLocation2'
																			// {
																			// 	required: true,
																			// }
																		)}
																		className='form-control'
																	/>
																	{errors?.binLocation2 && (
																		<div className='text-danger'>
																			{errors?.binLocation2?.message}
																		</div>
																	)}
																</div>
															</div>

															<div className='mb-3 add-product d-flex align-items-center justify-content-between'>
																<div className='flex-grow-1 me-3'>
																	<label className='form-label text-start d-block'>
																		Multibuy Quantity
																	</label>
																	<input
																		type='text'
																		{...register(
																			'multibuyQuantity'
																			// {
																			// 	required: true,
																			// }
																		)}
																		className='form-control'
																	/>
																	{errors?.multibuyQuantity && (
																		<div className='text-danger'>
																			{errors?.multibuyQuantity?.message}
																		</div>
																	)}
																</div>
																<div className='flex-grow-1'>
																	<label className='form-label text-start d-block'>
																		Multibuy Save
																	</label>
																	<input
																		type='text'
																		{...register(
																			'multibuySave'
																			// {
																			// 	required: true,
																			// }
																		)}
																		className='form-control'
																	/>
																	{errors?.multibuySave && (
																		<div className='text-danger'>
																			{errors?.multibuySave?.message}
																		</div>
																	)}
																</div>
															</div>

															<div className='mb-3 d-flex justify-content-between align-items-center input-blocks add-product'>
																<div className='flex-grow-1 me-3'>
																	<label className='form-label d-block text-start'>
																		Promo Name
																	</label>
																	<input
																		type='text'
																		{...register('promoName')}
																		className='form-control'
																	/>
																	{errors?.promoName && (
																		<div className='text-danger'>
																			{errors?.promoName?.message}
																		</div>
																	)}
																</div>
																<div className='flex-grow-1'>
																	<label className='text-start d-block form-label'>
																		Promo RRP
																	</label>
																	<input
																		type='text'
																		{...register('promoPrice')}
																		className='form-control'
																	/>
																	{errors?.promoPrice && (
																		<div className='text-danger'>
																			{errors?.promoPrice?.message}
																		</div>
																	)}
																</div>
															</div>
														</div>

														<div className='col-lg-4 col-sm-6 col-12'>
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
																	{errors?.size && (
																		<div className='text-danger'>
																			{errors?.size?.message}
																		</div>
																	)}
																</div>

																<div className='flex-grow-1'>
																	<label className='form-label text-start d-block'>
																		Weight
																	</label>
																	<input
																		type='text'
																		{...register('weight', {
																			required: true,
																		})}
																		className='form-control'
																	/>
																	{errors?.weight && (
																		<div className='text-danger'>
																			{errors?.weight?.message}
																		</div>
																	)}
																</div>
															</div>

															<div className='mb-3 add-product d-flex align-items-center justify-content-between'>
																<div className='flex-grow-1 me-3'>
																	<label className='form-label text-start d-block'>
																		Category A
																	</label>
																	<Select
																		classNamePrefix='react-select'
																		options={categoryOptions}
																		onChange={(selectedOption) => {
																			setValue('catA', selectedOption?.name);
																			setValue(
																				'catACode',
																				selectedOption?.value
																			);
																		}}
																		placeholder='Choose'
																	/>
																	{/* Hidden input for validation purposes */}
																	<input
																		type='hidden'
																		{...register('catA', { required: true })} // Register for form validation
																	/>
																	<input
																		type='hidden'
																		{...register('catAcode', {
																			required: true,
																		})} // Register for the code
																	/>
																	{errors?.catA && (
																		<div className='text-danger'>
																			{errors?.catA?.message}
																		</div>
																	)}
																</div>

																<div className='flex-grow-1'>
																	<label className='form-label text-start d-block'>
																		Category B
																	</label>
																	<Select
																		classNamePrefix='react-select'
																		options={categoryOptions}
																		onChange={(selectedOption) => {
																			setValue('catB', selectedOption?.name);
																			setValue(
																				'catBCode',
																				selectedOption?.value
																			);
																		}}
																		placeholder='Choose'
																	/>
																	<input
																		type='hidden'
																		{...register('catB', {
																			required: 'Category B is required',
																		})}
																		className='form-control'
																	/>
																	{errors?.catB && (
																		<div className='text-danger'>
																			{errors?.catB?.message}
																		</div>
																	)}
																</div>
															</div>

															<div className='mb-3 add-product d-flex align-items-center justify-content-between'>
																<div className='flex-grow-1 me-3'>
																	<label className='form-label text-start d-block'>
																		Category C
																	</label>
																	<Select
																		classNamePrefix='react-select'
																		options={categoryOptions}
																		onChange={(selectedOption) => {
																			setValue('catC', selectedOption?.name);
																			setValue(
																				'catCCode',
																				selectedOption?.value
																			);
																		}}
																		placeholder='Choose'
																	/>
																	<input
																		type='hidden'
																		{...register('catC', {
																			required: 'Category C is required',
																		})}
																		className='form-control'
																	/>
																	{errors?.catC && (
																		<div className='text-danger'>
																			{errors?.catC?.message}
																		</div>
																	)}
																</div>

																<div className='flex-grow-1'>
																	<label className='form-label text-start d-block'>
																		Print Label
																	</label>
																	<Select
																		id='printLabel'
																		classNamePrefix='react-select'
																		options={printLabelOptions}
																		onChange={(selectedOption) =>
																			setValue(
																				'printLabel',
																				selectedOption?.value
																			)
																		}
																		placeholder='Choose'
																	/>
																</div>
															</div>

															<div className='mb-3 add-product d-flex align-items-center justify-content-between'>
																<div className='flex-grow-1 me-3'>
																	<label className='form-label text-start d-block'>
																		Barcode
																	</label>
																	<input
																		type='text'
																		{...register('barcode')}
																		className='form-control'
																	/>
																	{errors?.barcode && (
																		<div className='text-danger'>
																			{errors?.barcode?.message}
																		</div>
																	)}
																</div>
																<div className='flex-grow-1'>
																	<label className='form-label text-start d-block'>
																		Range
																	</label>
																	<input
																		type='text'
																		{...register('range', {
																			required: 'Range is Required',
																		})}
																		className='form-control list'
																	/>
																	{errors?.range && (
																		<div className='text-danger'>
																			{errors?.range?.message}
																		</div>
																	)}
																</div>
															</div>

															<div className='mb-3 add-product d-flex align-items-center justify-content-between'>
																<div className='flex-grow-1 me-3'>
																	<label className='form-label text-start d-block'>
																		Web Ref
																	</label>
																	<input
																		type='text'
																		{...register(
																			'webRef'
																			// {
																			// 	required: true,
																			// }
																		)}
																		className='form-control'
																	/>
																	{errors?.webRef && (
																		<div className='text-danger'>
																			{errors?.webRef?.message}
																		</div>
																	)}
																</div>
																<div className='flex-grow-1'>
																	<label className='form-label text-start d-block'>
																		Color
																	</label>
																	<input
																		type='text'
																		{...register(
																			'color'
																			// {
																			// 	required: true,
																			// }
																		)}
																		className='form-control'
																	/>
																	{errors?.color && (
																		<div className='text-danger'>
																			{errors?.color?.message}
																		</div>
																	)}
																</div>
															</div>

															<div className='mb-3 d-flex justify-content-between align-items-center input-blocks add-product'>
																<div className='flex-grow-1 me-3'>
																	<label className='form-label d-block text-start'>
																		Nominal Code
																	</label>
																	<input
																		type='text'
																		{...register('nominalCode')}
																		className='form-control'
																	/>
																	{errors?.nominalCode && (
																		<div className='text-danger'>
																			{errors?.nominalCode?.message}
																		</div>
																	)}
																</div>
																<div className='flex-grow-1'>
																	<label className='text-start d-block form-label'>
																		Nominal Section
																	</label>
																	<input
																		type='text'
																		{...register('nominalSection')}
																		className='form-control'
																	/>
																	{errors?.nominalSection && (
																		<div className='text-danger'>
																			{errors?.nominalSection?.message}
																		</div>
																	)}
																</div>
															</div>

															<div className='mb-3 add-product d-flex justify-content-between align-items-center input-blocks'>
																<div className='flex-grow-1 me-3'>
																	<label className='form-label text-start d-block'>
																		From
																	</label>
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
																<div className='flex-grow-1'>
																	<label className='form-label text-start d-block'>
																		To
																	</label>
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

														<div className='col-lg-4 col-sm-6 col-12'>
															<div className='mb-3 add-product d-flex align-items-center justify-content-between'>
																<div className='flex-grow-1 me-3'>
																	<label className='form-label text-start d-block'>
																		Search 1
																	</label>
																	<input
																		type='text'
																		{...register('search1', {
																			required: 'Search is required',
																		})}
																		className='form-control'
																	/>
																	{errors?.search1 && (
																		<div className='text-danger'>
																			{errors?.search1?.message}
																		</div>
																	)}
																</div>
																<div className='flex-grow-1'>
																	<label className='form-label text-start d-block'>
																		Search 2
																	</label>
																	<input
																		type='text'
																		{...register('search2', {
																			required: 'Second search is required',
																		})}
																		className='form-control'
																	/>
																	{errors?.search2 && (
																		<div className='text-danger'>
																			{errors?.search2?.message}
																		</div>
																	)}
																</div>
															</div>

															<div className='input-blocks summer-description-box transfer mb-3'>
																<label className='form-label'>Details</label>
																<textarea
																	className='form-control h-100'
																	rows={2}
																	{...register('details')}
																	defaultValue={''}
																/>
																{errors?.details && (
																	<div className='text-danger'>
																		{errors?.details?.message}
																	</div>
																)}
																<p className='mt-1'>Maximum 60 Characters</p>
															</div>

															<div className='mb-3 add-product d-flex align-items-center justify-content-between'>
																<div className='flex-grow-1 me-3'>
																	<label className='form-label text-start d-block'>
																		Finish
																	</label>
																	<input
																		type='text'
																		{...register('finish', {
																			required: 'Finish is required',
																		})}
																		className='form-control'
																	/>
																	{errors?.finish && (
																		<div className='text-danger'>
																			{errors?.finish?.message}
																		</div>
																	)}
																</div>
																<div className='flex-grow-1'>
																	<label className='form-label text-start d-block'>
																		Year/Style
																	</label>
																	<input
																		type='text'
																		{...register('year', {
																			required: 'Year is required',
																		})}
																		className='form-control list'
																	/>
																	{errors?.year && (
																		<div className='text-danger'>
																			{errors?.year?.message}
																		</div>
																	)}
																</div>
															</div>

															<div className='addproduct-icon list'>
																<h5>
																	<ToggleRight className='add-info' />
																	<span>Switches</span>
																</h5>
															</div>
															<div className='row'>
																<div
																	className='col-lg-6 col-sm-8 col-12'
																	style={{
																		paddingLeft: '4px',
																		paddingRight: '4px',
																	}}
																>
																	<div className='input-block add-lists'>
																		<label className='checkboxs'>
																			<Switch
																				checked={currentProduct}
																				onChange={(value) => {
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
																					setValue('webOnly', value);
																				}}
																				style={{ marginRight: '4px' }}
																			/>
																			Web Only
																		</label>
																	</div>
																</div>
																<div
																	className='col-lg-6 col-sm-8 col-12'
																	style={{
																		paddingLeft: '4px',
																		paddingRight: '4px',
																	}}
																>
																	<div className='input-block add-lists'>
																		<label className='checkboxs'>
																			<Switch
																				checked={keyItem}
																				onChange={(value) => {
																					setValue('keyItem', value);
																				}}
																				style={{ marginRight: '4px' }}
																			/>
																			Key Item
																		</label>
																		<label className='checkboxs'>
																			<Switch
																				checked={instantlyUpdateOnWebShop}
																				onChange={(value) => {
																					setValue(
																						'instantlyUpdateOnWebShop',
																						value
																					);
																				}}
																				style={{ marginRight: '4px' }}
																			/>
																			Instantly Update Web Shop
																		</label>

																		<label className='checkboxs'>
																			<Switch
																				checked={isDiscontinued}
																				onChange={(value) => {
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
																					setValue('doNotReOrder', value);
																				}}
																				style={{ marginRight: '4px' }}
																			/>
																			Don&apos;t ReOrder
																		</label>
																	</div>
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
														<div>
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

																	<li>
																		<button
																			className='btn btn-submit text-white rounded-2'
																			style={{
																				paddingTop: '2px',
																				paddingBottom: '2px',
																			}}
																			onClick={setAllFourPrice}
																			type='button'
																		>
																			All
																		</button>
																	</li>
																</ul>
															</div>
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
																	<div className='mb-3 add-product d-flex align-items-center justify-content-between'>
																		<div className='flex-grow-1 me-3'>
																			<label className='form-label text-start d-flex justify-content-between'>
																				Store Price
																			</label>
																			<input
																				type='text'
																				{...register('storePrice', {
																					required: 'Store Price is required',
																				})}
																				className='form-control'
																			/>
																			{errors?.storePrice && (
																				<div className='text-danger'>
																					{errors?.storePrice?.message}
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
																					required:
																						'Mail Order Price is required',
																				})}
																				className='form-control'
																			/>
																			{errors?.mailOrderPrice && (
																				<div className='text-danger'>
																					{errors?.mailOrderPrice?.message}
																				</div>
																			)}
																		</div>
																	</div>

																	<div className='mb-3 add-product input-blocks d-flex justify-content-between align-items-center'>
																		<div className='flex-grow-1 me-3 '>
																			<label>VAT Code</label>
																			<input
																				type='text'
																				{...register('vatCode')}
																			/>
																			{errors?.vatCode && (
																				<div className='text-danger'>
																					{errors?.vatCode?.message}
																				</div>
																			)}

																			{/* <Select
																	classNamePrefix='react-select'
																	options={taxtype}
																	placeholder='Select Option'
																/> */}
																		</div>

																		<div className='flex-grow-1'>
																			<label>Markup</label>
																			<input
																				type='text'
																				{...register('markup')}
																				className='form-control'
																			/>
																			{errors?.markup && (
																				<div className='text-danger'>
																					{errors?.markup?.message}
																				</div>
																			)}
																		</div>
																	</div>
																</div>
																<div className='col-lg-4 col-sm-6 col-12'>
																	<div className='mb-3 add-product d-flex align-items-center justify-content-between'>
																		<div className='flex-grow-1 me-3'>
																			<label className='form-label text-start d-block'>
																				Trade Price
																			</label>
																			<input
																				type='text'
																				{...register('tradePrice', {
																					required: 'Trade Price is required',
																				})}
																				className='form-control'
																			/>
																			{errors?.tradePrice && (
																				<div className='text-danger'>
																					{errors?.tradePrice?.message}
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
																					required: 'Web Price is required',
																				})}
																				className='form-control'
																			/>
																			{errors?.webPrice && (
																				<div className='text-danger'>
																					{errors?.webPrice?.message}
																				</div>
																			)}
																		</div>
																	</div>

																	<div className='mb-3 add-product input-blocks d-flex align-items-center justify-content-between'>
																		<div className='flex-grow-1 me-3'>
																			<label className='form-label text-start d-block'>
																				Settlement Discount
																			</label>
																			<input
																				type='text'
																				{...register('discountPercentage')}
																				placeholder='0.00'
																			/>
																			{errors?.discountPercentage && (
																				<div className='text-danger'>
																					{errors?.discountPercentage?.message}
																				</div>
																			)}
																		</div>
																		<div className='flex-grow-1'>
																			<label className='form-label text-start d-block'>
																				Discount
																			</label>
																			<input
																				type='text'
																				{...register('discount')}
																				placeholder='Choose'
																			/>
																			{errors?.discount && (
																				<div className='text-danger'>
																					{errors?.discount?.message}
																				</div>
																			)}
																		</div>
																	</div>
																</div>
																<div className='col-lg-4 col-sm-6 col-12'>
																	<div className='mb-3 add-product d-flex justify-content-between align-items-center'>
																		<div className='flex-grow-1 me-3 add-product'>
																			<label className='form-label text-start d-block'>
																				Cost Price
																			</label>
																			<input
																				type='text'
																				{...register('price', {
																					required: 'Cost Price is required',
																				})}
																				className='form-control'
																			/>
																			{errors?.price && (
																				<div className='text-danger'>
																					{errors?.price?.message}
																				</div>
																			)}
																		</div>
																		<div className='flex-grow-1'>
																			<label className='form-label text-start d-block'>
																				Suggested RRP
																			</label>
																			<input
																				type='text'
																				{...register('suggestedRRP', {
																					required: 'Suggested RRP is required',
																				})}
																				className='form-control'
																			/>
																			{errors?.suggestedRRP && (
																				<div className='text-danger'>
																					{errors?.suggestedRRP?.message}
																				</div>
																			)}
																		</div>
																	</div>

																	{/* <div className='input-blocks add-product'>
																		<label></label>
																		<input
																			type='text'
																			{...register('promoPrice')}
																			className='form-control'
																		/>
																		{errors.promoPrice && (
																			<div className='text-danger'>
																				{errors.promoPrice.message}
																			</div>
																		)}
																	</div> */}
																	<div className='mb-3 add-product d-flex align-items-center justify-content-between'>
																		<div className='flex-grow-1 me-3'>
																			<label className='form-label text-start d-block'>
																				Box Quantity
																			</label>
																			<input
																				type='text'
																				{...register('boxQuantity', {
																					required: 'Box quantity is required',
																				})}
																				className='form-control'
																			/>
																			{errors?.boxQuantity && (
																				<div className='text-danger'>
																					{errors?.boxQuantity?.message}
																				</div>
																			)}
																		</div>
																		<div className='flex-grow-1'>
																			<label className='form-label text-start d-block'>
																				Box Cost
																			</label>
																			<input
																				type='text'
																				{...register('boxCost', {
																					required: 'Box Cost is required',
																				})}
																				className='form-control'
																			/>
																			{errors?.boxCost && (
																				<div className='text-danger'>
																					{errors?.boxCost?.message}
																				</div>
																			)}
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
																					<Camera className='add-info' />
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
																								<input
																									type='file'
																									accept='image/*'
																									onChange={handleImageUpload}
																								/>
																								<div className='image-uploads'>
																									<PlusCircle className='plus-down-add me-0' />
																									<h4>Add Images</h4>
																								</div>
																							</div>
																						</div>
																						{uploadedImages.length > 0 &&
																							uploadedImages?.map(
																								(image, index) => (
																									<>
																										<div
																											key={index}
																											className='phone-img'
																										>
																											<img
																												src={URL.createObjectURL(
																													image
																												)}
																												alt={`uploaded-${index}`}
																												width='100'
																												height='100'
																											/>
																											<p>
																												{index === 0
																													? 'Main Image'
																													: `Image ${index}`}{' '}
																												{/* Label images */}
																											</p>
																											<Link to='#'>
																												<X
																													className='x-square-add remove-product'
																													onClick={() =>
																														handleRemoveImage(
																															index
																														)
																													}
																												/>
																											</Link>
																										</div>
																									</>
																								)
																							)}
																						{/* {isImageVisible && (
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
																						)} */}
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

									{/* <div
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
													<div className='row'>
														<div className='col-lg-4 col-sm-6 col-12'></div>

														<div className='col-lg-4 col-sm-6 col-12'>
															<div className='row'></div>
														</div>
														<div className='col-lg-4 col-sm-6 col-12'></div>
													</div>
												</div>
											</div>
										</div>
									</div> */}
								</div>
							</div>
							<div className='text-end'>
								<button
									type='button'
									className='btn btn-submit'
									onClick={() =>
										handleNextTab('minmax', [
											'mfrPartNumber',
											'make',
											'suitability',
											'supplier1Code',
											'supplier2Code',
											'binLocation1',
											'binLocation2',
											'multibuyQuantity',
											'multibuySave',
											'promoName',
											'promoPrice',
											'size',
											'weight',
											'catA',
											'catB',
											'range',
											'catC',
											'year',
											'webRef',
											'color',
											'nominalCode',
											'nominalSection',
											'search1',
											'search2',
											'details',
											'finish',
											'storePrice',
											'mailOrderPrice',
											'vatCode',
											'markup',
											'tradePrice',
											'webPrice',
											'discountPercentage',
											'discount',
											'price',
											'suggestedRRP',
											'boxQuantity',
											'boxCost',
										])
									}
								>
									Save and Continue
								</button>
							</div>
						</div>

						<div
							className={`tab-pane ${activeTab === 'minmax' ? 'active' : ''}`}
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

															<span>Product Min/Max</span>
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
														<div className=' col-12'>
															<Table
																columns={columns}
																dataSource={data}
																pagination={false}
																bordered
															/>
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
									onClick={() => handleNextTab('description', [])}
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

															<span>Product Descriptions</span>
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
													<div className='row mb-3 '>
														<div className='col-12 mb-3'>
															<label className='form-label text-start d-block'>
																Short Description
															</label>
															<textarea
																{...register('shortDescription')}
																className='form-control'
																rows={3}
																placeholder='Enter product description...'
															/>
															{errors.shortDescription && (
																<div className='text-danger'>
																	Short Description is required.
																</div>
															)}
														</div>
														<div className='col-12'>
															<label className='form-label text-start d-block'>
																Long Description
															</label>
															<ReactQuill
																value={longDescription}
																onChange={(value) => setLongDescription(value)}
																placeholder='Write your description here...'
															/>
															{/* Manually register the input with react-hook-form */}
															<input
																type='hidden' // Register hidden input to store Quill's value
																{...register('longDescription', {
																	required: 'Long Description is required',
																})}
															/>
															{/* Show validation error */}
															{errors.longDescription && (
																<div className='text-danger'>
																	{errors.longDescription.message}
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
							<div className='text-end'>
								<button
									type='button'
									className='btn btn-submit'
									onClick={() =>
										handleNextTab('specification', ['description'])
									}
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

															<span>Product Specification</span>
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
													<div className='row mb-3'>
														<div className='col-12'>
															<label className='form-label text-start d-block'>
																Item Specification
															</label>
															<ReactQuill
																value={specifications}
																onChange={(value) => setSpecifications(value)}
																placeholder='Write your specifications here...'
															/>
															{/* Manually register the input with react-hook-form */}
															<input
																type='hidden' // Register hidden input to store Quill's value
																{...register('specifications', {
																	required: 'Long Description is required',
																})}
															/>
															{errors?.specifications && (
																<div className='text-danger'>
																	{errors?.specifications?.message}
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
							<div className='text-end'>
								<button
									type='button'
									className='btn btn-submit'
									onClick={() => handleNextTab('geometry', ['specifications'])}
								>
									Save and Continue
								</button>
							</div>
						</div>

						<div
							className={`tab-pane ${activeTab === 'geometry' ? 'active' : ''}`}
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

															<span>Product Geometry</span>
														</h5>
														<Link to='#'>
															<ChevronDown className='chevron-down-add' />
														</Link>
													</div>
												</div>
												<div
													id='collapseOne'
													className='accordion-collapse collapse show'
													aria-labelledby='headingOne'
													data-bs-parent='#accordionExample'
												>
													<div className='accordion-body'>
														<div className='row mb-3'>
															<div className='col-12'>
																<label className='form-label text-start d-block'>
																	Item Geometry
																</label>
																<ReactQuill
																	value={geometry}
																	onChange={(value) => setGeometry(value)}
																	placeholder='Write your geometry here...'
																/>
																{/* Manually register the input with react-hook-form */}
																<input
																	type='hidden' // Register hidden input to store Quill's value
																	{...register('geometry', {
																		required: 'Geometry is required',
																	})}
																/>
																{errors?.geometry && (
																	<div className='text-danger'>
																		{errors?.geometry?.message}
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
							</div>
							<div className='text-end'>
								<button
									type='button'
									className='btn btn-submit'
									onClick={() => handleNextTab('product-notes', ['geometry'])}
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

															<span>Product Notes</span>
														</h5>
														<Link to='#'>
															<ChevronDown className='chevron-down-add' />
														</Link>
													</div>
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
												<div className='row mb-3'>
													<div className='col-lg-4 col-sm-6 col-12'>
														<label className='form-label text-start d-block'>
															Product Notes 1
														</label>
														<input
															type='text'
															{...register('tillNote1', {
																required: 'One Notes is required',
															})}
															className='form-control'
														/>
														{errors?.tillNote1 && (
															<div className='text-danger'>
																{errors?.tillNote1?.message}
															</div>
														)}
													</div>
													<div className='col-lg-4 col-sm-6 col-12'>
														<label className='form-label text-start d-block'>
															Product Notes 2
														</label>
														<input
															type='text'
															{...register('tillNote2')}
															className='form-control'
														/>
														{errors?.tillNote2 && (
															<div className='text-danger'>
																{errors?.tillNote2?.message}
															</div>
														)}
													</div>
													<div className='col-lg-4 col-sm-6 col-12'>
														<label className='form-label text-start d-block'>
															Product Notes 3
														</label>
														<input
															type='text'
															{...register('tillNote3')}
															className='form-control'
														/>
														{errors?.tillNote3 && (
															<div className='text-danger'>
																{errors?.tillNote3?.message}
															</div>
														)}
													</div>
												</div>
												<div className='row'>
													<div className='col-lg-4 col-sm-6 col-12'>
														<label className='form-label text-start d-block'>
															Product Notes 4
														</label>
														<input
															type='text'
															{...register('tillNote4')}
															className='form-control'
															id='exampleCheck1'
														/>
														{errors?.tillNote4 && (
															<div className='text-danger'>
																{errors?.tillNote4?.message}
															</div>
														)}
													</div>
													<div className='col-lg-4 col-sm-6 col-12'>
														<label className='form-label text-start d-block'>
															Product Notes 5
														</label>
														<input
															type='text'
															{...register('tillNote5')}
															className='form-control'
														/>
														{errors?.tillNote5 && (
															<div className='text-danger'>
																{errors?.tillNote5?.message}
															</div>
														)}
													</div>
													<div className='col-lg-4 col-sm-6 col-12'>
														<label className='form-label text-start d-block'>
															Product Notes 6
														</label>
														<input
															type='text'
															{...register('tillNote6')}
															className='form-control'
														/>
														{errors?.tillNote6 && (
															<div className='text-danger'>
																{errors?.tillNote6?.message}
															</div>
														)}
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className='text-end'>
								<button
									type='submit'
									className='btn btn-submit'
								>
									{isEditMode ? 'Update Product' : 'Create Product'}
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
			<ProductSearch />
		</div>
	);
};

export default AddProduct;
