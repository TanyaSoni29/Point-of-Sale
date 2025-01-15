/** @format */

import { Link } from 'react-router-dom';
// import ImageWithBasePath from '../../img/imagewithbasebath';
const PosAddCustomer = () => {
	return (
		<div>
			<div
				className='modal fade'
				id='create'
				tabIndex={-1}
				aria-labelledby='create'
				aria-hidden='true'
			>
				<div
					className='modal-dialog modal-lg modal-dialog-centered'
					role='document'
				>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title'>Create</h5>
							<button
								type='button'
								className='close'
								data-bs-dismiss='modal'
								aria-label='Close'
							>
								<span aria-hidden='true'>×</span>
							</button>
						</div>
						<div className='modal-body'>
							<form>
								<div className='row'>
									<div className='col-lg-6 col-sm-12 col-12'>
										<div className='input-blocks'>
											<label>Customer Name</label>
											<input
												type='text'
												className='form-control'
											/>
										</div>
									</div>
									<div className='col-lg-6 col-sm-12 col-12'>
										<div className='input-blocks'>
											<label>Email</label>
											<input
												type='email'
												className='form-control'
											/>
										</div>
									</div>
									<div className='col-lg-6 col-sm-12 col-12'>
										<div className='input-blocks'>
											<label>Phone</label>
											<input
												type='text'
												className='form-control'
											/>
										</div>
									</div>
									<div className='col-lg-6 col-sm-12 col-12'>
										<div className='input-blocks'>
											<label>Country</label>
											<input
												type='text'
												className='form-control'
											/>
										</div>
									</div>
									<div className='col-lg-6 col-sm-12 col-12'>
										<div className='input-blocks'>
											<label>City</label>
											<input type='text' />
										</div>
									</div>
									<div className='col-lg-6 col-sm-12 col-12'>
										<div className='input-blocks'>
											<label>Address</label>
											<input type='text' />
										</div>
									</div>
								</div>
								<div className='modal-footer d-sm-flex justify-content-end'>
									<button
										type='button'
										className='btn btn-cancel'
										data-bs-dismiss='modal'
									>
										Cancel
									</button>
									<Link
										to='#'
										className='btn btn-submit me-2'
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

export default PosAddCustomer;
