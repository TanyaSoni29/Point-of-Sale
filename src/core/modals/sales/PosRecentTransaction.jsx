/** @format */

import { Link } from 'react-router-dom';
import PdfImg from '../../../assets/img/icons/pdf.svg';
import ExcelImg from '../../../assets/img/icons/excel.svg';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

// import ImageWithBasePath from '../../img/imagewithbasebath';
const PosRecentTransaction = () => {
	const renderTooltip = (props) => (
		<Tooltip
			id='pdf-tooltip'
			{...props}
		>
			Pdf
		</Tooltip>
	);
	const renderExcelTooltip = (props) => (
		<Tooltip
			id='excel-tooltip'
			{...props}
		>
			Excel
		</Tooltip>
	);
	const renderPrinterTooltip = (props) => (
		<Tooltip
			id='printer-tooltip'
			{...props}
		>
			Printer
		</Tooltip>
	);

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

	return (
		<div>
			<div
				className='modal fade pos-modal'
				id='recents'
				tabIndex={-1}
				aria-hidden='true'
			>
				<div
					className='modal-dialog modal-lg modal-dialog-centered'
					role='document'
				>
					<div className='modal-content'>
						<div className='modal-header p-4'>
							<h5 className='modal-title'>Recent Transactions</h5>
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
									id='myTab'
									role='tablist'
								>
									<li
										className='nav-item'
										role='presentation'
									>
										<button
											className='nav-link active'
											id='purchase-tab'
											data-bs-toggle='tab'
											data-bs-target='#purchase'
											type='button'
											aria-controls='purchase'
											aria-selected='true'
											role='tab'
										>
											Purchase
										</button>
									</li>
									<li
										className='nav-item'
										role='presentation'
									>
										<button
											className='nav-link'
											id='payment-tab'
											data-bs-toggle='tab'
											data-bs-target='#payment'
											type='button'
											aria-controls='payment'
											aria-selected='false'
											role='tab'
										>
											Payment
										</button>
									</li>
									<li
										className='nav-item'
										role='presentation'
									>
										<button
											className='nav-link'
											id='return-tab'
											data-bs-toggle='tab'
											data-bs-target='#return'
											type='button'
											aria-controls='return'
											aria-selected='false'
											role='tab'
										>
											Return
										</button>
									</li>
								</ul>
								<div className='tab-content'>
									<div
										className='tab-pane fade show active'
										id='purchase'
										role='tabpanel'
										aria-labelledby='purchase-tab'
									>
										<div className='table-top'>
											<div className='search-set'>
												<div className='search-input'>
													<input
														type='text'
														placeholder='Search'
														className='form-control form-control-sm formsearch'
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
											<div className='wordset'>
												<ul>
													<li>
														<OverlayTrigger
															placement='top'
															overlay={renderTooltip}
														>
															<Link>
																{/* <ImageWithBasePath
																	src='assets/img/icons/pdf.svg'
																	alt='img'
																/> */}
																<img
																	src={PdfImg}
																	alt='img'
																/>
															</Link>
														</OverlayTrigger>
													</li>
													<li>
														<OverlayTrigger
															placement='top'
															overlay={renderExcelTooltip}
														>
															<Link
																data-bs-toggle='tooltip'
																data-bs-placement='top'
															>
																{/* <ImageWithBasePath
																	src='assets/img/icons/excel.svg'
																	alt='img'
																/> */}
																<img
																	src={ExcelImg}
																	alt='img'
																/>
															</Link>
														</OverlayTrigger>
													</li>
													<li>
														<OverlayTrigger
															placement='top'
															overlay={renderPrinterTooltip}
														>
															<Link
																data-bs-toggle='tooltip'
																data-bs-placement='top'
															>
																<i
																	data-feather='printer'
																	className='feather-printer'
																/>
															</Link>
														</OverlayTrigger>
													</li>
												</ul>
											</div>
										</div>
										<div className='table-responsive'>
											<table className='table datanew'>
												<thead>
													<tr>
														<th>Date</th>
														<th>Reference</th>
														<th>Customer</th>
														<th>Amount </th>
														<th className='no-sort'>Action</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>19 Jan 2023</td>
														<td>INV/SL0101</td>
														<td>Walk-in Customer</td>
														<td>$1500.00</td>
														<td className='action-table-data'>
															<div className='edit-delete-action'>
																<Link
																	className='me-2 p-2'
																	to='#'
																>
																	<i
																		data-feather='eye'
																		className='feather-eye'
																	/>
																</Link>
																<Link
																	className='me-2 p-2'
																	to='#'
																>
																	<i
																		data-feather='edit'
																		className='feather-edit'
																	/>
																</Link>
																<Link
																	onClick={showConfirmationAlert}
																	className='p-2 confirm-text'
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
														<td>19 Jan 2023</td>
														<td>INV/SL0102</td>
														<td>Walk-in Customer</td>
														<td>$1500.00</td>
														<td className='action-table-data'>
															<div className='edit-delete-action'>
																<Link
																	className='me-2 p-2'
																	to='#'
																>
																	<i
																		data-feather='eye'
																		className='feather-eye'
																	/>
																</Link>
																<Link
																	className='me-2 p-2'
																	to='#'
																>
																	<i
																		data-feather='edit'
																		className='feather-edit'
																	/>
																</Link>
																<Link
																	onClick={showConfirmationAlert}
																	className='p-2 confirm-text'
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
														<td>19 Jan 2023</td>
														<td>INV/SL0103</td>
														<td>Walk-in Customer</td>
														<td>$1500.00</td>
														<td className='action-table-data'>
															<div className='edit-delete-action'>
																<Link
																	className='me-2 p-2'
																	to='#'
																>
																	<i
																		data-feather='eye'
																		className='feather-eye'
																	/>
																</Link>
																<Link
																	className='me-2 p-2'
																	to='#'
																>
																	<i
																		data-feather='edit'
																		className='feather-edit'
																	/>
																</Link>
																<Link
																	onClick={showConfirmationAlert}
																	className='p-2 confirm-text'
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
														<td>19 Jan 2023</td>
														<td>INV/SL0104</td>
														<td>Walk-in Customer</td>
														<td>$1500.00</td>
														<td className='action-table-data'>
															<div className='edit-delete-action'>
																<Link
																	className='me-2 p-2'
																	to='#'
																>
																	<i
																		data-feather='eye'
																		className='feather-eye'
																	/>
																</Link>
																<Link
																	className='me-2 p-2'
																	to='#'
																>
																	<i
																		data-feather='edit'
																		className='feather-edit'
																	/>
																</Link>
																<Link
																	onClick={showConfirmationAlert}
																	className='p-2 confirm-text'
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
														<td>19 Jan 2023</td>
														<td>INV/SL0105</td>
														<td>Walk-in Customer</td>
														<td>$1500.00</td>
														<td className='action-table-data'>
															<div className='edit-delete-action'>
																<Link
																	className='me-2 p-2'
																	to='#'
																>
																	<i
																		data-feather='eye'
																		className='feather-eye'
																	/>
																</Link>
																<Link
																	className='me-2 p-2'
																	to='#'
																>
																	<i
																		data-feather='edit'
																		className='feather-edit'
																	/>
																</Link>
																<Link
																	onClick={showConfirmationAlert}
																	className='p-2 confirm-text'
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
														<td>19 Jan 2023</td>
														<td>INV/SL0106</td>
														<td>Walk-in Customer</td>
														<td>$1500.00</td>
														<td className='action-table-data'>
															<div className='edit-delete-action'>
																<Link
																	className='me-2 p-2'
																	to='#'
																>
																	<i
																		data-feather='eye'
																		className='feather-eye'
																	/>
																</Link>
																<Link
																	className='me-2 p-2'
																	to='#'
																>
																	<i
																		data-feather='edit'
																		className='feather-edit'
																	/>
																</Link>
																<Link
																	onClick={showConfirmationAlert}
																	className='p-2 confirm-text'
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
														<td>19 Jan 2023</td>
														<td>INV/SL0107</td>
														<td>Walk-in Customer</td>
														<td>$1500.00</td>
														<td className='action-table-data'>
															<div className='edit-delete-action'>
																<Link
																	className='me-2 p-2'
																	to='#'
																>
																	<i
																		data-feather='eye'
																		className='feather-eye'
																	/>
																</Link>
																<Link
																	className='me-2 p-2'
																	to='#'
																>
																	<i
																		data-feather='edit'
																		className='feather-edit'
																	/>
																</Link>
																<Link
																	onClick={showConfirmationAlert}
																	className='p-2 confirm-text'
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
									<div
										className='tab-pane fade'
										id='payment'
										role='tabpanel'
									>
										<div className='table-top'>
											<div className='search-set'>
												<div className='search-input'>
													<input
														type='text'
														placeholder='Search'
														className='form-control form-control-sm formsearch'
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
											<div className='wordset'>
												<ul>
													<li>
														<OverlayTrigger
															placement='top'
															overlay={renderTooltip}
														>
															<Link>
																{/* <ImageWithBasePath
																	src='assets/img/icons/pdf.svg'
																	alt='img'
																/> */}
																<img
																	src={PdfImg}
																	alt='img'
																/>
															</Link>
														</OverlayTrigger>
													</li>
													<li>
														<OverlayTrigger
															placement='top'
															overlay={renderExcelTooltip}
														>
															<Link
																data-bs-toggle='tooltip'
																data-bs-placement='top'
															>
																{/* <ImageWithBasePath
																	src='assets/img/icons/excel.svg'
																	alt='img'
																/> */}
																<img
																	src={ExcelImg}
																	alt='img'
																/>
															</Link>
														</OverlayTrigger>
													</li>
													<li>
														<OverlayTrigger
															placement='top'
															overlay={renderPrinterTooltip}
														>
															<Link
																data-bs-toggle='tooltip'
																data-bs-placement='top'
															>
																<i
																	data-feather='printer'
																	className='feather-printer'
																/>
															</Link>
														</OverlayTrigger>
													</li>
												</ul>
											</div>
										</div>
										<div className='table-responsive'>
											<table className='table datanew'>
												<thead>
													<tr>
														<th>Date</th>
														<th>Reference</th>
														<th>Customer</th>
														<th>Amount </th>
														<th className='no-sort'>Action</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>19 Jan 2023</td>
														<td>INV/SL0101</td>
														<td>Walk-in Customer</td>
														<td>$1500.00</td>
														<td className='action-table-data'>
															<div className='edit-delete-action'>
																<Link
																	className='me-2 p-2'
																	to='#'
																>
																	<i
																		data-feather='eye'
																		className='feather-eye'
																	/>
																</Link>
																<Link
																	className='me-2 p-2'
																	to='#'
																>
																	<i
																		data-feather='edit'
																		className='feather-edit'
																	/>
																</Link>
																<Link
																	onClick={showConfirmationAlert}
																	className='p-2 confirm-text'
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
														<td>19 Jan 2023</td>
														<td>INV/SL0102</td>
														<td>Walk-in Customer</td>
														<td>$1500.00</td>
														<td className='action-table-data'>
															<div className='edit-delete-action'>
																<Link
																	className='me-2 p-2'
																	to='#'
																>
																	<i
																		data-feather='eye'
																		className='feather-eye'
																	/>
																</Link>
																<Link
																	className='me-2 p-2'
																	to='#'
																>
																	<i
																		data-feather='edit'
																		className='feather-edit'
																	/>
																</Link>
																<Link
																	onClick={showConfirmationAlert}
																	className='p-2 confirm-text'
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
														<td>19 Jan 2023</td>
														<td>INV/SL0103</td>
														<td>Walk-in Customer</td>
														<td>$1500.00</td>
														<td className='action-table-data'>
															<div className='edit-delete-action'>
																<Link
																	className='me-2 p-2'
																	to='#'
																>
																	<i
																		data-feather='eye'
																		className='feather-eye'
																	/>
																</Link>
																<Link
																	className='me-2 p-2'
																	to='#'
																>
																	<i
																		data-feather='edit'
																		className='feather-edit'
																	/>
																</Link>
																<Link
																	onClick={showConfirmationAlert}
																	className='p-2 confirm-text'
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
														<td>19 Jan 2023</td>
														<td>INV/SL0104</td>
														<td>Walk-in Customer</td>
														<td>$1500.00</td>
														<td className='action-table-data'>
															<div className='edit-delete-action'>
																<Link
																	className='me-2 p-2'
																	to='#'
																>
																	<i
																		data-feather='eye'
																		className='feather-eye'
																	/>
																</Link>
																<Link
																	className='me-2 p-2'
																	to='#'
																>
																	<i
																		data-feather='edit'
																		className='feather-edit'
																	/>
																</Link>
																<Link
																	onClick={showConfirmationAlert}
																	className='p-2 confirm-text'
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
														<td>19 Jan 2023</td>
														<td>INV/SL0105</td>
														<td>Walk-in Customer</td>
														<td>$1500.00</td>
														<td className='action-table-data'>
															<div className='edit-delete-action'>
																<Link
																	className='me-2 p-2'
																	to='#'
																>
																	<i
																		data-feather='eye'
																		className='feather-eye'
																	/>
																</Link>
																<Link
																	className='me-2 p-2'
																	to='#'
																>
																	<i
																		data-feather='edit'
																		className='feather-edit'
																	/>
																</Link>
																<Link
																	onClick={showConfirmationAlert}
																	className='p-2 confirm-text'
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
														<td>19 Jan 2023</td>
														<td>INV/SL0106</td>
														<td>Walk-in Customer</td>
														<td>$1500.00</td>
														<td className='action-table-data'>
															<div className='edit-delete-action'>
																<Link
																	className='me-2 p-2'
																	to='#'
																>
																	<i
																		data-feather='eye'
																		className='feather-eye'
																	/>
																</Link>
																<Link
																	className='me-2 p-2'
																	to='#'
																>
																	<i
																		data-feather='edit'
																		className='feather-edit'
																	/>
																</Link>
																<Link
																	onClick={showConfirmationAlert}
																	className='p-2 confirm-text'
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
														<td>19 Jan 2023</td>
														<td>INV/SL0107</td>
														<td>Walk-in Customer</td>
														<td>$1500.00</td>
														<td className='action-table-data'>
															<div className='edit-delete-action'>
																<Link
																	className='me-2 p-2'
																	to='#'
																>
																	<i
																		data-feather='eye'
																		className='feather-eye'
																	/>
																</Link>
																<Link
																	className='me-2 p-2'
																	to='#'
																>
																	<i
																		data-feather='edit'
																		className='feather-edit'
																	/>
																</Link>
																<Link
																	onClick={showConfirmationAlert}
																	className='p-2 confirm-text'
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
									<div
										className='tab-pane fade'
										id='return'
										role='tabpanel'
									>
										<div className='table-top'>
											<div className='search-set'>
												<div className='search-input'>
													<input
														type='text'
														placeholder='Search'
														className='form-control form-control-sm formsearch'
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
											<div className='wordset'>
												<ul>
													<li>
														<OverlayTrigger
															placement='top'
															overlay={renderTooltip}
														>
															<Link>
																{/* <ImageWithBasePath
																	src='assets/img/icons/pdf.svg'
																	alt='img'
																/> */}
																<img
																	src={PdfImg}
																	alt='img'
																/>
															</Link>
														</OverlayTrigger>
													</li>
													<li>
														<OverlayTrigger
															placement='top'
															overlay={renderExcelTooltip}
														>
															<Link
																data-bs-toggle='tooltip'
																data-bs-placement='top'
															>
																{/* <ImageWithBasePath
																	src='assets/img/icons/excel.svg'
																	alt='img'
																/> */}
																<img
																	src={ExcelImg}
																	alt='img'
																/>
															</Link>
														</OverlayTrigger>
													</li>
													<li>
														<OverlayTrigger
															placement='top'
															overlay={renderPrinterTooltip}
														>
															<Link
																data-bs-toggle='tooltip'
																data-bs-placement='top'
															>
																<i
																	data-feather='printer'
																	className='feather-printer'
																/>
															</Link>
														</OverlayTrigger>
													</li>
												</ul>
											</div>
										</div>
										<div className='table-responsive'>
											<table className='table datanew'>
												<thead>
													<tr>
														<th>Date</th>
														<th>Reference</th>
														<th>Customer</th>
														<th>Amount </th>
														<th className='no-sort'>Action</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>19 Jan 2023</td>
														<td>INV/SL0101</td>
														<td>Walk-in Customer</td>
														<td>$1500.00</td>
														<td className='action-table-data'>
															<div className='edit-delete-action'>
																<Link
																	className='me-2 p-2'
																	to='#'
																>
																	<i
																		data-feather='eye'
																		className='feather-eye'
																	/>
																</Link>
																<Link
																	className='me-2 p-2'
																	to='#'
																>
																	<i
																		data-feather='edit'
																		className='feather-edit'
																	/>
																</Link>
																<Link
																	onClick={showConfirmationAlert}
																	className='p-2 confirm-text'
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
														<td>19 Jan 2023</td>
														<td>INV/SL0102</td>
														<td>Walk-in Customer</td>
														<td>$1500.00</td>
														<td className='action-table-data'>
															<div className='edit-delete-action'>
																<Link
																	className='me-2 p-2'
																	to='#'
																>
																	<i
																		data-feather='eye'
																		className='feather-eye'
																	/>
																</Link>
																<Link
																	className='me-2 p-2'
																	to='#'
																>
																	<i
																		data-feather='edit'
																		className='feather-edit'
																	/>
																</Link>
																<Link
																	onClick={showConfirmationAlert}
																	className='p-2 confirm-text'
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
														<td>19 Jan 2023</td>
														<td>INV/SL0103</td>
														<td>Walk-in Customer</td>
														<td>$1500.00</td>
														<td className='action-table-data'>
															<div className='edit-delete-action'>
																<Link
																	className='me-2 p-2'
																	to='#'
																>
																	<i
																		data-feather='eye'
																		className='feather-eye'
																	/>
																</Link>
																<Link
																	className='me-2 p-2'
																	to='#'
																>
																	<i
																		data-feather='edit'
																		className='feather-edit'
																	/>
																</Link>
																<Link
																	onClick={showConfirmationAlert}
																	className='p-2 confirm-text'
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
														<td>19 Jan 2023</td>
														<td>INV/SL0104</td>
														<td>Walk-in Customer</td>
														<td>$1500.00</td>
														<td className='action-table-data'>
															<div className='edit-delete-action'>
																<Link
																	className='me-2 p-2'
																	to='#'
																>
																	<i
																		data-feather='eye'
																		className='feather-eye'
																	/>
																</Link>
																<Link
																	className='me-2 p-2'
																	to='#'
																>
																	<i
																		data-feather='edit'
																		className='feather-edit'
																	/>
																</Link>
																<Link
																	onClick={showConfirmationAlert}
																	className='p-2 confirm-text'
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
														<td>19 Jan 2023</td>
														<td>INV/SL0105</td>
														<td>Walk-in Customer</td>
														<td>$1500.00</td>
														<td className='action-table-data'>
															<div className='edit-delete-action'>
																<Link
																	className='me-2 p-2'
																	to='#'
																>
																	<i
																		data-feather='eye'
																		className='feather-eye'
																	/>
																</Link>
																<Link
																	className='me-2 p-2'
																	to='#'
																>
																	<i
																		data-feather='edit'
																		className='feather-edit'
																	/>
																</Link>
																<Link
																	onClick={showConfirmationAlert}
																	className='p-2 confirm-text'
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
														<td>19 Jan 2023</td>
														<td>INV/SL0106</td>
														<td>Walk-in Customer</td>
														<td>$1500.00</td>
														<td className='action-table-data'>
															<div className='edit-delete-action'>
																<Link
																	className='me-2 p-2'
																	to='#'
																>
																	<i
																		data-feather='eye'
																		className='feather-eye'
																	/>
																</Link>
																<Link
																	className='me-2 p-2'
																	to='#'
																>
																	<i
																		data-feather='edit'
																		className='feather-edit'
																	/>
																</Link>
																<Link
																	onClick={showConfirmationAlert}
																	className='p-2 confirm-text'
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
														<td>19 Jan 2023</td>
														<td>INV/SL0107</td>
														<td>Walk-in Customer</td>
														<td>$1500.00</td>
														<td className='action-table-data'>
															<div className='edit-delete-action'>
																<Link
																	className='me-2 p-2'
																	to='#'
																>
																	<i
																		data-feather='eye'
																		className='feather-eye'
																	/>
																</Link>
																<Link
																	className='me-2 p-2'
																	to='#'
																>
																	<i
																		data-feather='edit'
																		className='feather-edit'
																	/>
																</Link>
																<Link
																	onClick={showConfirmationAlert}
																	className='p-2 confirm-text'
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
		</div>
	);
};

export default PosRecentTransaction;
