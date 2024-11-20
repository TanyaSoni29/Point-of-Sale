import React, { useState } from "react";
import { Filter, Sliders } from "react-feather";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../core/img/imagewithbasebath";
import Select from "react-select";
import { StopCircle, User } from "react-feather";
import Breadcrumbs from "../../core/breadcrumbs";
import { customerreportdata } from "../../core/json/customerreportdata";
import Table from "../../core/pagination/datatable";

const CustomerReport = () => {

  const data = customerreportdata;
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
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const toggleFilterVisibility = () => {
    setIsFilterVisible((prevVisibility) => !prevVisibility);
  };
  const options = [
    { value: "sortByDate", label: "Sort by Date" },
    { value: "140923", label: "14 09 23" },
    { value: "110923", label: "11 09 23" },
  ];

  const optionsName = [
    { value: "Rose", label: "Rose" },
    { value: "Kaitlin", label: "Kaitlin" },
  ];

  const optionsID = [
    { value: "CT_0003", label: "CT_0003" },
    { value: "CT_0004", label: "CT_0004" },
    { value: "CT_0005", label: "CT_0005" },
  ];

  const optionsStatus = [
    { value: "Completed", label: "Completed" },
    { value: "Incompleted", label: "Incompleted" },
  ];

  const optionsPaymentStatus = [
    { value: "Paid", label: "Paid" },
    { value: "Unpaid", label: "Unpaid" },
    { value: "Overdue", label: "Overdue" },
  ];
  const columns = [
    {
      title: "Customer ID",
      dataIndex: "CustomerID",
      sorter: (a, b) => a.CustomerID.length - b.CustomerID.length,
    },
    {
      title: "Customer Name",
      dataIndex: "CustomerName",
      sorter: (a, b) => a.CustomerName.length - b.CustomerName.length,
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
      title: "Due Amount",
      dataIndex: "DueAmount",
      sorter: (a, b) => a.DueAmount.length - b.DueAmount.length,
    },
   
    {
      title: "Status",
      dataIndex: "Status",
      render: (text) => (
      <span className="badges status-badge">{text}</span>
      ),
      sorter: (a, b) => a.Status.length - b.Status.length,
    },
    {
      title: "Payment Status",
      dataIndex: "PaymentStatus",
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
      sorter: (a, b) => a.PaymentStatus.length - b.PaymentStatus.length,
    },
   
  ];
  return (
    <div className="page-wrapper">
      <div className="content">
        <Breadcrumbs
          maintitle="Customer Report"
          subtitle="Manage Your Customer Report"
        />
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
                      <User className="info-img" />
                      <Select
                        className="img-select"
                        classNamePrefix="react-select"
                        options={optionsName}
                        placeholder="Choose Name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-sm-6 col-12">
                    <div className="input-blocks">
                      <User className="info-img" />
                      <Select
                        className="img-select"
                        classNamePrefix="react-select"
                        options={optionsID}
                        placeholder="Choose ID"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-sm-6 col-12">
                    <div className="input-blocks">
                      <StopCircle className="info-img" />
                      <Select
                        className="img-select"
                        classNamePrefix="react-select"
                        options={optionsStatus}
                        placeholder="Choose Status"
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
                        options={optionsPaymentStatus}
                        placeholder="Choose Payment Status"
                      />
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-12">
                    <div className="input-blocks">
                      <a className="btn btn-filters ms-auto">
                        {" "}
                        <i
                          data-feather="search"
                          className="feather-search"
                        />{" "}
                        Search{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Filter */}
            <div className="table-responsive">
            <Table columns={columns} dataSource={filteredData}  />

            </div>
          </div>
        </div>
        {/* /product list */}
      </div>
    </div>
  );
};

export default CustomerReport;
