import React, { useState } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import { setToogleHeader } from "../../../core/redux/action";
import { ChevronUp, RotateCcw } from "feather-icons-react/build/IconComponents";
import { useDispatch, useSelector } from "react-redux";
import ImageWithBasePath from "../../../core/img/imagewithbasebath";
import Select from "react-select";
import { Filter } from "react-feather";
import SettingsSideBar from "../settingssidebar";
import Table from "../../../core/pagination/datatable";
import { languageSettingsData } from "../../../core/json/languageSettings";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

const LanguageSettings = () => {
  const datas = languageSettingsData;
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
  const columns = [
    {
      title: "Language",
      dataIndex: "language",
      render: (text, record) => (
        <div className="language-name d-flex align-items-center">
          <img src={record.flag} alt="" className="me-2" />
          {text}
        </div>
      ),
      sorter: (a, b) => a.language.localeCompare(b.language)
    },
    {
      title: "Code",
      dataIndex: "code",
      sorter: (a, b) => a.code.localeCompare(b.code)
    },
    {
      title: "RTL",
      dataIndex: "rtl",
      render: () => (
        <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
          <input type="checkbox" id="user1" className="check" defaultChecked />
          <label htmlFor="user1" className="checktoggle" />
        </div>
      ),
      sorter: (a, b) => a.rtl.localeCompare(b.rtl)
    },
    {
      title: "Total",
      dataIndex: "total",
      sorter: (a, b) => a.total.localeCompare(b.total)
    },
    {
      title: "Done",
      dataIndex: "done",
      sorter: (a, b) => a.done.localeCompare(b.done)
    },
    {
      title: "Progress",
      dataIndex: "progress",
      render: () => (
        <div className="position-relative">
          <div className="progress attendance language-progress">
            <div
              className="progress-bar progress-bar-warning"
              role="progressbar"
            >
              <span>80%</span>
            </div>
          </div>
        </div>
      ),
      sorter: (a, b) => a.progress.localeCompare(b.progress)
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status) => (
        <span
          className={`badge ${
            status === "Active" ? "badge-linesuccess" : "badge-linedanger"
          }`}
        >
          {status}
        </span>
      ),
      sorter: (a, b) => a.status.localeCompare(b.status)
    },
    {
      title: "Action",
      dataIndex: "action",
      render: () => (
        <div className="action-table-data">
          <div className="edit-delete-action language-action">
            <Link to="#" className="me-2 language-import">
              <i data-feather="download" className="feather-download" />
            </Link>
            <div className="custom-control custom-checkbox">
              <label className="checkboxs ps-4 mb-0 pb-0 line-height-1">
                <input type="checkbox" defaultChecked />
                <span className="checkmarks" />
              </label>
            </div>
            <Link
              to="language-settings-web.html"
              className="btn btn-secondary me-2"
            >
              Web
            </Link>
            <Link to="#" className="btn btn-secondary me-2">
              App
            </Link>
            <Link to="#" className="btn btn-secondary me-2">
              Admin
            </Link>
            <Link className="confirm-text p-0" to="#" onClick={showConfirmationAlert}>
              <i data-feather="trash-2" className="feather-trash-2" />
            </Link>
          </div>
        </div>
      ),
    },
  ];
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

  const dispatch = useDispatch();
  const data = useSelector((state) => state.toggle_header);

  const languageOptions = [
    { value: "selectLanguage", label: "Select Language" },
    { value: "english", label: "English" },
    { value: "arabic", label: "Arabic" },
    { value: "chinese", label: "Chinese" },
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
                    <h4>Language</h4>
                  </div>
                  <div className="page-header justify-content-end">
                    <ul className="table-top-head me-auto">
                      <li>
                        <OverlayTrigger placement="top" overlay={renderTooltip}>
                          <Link
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                          >
                            <ImageWithBasePath
                              src="assets/img/icons/pdf.svg"
                              alt="img"
                            />
                          </Link>
                        </OverlayTrigger>
                      </li>
                      <li>
                        <OverlayTrigger
                          placement="top"
                          overlay={renderExcelTooltip}
                        >
                          <Link
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                          >
                            <ImageWithBasePath
                              src="assets/img/icons/excel.svg"
                              alt="img"
                            />
                          </Link>
                        </OverlayTrigger>
                      </li>
                      <li>
                        <OverlayTrigger
                          placement="top"
                          overlay={renderPrinterTooltip}
                        >
                          <Link
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                          >
                            <i
                              data-feather="printer"
                              className="feather-rotate-ccw"
                            />
                          </Link>
                        </OverlayTrigger>
                      </li>
                    </ul>
                    <div className="page-btn d-flex align-items-center ms-0">
                      <div className="select-language">
                        <Select
                          options={languageOptions}
                          classNamePrefix="react-select"
                          placeholder="Select Language"
                        />
                      </div>
                      <Link to="#" className="btn btn-added ms-3">
                        Add Translation
                      </Link>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="card table-list-card">
                        <div className="card-body">
                          <div className="table-top">
                            <div className="search-path">
                              <div className="d-flex align-items-center">
                                <Link className="btn btn-secondary" to="#">
                                  <Filter className="filter-icon me-1" />
                                  Import Sample
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="table-responsive">
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
    </div>
  );
};

export default LanguageSettings;
