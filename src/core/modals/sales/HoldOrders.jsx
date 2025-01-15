/** @format */

import { Link } from 'react-router-dom';
// import ImageWithBasePath from '../../img/imagewithbasebath';
const HoldOrders = () => {
	return (
		<div>
			{/*Add Quotation */}
			<div
				className='modal fade modal-default pos-modal'
				id='hold-order'
				aria-labelledby='hold-order'
			>
				<div className='modal-dialog modal-dialog-centered'>
					<div className='modal-content'>
						<div className='modal-header p-4'>
							<h5>Hold order</h5>
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
								<h2 className='text-center p-4'>4500.00</h2>
								<div className='input-block'>
									<label>Order Reference</label>
									<input
										className='form-control'
										type='text'
										defaultValue=''
										placeholder=''
									/>
								</div>
								<p>
									The current order will be set on hold. You can retreive this
									order from the pending order button. Providing a reference to
									it might help you to identify the order more quickly.
								</p>
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
										Confirm
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

export default HoldOrders;
