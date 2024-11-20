import {
  ChevronUp,
  Filter,
  PlusCircle,
  RotateCcw,
  Sliders,
  User,
} from "feather-icons-react/build/IconComponents";
import React, { useState } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Table from "../../../core/pagination/datatable";
import { setToogleHeader } from "../../../core/redux/action";
import ImageWithBasePath from "../../../core/img/imagewithbasebath";
import AddCurrency from "../../../core/modals/settings/addcurrency";
import EditCurrency from "../../../core/modals/editcurrency";
import Select from "react-select";
import SettingsSideBar from "../settingssidebar";
import { currencySettingsData } from "../../../core/json/currencySettings";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

const CurrencySettings = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.toggle_header);

  const oldandlatestvalue = [
    { value: "date", label: "Sort by Date" },
    { value: "newest", label: "Newest" },
    { value: "oldest", label: "Oldest" },
  ];
  const currency = [
    { value: "chooseName", label: "Choose Name" },
    { value: "euro", label: "Euro" },
    { value: "englandPound", label: "England Pound" },
  ];

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
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const toggleFilterVisibility = () => {
    setIsFilterVisible((prevVisibility) => !prevVisibility);
  };

  const datas = currencySettingsData;
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
      title: "Currency Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Code",
      dataIndex: "code",
      sorter: (a, b) => a.code.length - b.code.length,
    },
    {
      title: "Symbol",
      dataIndex: "symbol",
      sorter: (a, b) => a.symbol.length - b.symbol.length,
    },
    {
      title: "Exchange Rate",
      dataIndex: "exchangeRate",
      sorter: (a, b) => a.exchangeRate.length - b.exchangeRate.length,
    },
    {
      title: "Created On",
      dataIndex: "createdOn",
      sorter: (a, b) => a.createdOn.length - b.createdOn.length,
    },
    {
      title: "Action",
      dataIndex: "action",
      render: () => (
        <div className="edit-delete-action action-table-data">
          <Link
            className="me-2 p-2"
            href="#"
            data-bs-toggle="modal"
            data-bs-target="#edit-currency"
          >
            <i data-feather="edit" className="feather-edit" />
          </Link>
          <Link
            className="confirm-text p-2"
            href="#"
            onClick={showConfirmationAlert}
          >
            <i data-feather="trash-2" className="feather-trash-2" />
          </Link>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="page-wrapper">
        <div className="content settings-content">
          <div className="page-header settings-pg-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Settings</h4>
                <h6>Manage your settings on portal</h6>
              </div>
            </div>
            <ul className="table-top-head">
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
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="settings-wrapper d-flex">
                <SettingsSideBar />
                <div className="settings-page-wrap w-50">
                  <div className="setting-title">
                    <h4>Currency</h4>
                  </div>
                  <div className="page-header bank-settings justify-content-end">
                    <div className="page-btn">
                      <Link
                        to="#"
                        className="btn btn-added"
                        data-bs-toggle="modal"
                        data-bs-target="#add-currency"
                      >
                        <PlusCircle className="me-2" />
                        Add New Currency
                      </Link>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="card table-list-card">
                        <div className="card-body">
                          <div className="table-top">
                            <div className="search-set">
                              <div className="search-input">
                                <input
                                  type="search"
                                  className="form-control form-control-sm"
                                  placeholder="Search"
                                  aria-controls="DataTables_Table_0"
                                  value={searchText}
                                  onChange={handleSearch}
                                />
                                <Link to className="btn btn-searchset">
                                  <i
                                    data-feather="search"
                                    className="feather-search"
                                  />
                                </Link>
                              </div>
                            </div>
                            <div className="search-path">
                              <div className="d-flex align-items-center">
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
                            className={`card${
                              isFilterVisible ? " visible" : ""
                            }`}
                            id="filter_inputs"
                            style={{
                              display: isFilterVisible ? "block" : "none",
                            }}
                          >
                            <div className="card-body pb-0">
                              <div className="row">
                                <div className="col-lg-4 col-sm-6 col-12">
                                  <div className="input-blocks">
                                    <User className="info-img" />
                                    <Select
                                      className="img-select"
                                      options={currency}
                                      classNamePrefix="react-select"
                                      placeholder="Choose a Name"
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
                            <Table
                              columns={columns}
                              dataSource={filteredData}
                            />
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
      <AddCurrency />
      <EditCurrency />
    </div>
  );
};

export default CurrencySettings;
