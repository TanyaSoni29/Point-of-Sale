/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import {
  ChevronUp,
  PlusCircle,
  RotateCcw,
  Sliders,
} from "feather-icons-react/build/IconComponents";
import React, { useState } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setToogleHeader } from "../../../core/redux/action";
import { Filter } from "react-feather";
import ImageWithBasePath from "../../../core/img/imagewithbasebath";
import Select from "react-select";
import EditIpAddress from "../../../core/modals/settings/editipaddress";
import AddIpAddress from "../../../core/modals/settings/addipaddress";
import SettingsSideBar from "../settingssidebar";
import Table from "../../../core/pagination/datatable";
import { banIpAddressData } from "../../../core/json/banIpAddress";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

const BanIpaddress = () => {
  const datas = banIpAddressData;
  const data = useSelector((state) => state.toggle_header);
  const dispatch = useDispatch();

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
  const oldandlatestvalue = [
    { value: "date", label: "Sort by Date" },
    { value: "newest", label: "Newest" },
    { value: "oldest", label: "Oldest" },
  ];
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

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

  const filteredData = datas.filter((entry) => {
    return Object.keys(entry).some((key) => {
      return String(entry[key])
        .toLowerCase()
        .includes(searchText.toLowerCase());
    });
  });
  const columns = [
    {
      title: "IP Address",
      dataIndex: "ip",
      sorter: (a, b) => a.ip.length - b.ip.length,
    },
    {
      title: "Reason",
      dataIndex: "reason",
      sorter: (a, b) => a.reason.length - b.reason.length,
    },
    {
      title: "Date",
      dataIndex: "date",
      sorter: (a, b) => a.date.length - b.date.length,
    },
    {
      title: "Action",
      dataIndex: "action",
      render: () => (
        <div className="action-table-data justify-content-end">
          <div className="edit-delete-action">
            <a
              className="me-2 p-2"
              href="#"
              data-bs-toggle="modal"
              data-bs-target="#edit-banip"
            >
              <i className="feather-edit" style={{ cursor: "pointer" }}></i>
            </a>
            <a
              className="confirm-text p-2"
              href="#"
              onClick={showConfirmationAlert}
            >
              <i className="feather-trash-2" style={{ cursor: "pointer" }}></i>
            </a>
          </div>
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
                    <h4>Ban IP Address</h4>
                  </div>
                  <div className="page-header bank-settings justify-content-end">
                    <div className="page-btn">
                      <Link
                        to="#"
                        className="btn btn-added"
                        data-bs-toggle="modal"
                        data-bs-target="#add-banip"
                      >
                        <PlusCircle className="me-2" />
                        Add New Ban IP
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
                                classNamePrefix="react-select"
                                className="img-select"
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
                                    <i
                                      data-feather="zap"
                                      className="info-img"
                                    />
                                    <select className="select">
                                      <option>Choose IP</option>
                                      <option>211.11.0.25</option>
                                      <option>211.03.0.11</option>
                                    </select>
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
      <AddIpAddress />
      <EditIpAddress />
    </div>
  );
};

export default BanIpaddress;
