import React, { useState } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import ImageWithBasePath from "../../core/img/imagewithbasebath";
import { Link } from "react-router-dom";
import { setToogleHeader } from "../../core/redux/action";
import { useDispatch, useSelector } from "react-redux";
import {
  ArrowLeft,
  ChevronUp,
  Download,
  Edit,
  Eye,
  Filter,
  PlusCircle,
  RotateCcw,
  Search,
  Sliders,
  StopCircle,
  User,
} from "react-feather";
import { payrollListData } from "../../core/json/payrollList";
import Table from "../../core/pagination/datatable";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import Select from "react-select";

const PayrollList = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const toggleFilterVisibility = () => {
    setIsFilterVisible((prevVisibility) => !prevVisibility);
  };
  
  const options = [
    { value: "sortByDate", label: "Sort by Date" },
    { value: "140923", label: "14 09 23" },
    { value: "110923", label: "11 09 23" },
  ];
  const options2 = [
    { value: "Choose Name", label: "Choose Name" },
    { value: "Macbook pro", label: "Macbook pro" },
    { value: "Orange", label: "Orange" },
  ];
  const options3 = [
    { value: "Choose Status", label: "Choose Status" },
    { value: "Computers", label: "Computers" },
    { value: "Fruits", label: "Fruits" },
  ];
  const options4 = [
    { value: "Choose", label: "Choose" },
    { value: "Computers", label: "Computers" },
  ];
  const options5 = [
    { value: "Herald james", label: "Herald james" },
    { value: "Herald1", label: "Herald1" },
  ];

  const datas = payrollListData;
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const filteredData = datas.filter((entry) => {
    return Object.keys(entry).some((key) => {
      return String(entry[key])
        .toLowerCase()
        .includes(searchText.toLowerCase());
    });
  });
  const MySwal = withReactContent(Swal);

  const showConfirmationAlert = () => {
    MySwal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: "#00ff00",
      confirmButtonText: "Yes, delete it!",
      cancelButtonColor: "#ff0000",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        MySwal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          className: "btn btn-success",
          confirmButtonText: "OK",
          customClass: {
            confirmButton: "btn btn-success",
          },
        });
      } else {
        MySwal.close();
      }
    });
  };

  const columns = [
    {
      title: "Employee",
      dataIndex: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
      render: (text, record) => (
        <div className="userimgname">
          <a href="#" className="product-img">
            <img src={record.image} alt="product" />
          </a>
          <div className="emp-name">
            <a href="#">{text}</a>
            <p className="role">{record.role}</p>
          </div>
        </div>
      ),
    },
    {
      title: "Employee ID",
      dataIndex: "id2",
      sorter: (a, b) => a.id2.localeCompare(b.id2),
    },
    {
      title: "Email",
      dataIndex: "email",
      sorter: (a, b) => a.email.localeCompare(b.email),
    },
    {
      title: "Salary",
      dataIndex: "salary",
      sorter: (a, b) => a.salary.length - b.salary.length,
    },
    {
      title: "Status",
      dataIndex: "status",
      sorter: (a, b) => a.status.length - b.status.length,
      render: (status) => (
        <span
          className={`badge badge-line${
            status === "Paid" ? "success" : "danger"
          }`}
        >
          {status}
        </span>
      ),
    },
    {
      title: "Action",
      render: () => (
        <div className="edit-delete-action data-view action-table-data">
          <a className="me-2" href="#">
            <Eye className="action-eye" />
          </a>
          <a className="me-2" href="#">
            <Download className="action-download" />
          </a>
          <a
            className="me-2"
            href="#"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
          >
            <Edit className="action-edit" />
          </a>
          <a
            className="confirm-text"
            href="#"
            onClick={showConfirmationAlert}
          >
            <i data-feather="trash-2" className="feather-trash-2" />
          </a>
        </div>
      ),
    },
  ];

  const dispatch = useDispatch();
  const data = useSelector((state) => state.toggle_header);

  const renderTooltip = (props) => (
    <Tooltip id="pdf-tooltip" {...props}>
      Pdf
    </Tooltip>
  );
  const renderExcelTooltip = (props) => (
    <Tooltip id="excel-tooltip" {...props}>
      Excel
    </Tooltip>
  );
  const renderPrinterTooltip = (props) => (
    <Tooltip id="printer-tooltip" {...props}>
      Printer
    </Tooltip>
  );
  const renderRefreshTooltip = (props) => (
    <Tooltip id="refresh-tooltip" {...props}>
      Refresh
    </Tooltip>
  );
  const renderCollapseTooltip = (props) => (
    <Tooltip id="refresh-tooltip" {...props}>
      Collapse
    </Tooltip>
  );

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Payroll</h4>
                <h6>Manage Your Employees</h6>
              </div>
            </div>
            <ul className="table-top-head">
              <li>
                <OverlayTrigger placement="top" overlay={renderTooltip}>
                  <Link>
                    <ImageWithBasePath
                      src="assets/img/icons/pdf.svg"
                      alt="img"
                    />
                  </Link>
                </OverlayTrigger>
              </li>
              <li>
                <OverlayTrigger placement="top" overlay={renderExcelTooltip}>
                  <Link data-bs-toggle="tooltip" data-bs-placement="top">
                    <ImageWithBasePath
                      src="assets/img/icons/excel.svg"
                      alt="img"
                    />
                  </Link>
                </OverlayTrigger>
              </li>
              <li>
                <OverlayTrigger placement="top" overlay={renderPrinterTooltip}>
                  <Link data-bs-toggle="tooltip" data-bs-placement="top">
                    <i data-feather="printer" className="feather-printer" />
                  </Link>
                </OverlayTrigger>
              </li>
              <li>
                <OverlayTrigger placement="top" overlay={renderRefreshTooltip}>
                  <Link data-bs-toggle="tooltip" data-bs-placement="top">
                    <RotateCcw />
                  </Link>
                </OverlayTrigger>
              </li>
              <li>
                <OverlayTrigger placement="top" overlay={renderCollapseTooltip}>
                  <Link
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    id="collapse-header"
                    className={data ? "active" : ""}
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(setToogleHeader(!data));
                    }}
                  >
                    <ChevronUp />
                  </Link>
                </OverlayTrigger>
              </li>
            </ul>
            <div className="page-btn">
              <button
                className="btn btn-primary add-em-payroll"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight-add"
                aria-controls="offcanvasRight-add"
              >
                <PlusCircle className="me-2" />
                Add New Payoll
              </button>
            </div>
          </div>
          {/* /product list */}
          <div className="card table-list-card">
            <div className="card-body">
              <div className="table-top">
                <div className="search-set">
                  <div className="search-input">
                    <Link to="#" className="btn btn-searchset">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-search"
                      >
                        <circle cx={11} cy={11} r={8} />
                        <line x1={21} y1={21} x2="16.65" y2="16.65" />
                      </svg>
                    </Link>
                    <div
                      id="DataTables_Table_0_filter"
                      className="dataTables_filter"
                    >
                      <label>
                        {" "}
                        <input
                          type="search"
                          className="form-control form-control-sm"
                          placeholder="Search"
                          aria-controls="DataTables_Table_0"
                          value={searchText}
                          onChange={handleSearch}
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="search-path">
                  <div className="d-flex align-items-center">
                    <a  className={`btn btn-filter ${
                      isFilterVisible ? "setclose" : ""
                    }`} id="filter_search" onClick={toggleFilterVisibility}>
                      <Filter className="filter-icon" onClick={toggleFilterVisibility} />
                      <span onClick={toggleFilterVisibility}>
                        <img src="assets/img/icons/closes.svg" alt="img" />
                      </span>
                    </a>
                  </div>
                </div>
                <div className="form-sort">
                  <Sliders className="info-img" />
                  <Select
                    className="img-select"
                    classNamePrefix="react-select"
                    options={options}
                    placeholder="Sort by Date"
                  />
                </div>
              </div>
              {/* /Filter */}
              <div className={`card${isFilterVisible ? " visible" : ""}`}
                id="filter_inputs"
                style={{ display: isFilterVisible ? "block" : "none" }}>
                <div className="card-body pb-0">
                  <div className="row">
                    <div className="col-lg-12 col-sm-12">
                      <div className="row">
                        <div className="col-lg-3 col-sm-6 col-12">
                          <div className="input-blocks">
                            <User className="info-img" />
                            <Select
                              className="img-select"
                              classNamePrefix="react-select"
                              options={options2}
                              placeholder="Choose Name"
                            />
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                          <div className="input-blocks">
                            <StopCircle className="info-img" />
                            <Select
                              className="img-select"
                              classNamePrefix="react-select"
                              options={options3}
                              placeholder="Choose Status"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-12">
                          <div className="input-blocks">
                            <a className="btn btn-filters ms-auto">
                              {" "}
                             <Search />{" "}
                              Search{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Filter */}
              <div className="table-responsive">
                <Table columns={columns} dataSource={filteredData} />
              </div>
            </div>
          </div>
          {/* /product list */}
        </div>
      </div>
      {/* Add Payroll */}
      <div
        className="offcanvas offcanvas-end em-payrol-add"
        tabIndex={-1}
        id="offcanvasRight-add"
      >
        <div className="offcanvas-body p-0">
          <div className="page-wrapper-new">
            <div className="content">
              <div className="page-header justify-content-between">
                <div className="page-title">
                  <h4>Add New Payroll</h4>
                </div>
                <div className="page-btn">
                  <a
                    href="#"
                    className="btn btn-added"
                    data-bs-dismiss="offcanvas"
                  >
                    <ArrowLeft className="me-2" />
                    Back To List
                  </a>
                </div>
              </div>
              {/* /add */}
              <div className="card">
                <div className="card-body">
                  <form>
                    <div className="row">
                      <div className="col-lg-3 col-sm-6 col-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Select Employee <span>*</span>
                          </label>
                          <Select
                            classNamePrefix="react-select"
                            options={options4}
                            placeholder="Choose"
                          />
                        </div>
                      </div>
                      <div className="text-title">
                        <p>Salary Information</p>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">
                          Basic Salary <span>*</span>
                        </label>
                        <input type="text" className="text-form form-control" />
                      </div>
                      <div className="payroll-info d-flex">
                        <p>Status</p>
                        <div className="status-updates">
                          <ul
                            className="nav nav-pills list mb-3"
                            id="pills-tab"
                            role="tablist"
                          >
                            <li className="nav-item" role="presentation">
                              <button
                                className="nav-link active"
                                id="pills-home-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-home"
                                type="button"
                                role="tab"
                              >
                                <span className="form-check form-check-inline ">
                                  <span className="form-check-label">Paid</span>
                                </span>
                              </button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button
                                className="nav-link"
                                id="pills-profile-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-profile"
                                type="button"
                                role="tab"
                              >
                                <span className="form-check form-check-inline">
                                  <span className="form-check-label">
                                    Unpaid
                                  </span>
                                </span>
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="payroll-title">
                        <p>Allowances</p>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-12">
                        <div className="mb-3">
                          <label className="form-label">
                            HRA Allowance <span>*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="allowances-one"
                          />
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Conveyance <span>*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="conveyance"
                          />
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Medical Allowance <span>*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="medical-allowance"
                          />
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Bonus <span>*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="bonus"
                          />
                        </div>
                      </div>
                      <div className="sub-form">
                        <div className="mb-3 flex-grow-1">
                          <label className="form-label">Others</label>
                          <input
                            type="text"
                            className="text-form form-control"
                          />
                        </div>
                        <div className="subadd-btn">
                          <a href="#" className="btn btn-add">
                            <PlusCircle />
                          </a>
                        </div>
                      </div>
                      <div className="payroll-title">
                        <p>Deductions</p>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-12">
                        <div className="mb-3">
                          <label className="form-label">
                            PF <span>*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="pf-allowances"
                          />
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Professional Tax <span>*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="professional"
                          />
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-12">
                        <div className="mb-3">
                          <label className="form-label">
                            TDS <span>*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="tds-allowances"
                          />
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Loans &amp; Others <span>*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="other-allowances"
                          />
                        </div>
                      </div>
                      <div className="sub-form">
                        <div className="mb-3 flex-grow-1">
                          <label className="form-label">Others</label>
                          <input
                            type="text"
                            className="text-form form-control"
                          />
                        </div>
                        <div className="subadd-btn">
                          <a href="#" className="btn btn-add">
                            <PlusCircle />
                          </a>
                        </div>
                      </div>
                      <div className="payroll-title">
                        <p>Deductions</p>
                      </div>
                      <div className="col-lg-4 col-sm-6 col-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Total Allowance <span>*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="total-allowances"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-6 col-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Total Deduction <span>*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="total-deduction"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-6 col-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Net Salary <span>*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="salary-allowances"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="view-btn">
                          <button type="button" className="btn btn-previw me-2">
                            Preview
                          </button>
                          <button type="button" className="btn btn-reset me-2">
                            Reset
                          </button>
                          <button type="submit" className="btn btn-save">
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {/* /add */}
            </div>
          </div>
        </div>
      </div>
      {/* /Add Payroll */}
      {/* Edit Payroll */}
      <div
        className="offcanvas offcanvas-end em-payrol-add"
        tabIndex={-1}
        id="offcanvasRight"
      >
        <div className="offcanvas-body p-0">
          <div className="page-wrapper-new">
            <div className="content">
              <div className="page-header justify-content-between">
                <div className="page-title">
                  <h4>Edit Payroll</h4>
                </div>
                <div className="page-btn">
                  <a
                    href="#"
                    className="btn btn-added"
                    data-bs-dismiss="offcanvas"
                  >
                    <ArrowLeft className="me-2" />
                    Back To List
                  </a>
                </div>
              </div>
              {/* /add */}
              <div className="card">
                <div className="card-body">
                  <form>
                    <div className="row">
                      <div className="col-lg-3 col-sm-6 col-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Select Employee <span>*</span>
                          </label>
                          <Select
                            classNamePrefix="react-select"
                            options={options5}
                            placeholder="Herald james"
                          />
                        </div>
                      </div>
                      <div className="text-title">
                        <p>Salary Information</p>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">
                          Basic Salary <span>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="$32,000"
                        />
                      </div>
                      <div className="payroll-info d-flex">
                        <p>Status</p>
                        <div className="status-updates">
                          <ul
                            className="nav nav-pills list mb-3"
                            id="pills-tab2"
                            role="tablist"
                          >
                            <li className="nav-item" role="presentation">
                              <button
                                className="nav-link active"
                                id="pills-home-tab2"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-home"
                                type="button"
                                role="tab"
                              >
                                <span className="form-check form-check-inline ">
                                  <span className="form-check-label">Paid</span>
                                </span>
                              </button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button
                                className="nav-link"
                                id="pills-profile-tab2"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-profile"
                                type="button"
                                role="tab"
                              >
                                <span className="form-check form-check-inline">
                                  <span className="form-check-label">
                                    Unpaid
                                  </span>
                                </span>
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="payroll-title">
                        <p>Allowances</p>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-12">
                        <div className="mb-3">
                          <label className="form-label">
                            HRA Allowance <span>*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="hra-allowances-one"
                            defaultValue={0.0}
                          />
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Conveyance <span>*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="conveyance-two"
                            defaultValue={0.0}
                          />
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Medical Allowance <span>*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="medical-allowance-three"
                            defaultValue={0.0}
                          />
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Bonus <span>*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="bonus-allowances-four"
                            defaultValue={0.0}
                          />
                        </div>
                      </div>
                      <div className="sub-form">
                        <div className="mb-3 flex-grow-1">
                          <label className="form-label">Others</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue={0.0}
                          />
                        </div>
                        <div className="subadd-btn">
                          <a href="#" className="btn btn-add">
                            <PlusCircle />
                          </a>
                        </div>
                      </div>
                      <div className="payroll-title">
                        <p>Deductions</p>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-12">
                        <div className="mb-3">
                          <label className="form-label">
                            PF <span>*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="pf-allowances-five"
                            defaultValue={0.0}
                          />
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Professional Tax <span>*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="professional-allowances-six"
                            defaultValue={0.0}
                          />
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-12">
                        <div className="mb-3">
                          <label className="form-label">
                            TDS <span>*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="tds-allowances-seven"
                            defaultValue={0.0}
                          />
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Loans &amp; Others <span>*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="other-allowances-eight"
                            defaultValue={0.0}
                          />
                        </div>
                      </div>
                      <div className="sub-form">
                        <div className="mb-3 flex-grow-1">
                          <label className="form-label">Others</label>
                          <input
                            type="text"
                            className="text-form form-control"
                            defaultValue={0.0}
                          />
                        </div>
                        <div className="subadd-btn">
                          <a href="#" className="btn btn-add">
                            <PlusCircle />
                          </a>
                        </div>
                      </div>
                      <div className="payroll-title">
                        <p>Deductions</p>
                      </div>
                      <div className="col-lg-4 col-sm-6 col-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Total Allowance <span>*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="total-allowances-nine"
                            defaultValue={0.0}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-6 col-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Total Deduction <span>*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="deductio-allowances-ten"
                            defaultValue={0.0}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-6 col-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Net Salary <span>*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="salary-allowances-leven"
                            defaultValue="$32.000"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="view-btn">
                          <button type="button" className="btn btn-previw me-2">
                            Preview
                          </button>
                          <button type="submit" className="btn btn-reset me-2">
                            Reset
                          </button>
                          <button type="submit" className="btn btn-save">
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {/* /add */}
            </div>
          </div>
        </div>
      </div>
      {/* Edit Payroll */}
    </>
  );
};

export default PayrollList;
