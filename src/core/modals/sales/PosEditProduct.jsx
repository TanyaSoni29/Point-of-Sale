/** @format */

import { Link } from 'react-router-dom';
import Select from 'react-select';

// import ImageWithBasePath from '../../img/imagewithbasebath';
const PosEditProduct = () => {
	const tax = [
		{ value: 'exclusive', label: 'Exclusive' },
		{ value: 'inclusive', label: 'Inclusive' },
	];
	const discounttype = [
		{ value: 'percentage', label: 'Percentage' },
		{ value: 'earlyPaymentDiscounts', label: 'Early payment discounts' },
	];
	const units = [
		{ value: 'kilogram', label: 'Kilogram' },
		{ value: 'grams', label: 'Grams' },
	];
	return (
		<div>
			{/*Add Quotation */}
			<div
				className='modal fade modal-default pos-modal'
				id='edit-product'
				aria-labelledby='edit-product'
			>
				<div className='modal-dialog modal-dialog-centered'>
					<div className='modal-content'>
						<div className='modal-header p-4'>
							<h5>Red Nike Laser</h5>
							<button
								type='button'
								className='close'
								data-bs-dismiss='modal'
								aria-label='Close'
							>
								<span aria-hidden='true'>×</span>
							</button>
						</div>
						<div className='modal-body p-4'>
							<form>
								<div className='row'>
									<div className='col-lg-6 col-sm-12 col-12'>
										<div className='input-blocks add-product'>
											<label>
												Product Name <span>*</span>
											</label>
											<input
												type='text'
												placeholder={45}
											/>
										</div>
									</div>
									<div className='col-lg-6 col-sm-12 col-12'>
										<div className='input-blocks add-product'>
											<label>
												Tax Type <span>*</span>
											</label>
											<Select
												classNamePrefix='react-select'
												options={tax}
												placeholder='Select Option'
											/>
										</div>
									</div>
									<div className='col-lg-6 col-sm-12 col-12'>
										<div className='input-blocks add-product'>
											<label>
												Tax <span>*</span>
											</label>
											<input
												type='text'
												placeholder='% 15'
											/>
										</div>
									</div>
									<div className='col-lg-6 col-sm-12 col-12'>
										<div className='input-blocks add-product'>
											<label>
												Discount Type <span>*</span>
											</label>
											<Select
												classNamePrefix='react-select'
												options={discounttype}
												placeholder='Select Option'
											/>
										</div>
									</div>
									<div className='col-lg-6 col-sm-12 col-12'>
										<div className='input-blocks add-product'>
											<label>
												Discount <span>*</span>
											</label>
											<input
												type='text'
												placeholder={15}
											/>
										</div>
									</div>
									<div className='col-lg-6 col-sm-12 col-12'>
										<div className='input-blocks add-product'>
											<label>
												Sale Unit <span>*</span>
											</label>
											<Select
												classNamePrefix='react-select'
												options={units}
												placeholder='Select Option'
											/>
										</div>
									</div>
								</div>
								<div className='modal-footer d-sm-flex justify-content-end'>
									<button
										type='button'
										className='btn btn-secondary'
										data-bs-dismiss='modal'
									>
										Cancel
									</button>
									<Link
										to='#'
										className='btn btn-primary'
									>
										Submit
									</Link>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PosEditProduct;
