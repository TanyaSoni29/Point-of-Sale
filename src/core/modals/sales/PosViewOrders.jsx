/** @format */

import { Link } from 'react-router-dom';
// import ImageWithBasePath from '../../img/imagewithbasebath';
const PosViewOrders = () => {
	return (
		<div>
			<div
				className='modal fade pos-modal'
				id='orders'
				tabIndex={-1}
				aria-hidden='true'
			>
				<div
					className='modal-dialog modal-md modal-dialog-centered'
					role='document'
				>
					<div className='modal-content'>
						<div className='modal-header p-4'>
							<h5 className='modal-title'>Orders</h5>
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
							<div className='tabs-sets'>
								<ul
									className='nav nav-tabs'
									id='myTabs'
									role='tablist'
								>
									<li
										className='nav-item'
										role='presentation'
									>
										<button
											className='nav-link active'
											id='onhold-tab'
											data-bs-toggle='tab'
											data-bs-target='#onhold'
											type='button'
											aria-controls='onhold'
											aria-selected='true'
											role='tab'
										>
											Onhold
										</button>
									</li>
									<li
										className='nav-item'
										role='presentation'
									>
										<button
											className='nav-link'
											id='unpaid-tab'
											data-bs-toggle='tab'
											data-bs-target='#unpaid'
											type='button'
											aria-controls='unpaid'
											aria-selected='false'
											role='tab'
										>
											Unpaid
										</button>
									</li>
									<li
										className='nav-item'
										role='presentation'
									>
										<button
											className='nav-link'
											id='paid-tab'
											data-bs-toggle='tab'
											data-bs-target='#paid'
											type='button'
											aria-controls='paid'
											aria-selected='false'
											role='tab'
										>
											Paid
										</button>
									</li>
								</ul>
								<div className='tab-content'>
									<div
										className='tab-pane fade show active'
										id='onhold'
										role='tabpanel'
										aria-labelledby='onhold-tab'
									>
										<div className='table-top'>
											<div className='search-set w-100 search-order'>
												<div className='search-input w-100'>
													<input
														type='text'
														placeholder='Search'
														className='form-control form-control-sm formsearch w-100'
													/>
													<Link
														to
														className='btn btn-searchset'
													>
														<i
															data-feather='search'
															className='feather-search'
														/>
													</Link>
												</div>
											</div>
										</div>
										<div className='order-body'>
											<div className='default-cover p-4 mb-4'>
												<span className='badge bg-secondary d-inline-block mb-4'>
													Order ID : #666659
												</span>
												<div className='row'>
													<div className='col-sm-12 col-md-6 record mb-3'>
														<table>
															<tbody>
																<tr className='mb-3'>
																	<td>Cashier</td>
																	<td className='colon'>:</td>
																	<td className='text'>admin</td>
																</tr>
																<tr>
																	<td>Customer</td>
																	<td className='colon'>:</td>
																	<td className='text'>Botsford</td>
																</tr>
															</tbody>
														</table>
													</div>
													<div className='col-sm-12 col-md-6 record mb-3'>
														<table>
															<tbody>
																<tr>
																	<td>Total</td>
																	<td className='colon'>:</td>
																	<td className='text'>$900</td>
																</tr>
																<tr>
																	<td>Date</td>
																	<td className='colon'>:</td>
																	<td className='text'>29-08-2023 13:39:11</td>
																</tr>
															</tbody>
														</table>
													</div>
												</div>
												<p className='p-4'>
													Customer need to recheck the product once
												</p>
												<div className='btn-row d-sm-flex align-items-center justify-content-between'>
													<Link
														to='#'
														className='btn btn-info btn-icon flex-fill'
													>
														Open
													</Link>
													<Link
														to='#'
														className='btn btn-danger btn-icon flex-fill'
													>
														Products
													</Link>
													<Link
														to='#'
														className='btn btn-success btn-icon flex-fill'
													>
														Print
													</Link>
												</div>
											</div>
											<div className='default-cover p-4 mb-4'>
												<span className='badge bg-secondary d-inline-block mb-4'>
													Order ID : #666660
												</span>
												<div className='row'>
													<div className='col-sm-12 col-md-6 record mb-3'>
														<table>
															<tbody>
																<tr className='mb-3'>
																	<td>Cashier</td>
																	<td className='colon'>:</td>
																	<td className='text'>admin</td>
																</tr>
																<tr>
																	<td>Customer</td>
																	<td className='colon'>:</td>
																	<td className='text'>Smith</td>
																</tr>
															</tbody>
														</table>
													</div>
													<div className='col-sm-12 col-md-6 record mb-3'>
														<table>
															<tbody>
																<tr>
																	<td>Total</td>
																	<td className='colon'>:</td>
																	<td className='text'>$15000</td>
																</tr>
																<tr>
																	<td>Date</td>
																	<td className='colon'>:</td>
																	<td className='text'>30-08-2023 15:59:11</td>
																</tr>
															</tbody>
														</table>
													</div>
												</div>
												<p className='p-4'>
													Customer need to recheck the product once
												</p>
												<div className='btn-row d-flex align-items-center justify-content-between'>
													<Link
														to='#'
														className='btn btn-info btn-icon flex-fill'
													>
														Open
													</Link>
													<Link
														to='#'
														className='btn btn-danger btn-icon flex-fill'
													>
														Products
													</Link>
													<Link
														to='#'
														className='btn btn-success btn-icon flex-fill'
													>
														Print
													</Link>
												</div>
											</div>
											<div className='default-cover p-4'>
												<span className='badge bg-secondary d-inline-block mb-4'>
													Order ID : #666661
												</span>
												<div className='row'>
													<div className='col-sm-12 col-md-6 record mb-3'>
														<table>
															<tbody>
																<tr className='mb-3'>
																	<td>Cashier</td>
																	<td className='colon'>:</td>
																	<td className='text'>admin</td>
																</tr>
																<tr>
																	<td>Customer</td>
																	<td className='colon'>:</td>
																	<td className='text'>John David</td>
																</tr>
															</tbody>
														</table>
													</div>
													<div className='col-sm-12 col-md-6 record mb-3'>
														<table>
															<tbody>
																<tr>
																	<td>Total</td>
																	<td className='colon'>:</td>
																	<td className='text'>$2000</td>
																</tr>
																<tr>
																	<td>Date</td>
																	<td className='colon'>:</td>
																	<td className='text'>01-09-2023 13:15:00</td>
																</tr>
															</tbody>
														</table>
													</div>
												</div>
												<p className='p-4 mb-4'>
													Customer need to recheck the product once
												</p>
												<div className='btn-row d-flex align-items-center justify-content-between'>
													<Link
														to='#'
														className='btn btn-info btn-icon flex-fill'
													>
														Open
													</Link>
													<Link
														to='#'
														className='btn btn-danger btn-icon flex-fill'
													>
														Products
													</Link>
													<Link
														to='#'
														className='btn btn-success btn-icon flex-fill'
													>
														Print
													</Link>
												</div>
											</div>
										</div>
									</div>
									<div
										className='tab-pane fade'
										id='unpaid'
										role='tabpanel'
									>
										<div className='table-top'>
											<div className='search-set w-100 search-order'>
												<div className='search-input w-100'>
													<input
														type='text'
														placeholder='Search'
														className='form-control form-control-sm formsearch w-100'
													/>
													<Link
														to
														className='btn btn-searchset'
													>
														<i
															data-feather='search'
															className='feather-search'
														/>
													</Link>
												</div>
											</div>
										</div>
										<div className='order-body'>
											<div className='default-cover p-4 mb-4'>
												<span className='badge bg-info d-inline-block mb-4'>
													Order ID : #666662
												</span>
												<div className='row'>
													<div className='col-sm-12 col-md-6 record mb-3'>
														<table>
															<tbody>
																<tr className='mb-3'>
																	<td>Cashier</td>
																	<td className='colon'>:</td>
																	<td className='text'>admin</td>
																</tr>
																<tr>
																	<td>Customer</td>
																	<td className='colon'>:</td>
																	<td className='text'>Anastasia</td>
																</tr>
															</tbody>
														</table>
													</div>
													<div className='col-sm-12 col-md-6 record mb-3'>
														<table>
															<tbody>
																<tr>
																	<td>Total</td>
																	<td className='colon'>:</td>
																	<td className='text'>$2500</td>
																</tr>
																<tr>
																	<td>Date</td>
																	<td className='colon'>:</td>
																	<td className='text'>10-09-2023 17:15:11</td>
																</tr>
															</tbody>
														</table>
													</div>
												</div>
												<p className='p-4'>
													Customer need to recheck the product once
												</p>
												<div className='btn-row d-flex align-items-center justify-content-between'>
													<Link
														to='#'
														className='btn btn-info btn-icon flex-fill'
													>
														Open
													</Link>
													<Link
														to='#'
														className='btn btn-danger btn-icon flex-fill'
													>
														Products
													</Link>
													<Link
														to='#'
														className='btn btn-success btn-icon flex-fill'
													>
														Print
													</Link>
												</div>
											</div>
											<div className='default-cover p-4 mb-4'>
												<span className='badge bg-info d-inline-block mb-4'>
													Order ID : #666663
												</span>
												<div className='row'>
													<div className='col-sm-12 col-md-6 record mb-3'>
														<table>
															<tbody>
																<tr className='mb-3'>
																	<td>Cashier</td>
																	<td className='colon'>:</td>
																	<td className='text'>admin</td>
																</tr>
																<tr>
																	<td>Customer</td>
																	<td className='colon'>:</td>
																	<td className='text'>Lucia</td>
																</tr>
															</tbody>
														</table>
													</div>
													<div className='col-sm-12 col-md-6 record mb-3'>
														<table>
															<tbody>
																<tr>
																	<td>Total</td>
																	<td className='colon'>:</td>
																	<td className='text'>$1500</td>
																</tr>
																<tr>
																	<td>Date</td>
																	<td className='colon'>:</td>
																	<td className='text'>11-09-2023 14:50:11</td>
																</tr>
															</tbody>
														</table>
													</div>
												</div>
												<p className='p-4'>
													Customer need to recheck the product once
												</p>
												<div className='btn-row d-flex align-items-center justify-content-between'>
													<Link
														to='#'
														className='btn btn-info btn-icon flex-fill'
													>
														Open
													</Link>
													<Link
														to='#'
														className='btn btn-danger btn-icon flex-fill'
													>
														Products
													</Link>
													<Link
														to='#'
														className='btn btn-success btn-icon flex-fill'
													>
														Print
													</Link>
												</div>
											</div>
											<div className='default-cover p-4 mb-4'>
												<span className='badge bg-info d-inline-block mb-4'>
													Order ID : #666664
												</span>
												<div className='row'>
													<div className='col-sm-12 col-md-6 record mb-3'>
														<table>
															<tbody>
																<tr className='mb-3'>
																	<td>Cashier</td>
																	<td className='colon'>:</td>
																	<td className='text'>admin</td>
																</tr>
																<tr>
																	<td>Customer</td>
																	<td className='colon'>:</td>
																	<td className='text'>Diego</td>
																</tr>
															</tbody>
														</table>
													</div>
													<div className='col-sm-12 col-md-6 record mb-3'>
														<table>
															<tbody>
																<tr>
																	<td>Total</td>
																	<td className='colon'>:</td>
																	<td className='text'>$30000</td>
																</tr>
																<tr>
																	<td>Date</td>
																	<td className='colon'>:</td>
																	<td className='text'>12-09-2023 17:22:11</td>
																</tr>
															</tbody>
														</table>
													</div>
												</div>
												<p className='p-4 mb-4'>
													Customer need to recheck the product once
												</p>
												<div className='btn-row d-flex align-items-center justify-content-between'>
													<Link
														to='#'
														className='btn btn-info btn-icon flex-fill'
													>
														Open
													</Link>
													<Link
														to='#'
														className='btn btn-danger btn-icon flex-fill'
													>
														Products
													</Link>
													<Link
														to='#'
														className='btn btn-success btn-icon flex-fill'
													>
														Print
													</Link>
												</div>
											</div>
										</div>
									</div>
									<div
										className='tab-pane fade'
										id='paid'
										role='tabpanel'
									>
										<div className='table-top'>
											<div className='search-set w-100 search-order'>
												<div className='search-input w-100'>
													<input
														type='text'
														placeholder='Search'
														className='form-control form-control-sm formsearch w-100'
													/>
													<Link
														to
														className='btn btn-searchset'
													>
														<i
															data-feather='search'
															className='feather-search'
														/>
													</Link>
												</div>
											</div>
										</div>
										<div className='order-body'>
											<div className='default-cover p-4 mb-4'>
												<span className='badge bg-primary d-inline-block mb-4'>
													Order ID : #666665
												</span>
												<div className='row'>
													<div className='col-sm-12 col-md-6 record mb-3'>
														<table>
															<tbody>
																<tr className='mb-3'>
																	<td>Cashier</td>
																	<td className='colon'>:</td>
																	<td className='text'>admin</td>
																</tr>
																<tr>
																	<td>Customer</td>
																	<td className='colon'>:</td>
																	<td className='text'>Hugo</td>
																</tr>
															</tbody>
														</table>
													</div>
													<div className='col-sm-12 col-md-6 record mb-3'>
														<table>
															<tbody>
																<tr>
																	<td>Total</td>
																	<td className='colon'>:</td>
																	<td className='text'>$5000</td>
																</tr>
																<tr>
																	<td>Date</td>
																	<td className='colon'>:</td>
																	<td className='text'>13-09-2023 19:39:11</td>
																</tr>
															</tbody>
														</table>
													</div>
												</div>
												<p className='p-4'>
													Customer need to recheck the product once
												</p>
												<div className='btn-row d-flex align-items-center justify-content-between'>
													<Link
														to='#'
														className='btn btn-info btn-icon flex-fill'
													>
														Open
													</Link>
													<Link
														to='#'
														className='btn btn-danger btn-icon flex-fill'
													>
														Products
													</Link>
													<Link
														to='#'
														className='btn btn-success btn-icon flex-fill'
													>
														Print
													</Link>
												</div>
											</div>
											<div className='default-cover p-4 mb-4'>
												<span className='badge bg-primary d-inline-block mb-4'>
													Order ID : #666666
												</span>
												<div className='row'>
													<div className='col-sm-12 col-md-6 record mb-3'>
														<table>
															<tbody>
																<tr className='mb-3'>
																	<td>Cashier</td>
																	<td className='colon'>:</td>
																	<td className='text'>admin</td>
																</tr>
																<tr>
																	<td>Customer</td>
																	<td className='colon'>:</td>
																	<td className='text'>Antonio</td>
																</tr>
															</tbody>
														</table>
													</div>
													<div className='col-sm-12 col-md-6 record mb-3'>
														<table>
															<tbody>
																<tr>
																	<td>Total</td>
																	<td className='colon'>:</td>
																	<td className='text'>$7000</td>
																</tr>
																<tr>
																	<td>Date</td>
																	<td className='colon'>:</td>
																	<td className='text'>15-09-2023 18:39:11</td>
																</tr>
															</tbody>
														</table>
													</div>
												</div>
												<p className='p-4'>
													Customer need to recheck the product once
												</p>
												<div className='btn-row d-flex align-items-center justify-content-between'>
													<Link
														to='#'
														className='btn btn-info btn-icon flex-fill'
													>
														Open
													</Link>
													<Link
														to='#'
														className='btn btn-danger btn-icon flex-fill'
													>
														Products
													</Link>
													<Link
														to='#'
														className='btn btn-success btn-icon flex-fill'
													>
														Print
													</Link>
												</div>
											</div>
											<div className='default-cover p-4 mb-4'>
												<span className='badge bg-primary d-inline-block mb-4'>
													Order ID : #666667
												</span>
												<div className='row'>
													<div className='col-sm-12 col-md-6 record mb-3'>
														<table>
															<tbody>
																<tr className='mb-3'>
																	<td>Cashier</td>
																	<td className='colon'>:</td>
																	<td className='text'>admin</td>
																</tr>
																<tr>
																	<td>Customer</td>
																	<td className='colon'>:</td>
																	<td className='text'>MacQuoid</td>
																</tr>
															</tbody>
														</table>
													</div>
													<div className='col-sm-12 col-md-6 record mb-3'>
														<table>
															<tbody>
																<tr>
																	<td>Total</td>
																	<td className='colon'>:</td>
																	<td className='text'>$7050</td>
																</tr>
																<tr>
																	<td>Date</td>
																	<td className='colon'>:</td>
																	<td className='text'>17-09-2023 19:39:11</td>
																</tr>
															</tbody>
														</table>
													</div>
												</div>
												<p className='p-4 mb-4'>
													Customer need to recheck the product once
												</p>
												<div className='btn-row d-flex align-items-center justify-content-between'>
													<Link
														to='#'
														className='btn btn-info btn-icon flex-fill'
													>
														Open
													</Link>
													<Link
														to='#'
														className='btn btn-danger btn-icon flex-fill'
													>
														Products
													</Link>
													<Link
														to='#'
														className='btn btn-success btn-icon flex-fill'
													>
														Print
													</Link>
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
	);
};

export default PosViewOrders;
