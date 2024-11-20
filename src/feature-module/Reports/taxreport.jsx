import React, { useState } from "react";
import { Filter, Sliders } from "react-feather";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../core/img/imagewithbasebath";
import Select from "react-select";
import { Zap } from "react-feather/dist";
import { CreditCard } from "feather-icons-react/build/IconComponents";
import { Calendar } from "react-feather";
import DateRangePicker from "react-bootstrap-daterangepicker";
import Breadcrumbs from "../../core/breadcrumbs";
import { purchasetaxreport, taxreportdata } from "../../core/json/taxreport";
import Table from "../../core/pagination/datatable";

const TaxReport = () => {
  const data = taxreportdata;
  const purchasetaxreportdata = purchasetaxreport;
  const [searchText, setSearchText] = useState("");
  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };
  const [searchText1, setSearchText1] = useState("");
  const handleSearch1 = (e) => {
    setSearchText1(e.target.value);
  };
  const filteredData1 = purchasetaxreportdata.filter((entry) => {
    return Object.keys(entry).some((key) => {
      return String(entry[key])
        .toLowerCase()
        .includes(searchText.toLowerCase());
    });
  });
  const filteredData = data.filter((entry) => {
    return Object.keys(entry).some((key) => {
      return String(entry[key])
        .toLowerCase()
        .includes(searchText.toLowerCase());
    });
  });
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [isFilterVisibleTwo, setIsFilterVisibleTwo] = useState(false);
  const toggleFilterVisibility = () => {
    setIsFilterVisible((prevVisibility) => !prevVisibility);
  };

  const toggleFilterVisibilityTwo = () => {
    setIsFilterVisibleTwo((prevVisibilityTwo) => !prevVisibilityTwo);
  };

  const options = [
    { value: "sortByDate", label: "Sort by Date" },
    { value: "140923", label: "14 09 23" },
    { value: "110923", label: "11 09 23" },
  ];

  const optionsTwo = [
    { value: "sortByDate", label: "Sort by Date" },
    { value: "140923", label: "14 09 23" },
    { value: "110923", label: "11 09 23" },
  ];

  const optionsCategory = [{ value: "Computers", label: "Computers" }];

  const optionsPaymentMethod = [
    { value: "Complete", label: "Complete" },
    { value: "Inprogress", label: "Inprogress" },
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
      title: "Customer",
      dataIndex: "Customer",
      render: (text, record) => (
        <span className="userimgname">
          <Link to="#" className="product-img">
            <ImageWithBasePath alt="img" src={record.Img} />
          </Link>
          <Link to="#">{text}</Link>
        </span>
      ),
      sorter: (a, b) => a.Customer.length - b.Customer.length,
    },
    {
      title: "Date",
      dataIndex: "Date",
      sorter: (a, b) => a.Date.length - b.Date.length,
    },

    {
      title: "Invoice Number",
      dataIndex: "InvoiceNumber",
      sorter: (a, b) => a.InvoiceNumber.length - b.InvoiceNumber.length,
    },
    {
      title: "Total Amount",
      dataIndex: "TotalAmount",
      sorter: (a, b) => a.TotalAmount.length - b.TotalAmount.length,
    },
    {
      title: "Payment Method",
      dataIndex: "PaymentMethod",
      render: (text, record) => (
        <div className="payment-info">
          <ImageWithBasePath src={record.PaymentMethod} alt="product" />
        </div>
      ),
      sorter: (a, b) => a.PaymentMethod.length - b.PaymentMethod.length,
    },
    {
      title: "Discount",
      dataIndex: "Discount",
      sorter: (a, b) => a.Discount.length - b.Discount.length,
    },
    {
      title: "Tax Amount",
      dataIndex: "TaxAmount",
      sorter: (a, b) => a.TaxAmount.length - b.TaxAmount.length,
    },
  ];
  const columnsone = [
    {
      title: "Supplier",
      dataIndex: "Supplier",
      sorter: (a, b) => a.Supplier.length - b.Supplier.length,
    },
    {
      title: "Date",
      dataIndex: "Date",
      sorter: (a, b) => a.Date.length - b.Date.length,
    },

    {
      title: "RefNo",
      dataIndex: "RefNo",
      sorter: (a, b) => a.RefNo.length - b.RefNo.length,
    },
    {
      title: "Total Amount",
      dataIndex: "TotalAmount",
      sorter: (a, b) => a.TotalAmount.length - b.TotalAmount.length,
    },
    {
      title: "Payment Method",
      dataIndex: "PaymentMethod",
      render: (text, record) => (
        <div className="payment-info">
          <ImageWithBasePath src={record.PaymentMethod} alt="product" />
        </div>
      ),
      sorter: (a, b) => a.PaymentMethod.length - b.PaymentMethod.length,
    },
    {
      title: "Discount",
      dataIndex: "Discount",
      sorter: (a, b) => a.Discount.length - b.Discount.length,
    },
    {
      title: "Tax Amount",
      dataIndex: "TaxAmount",
      sorter: (a, b) => a.TaxAmount.length - b.TaxAmount.length,
    },
  ];
  return (
    <div className="page-wrapper">
      <div className="content">
        <Breadcrumbs maintitle="Tax Report" subtitle="Manage Your Tax Report" />
        {/* /product list */}
        <div className="card table-list-card">
          <div className="card-body">
            <div className="tabs-set">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="purchase-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#purchase2"
                    type="button"
                    role="tab"
                    aria-controls="purchase2"
                    aria-selected="true"
                  >
                    Purchase Tax Report
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="sales-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#sales2"
                    type="button"
                    role="tab"
                    aria-controls="sales2"
                    aria-selected="false"
                  >
                    Sales Tax Report
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="purchase2"
                  role="tabpanel"
                  aria-labelledby="purchase-tab"
                >
                  <div className="table-top">
                    <div className="search-set">
                      <div className="search-input">
                        <input
                          type="text"
                          placeholder="Search"
                          className="form-control form-control-sm formsearch"
                          aria-controls="DataTables_Table_0"
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
                        options={options}
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
                            <Zap className="info-img" />
                            <Select
                              className="img-select"
                              classNamePrefix="react-select"
                              options={optionsCategory}
                              placeholder="Choose Category"
                            />
                          </div>
                        </div>
                        <div className="col-lg-2 col-sm-6 col-12">
                          <div className="input-blocks">
                            <CreditCard className="info-img" />
                            <Select
                              className="img-select"
                              classNamePrefix="react-select"
                              options={optionsPaymentMethod}
                              placeholder="Payment Method"
                            />
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
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
                    <Table columns={columnsone} dataSource={filteredData1} />
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="sales2"
                  role="tabpanel"
                  aria-labelledby="sales-tab"
                >
                  <div className="table-top">
                    <div className="search-set">
                      <div className="search-input">
                        <input
                          type="text"
                          placeholder="Search"
                          className="form-control form-control-sm formsearch"
                          aria-controls="DataTables_Table_0"
                          value={searchText1}
                          onChange={handleSearch1}
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
                        options={optionsTwo}
                        placeholder="Sort by Date"
                      />
                    </div>
                  </div>
                  {/* /Filter */}
                  <div
                    className={`card${isFilterVisibleTwo ? " visible" : ""}`}
                    id="filter_inputs2"
                    style={{ display: isFilterVisibleTwo ? "block" : "none" }}
                  >
                    <div className="card-body pb-0">
                      <div className="row">
                        <div className="col-lg-2 col-sm-6 col-12">
                          <div className="input-blocks">
                            <Zap className="info-img" />
                            <Select
                              className="img-select"
                              classNamePrefix="react-select"
                              options={optionsCategory}
                              placeholder="Choose Category"
                            />
                          </div>
                        </div>
                        <div className="col-lg-2 col-sm-6 col-12">
                          <div className="input-blocks">
                            <CreditCard className="info-img" />
                            <Select
                              className="img-select"
                              classNamePrefix="react-select"
                              options={optionsPaymentMethod}
                              placeholder="Payment Method"
                            />
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                          <div className="input-blocks">
                            <div className="position-relative daterange-wraper">
                              <Calendar className="feather-14 info-img" />
                              <DateRangePicker
                                initialSettings={initialSettings}
                              >
                                <input
                                  className="form-control col-4 input-range"
                                  type="text"
                                />
                              </DateRangePicker>
                            </div>
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
                    <Table columns={columns} dataSource={filteredData} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /product list */}
      </div>
    </div>
  );
};

export default TaxReport;
