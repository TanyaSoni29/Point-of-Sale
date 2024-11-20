import React, { useState } from "react";
import ImageWithBasePath from "../../core/img/imagewithbasebath";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  ChevronUp,
  Download,
  File,
  Filter,
  PlusCircle,
  RotateCcw,
  Sliders,
  StopCircle,
  User,
} from "feather-icons-react/build/IconComponents";
import { setToogleHeader } from "../../core/redux/action";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import ImportPurchases from "../../core/modals/purchases/importpurchases";
import EditPurchases from "../../core/modals/purchases/editpurchases";
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import Table from "../../core/pagination/datatable";
import { purchaseslist } from "../../core/json/purchaselistdata";
import AddPurchases from "../../core/modals/purchases/addpurchases";

const PurchasesList = () => {
  const purchasedata = purchaseslist;
  const [searchText, setSearchText] = useState("");
  const filteredData = purchasedata.filter((entry) => {
    return Object.keys(entry).some((key) => {
      return String(entry[key])
        .toLowerCase()
        .includes(searchText.toLowerCase());
    });
  });
  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };
  const columns = [
    {
      title: "SupplierName",
      dataIndex: "supplierName",
      sorter: (a, b) => a.supplierName.length - b.supplierName.length,
    },
    {
      title: "Reference",
      dataIndex: "reference",
      sorter: (a, b) => a.reference.length - b.reference.length,
    },

    {
      title: "Date",
      dataIndex: "date",
      sorter: (a, b) => a.date.length - b.date.length,
    },

    {
      title: "Status",
      dataIndex: "status",
      render: (text) => (
        <span
          className={`badges ${
            text === "Received" ? "status-badge" : "badge-bgdanger"
          }`}
        >
          {text}
        </span>
      ),
      sorter: (a, b) => a.status.length - b.status.length,
    },
    {
      title: "GrandTotal",
      dataIndex: "grandTotal",
      sorter: (a, b) => a.grandTotal.length - b.grandTotal.length,
    },
    {
      title: "Paid",
      dataIndex: "paid",
      sorter: (a, b) => a.paid.length - b.paid.length,
    },
    {
      title: "Due",
      dataIndex: "due",
      sorter: (a, b) => a.due.length - b.due.length,
    },
    {
      title: "CreatedBy",
      dataIndex: "createdBy",
      render: (text) => (
        <span
          className={`badges ${
            text === "Paid" ? "badge-linesuccess" : "badge-linedangered"
          }`}
        >
          {text}
        </span>
      ),
      sorter: (a, b) => a.createdBy.length - b.createdBy.length,
    },

    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: () => (
        <div className="action-table-data">
        <div className="edit-delete-action">
          <Link className="me-2 p-2" to="#">
            <i data-feather="eye" className="feather-eye"></i>
          </Link>
          <Link className="me-2 p-2" data-bs-toggle="modal" data-bs-target="#edit-units">
            <i data-feather="edit" className="feather-edit"></i>
          </Link>
          <Link className="confirm-text p-2" to="#"  onClick={showConfirmationAlert}> 
            <i data-feather="trash-2" className="feather-trash-2"></i>
          </Link>
        </div>
      </div>
      ),
    },
  ];
  const dispatch = useDispatch();
  const data = useSelector((state) => state.toggle_header);

  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const toggleFilterVisibility = () => {
    setIsFilterVisible((prevVisibility) => !prevVisibility);
  };
  const oldandlatestvalue = [
    { value: "date", label: "Sort by Date" },
    { value: "newest", label: "Newest" },
    { value: "oldest", label: "Oldest" },
  ];

  const suppliername = [
    { value: "chooseSupplier", label: "Choose Supplier Name" },
    { value: "apexComputers", label: "Apex Computers" },
    { value: "beatsHeadphones", label: "Beats Headphones" },
    { value: "dazzleShoes", label: "Dazzle Shoes" },
    { value: "bestAccessories", label: "Best Accessories" },
  ];
  const status = [
    { value: "chooseStatus", label: "Choose Status" },
    { value: "received", label: "Received" },
    { value: "ordered", label: "Ordered" },
    { value: "pending", label: "Pending" },
  ];
  const refrencecode = [
    { value: "enterReference", label: "Enter Reference" },
    { value: "PT001", label: "PT001" },
    { value: "PT002", label: "PT002" },
    { value: "PT003", label: "PT003" },
  ];
  const paymentstatus = [
    { value: "choosePaymentStatus", label: "Choose Payment Status" },
    { value: "paid", label: "Paid" },
    { value: "partial", label: "Partial" },
    { value: "unpaid", label: "Unpaid" },
  ];
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
  const MySwal = withReactContent(Swal);

  const showConfirmationAlert = () => {
      MySwal.fire({
          title: 'Are you sure?',
          text: 'You won\'t be able to revert this!',
          showCancelButton: true,
          confirmButtonColor: '#00ff00',
          confirmButtonText: 'Yes, delete it!',
          cancelButtonColor: '#ff0000',
          cancelButtonText: 'Cancel',
      }).then((result) => {
          if (result.isConfirmed) {

              MySwal.fire({
                  title: 'Deleted!',
                  text: 'Your file has been deleted.',
                  className: "btn btn-success",
                  confirmButtonText: 'OK',
                  customClass: {
                      confirmButton: 'btn btn-success',
                  },
              });
          } else {
              MySwal.close();
          }

      });
  };

  return (
    <div>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header transfer">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Purchase List</h4>
                <h6>Manage your purchases</h6>
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
                    onClick={() => {
                      dispatch(setToogleHeader(!data));
                    }}
                  >
                    <ChevronUp />
                  </Link>
                </OverlayTrigger>
              </li>
            </ul>
            <div className="d-flex purchase-pg-btn">
              <div className="page-btn">
                <Link
                  to="#"
                  className="btn btn-added"
                  data-bs-toggle="modal"
                  data-bs-target="#add-units"
                >
                  <PlusCircle className="me-2" />
                  Add New Purchase
                </Link>
              </div>
              <div className="page-btn import">
                <Link
                  to="#"
                  className="btn btn-added color"
                  data-bs-toggle="modal"
                  data-bs-target="#view-notes"
                >
                  <Download className="me-2" />
                  Import Purchase
                </Link>
              </div>
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
                                    <line
                                      x1={21}
                                      y1={21}
                                      x2="16.65"
                                      y2="16.65"
                                    />
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
                  <Link
                    className={`btn btn-filter ${
                      isFilterVisible ? "setclose" : ""
                    }`}
                    id="filter_search"
                  >
                    <Filter
                      className="filter-icon"
                      onClick={toggleFilterVisibility}
                    />
                    <span onClick={toggleFilterVisibility}>
                      <ImageWithBasePath
                        src="assets/img/icons/closes.svg"
                        alt="img"
                      />
                    </span>
                  </Link>
                </div>
                <div className="form-sort">
                  <Sliders className="info-img" />
                  <Select
                    className="img-select"
                    classNamePrefix="react-select"
                    options={oldandlatestvalue}
                    placeholder="Newest"
                  />
                </div>
              </div>
              {/* /Filter */}
              <div
                className={`card${isFilterVisible ? " visible" : ""}`}
                id="filter_inputs"
                style={{ display: isFilterVisible ? "block" : "none" }}
              >
                <div className="card-body pb-0">
                  <div className="row">
                    <div className="col-lg-2 col-sm-6 col-12">
                      <div className="input-blocks">
                        <User className="info-img" />
                        <Select
                          className="img-select"
                          options={suppliername}
                          classNamePrefix="react-select"
                          placeholder="Choose Supplier Name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-6 col-12">
                      <div className="input-blocks">
                        <StopCircle className="info-img" />
                        <Select
                          className="img-select"
                          options={status}
                          classNamePrefix="react-select"
                          placeholder="Choose Status"
                        />
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-6 col-12">
                      <div className="input-blocks">
                        <File className="info-img" />
                        <Select
                          className="img-select"
                          options={refrencecode}
                          classNamePrefix="react-select"
                          placeholder="Enter Reference"
                        />
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-6 col-12">
                      <div className="input-blocks">
                        <i className="fas fa-money-bill info-img" />
                        <Select
                          className="img-select"
                          t
                          options={paymentstatus}
                          classNamePrefix="react-select"
                          placeholder="Choose Payment Status"
                        />
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-12 ms-auto">
                      <div className="input-blocks">
                        <Link className="btn btn-filters ms-auto">
                          {" "}
                          <i
                            data-feather="search"
                            className="feather-search"
                          />{" "}
                          Search{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Filter */}
              <div className="table-responsive product-list">
                <Table columns={columns} dataSource={filteredData} />
              </div>
            </div>
          </div>
          {/* /product list */}
        </div>
      </div>
      <AddPurchases />
      <ImportPurchases />
      <EditPurchases />
    </div>
  );
};

export default PurchasesList;
