/** @format */

import { Link } from 'react-router-dom';
// import ImageWithBasePath from '../../img/imagewithbasebath';
const PosProducts = () => {
	return (
		<div>
			<div
				className='modal fade modal-default pos-modal'
				id='products'
				aria-labelledby='products'
			>
				<div className='modal-dialog modal-dialog-centered'>
					<div className='modal-content'>
						<div className='modal-header p-4 d-flex align-items-center justify-content-between'>
							<div className='d-flex align-items-center'>
								<h5 className='me-4'>Products</h5>
								<span className='badge bg-info d-inline-block mb-0'>
									Order ID : #666614
								</span>
							</div>
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
								<div className='product-wrap'>
									<div className='product-list d-flex align-items-center justify-content-between'>
										<div className='d-flex align-items-center flex-fill'>
											<Link
												to='#'
												className='img-bg me-2'
											>
												{/* <ImageWithBasePath
													src='assets/img/products/pos-product-16.png'
													alt='Products'
												/> */}
											</Link>
											<div className='info d-flex align-items-center justify-content-between flex-fill'>
												<div>
													<span>PT0005</span>
													<h6>
														<Link to='#'>Red Nike Laser</Link>
													</h6>
												</div>
												<p>$2000</p>
											</div>
										</div>
									</div>
									<div className='product-list d-flex align-items-center justify-content-between'>
										<div className='d-flex align-items-center flex-fill'>
											<Link
												to='#'
												className='img-bg me-2'
											>
												{/* <ImageWithBasePath
													src='assets/img/products/pos-product-17.png'
													alt='Products'
												/> */}
											</Link>
											<div className='info d-flex align-items-center justify-content-between flex-fill'>
												<div>
													<span>PT0235</span>
													<h6>
														<Link to='#'>Iphone 14</Link>
													</h6>
												</div>
												<p>$3000</p>
											</div>
										</div>
									</div>
									<div className='product-list d-flex align-items-center justify-content-between'>
										<div className='d-flex align-items-center flex-fill'>
											<Link
												to='#'
												className='img-bg me-2'
											>
												{/* <ImageWithBasePath
													src='assets/img/products/pos-product-16.png'
													alt='Products'
												/> */}
											</Link>
											<div className='info d-flex align-items-center justify-content-between flex-fill'>
												<div>
													<span>PT0005</span>
													<h6>
														<Link to='#'>Red Nike Laser</Link>
													</h6>
												</div>
												<p>$2000</p>
											</div>
										</div>
									</div>
									<div className='product-list d-flex align-items-center justify-content-between'>
										<div className='d-flex align-items-center flex-fill'>
											<Link
												to='#'
												className='img-bg me-2'
											>
												{/* <ImageWithBasePath
													src='assets/img/products/pos-product-17.png'
													alt='Products'
												/> */}
											</Link>
											<div className='info d-flex align-items-center justify-content-between flex-fill'>
												<div>
													<span>PT0005</span>
													<h6>
														<Link to='#'>Red Nike Laser</Link>
													</h6>
												</div>
												<p>$2000</p>
											</div>
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

export default PosProducts;
