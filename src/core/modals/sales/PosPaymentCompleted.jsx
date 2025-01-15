/** @format */

import { Link } from 'react-router-dom';
import { CheckCircle } from 'react-feather';
// import ImageWithBasePath from '../../img/imagewithbasebath';
const PosPaymentCompleted = () => {
	return (
		<div>
			<div
				className='modal fade modal-default'
				id='payment-completed'
				aria-labelledby='payment-completed'
			>
				<div className='modal-dialog modal-dialog-centered'>
					<div className='modal-content'>
						<div className='modal-body text-center'>
							<form>
								<div className='icon-head'>
									<Link to='#'>
										<CheckCircle className='feather-40' />
									</Link>
								</div>
								<h4>Payment Completed</h4>
								<p className='mb-0'>
									Do you want to Print Receipt for the Completed Order
								</p>
								<div className='modal-footer d-sm-flex justify-content-between'>
									<button
										type='button'
										className='btn btn-primary flex-fill me-1'
										data-bs-toggle='modal'
										data-bs-target='#print-receipt'
									>
										Print Receipt
									</button>
									<Link
										to='#'
										className='btn btn-secondary flex-fill'
									>
										Next Order
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

export default PosPaymentCompleted;
