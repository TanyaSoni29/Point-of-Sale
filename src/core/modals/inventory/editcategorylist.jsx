/** @format */

import React from 'react';
import { Link } from 'react-router-dom';

const EditCategoryList = () => {
	return (
		<div>
			{/* Edit Category */}
			<div
				className='modal fade'
				id='edit-category'
			>
				<div className='modal-dialog modal-dialog-centered custom-modal-two'>
					<div className='modal-content'>
						<div className='page-wrapper-new p-0'>
							<div className='content'>
								<div className='modal-header border-0 custom-modal-header'>
									<div className='page-title'>
										<h4>Edit Category</h4>
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
								<div className='modal-body custom-modal-body'>
									<form>
										<div className='mb-3'>
											<label className='form-label'>Category</label>
											<input
												type='text'
												className='form-control'
												defaultValue='Laptop'
											/>
										</div>
										{/* <div className="mb-3">
                                            <label className="form-label">Category Slug</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                defaultValue="laptop"
                                            />
                                        </div> */}
										<div className='mb-1'>
											<div className='status-toggle modal-status d-flex justify-content-end gap-2 align-items-center'>
												<span className='status-label'>Main Category</span>
												<input
													type='checkbox'
													id='user3'
													className='check'
													defaultChecked='true'
												/>
												<label
													htmlFor='user3'
													className='checktoggle'
												/>
											</div>
										</div>
										<div className='mb-1'>
											<div className='status-toggle modal-status d-flex justify-content-end gap-2 align-items-center'>
												<span className='status-label'>Sub Category</span>
												<input
													type='checkbox'
													id='user3'
													className='check'
													defaultChecked='true'
												/>
												<label
													htmlFor='user3'
													className='checktoggle'
												/>
											</div>
										</div>
										<div className='mb-1'>
											<div className='status-toggle modal-status d-flex justify-content-end gap-2 align-items-center'>
												<span className='status-label'>Sub Category 2</span>
												<input
													type='checkbox'
													id='user3'
													className='check'
													defaultChecked='true'
												/>
												<label
													htmlFor='user3'
													className='checktoggle'
												/>
											</div>
										</div>
										<div className='mb-1'>
											<div className='status-toggle modal-status d-flex justify-content-end gap-2 align-items-center'>
												<span className='status-label'>Major</span>
												<input
													type='checkbox'
													id='user3'
													className='check'
													defaultChecked='true'
												/>
												<label
													htmlFor='user3'
													className='checktoggle'
												/>
											</div>
										</div>
										<div className='modal-footer-btn'>
											<button
												type='button'
												className='btn btn-cancel me-2'
												data-bs-dismiss='modal'
											>
												Cancel
											</button>
											<Link
												to='#'
												className='btn btn-submit'
											>
												Save Changes
											</Link>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* /Edit Category */}
		</div>
	);
};

export default EditCategoryList;
