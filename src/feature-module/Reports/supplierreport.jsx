import React, { useState } from "react";
import ImageWithBasePath from "../../core/img/imagewithbasebath";
import { Filter, Sliders } from "react-feather";
import Select from "react-select";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import { Box, Calendar, StopCircle, User, FileText } from "react-feather";
import DateRangePicker from "react-bootstrap-daterangepicker";
import Breadcrumbs from "../../core/breadcrumbs";
import { paymentdata, returnsupplierdata, supplierreportdata } from "../../core/json/supplierreportdata";
import Table from "../../core/pagination/datatable";

const SupplierReport = () => {
  const data = supplierreportdata;
  const [searchText, setSearchText] = useState("");
  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };
  const filteredData = data.filter((entry) => {
    return Object.keys(entry).some((key) => {
      return String(entry[key])
        .toLowerCase()
        .includes(searchText.toLowerCase());
    });
  });
  const returnsupplierdatasource = returnsupplierdata;
  const paymentdatasource = paymentdata;
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [isFilterVisibleTwo, setIsFilterVisibleTwo] = useState(false);
  const [isFilterVisibleThree, setisFilterVisibleThree] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const toggleFilterVisibility = () => {
    setIsFilterVisible((prevVisibility) => !prevVisibility);
  };

  const toggleFilterVisibilityTwo = () => {
    setIsFilterVisibleTwo((prevVisibilityTwo) => !prevVisibilityTwo);
  };

  const toggleFilterVisibilityThree = () => {
    setisFilterVisibleThree((prevVisibilityThree) => !prevVisibilityThree);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const options = [
    { value: "sortByDate", label: "Sort by Date" },
    { value: "140923", label: "14 09 23" },
    { value: "110923", label: "11 09 23" },
  ];

  const optionsThree = [
    { value: "sortByDate", label: "Sort by Date" },
    { value: "140923", label: "14 09 23" },
    { value: "110923", label: "11 09 23" },
  ];

  const optionsTwo = [
    { value: "sortByDate", label: "Sort by Date" },
    { value: "140923", label: "14 09 23" },
    { value: "110923", label: "11 09 23" },
  ];

  const productOptions = [
    { value: "chooseProduct", label: "Choose Product" },
    { value: "appleSeries5Watch", label: "Apple Series 5 Watch" },
    { value: "amazonEchoDot", label: "Amazon Echo Dot" },
  ];

  const statusOptions = [
    { value: "chooseStatus", label: "Choose Status" },
    { value: "received", label: "Received" },
  ];

  const supplierNameOptions = [
    { value: "chooseSupplierName", label: "Choose Supplier Name" },
    { value: "apexComputers", label: "Apex Computers" },
    { value: "beatsHeadphones", label: "Beats Headphones" },
  ];

  const nameOptions = [
    { value: "chooseName", label: "Choose Name" },
    { value: "apexComputers", label: "Apex Computers" },
    { value: "beatsHeadphones", label: "Beats Headphones" },
  ];

  const statusOptions2 = [
    { value: "chooseStatus", label: "Choose Status" },
    { value: "completed", label: "Completed" },
    { value: "incompleted", label: "Incompleted" },
  ];

  const paymentStatusOptions = [
    { value: "choosePaymentStatus", label: "Choose Payment Status" },
    { value: "paid", label: "Paid" },
    { value: "unpaid", label: "Unpaid" },
    { value: "overdue", label: "Overdue" },
  ];

  const initialSettings = {
    endDate: new Date("2020-08-11T12:30:00.000Z"),
    ranges: {
      "Last 30 Days": [
        new Date("2020-07-12T04:57:17.076Z"),
        new Date("2020-08-10T04:57:17.076Z"),
      ],
      "Last 7 Days": [
        new Date("2020-08-04T04:57:17.076Z"),
        new Date("2020-08-10T04:57:17.076Z"),
      ],
      "Last Month": [
        new Date("2020-06-30T18:30:00.000Z"),
        new Date("2020-07-31T18:29:59.999Z"),
      ],
      "This Month": [
        new Date("2020-07-31T18:30:00.000Z"),
        new Date("2020-08-31T18:29:59.999Z"),
      ],
      Today: [
        new Date("2020-08-10T04:57:17.076Z"),
        new Date("2020-08-10T04:57:17.076Z"),
      ],
      Yesterday: [
        new Date("2020-08-09T04:57:17.076Z"),
        new Date("2020-08-09T04:57:17.076Z"),
      ],
    },
    startDate: new Date("2020-08-04T04:57:17.076Z"), // Set "Last 7 Days" as default
    timePicker: false,
  };
  const columns = [
    {
      title: "Purchase Name",
      dataIndex: "purchaseDate",
      sorter: (a, b) => a.purchaseDate.length - b.purchaseDate.length,
    },
    {
      title: "Product",
      dataIndex: "product",
      render: (text, record) => (
        <span className="productimgname">
          <Link to="#" className="product-img stock-img">
            <ImageWithBasePath alt="img" src={record.img} />
          </Link>
          <Link to="#">{text}</Link>
        </span>
      ),
      sorter: (a, b) => a.product.length - b.product.length,
    },

    {
      title: "Purchase Amount",
      dataIndex: "purchaseAmount",
      sorter: (a, b) => a.purchaseAmount.length - b.purchaseAmount.length,
    },

    {
      title: "Purchase Qty",
      dataIndex: "purchaseQty",
      sorter: (a, b) => a.purchaseQty.length - b.purchaseQty.length,
    },
    {
      title: "Paid",
      dataIndex: "paid",
      sorter: (a, b) => a.paid.length - b.paid.length,
    },
   
    {
      title: "Balance",
      dataIndex: "balance",
      sorter: (a, b) => a.balance.length - b.balance.length,
    },
    {
      title: "Status",
      dataIndex: "status",
      render : (text) => (
        <span className="badges status-badge">{text}</span>
      ),
      sorter: (a, b) => a.status.length - b.status.length,
    },
   
  ];
  const columnsreturnsupplier = [
    {
      title: "Reference",
      dataIndex: "reference",
      sorter: (a, b) => a.reference.length - b.reference.length,
    },
    {
      title: "Supplier Name",
      dataIndex: "supplierName",
     
      sorter: (a, b) => a.supplierName.length - b.supplierName.length,
    },

    {
      title: "Amount",
      dataIndex: "amount",
      sorter: (a, b) => a.amount.length - b.amount.length,
    },

    {
      title: "Paid",
      dataIndex: "paid",
      sorter: (a, b) => a.paid.length - b.paid.length,
    },
    {
      title: "Due Amount",
      dataIndex: "dueAmount",
      sorter: (a, b) => a.dueAmount.length - b.dueAmount.length,
    },
   
    {
      title: "Status",
      dataIndex: "status",
      render: (text) =>(
        <span className="badges status-badge">{text}</span>
      ),
      
      sorter: (a, b) => a.status.length - b.status.length,
    },
    {
      title: "Payment Status",
      dataIndex: "paymentStatus",
   
        render: (text) => (
          <div>
              {text === "Paid" && (
                  <span className="badge-linesuccess">{text}</span>
              )}
              {text === "Unpaid" && (
                  <span className="badge badge-linedanger">{text}</span>
              )}
              {text === "Overdue" && (
                  <span className="badges-warning">{text}</span>
              )}
          </div>
      ),
      sorter: (a, b) => a.paymentStatus.length - b.paymentStatus.length,
    },
   
  ];
  const columnpayment = [
    {
      title: "Date",
      dataIndex: "Date",
      sorter: (a, b) => a.Date.length - b.Date.length,
    },
    {
      title: "Purchase",
      dataIndex: "Purchase",
     
      sorter: (a, b) => a.Purchase.length - b.Purchase.length,
    },

    {
      title: "Reference",
      dataIndex: "Reference",
      sorter: (a, b) => a.Reference.length - b.Reference.length,
    },

    {
      title: "Supplier Name",
      dataIndex: "SupplierName",
      sorter: (a, b) => a.SupplierName.length - b.SupplierName.length,
    },
    {
      title: "Amount",
      dataIndex: "Amount",
      sorter: (a, b) => a.Amount.length - b.Amount.length,
    },
    {
      title: "Paid",
      dataIndex: "Paid",
      sorter: (a, b) => a.Paid.length - b.Paid.length,
    },
    {
      title: "PaidBy",
      dataIndex: "PaidBy",
      sorter: (a, b) => a.PaidBy.length - b.PaidBy.length,
    },
  ];

  return (
    <div className="page-wrapper">
      <div className="content">
        <Breadcrumbs
          maintitle="Supplier Report"
          subtitle="Manage Your Supplier Report"
        />
        <div className="table-tab">
          <ul className="nav nav-pills" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="purchase-report-tab"
                data-bs-toggle="pill"
                data-bs-target="#purchase-report"
                type="button"
                role="tab"
                aria-controls="purchase-report"
                aria-selected="true"
              >
                Purchase
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="payment-report-tab"
                data-bs-toggle="pill"
                data-bs-target="#payment-report"
                type="button"
                role="tab"
                aria-controls="payment-report"
                aria-selected="false"
              >
                Payment
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="return-report-tab"
                data-bs-toggle="pill"
                data-bs-target="#return-report"
                type="button"
                role="tab"
                aria-controls="return-report"
                aria-selected="false"
              >
                Return
              </button>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="purchase-report"
              role="tabpanel"
              aria-labelledby="purchase-report-tab"
            >
              {/* /product list */}
              <div className="card table-list-card">
                <div className="card-body">
                  <div className="table-top">
                    <div className="search-set">
                      <div className="search-input">
                        <input
                          type="text"
                          placeholder="Search"
                          className="form-control form-control-sm formsearch"
                          value={searchText}
                          onChange={handleSearch}
                        />
                        <Link to className="btn btn-searchset">
                          <i data-feather="search" className="feather-search" />
                        </Link>
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
                    <div className="form-sort stylewidth">
                      <Sliders className="info-img" />

                      <Select
                        classNamePrefix="react-select"
                        className="img-select"
                        options={optionsTwo}
                        placeholder="Sort by Date"
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
                            <Box className="info-img" />
                            <Select
                              className="img-select"
                              classNamePrefix="react-select"
                              options={productOptions}
                            />
                          </div>
                        </div>
                        <div className="col-lg-2 col-sm-6 col-12">
                          <div className="input-blocks">
                            <StopCircle className="info-img" />
                            <Select
                              className="img-select"
                              classNamePrefix="react-select"
                              options={statusOptions}
                            />
                          </div>
                        </div>
                        <div className="col-lg-2 col-sm-6 col-12">
                          <div className="input-blocks">
                            <div className="position-relative daterange-wraper">
                              <Calendar className="feather-14 info-img" />

                              <DateRangePicker
                                initialSettings={initialSettings}
                              >
                                <input
                                  className="form-control col-4 input-range"
                                  type="text"
                                  style={{ border: "none" }}
                                />
                              </DateRangePicker>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-12 ms-auto">
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
                  <div className="table-responsive">
                  <Table columns={columns} dataSource={filteredData} />
                  </div>
                </div>
              </div>
              {/* /product list */}
            </div>
            <div
              className="tab-pane fade"
              id="payment-report"
              role="tabpanel"
              aria-labelledby="payment-report-tab"
            >
              {/* /product list */}
              <div className="card table-list-card">
                <div className="card-body">
                  <div className="table-top">
                    <div className="search-set">
                      <div className="search-input">
                        <input
                          type="text"
                          placeholder="Search"
                          className="form-control form-control-sm formsearch"
                        />
                        <Link to className="btn btn-searchset">
                          <i data-feather="search" className="feather-search" />
                        </Link>
                      </div>
                    </div>
                    <div className="search-path">
                      <Link
                        className={`btn btn-filter ${
                          isFilterVisibleTwo ? "setclose" : ""
                        }`}
                        id="filter_search"
                      >
                        <Filter
                          className="filter-icon"
                          onClick={toggleFilterVisibilityTwo}
                        />
                        <span onClick={toggleFilterVisibilityTwo}>
                          <ImageWithBasePath
                            src="assets/img/icons/closes.svg"
                            alt="img"
                          />
                        </span>
                      </Link>
                    </div>
                    <div className="form-sort stylewidth">
                      <Sliders className="info-img" />

                      <Select
                        className="img-select"
                        classNamePrefix="react-select"
                        options={optionsThree}
                        placeholder="Sort by Date"
                      />
                    </div>
                  </div>
                  {/* /Filter */}
                  <div
                    className={`card${isFilterVisibleTwo ? " visible" : ""}`}
                    id="filter_inputs1"
                    style={{ display: isFilterVisibleTwo ? "block" : "none" }}
                  >
                    <div className="card-body pb-0">
                      <div className="row">
                        <div className="col-lg-3 col-sm-6 col-12">
                          <div className="input-blocks">
                            <User className="info-img" />
                            <Select
                              className="img-select"
                              classNamePrefix="react-select"
                              options={supplierNameOptions}
                            />
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                          <div className="input-blocks">
                            <Calendar className="info-img" />
                            <div className="input-groupicon">
                              <DatePicker
                                selected={selectedDate}
                                onChange={handleDateChange}
                                dateFormat="dd/MM/yyyy"
                                placeholderText="Choose Date"
                                className="datetimepicker"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                          <div className="input-blocks">
                            <FileText className="info-img" />
                            <input type="text" placeholder="Enter Reference" />
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12 ms-auto">
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
                  <div className="table-responsive">
                  <Table columns={columnpayment} dataSource={paymentdatasource} />

                  </div>
                </div>
              </div>
              {/* /product list */}
            </div>
            <div
              className="tab-pane fade"
              id="return-report"
              role="tabpanel"
              aria-labelledby="return-report-tab"
            >
              {/* /product list */}
              <div className="card table-list-card">
                <div className="card-body">
                  <div className="table-top">
                    <div className="search-set">
                      <div className="search-input">
                        <input
                          type="text"
                          placeholder="Search"
                          className="form-control form-control-sm formsearch"
                        />
                        <Link to className="btn btn-searchset">
                          <i data-feather="search" className="feather-search" />
                        </Link>
                      </div>
                    </div>
                    <div className="search-path">
                      <Link
                        className={`btn btn-filter ${
                          isFilterVisibleThree ? "setclose" : ""
                        }`}
                        id="filter_search"
                      >
                        <Filter
                          className="filter-icon"
                          onClick={toggleFilterVisibilityThree}
                        />
                        <span onClick={toggleFilterVisibilityThree}>
                          <ImageWithBasePath
                            src="assets/img/icons/closes.svg"
                            alt="img"
                          />
                        </span>
                      </Link>
                    </div>
                    <div className="form-sort stylewidth">
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
                  <div
                    className={`card${isFilterVisibleThree ? " visible" : ""}`}
                    id="filter_inputs2"
                    style={{ display: isFilterVisibleThree ? "block" : "none" }}
                  >
                    <div className="card-body pb-0">
                      <div className="row">
                        <div className="col-lg-3 col-sm-6 col-12">
                          <div className="input-blocks">
                            <User className="info-img" />
                            <Select
                              className="img-select"
                              classNamePrefix="react-select"
                              options={nameOptions}
                            />
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                          <div className="input-blocks">
                            <StopCircle className="info-img" />
                            <Select
                              className="img-select"
                              classNamePrefix="react-select"
                              options={statusOptions2}
                            />
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                          <div className="input-blocks">
                            <ImageWithBasePath
                              src="assets/img/icons/payment-status.svg"
                              className="info-img status-icon"
                              alt="Icon"
                            />
                            <Select
                              className="img-select"
                              classNamePrefix="react-select"
                              options={paymentStatusOptions}
                            />
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12 ms-auto">
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
                  <div className="table-responsive">
                  <Table columns={columnsreturnsupplier} dataSource={returnsupplierdatasource} />

                  </div>
                </div>
              </div>
              {/* /product list */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplierReport;
