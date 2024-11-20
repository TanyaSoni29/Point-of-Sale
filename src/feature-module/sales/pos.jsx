import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../core/img/imagewithbasebath'
import { RefreshCcw, RotateCw, ShoppingCart } from 'feather-icons-react/build/IconComponents'
import { Check, CheckCircle, Edit, MoreVertical, Trash2, UserPlus } from 'react-feather'
import Select from 'react-select'
import PlusCircle from 'feather-icons-react/build/IconComponents/PlusCircle'
import MinusCircle from 'feather-icons-react/build/IconComponents/MinusCircle'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Pos = () => {
  const customers = [
    { value: 'walkInCustomer', label: 'Walk in Customer' },
    { value: 'john', label: 'John' },
    { value: 'smith', label: 'Smith' },
    { value: 'ana', label: 'Ana' },
    { value: 'elza', label: 'Elza' },
  ];
  const products = [
    { value: 'walkInCustomer', label: 'Walk in Customer' },
    { value: 'john', label: 'John' },
    { value: 'smith', label: 'Smith' },
    { value: 'ana', label: 'Ana' },
    { value: 'elza', label: 'Elza' },
  ];
  const gst = [
    { value: '5', label: 'GST 5%' },
    { value: '10', label: 'GST 10%' },
    { value: '15', label: 'GST 15%' },
    { value: '20', label: 'GST 20%' },
    { value: '25', label: 'GST 25%' },
    { value: '30', label: 'GST 30%' },
  ];
  const shipping = [
    { value: '15', label: '15' },
    { value: '20', label: '20' },
    { value: '25', label: '25' },
    { value: '30', label: '30' },
  ];
  const discount = [
    { value: '10', label: '10%' },
    { value: '15', label: '15%' },
    { value: '20', label: '20%' },
    { value: '25', label: '25%' },
    { value: '30', label: '30%' },
  ];
  const tax = [
    { value: 'exclusive', label: 'Exclusive' },
    { value: 'inclusive', label: 'Inclusive' },
  ];
  const discounttype = [
    { value: 'percentage', label: 'Percentage' },
    { value: 'earlyPaymentDiscounts', label: 'Early payment discounts' },
  ];
  const units = [
    { value: 'kilogram', label: 'Kilogram' },
    { value: 'grams', label: 'Grams' },
  ];
  const [quantity, setQuantity] = useState(4);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };
  const [quantity1, setQuantity1] = useState(3);

  const handleDecrement1 = () => {
    if (quantity1 > 1) {
      setQuantity1(quantity1 - 1);
    }
  };

  const handleIncrement1 = () => {
    setQuantity1(quantity1 + 1);
  };
  const [quantity2, setQuantity2] = useState(3);

  const handleDecrement2 = () => {
    if (quantity2 > 1) {
      setQuantity2(quantity2 - 1);
    }
  };

  const handleIncrement2 = () => {
    setQuantity2(quantity2 + 1);
  };
  const [quantity3, setQuantity3] = useState(1);

  const handleDecrement3 = () => {
    if (quantity3 > 1) {
      setQuantity3(quantity3 - 1);
    }
  };

  const handleIncrement3 = () => {
    setQuantity3(quantity3 + 1);
  };


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

  const settings = {
    dots: false,
    autoplay: false,
    slidesToShow: 5,
    margin:0,
    speed: 500,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
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
      <div className="page-wrapper pos-pg-wrapper ms-0">
        <div className="content pos-design p-0">
          <div className="btn-row d-sm-flex align-items-center">
            <Link
              to="#"
              className="btn btn-secondary mb-xs-3"
              data-bs-toggle="modal"
              data-bs-target="#orders"
            >
              <span className="me-1 d-flex align-items-center">
                <ShoppingCart className="feather-16" />
              </span>
              View Orders
            </Link>
            <Link to="#" className="btn btn-info">
              <span className="me-1 d-flex align-items-center">
                <RotateCw className="feather-16" />
              </span>
              Reset
            </Link>
            <Link
              to="#"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#recents"
            >
              <span className="me-1 d-flex align-items-center">
                <RefreshCcw className="feather-16" />
              </span>
              Transaction
            </Link>
          </div>
          <div className="row align-items-start pos-wrapper">
            <div className="col-md-12 col-lg-8">
              <div className="pos-categories tabs_wrapper">
                <h5>Categories</h5>
                <p>Select From Below Categories</p>
                <Slider {...settings} className='tabs owl-carousel pos-category'>
                  <div id="all" className='pos-slick-item'>
                    <Link to="#">
                      <ImageWithBasePath src="assets/img/categories/category-01.png" alt="Categories" />
                    </Link>
                    <h6>
                      <Link to="#">All Categories</Link>
                    </h6>
                    <span>80 Items</span>
                  </div>
                  <div id="headphones" className='pos-slick-item'>
                    <Link to="#">
                      <ImageWithBasePath src="assets/img/categories/category-02.png" alt="Categories" />
                    </Link>
                    <h6>
                      <Link to="#">Headphones</Link>
                    </h6>
                    <span>4 Items</span>
                  </div>
                  <div id="shoes" className='pos-slick-item'>
                    <Link to="#">
                      <ImageWithBasePath src="assets/img/categories/category-03.png" alt="Categories" />
                    </Link>
                    <h6>
                      <Link to="#">Shoes</Link>
                    </h6>
                    <span>14 Items</span>
                  </div>
                  <div id="mobiles" className='pos-slick-item'>
                    <Link to="#">
                      <ImageWithBasePath src="assets/img/categories/category-04.png" alt="Categories" />
                    </Link>
                    <h6>
                      <Link to="#">Mobiles</Link>
                    </h6>
                    <span>7 Items</span>
                  </div>
                  <div id="watches" className='pos-slick-item'>
                    <Link to="#">
                      <ImageWithBasePath src="assets/img/categories/category-05.png" alt="Categories" />
                    </Link>
                    <h6>
                      <Link to="#">Watches</Link>
                    </h6>
                    <span>16 Items</span>
                  </div>
                  <div id="laptops" className='pos-slick-item'>
                    <Link to="#">
                      <ImageWithBasePath src="assets/img/categories/category-06.png" alt="Categories" />
                    </Link>
                    <h6>
                      <Link to="#">Laptops</Link>
                    </h6>
                    <span>18 Items</span>
                  </div>
                  <div id="allcategory" className='pos-slick-item'>
                    <Link to="#">
                      <ImageWithBasePath src="assets/img/categories/category-01.png" alt="Categories" />
                    </Link>
                    <h6>
                      <Link to="#">All Categories</Link>
                    </h6>
                    <span>80 Items</span>
                  </div>
                  <div id="headphone" className='pos-slick-item'>
                    <Link to="#">
                      <ImageWithBasePath src="assets/img/categories/category-02.png" alt="Categories" />
                    </Link>
                    <h6>
                      <Link to="#">Headphones</Link>
                    </h6>
                    <span>4 Items</span>
                  </div>
                  <div id="shoe" className='pos-slick-item'>
                    <Link to="#">
                      <ImageWithBasePath src="assets/img/categories/category-03.png" alt="Categories" />
                    </Link>
                    <h6>
                      <Link to="#">Shoes</Link>
                    </h6>
                    <span>14 Items</span>
                  </div>
                  <div id="mobile" className='pos-slick-item'>
                    <Link to="#">
                      <ImageWithBasePath src="assets/img/categories/category-04.png" alt="Categories" />
                    </Link>
                    <h6>
                      <Link to="#">Mobiles</Link>
                    </h6>
                    <span>7 Items</span>
                  </div>
                  <div id="watche" className='pos-slick-item'>
                    <Link to="#">
                      <ImageWithBasePath src="assets/img/categories/category-05.png" alt="Categories" />
                    </Link>
                    <h6>
                      <Link to="#">Watches</Link>
                    </h6>
                    <span>16 Items</span>
                  </div>
                  <div id="laptop" className='pos-slick-item'>
                    <Link to="#">
                      <ImageWithBasePath src="assets/img/categories/category-06.png" alt="Categories" />
                    </Link>
                    <h6>
                      <Link to="#">Laptops</Link>
                    </h6>
                    <span>18 Items</span>
                  </div>
                  </Slider>
                <div className="pos-products">
                  <div className="d-flex align-items-center justify-content-between">
                    <h5 className="mb-3">Products</h5>
                  </div>
                  <div className="tabs_container">
                    <div className="tab_content active" data-tab="all">
                      <div className="row">
                        <div className="col-sm-2 col-md-6 col-lg-3 col-xl-3">
                          <div className="product-info default-cover card">
                            <Link to="#" className="img-bg">
                              <ImageWithBasePath
                                src="assets/img/products/pos-product-01.png"
                                alt="Products"
                              />
                              <span>
                         
                                <Check className="feather-16"/>
                              </span>
                            </Link>
                            <h6 className="cat-name">
                              <Link to="#">Mobiles</Link>
                            </h6>
                            <h6 className="product-name">
                              <Link to="#">IPhone 14 64GB</Link>
                            </h6>
                            <div className="d-flex align-items-center justify-content-between price">
                              <span>30 Pcs</span>
                              <p>$15800</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-2 col-md-6 col-lg-3 col-xl-3 pe-2">
                          <div className="product-info default-cover card">
                            <Link to="#" className="img-bg">
                              <ImageWithBasePath
                                src="assets/img/products/pos-product-02.png"
                                alt="Products"
                              />
                              <span>
                                <Check className="feather-16"/>
                              </span>
                            </Link>
                            <h6 className="cat-name">
                              <Link to="#">Computer</Link>
                            </h6>
                            <h6 className="product-name">
                              <Link to="#">MacBook Pro</Link>
                            </h6>
                            <div className="d-flex align-items-center justify-content-between price">
                              <span>140 Pcs</span>
                              <p>$1000</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-2 col-md-6 col-lg-3 col-xl-3 pe-2">
                          <div className="product-info default-cover card">
                            <Link to="#" className="img-bg">
                              <ImageWithBasePath
                                src="assets/img/products/pos-product-03.png"
                                alt="Products"
                              />
                              <span>
                                <Check className="feather-16"/>
                              </span>
                            </Link>
                            <h6 className="cat-name">
                              <Link to="#">Watches</Link>
                            </h6>
                            <h6 className="product-name">
                              <Link to="#">Rolex Tribute V3</Link>
                            </h6>
                            <div className="d-flex align-items-center justify-content-between price">
                              <span>220 Pcs</span>
                              <p>$6800</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-2 col-md-6 col-lg-3 col-xl-3 pe-2">
                          <div className="product-info default-cover card">
                            <Link to="#" className="img-bg">
                              <ImageWithBasePath
                                src="assets/img/products/pos-product-04.png"
                                alt="Products"
                              />
                              <span>
                                <Check className="feather-16"/>
                              </span>
                            </Link>
                            <h6 className="cat-name">
                              <Link to="#">Shoes</Link>
                            </h6>
                            <h6 className="product-name">
                              <Link to="#">Red Nike Angelo</Link>
                            </h6>
                            <div className="d-flex align-items-center justify-content-between price">
                              <span>78 Pcs</span>
                              <p>$7800</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-2 col-md-6 col-lg-3 col-xl-3 pe-2">
                          <div className="product-info default-cover card">
                            <Link to="#" className="img-bg">
                              <ImageWithBasePath
                                src="assets/img/products/pos-product-05.png"
                                alt="Products"
                              />
                              <span>
                                <Check className="feather-16"/>
                              </span>
                            </Link>
                            <h6 className="cat-name">
                              <Link to="#">Headphones</Link>
                            </h6>
                            <h6 className="product-name">
                              <Link to="#">Airpod 2</Link>
                            </h6>
                            <div className="d-flex align-items-center justify-content-between price">
                              <span>47 Pcs</span>
                              <p>$5478</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-2 col-md-6 col-lg-3 col-xl-3 pe-2">
                          <div className="product-info default-cover card">
                            <Link to="#" className="img-bg">
                              <ImageWithBasePath
                                src="assets/img/products/pos-product-06.png"
                                alt="Products"
                              />
                              <span>
                                <Check className="feather-16"/>
                              </span>
                            </Link>
                            <h6 className="cat-name">
                              <Link to="#">Shoes</Link>
                            </h6>
                            <h6 className="product-name">
                              <Link to="#">Blue White OGR</Link>
                            </h6>
                            <div className="d-flex align-items-center justify-content-between price">
                              <span>54 Pcs</span>
                              <p>$987</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-2 col-md-6 col-lg-3 col-xl-3 pe-2">
                          <div className="product-info default-cover card">
                            <Link to="#" className="img-bg">
                              <ImageWithBasePath
                                src="assets/img/products/pos-product-07.png"
                                alt="Products"
                              />
                              <span>
                                <Check className="feather-16"/>
                              </span>
                            </Link>
                            <h6 className="cat-name">
                              <Link to="#">Laptop</Link>
                            </h6>
                            <h6 className="product-name">
                              <Link to="#">IdeaPad Slim 5 Gen 7</Link>
                            </h6>
                            <div className="d-flex align-items-center justify-content-between price">
                              <span>74 Pcs</span>
                              <p>$1454</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-2 col-md-6 col-lg-3 col-xl-3 pe-2">
                          <div className="product-info default-cover card">
                            <Link to="#" className="img-bg">
                              <ImageWithBasePath
                                src="assets/img/products/pos-product-08.png"
                                alt="Products"
                              />
                              <span>
                                <Check className="feather-16"/>
                              </span>
                            </Link>
                            <h6 className="cat-name">
                              <Link to="#">Headphones</Link>
                            </h6>
                            <h6 className="product-name">
                              <Link to="#">SWAGME</Link>
                            </h6>
                            <div className="d-flex align-items-center justify-content-between price">
                              <span>14 Pcs</span>
                              <p>$6587</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-2 col-md-6 col-lg-3 col-xl-3 pe-2">
                          <div className="product-info default-cover card">
                            <Link to="#" className="img-bg">
                              <ImageWithBasePath
                                src="assets/img/products/pos-product-09.png"
                                alt="Products"
                              />
                              <span>
                                <Check className="feather-16"/>
                              </span>
                            </Link>
                            <h6 className="cat-name">
                              <Link to="#">Watches</Link>
                            </h6>
                            <h6 className="product-name">
                              <Link to="#">Timex Black SIlver</Link>
                            </h6>
                            <div className="d-flex align-items-center justify-content-between price">
                              <span>24 Pcs</span>
                              <p>$1457</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-2 col-md-6 col-lg-3 col-xl-3 pe-2">
                          <div className="product-info default-cover card">
                            <Link to="#" className="img-bg">
                              <ImageWithBasePath
                                src="assets/img/products/pos-product-10.png"
                                alt="Products"
                              />
                              <span>
                                <Check className="feather-16"/>
                              </span>
                            </Link>
                            <h6 className="cat-name">
                              <Link to="#">Computer</Link>
                            </h6>
                            <h6 className="product-name">
                              <Link to="#">Tablet 1.02 inch</Link>
                            </h6>
                            <div className="d-flex align-items-center justify-content-between price">
                              <span>14 Pcs</span>
                              <p>$4744</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-2 col-md-6 col-lg-3 col-xl-3 pe-2">
                          <div className="product-info default-cover card">
                            <Link to="#" className="img-bg">
                              <ImageWithBasePath
                                src="assets/img/products/pos-product-11.png"
                                alt="Products"
                              />
                              <span>
                                <Check className="feather-16"/>
                              </span>
                            </Link>
                            <h6 className="cat-name">
                              <Link to="#">Watches</Link>
                            </h6>
                            <h6 className="product-name">
                              <Link to="#">Fossil Pair Of 3 in 1 </Link>
                            </h6>
                            <div className="d-flex align-items-center justify-content-between price">
                              <span>40 Pcs</span>
                              <p>$789</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-2 col-md-6 col-lg-3 col-xl-3 pe-2">
                          <div className="product-info default-cover card">
                            <Link to="#" className="img-bg">
                              <ImageWithBasePath
                                src="assets/img/products/pos-product-18.png"
                                alt="Products"
                              />
                              <span>
                                <Check className="feather-16"/>
                              </span>
                            </Link>
                            <h6 className="cat-name">
                              <Link to="#">Shoes</Link>
                            </h6>
                            <h6 className="product-name">
                              <Link to="#">Green Nike Fe</Link>
                            </h6>
                            <div className="d-flex align-items-center justify-content-between price">
                              <span>78 Pcs</span>
                              <p>$7847</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab_content" data-tab="headphones">
                      <div className="row">
                        <div className="col-sm-2 col-md-6 col-lg-3 col-xl-3 pe-2">
                          <div className="product-info default-cover card">
                            <Link to="#" className="img-bg">
                              <ImageWithBasePath
                                src="assets/img/products/pos-product-05.png"
                                alt="Products"
                              />
                              <span>
                                <Check className="feather-16"/>
                              </span>
                            </Link>
                            <h6 className="cat-name">
                              <Link to="#">Headphones</Link>
                            </h6>
                            <h6 className="product-name">
                              <Link to="#">Airpod 2</Link>
                            </h6>
                            <div className="d-flex align-items-center justify-content-between price">
                              <span>47 Pcs</span>
                              <p>$5478</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-2 col-md-6 col-lg-3 col-xl-3 pe-2">
                          <div className="product-info default-cover card">
                            <Link to="#" className="img-bg">
                              <ImageWithBasePath
                                src="assets/img/products/pos-product-08.png"
                                alt="Products"
                              />
                              <span>
                                <Check className="feather-16"/>
                              </span>
                            </Link>
                            <h6 className="cat-name">
                              <Link to="#">Headphones</Link>
                            </h6>
                            <h6 className="product-name">
                              <Link to="#">SWAGME</Link>
                            </h6>
                            <div className="d-flex align-items-center justify-content-between price">
                              <span>14 Pcs</span>
                              <p>$6587</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab_content" data-tab="shoes">
                      <div className="row">
                        <div className="col-sm-2 col-md-6 col-lg-3 col-xl-3 pe-2">
                          <div className="product-info default-cover card">
                            <Link to="#" className="img-bg">
                              <ImageWithBasePath
                                src="assets/img/products/pos-product-04.png"
                                alt="Products"
                              />
                              <span>
                                <Check className="feather-16"/>
                              </span>
                            </Link>
                            <h6 className="cat-name">
                              <Link to="#">Shoes</Link>
                            </h6>
                            <h6 className="product-name">
                              <Link to="#">Red Nike Angelo</Link>
                            </h6>
                            <div className="d-flex align-items-center justify-content-between price">
                              <span>78 Pcs</span>
                              <p>$7800</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-2 col-md-6 col-lg-3 col-xl-3 pe-2">
                          <div className="product-info default-cover card">
                            <Link to="#" className="img-bg">
                              <ImageWithBasePath
                                src="assets/img/products/pos-product-06.png"
                                alt="Products"
                              />
                              <span>
                                <Check className="feather-16"/>
                              </span>
                            </Link>
                            <h6 className="cat-name">
                              <Link to="#">Shoes</Link>
                            </h6>
                            <h6 className="product-name">
                              <Link to="#">Blue White OGR</Link>
                            </h6>
                            <div className="d-flex align-items-center justify-content-between price">
                              <span>54 Pcs</span>
                              <p>$987</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-2 col-md-6 col-lg-3 col-xl-3 pe-2">
                          <div className="product-info default-cover card">
                            <Link to="#" className="img-bg">
                              <ImageWithBasePath
                                src="assets/img/products/pos-product-18.png"
                                alt="Products"
                              />
                              <span>
                                <Check className="feather-16"/>
                              </span>
                            </Link>
                            <h6 className="cat-name">
                              <Link to="#">Shoes</Link>
                            </h6>
                            <h6 className="product-name">
                              <Link to="#">Green Nike Fe</Link>
                            </h6>
                            <div className="d-flex align-items-center justify-content-between price">
                              <span>78 Pcs</span>
                              <p>$7847</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab_content" data-tab="mobiles">
                      <div className="row">
                        <div className="col-sm-2 col-md-6 col-lg-3 col-xl-3">
                          <div className="product-info default-cover card">
                            <Link to="#" className="img-bg">
                              <ImageWithBasePath
                                src="assets/img/products/pos-product-01.png"
                                alt="Products"
                              />
                              <span>
                                <Check className="feather-16"/>
                              </span>
                            </Link>
                            <h6 className="cat-name">
                              <Link to="#">Mobiles</Link>
                            </h6>
                            <h6 className="product-name">
                              <Link to="#">IPhone 14 64GB</Link>
                            </h6>
                            <div className="d-flex align-items-center justify-content-between price">
                              <span>30 Pcs</span>
                              <p>$15800</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-2 col-md-6 col-lg-3 col-xl-3 pe-2">
                          <div className="product-info default-cover card">
                            <Link to="#" className="img-bg">
                              <ImageWithBasePath
                                src="assets/img/products/pos-product-14.png"
                                alt="Products"
                              />
                              <span>
                                <Check className="feather-16"/>
                              </span>
                            </Link>
                            <h6 className="cat-name">
                              <Link to="#">Mobiles</Link>
                            </h6>
                            <h6 className="product-name">
                              <Link to="#">Iphone 11</Link>
                            </h6>
                            <div className="d-flex align-items-center justify-content-between price">
                              <span>14 Pcs</span>
                              <p>$3654</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab_content" data-tab="watches">
                      <div className="row">
                        <div className="col-sm-2 col-md-6 col-lg-3 col-xl-3 pe-2">
                          <div className="product-info default-cover card">
                            <Link to="#" className="img-bg">
                              <ImageWithBasePath
                                src="assets/img/products/pos-product-03.png"
                                alt="Products"
                              />
                              <span>
                                <Check className="feather-16"/>
                              </span>
                            </Link>
                            <h6 className="cat-name">
                              <Link to="#">Watches</Link>
                            </h6>
                            <h6 className="product-name">
                              <Link to="#">Rolex Tribute V3</Link>
                            </h6>
                            <div className="d-flex align-items-center justify-content-between price">
                              <span>220 Pcs</span>
                              <p>$6800</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-2 col-md-6 col-lg-3 col-xl-3 pe-2">
                          <div className="product-info default-cover card">
                            <Link to="#" className="img-bg">
                              <ImageWithBasePath
                                src="assets/img/products/pos-product-09.png"
                                alt="Products"
                              />
                              <span>
                                <Check className="feather-16"/>
                              </span>
                            </Link>
                            <h6 className="cat-name">
                              <Link to="#">Watches</Link>
                            </h6>
                            <h6 className="product-name">
                              <Link to="#">Timex Black SIlver</Link>
                            </h6>
                            <div className="d-flex align-items-center justify-content-between price">
                              <span>24 Pcs</span>
                              <p>$1457</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-2 col-md-6 col-lg-3 col-xl-3 pe-2">
                          <div className="product-info default-cover card">
                            <Link to="#" className="img-bg">
                              <ImageWithBasePath
                                src="assets/img/products/pos-product-11.png"
                                alt="Products"
                              />
                              <span>
                                <Check className="feather-16"/>
                              </span>
                            </Link>
                            <h6 className="cat-name">
                              <Link to="#">Watches</Link>
                            </h6>
                            <h6 className="product-name">
                              <Link to="#">Fossil Pair Of 3 in 1 </Link>
                            </h6>
                            <div className="d-flex align-items-center justify-content-between price">
                              <span>40 Pcs</span>
                              <p>$789</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab_content" data-tab="laptops">
                      <div className="row">
                        <div className="col-sm-2 col-md-6 col-lg-3 col-xl-3 pe-2">
                          <div className="product-info default-cover card">
                            <Link to="#" className="img-bg">
                              <ImageWithBasePath
                                src="assets/img/products/pos-product-02.png"
                                alt="Products"
                              />
                              <span>
                                <Check className="feather-16"/>
                              </span>
                            </Link>
                            <h6 className="cat-name">
                              <Link to="#">Computer</Link>
                            </h6>
                            <h6 className="product-name">
                              <Link to="#">MacBook Pro</Link>
                            </h6>
                            <div className="d-flex align-items-center justify-content-between price">
                              <span>140 Pcs</span>
                              <p>$1000</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-2 col-md-6 col-lg-3 col-xl-3 pe-2">
                          <div className="product-info default-cover card">
                            <Link to="#" className="img-bg">
                              <ImageWithBasePath
                                src="assets/img/products/pos-product-07.png"
                                alt="Products"
                              />
                              <span>
                                <Check className="feather-16"/>
                              </span>
                            </Link>
                            <h6 className="cat-name">
                              <Link to="#">Laptop</Link>
                            </h6>
                            <h6 className="product-name">
                              <Link to="#">IdeaPad Slim 5 Gen 7</Link>
                            </h6>
                            <div className="d-flex align-items-center justify-content-between price">
                              <span>74 Pcs</span>
                              <p>$1454</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-2 col-md-6 col-lg-3 col-xl-3 pe-2">
                          <div className="product-info default-cover card">
                            <Link to="#" className="img-bg">
                              <ImageWithBasePath
                                src="assets/img/products/pos-product-10.png"
                                alt="Products"
                              />
                              <span>
                                <Check className="feather-16"/>
                              </span>
                            </Link>
                            <h6 className="cat-name">
                              <Link to="#">Computer</Link>
                            </h6>
                            <h6 className="product-name">
                              <Link to="#">Tablet 1.02 inch</Link>
                            </h6>
                            <div className="d-flex align-items-center justify-content-between price">
                              <span>14 Pcs</span>
                              <p>$4744</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-2 col-md-6 col-lg-3 col-xl-3 pe-2">
                          <div className="product-info default-cover card">
                            <Link to="#" className="img-bg">
                              <ImageWithBasePath
                                src="assets/img/products/pos-product-13.png"
                                alt="Products"
                              />
                              <span>
                                <Check className="feather-16"/>
                              </span>
                            </Link>
                            <h6 className="cat-name">
                              <Link to="#">Laptop</Link>
                            </h6>
                            <h6 className="product-name">
                              <Link to="#">Yoga Book 9i</Link>
                            </h6>
                            <div className="d-flex align-items-center justify-content-between price">
                              <span>65 Pcs</span>
                              <p>$4784</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-2 col-md-6 col-lg-3 col-xl-3 pe-2">
                          <div className="product-info default-cover card">
                            <Link to="#" className="img-bg">
                              <ImageWithBasePath
                                src="assets/img/products/pos-product-14.png"
                                alt="Products"
                              />
                              <span>
                                <Check className="feather-16"/>
                              </span>
                            </Link>
                            <h6 className="cat-name">
                              <Link to="#">Laptop</Link>
                            </h6>
                            <h6 className="product-name">
                              <Link to="#">IdeaPad Slim 3i</Link>
                            </h6>
                            <div className="d-flex align-items-center justify-content-between price">
                              <span>47 Pcs</span>
                              <p>$1245</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab_content" data-tab="allcategory">
                      <div className="row">
                        <div className="col-sm-2 col-md-6 col-lg-3 col-xl-3">
                          <div className="product-info default-cover card">
                            <Link to="#" className="img-bg">
                              <ImageWithBasePath
                                src="assets/img/products/pos-product-01.png"
                                alt="Products"
                              />
                              <span>
                                <Check className="feather-16"/>
                              </span>
                            </Link>
                            <h6 className="cat-name">
                              <Link to="#">Mobiles</Link>
                            </h6>
                            <h6 className="product-name">
                              <Link to="#">IPhone 14 64GB</Link>
                            </h6>
                            <div className="d-flex align-items-center justify-content-between price">
                              <span>30 Pcs</span>
                              <p>$15800</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-2 col-md-6 col-lg-3 col-xl-3 pe-2">
                          <div className="product-info default-cover card">
                            <Link to="#" className="img-bg">
                              <ImageWithBasePath
                                src="assets/img/products/pos-product-02.png"
                                alt="Products"
                              />
                              <span>
                                <Check className="feather-16"/>
                              </span>
                            </Link>
                            <h6 className="cat-name">
                              <Link to="#">Computer</Link>
                            </h6>
                            <h6 className="product-name">
                              <Link to="#">MacBook Pro</Link>
                            </h6>
                            <div className="d-flex align-items-center justify-content-between price">
                              <span>140 Pcs</span>
                              <p>$1000</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-2 col-md-6 col-lg-3 col-xl-3 pe-2">
                          <div className="product-info default-cover card">
                            <Link to="#" className="img-bg">
                              <ImageWithBasePath
                                src="assets/img/products/pos-product-03.png"
                                alt="Products"
                              />
                              <span>
                                <Check className="feather-16"/>
                              </span>
                            </Link>
                            <h6 className="cat-name">
                              <Link to="#">Watches</Link>
                            </h6>
                            <h6 className="product-name">
                              <Link to="#">Rolex Tribute V3</Link>
                            </h6>
                            <div className="d-flex align-items-center justify-content-between price">
                              <span>220 Pcs</span>
                              <p>$6800</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-2 col-md-6 col-lg-3 col-xl-3 pe-2">
                          <div className="product-info default-cover card">
                            <Link to="#" className="img-bg">
                              <ImageWithBasePath
                                src="assets/img/products/pos-product-04.png"
                                alt="Products"
                              />
                              <span>
                                <Check className="feather-16"/>
                              </span>
                            </Link>
                            <h6 className="cat-name">
                              <Link to="#">Shoes</Link>
                            </h6>
                            <h6 className="product-name">
                              <Link to="#">Red Nike Angelo</Link>
                            </h6>
                            <div className="d-flex align-items-center justify-content-between price">
                              <span>78 Pcs</span>
                              <p>$7800</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-2 col-md-6 col-lg-3 col-xl-3 pe-2">
                          <div className="product-info default-cover card">
                            <Link to="#" className="img-bg">
                              <ImageWithBasePath
                                src="assets/img/products/pos-product-05.png"
                                alt="Products"
                              />
                              <span>
                                <Check className="feather-16"/>
                              </span>
                            </Link>
                            <h6 className="cat-name">
                              <Link to="#">Headphones</Link>
                            </h6>
                            <h6 className="product-name">
                              <Link to="#">Airpod 2</Link>
                            </h6>
                            <div className="d-flex align-items-center justify-content-between price">
                              <span>47 Pcs</span>
                              <p>$5478</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-2 col-md-6 col-lg-3 col-xl-3 pe-2">
                          <div className="product-info default-cover card">
                            <Link to="#" className="img-bg">
                              <ImageWithBasePath
                                src="assets/img/products/pos-product-06.png"
                                alt="Products"
                              />
                              <span>
                                <Check className="feather-16"/>
                              </span>
                            </Link>
                            <h6 className="cat-name">
                              <Link to="#">Shoes</Link>
                            </h6>
                            <h6 className="product-name">
                              <Link to="#">Blue White OGR</Link>
                            </h6>
                            <div className="d-flex align-items-center justify-content-between price">
                              <span>54 Pcs</span>
                              <p>$987</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-2 col-md-6 col-lg-3 col-xl-3 pe-2">
                          <div className="product-info default-cover card">
                            <Link to="#" className="img-bg">
                              <ImageWithBasePath
                                src="assets/img/products/pos-product-07.png"
                                alt="Products"
                              />
                              <span>
                                <Check className="feather-16"/>
                              </span>
                            </Link>
                            <h6 className="cat-name">
                              <Link to="#">Laptop</Link>
                            </h6>
                            <h6 className="product-name">
                              <Link to="#">IdeaPad Slim 5 Gen 7</Link>
                            </h6>
                            <div className="d-flex align-items-center justify-content-between price">
                              <span>74 Pcs</span>
                              <p>$1454</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-2 col-md-6 col-lg-3 col-xl-3 pe-2">
                          <div className="product-info default-cover card">
                            <Link to="#" className="img-bg">
                              <ImageWithBasePath
                                src="assets/img/products/pos-product-08.png"
                                alt="Products"
                              />
                              <span>
                                <Check className="feather-16"/>
                              </span>
                            </Link>
                            <h6 className="cat-name">
                              <Link to="#">Headphones</Link>
                            </h6>
                            <h6 className="product-name">
                              <Link to="#">SWAGME</Link>
                            </h6>
                            <div className="d-flex align-items-center justify-content-between price">
                              <span>14 Pcs</span>
                              <p>$6587</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-2 col-md-6 col-lg-3 col-xl-3 pe-2">
                          <div className="product-info default-cover card">
                            <Link to="#" className="img-bg">
                              <ImageWithBasePath
                                src="assets/img/products/pos-product-09.png"
                                alt="Products"
                              />
                              <span>
                                <Check className="feather-16"/>
                              </span>
                            </Link>
                            <h6 className="cat-name">
                              <Link to="#">Watches</Link>
                            </h6>
                            <h6 className="product-name">
                              <Link to="#">Timex Black SIlver</Link>
                            </h6>
                            <div className="d-flex align-items-center justify-content-between price">
                              <span>24 Pcs</span>
                              <p>$1457</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-2 col-md-6 col-lg-3 col-xl-3 pe-2">
                          <div className="product-info default-cover card">
                            <Link to="#" className="img-bg">
                              <ImageWithBasePath
                                src="assets/img/products/pos-product-10.png"
                                alt="Products"
                              />
                              <span>
                                <Check className="feather-16"/>
                              </span>
                            </Link>
                            <h6 className="cat-name">
                              <Link to="#">Computer</Link>
                            </h6>
                            <h6 className="product-name">
                              <Link to="#">Tablet 1.02 inch</Link>
                            </h6>
                            <div className="d-flex align-items-center justify-content-between price">
                              <span>14 Pcs</span>
                              <p>$4744</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-2 col-md-6 col-lg-3 col-xl-3 pe-2">
                          <div className="product-info default-cover card">
                            <Link to="#" className="img-bg">
                              <ImageWithBasePath
                                src="assets/img/products/pos-product-11.png"
                                alt="Products"
                              />
                              <span>
                                <Check className="feather-16"/>
                              </span>
                            </Link>
                            <h6 className="cat-name">
                              <Link to="#">Watches</Link>
                            </h6>
                            <h6 className="product-name">
                              <Link to="#">Fossil Pair Of 3 in 1 </Link>
                            </h6>
                            <div className="d-flex align-items-center justify-content-between price">
                              <span>40 Pcs</span>
                              <p>$789</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-2 col-md-6 col-lg-3 col-xl-3 pe-2">
                          <div className="product-info default-cover card">
                            <Link to="#" className="img-bg">
                              <ImageWithBasePath
                                src="assets/img/products/pos-product-18.png"
                                alt="Products"
                              />
                              <span>
                                <Check className="feather-16"/>
                              </span>
                            </Link>
                            <h6 className="cat-name">
                              <Link to="#">Shoes</Link>
                            </h6>
                            <h6 className="product-name">
                              <Link to="#">Green Nike Fe</Link>
                            </h6>
                            <div className="d-flex align-items-center justify-content-between price">
                              <span>78 Pcs</span>
                              <p>$7847</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab_content" data-tab="headphone">
                      <div className="row">
                        <div className="col-sm-2 col-md-6 col-lg-3 col-xl-3 pe-2">
                          <div className="product-info default-cover card">
                            <Link to="#" className="img-bg">
                              <ImageWithBasePath
                                src="assets/img/products/pos-product-05.png"
                                alt="Products"
                              />
                              <span>
                                <Check className="feather-16"/>
                              </span>
                            </Link>
                            <h6 className="cat-name">
                              <Link to="#">Headphones</Link>
                            </h6>
                            <h6 className="product-name">
                              <Link to="#">Airpod 2</Link>
                            </h6>
                            <div className="d-flex align-items-center justify-content-between price">
                              <span>47 Pcs</span>
                              <p>$5478</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-2 col-md-6 col-lg-3 col-xl-3 pe-2">
                          <div className="product-info default-cover card">
                            <Link to="#" className="img-bg">
                              <ImageWithBasePath
                                src="assets/img/products/pos-product-08.png"
                                alt="Products"
                              />
                              <span>
                                <Check className="feather-16"/>
                              </span>
                            </Link>
                            <h6 className="cat-name">
                              <Link to="#">Headphones</Link>
                            </h6>
                            <h6 className="product-name">
                              <Link to="#">SWAGME</Link>
                            </h6>
                            <div className="d-flex align-items-center justify-content-between price">
                              <span>14 Pcs</span>
                              <p>$6587</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab_content" data-tab="shoe">
                      <div className="row">
                        <div className="col-sm-2 col-md-6 col-lg-3 col-xl-3 pe-2">
                          <div className="product-info default-cover card">
                            <Link to="#" className="img-bg">
                              <ImageWithBasePath
                                src="assets/img/products/pos-product-04.png"
                                alt="Products"
                              />
                              <span>
                                <Check className="feather-16"/>
                              </span>
                            </Link>
                            <h6 className="cat-name">
                              <Link to="#">Shoes</Link>
                            </h6>
                            <h6 className="product-name">
                              <Link to="#">Red Nike Angelo</Link>
                            </h6>
                            <div className="d-flex align-items-center justify-content-between price">
                              <span>78 Pcs</span>
                              <p>$7800</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-2 col-md-6 col-lg-3 col-xl-3 pe-2">
                          <div className="product-info default-cover card">
                            <Link to="#" className="img-bg">
                              <ImageWithBasePath
                                src="assets/img/products/pos-product-06.png"
                                alt="Products"
                              />
                              <span>
                                <Check className="feather-16"/>
                              </span>
                            </Link>
                            <h6 className="cat-name">
                              <Link to="#">Shoes</Link>
                            </h6>
                            <h6 className="product-name">
                              <Link to="#">Blue White OGR</Link>
                            </h6>
                            <div className="d-flex align-items-center justify-content-between price">
                              <span>54 Pcs</span>
                              <p>$987</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-2 col-md-6 col-lg-3 col-xl-3 pe-2">
                          <div className="product-info default-cover card">
                            <Link to="#" className="img-bg">
                              <ImageWithBasePath
                                src="assets/img/products/pos-product-18.png"
                                alt="Products"
                              />
                              <span>
                                <Check className="feather-16"/>
                              </span>
                            </Link>
                            <h6 className="cat-name">
                              <Link to="#">Shoes</Link>
                            </h6>
                            <h6 className="product-name">
                              <Link to="#">Green Nike Fe</Link>
                            </h6>
                            <div className="d-flex align-items-center justify-content-between price">
                              <span>78 Pcs</span>
                              <p>$7847</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab_content" data-tab="mobile">
                      <div className="row">
                        <div className="col-sm-2 col-md-6 col-lg-3 col-xl-3">
                          <div className="product-info default-cover card">
                            <Link to="#" className="img-bg">
                              <ImageWithBasePath
                                src="assets/img/products/pos-product-01.png"
                                alt="Products"
                              />
                              <span>
                                <Check className="feather-16"/>
                              </span>
                            </Link>
                            <h6 className="cat-name">
                              <Link to="#">Mobiles</Link>
                            </h6>
                            <h6 className="product-name">
                              <Link to="#">IPhone 14 64GB</Link>
                            </h6>
                            <div className="d-flex align-items-center justify-content-between price">
                              <span>30 Pcs</span>
                              <p>$15800</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-2 col-md-6 col-lg-3 col-xl-3 pe-2">
                          <div className="product-info default-cover card">
                            <Link to="#" className="img-bg">
                              <ImageWithBasePath
                                src="assets/img/products/pos-product-14.png"
                                alt="Products"
                              />
                              <span>
                                <Check className="feather-16"/>
                              </span>
                            </Link>
                            <h6 className="cat-name">
                              <Link to="#">Mobiles</Link>
                            </h6>
                            <h6 className="product-name">
                              <Link to="#">Iphone 11</Link>
                            </h6>
                            <div className="d-flex align-items-center justify-content-between price">
                              <span>14 Pcs</span>
                              <p>$3654</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab_content" data-tab="watche">
                      <div className="row">
                        <div className="col-sm-2 col-md-6 col-lg-3 col-xl-3 pe-2">
                          <div className="product-info default-cover card">
                            <Link to="#" className="img-bg">
                              <ImageWithBasePath
                                src="assets/img/products/pos-product-03.png"
                                alt="Products"
                              />
                              <span>
                                <Check className="feather-16"/>
                              </span>
                            </Link>
                            <h6 className="cat-name">
                              <Link to="#">Watches</Link>
                            </h6>
                            <h6 className="product-name">
                              <Link to="#">Rolex Tribute V3</Link>
                            </h6>
                            <div className="d-flex align-items-center justify-content-between price">
                              <span>220 Pcs</span>
                              <p>$6800</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-2 col-md-6 col-lg-3 col-xl-3 pe-2">
                          <div className="product-info default-cover card">
                            <Link to="#" className="img-bg">
                              <ImageWithBasePath
                                src="assets/img/products/pos-product-09.png"
                                alt="Products"
                              />
                              <span>
                                <Check className="feather-16"/>
                              </span>
                            </Link>
                            <h6 className="cat-name">
                              <Link to="#">Watches</Link>
                            </h6>
                            <h6 className="product-name">
                              <Link to="#">Timex Black SIlver</Link>
                            </h6>
                            <div className="d-flex align-items-center justify-content-between price">
                              <span>24 Pcs</span>
                              <p>$1457</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-2 col-md-6 col-lg-3 col-xl-3 pe-2">
                          <div className="product-info default-cover card">
                            <Link to="#" className="img-bg">
                              <ImageWithBasePath
                                src="assets/img/products/pos-product-11.png"
                                alt="Products"
                              />
                              <span>
                                <Check className="feather-16"/>
                              </span>
                            </Link>
                            <h6 className="cat-name">
                              <Link to="#">Watches</Link>
                            </h6>
                            <h6 className="product-name">
                              <Link to="#">Fossil Pair Of 3 in 1 </Link>
                            </h6>
                            <div className="d-flex align-items-center justify-content-between price">
                              <span>40 Pcs</span>
                              <p>$789</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab_content" data-tab="laptop">
                      <div className="row">
                        <div className="col-sm-2 col-md-6 col-lg-3 col-xl-3 pe-2">
                          <div className="product-info default-cover card">
                            <Link to="#" className="img-bg">
                              <ImageWithBasePath
                                src="assets/img/products/pos-product-02.png"
                                alt="Products"
                              />
                              <span>
                                <Check className="feather-16"/>
                              </span>
                            </Link>
                            <h6 className="cat-name">
                              <Link to="#">Computer</Link>
                            </h6>
                            <h6 className="product-name">
                              <Link to="#">MacBook Pro</Link>
                            </h6>
                            <div className="d-flex align-items-center justify-content-between price">
                              <span>140 Pcs</span>
                              <p>$1000</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-2 col-md-6 col-lg-3 col-xl-3 pe-2">
                          <div className="product-info default-cover card">
                            <Link to="#" className="img-bg">
                              <ImageWithBasePath
                                src="assets/img/products/pos-product-07.png"
                                alt="Products"
                              />
                              <span>
                                <Check className="feather-16"/>
                              </span>
                            </Link>
                            <h6 className="cat-name">
                              <Link to="#">Laptop</Link>
                            </h6>
                            <h6 className="product-name">
                              <Link to="#">IdeaPad Slim 5 Gen 7</Link>
                            </h6>
                            <div className="d-flex align-items-center justify-content-between price">
                              <span>74 Pcs</span>
                              <p>$1454</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-2 col-md-6 col-lg-3 col-xl-3 pe-2">
                          <div className="product-info default-cover card">
                            <Link to="#" className="img-bg">
                              <ImageWithBasePath
                                src="assets/img/products/pos-product-10.png"
                                alt="Products"
                              />
                              <span>
                                <Check className="feather-16"/>
                              </span>
                            </Link>
                            <h6 className="cat-name">
                              <Link to="#">Computer</Link>
                            </h6>
                            <h6 className="product-name">
                              <Link to="#">Tablet 1.02 inch</Link>
                            </h6>
                            <div className="d-flex align-items-center justify-content-between price">
                              <span>14 Pcs</span>
                              <p>$4744</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-2 col-md-6 col-lg-3 col-xl-3 pe-2">
                          <div className="product-info default-cover card">
                            <Link to="#" className="img-bg">
                              <ImageWithBasePath
                                src="assets/img/products/pos-product-13.png"
                                alt="Products"
                              />
                              <span>
                                <Check className="feather-16"/>
                              </span>
                            </Link>
                            <h6 className="cat-name">
                              <Link to="#">Laptop</Link>
                            </h6>
                            <h6 className="product-name">
                              <Link to="#">Yoga Book 9i</Link>
                            </h6>
                            <div className="d-flex align-items-center justify-content-between price">
                              <span>65 Pcs</span>
                              <p>$4784</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-2 col-md-6 col-lg-3 col-xl-3 pe-2">
                          <div className="product-info default-cover card">
                            <Link to="#" className="img-bg">
                              <ImageWithBasePath
                                src="assets/img/products/pos-product-14.png"
                                alt="Products"
                              />
                              <span>
                                <Check className="feather-16"/>
                              </span>
                            </Link>
                            <h6 className="cat-name">
                              <Link to="#">Laptop</Link>
                            </h6>
                            <h6 className="product-name">
                              <Link to="#">IdeaPad Slim 3i</Link>
                            </h6>
                            <div className="d-flex align-items-center justify-content-between price">
                              <span>47 Pcs</span>
                              <p>$1245</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4 ps-0">
              <aside className="product-order-list">
                <div className="head d-flex align-items-center justify-content-between w-100">
                  <div className="">
                    <h5>Order List</h5>
                    <span>Transaction ID : #65565</span>
                  </div>
                  <div className="">
                    <Link className="confirm-text" to="#">
                      <Trash2 className="feather-16 text-danger me-1" />
                    </Link>
                    <Link to="#" className="text-default">
                      <MoreVertical className="feather-16" />
                    </Link>
                  </div>
                </div>
                <div className="customer-info block-section">
                  <h6>Customer Information</h6>
                  <div className="input-block d-flex align-items-center">
                    <div className="flex-grow-1">
                      <Select
                        options={customers}
                        classNamePrefix="react-select"
                        placeholder="Select an option"
                      />
                    </div>
                    <Link
                      to="#"
                      className="btn btn-primary btn-icon"
                      data-bs-toggle="modal"
                      data-bs-target="#create"
                    >
                      <UserPlus className="feather-16" />
                    </Link>
                  </div>
                  <div className="input-block">
                    <Select
                      options={products}
                      classNamePrefix="react-select"
                      placeholder="Select an option"
                    />
                  </div>
                </div>
                <div className="product-added block-section">
                  <div className="head-text d-flex align-items-center justify-content-between">
                    <h6 className="d-flex align-items-center mb-0">
                      Product Added<span className="count">2</span>
                    </h6>
                    <Link
                      to="#"
                      className="d-flex align-items-center text-danger"
                    >
                      <span className="me-1">
                        <i data-feather="x" className="feather-16" />
                      </span>
                      Clear all
                    </Link>
                  </div>
                  <div className="product-wrap">
                    <div className="product-list d-flex align-items-center justify-content-between">
                      <div
                        className="d-flex align-items-center product-info"
                        data-bs-toggle="modal"
                        data-bs-target="#products"
                      >
                        <Link to="#" className="img-bg">
                          <ImageWithBasePath
                            src="assets/img/products/pos-product-16.png"
                            alt="Products"
                          />
                        </Link>
                        <div className="info">
                          <span>PT0005</span>
                          <h6>
                            <Link to="#">Red Nike Laser</Link>
                          </h6>
                          <p>$2000</p>
                        </div>
                      </div>
                      <div className="qty-item text-center">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip id="tooltip-minus">Minus</Tooltip>}
                        >
                          <Link
                            to="#"
                            className="dec d-flex justify-content-center align-items-center"
                            onClick={handleDecrement}
                          >
                            <MinusCircle className="feather-14" />
                          </Link>
                        </OverlayTrigger>

                        <input
                          type="text"
                          className="form-control text-center"
                          name="qty"
                          value={quantity}
                          readOnly
                        />
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip id="tooltip-plus">Plus</Tooltip>}
                        >
                          <Link
                            to="#" onClick={handleIncrement}
                            className="inc d-flex justify-content-center align-items-center"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="plus"
                          >
                            <PlusCircle className="feather-14" />
                          </Link>
                        </OverlayTrigger>
                      </div>
                      <div className="d-flex align-items-center action">
                        <Link
                          className="btn-icon edit-icon me-2"
                          to="#"
                          data-bs-toggle="modal"
                          data-bs-target="#edit-product"
                        >
                          <Edit className="feather-14" />
                        </Link>
                        <Link onClick={showConfirmationAlert}
                          className="btn-icon delete-icon confirm-text"
                          to="#"
                        >
                          <Trash2 className="feather-14" />
                        </Link>
                      </div>
                    </div>
                    <div className="product-list d-flex align-items-center justify-content-between">
                      <div
                        className="d-flex align-items-center product-info"
                        data-bs-toggle="modal"
                        data-bs-target="#products"
                      >
                        <Link to="#" className="img-bg">
                          <ImageWithBasePath
                            src="assets/img/products/pos-product-17.png"
                            alt="Products"
                          />
                        </Link>
                        <div className="info">
                          <span>PT0235</span>
                          <h6>
                            <Link to="#">Iphone 14</Link>
                          </h6>
                          <p>$3000</p>
                        </div>
                      </div>
                      <div className="qty-item text-center">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip id="tooltip-minus">Minus</Tooltip>}
                        >
                          <Link
                            to="#"
                            className="dec d-flex justify-content-center align-items-center"
                            onClick={handleDecrement1}
                          >
                            <MinusCircle className="feather-14" />
                          </Link>
                        </OverlayTrigger>

                        <input
                          type="text"
                          className="form-control text-center"
                          name="qty"
                          value={quantity1}
                          readOnly
                        />

                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip id="tooltip-plus">Plus</Tooltip>}
                        >
                          <Link
                            to="#"
                            className="inc d-flex justify-content-center align-items-center"
                            onClick={handleIncrement1}
                          >
                            <PlusCircle className="feather-14" />
                          </Link>
                        </OverlayTrigger>
                      </div>
                      <div className="d-flex align-items-center action">
                        <Link
                          className="btn-icon edit-icon me-2"
                          to="#"
                          data-bs-toggle="modal"
                          data-bs-target="#edit-product"
                        >
                          <Edit className="feather-14" />
                        </Link>
                        <Link onClick={showConfirmationAlert}
                          className="btn-icon delete-icon confirm-text"
                          to="#"
                        >
                          <Trash2 className="feather-14" />
                        </Link>
                      </div>
                    </div>
                    <div className="product-list d-flex align-items-center justify-content-between">
                      <div
                        className="d-flex align-items-center product-info"
                        data-bs-toggle="modal"
                        data-bs-target="#products"
                      >
                        <Link to="#" className="img-bg">
                          <ImageWithBasePath
                            src="assets/img/products/pos-product-16.png"
                            alt="Products"
                          />
                        </Link>
                        <div className="info">
                          <span>PT0005</span>
                          <h6>
                            <Link to="#">Red Nike Laser</Link>
                          </h6>
                          <p>$2000</p>
                        </div>
                      </div>

                      <div className="qty-item text-center">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip id="tooltip-minus">Minus</Tooltip>}
                        >
                          <Link
                            to="#"
                            className="dec d-flex justify-content-center align-items-center"
                            onClick={handleDecrement2}
                          >
                            <MinusCircle className="feather-14" />
                          </Link>
                        </OverlayTrigger>

                        <input
                          type="text"
                          className="form-control text-center"
                          name="qty"
                          value={quantity2}
                          readOnly
                        />

                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip id="tooltip-plus">Plus</Tooltip>}
                        >
                          <Link
                            to="#"
                            className="inc d-flex justify-content-center align-items-center"
                            onClick={handleIncrement2}
                          >
                            <PlusCircle className="feather-14" />
                          </Link>
                        </OverlayTrigger>
                      </div>

                      <div className="d-flex align-items-center action">
                        <Link
                          className="btn-icon edit-icon me-2"
                          to="#"
                          data-bs-toggle="modal"
                          data-bs-target="#edit-product"
                        >
                          <Edit className="feather-14" />
                        </Link>
                        <Link className="btn-icon delete-icon confirm-text" to="#" onClick={showConfirmationAlert}>
                          <Trash2 className="feather-14" />
                        </Link>
                      </div>
                    </div>
                    <div className="product-list d-flex align-items-center justify-content-between">
                      <div
                        className="d-flex align-items-center product-info"
                        data-bs-toggle="modal"
                        data-bs-target="#products"
                      >
                        <Link to="#" className="img-bg">
                          <ImageWithBasePath
                            src="assets/img/products/pos-product-17.png"
                            alt="Products"
                          />
                        </Link>
                        <div className="info">
                          <span>PT0005</span>
                          <h6>
                            <Link to="#">Red Nike Laser</Link>
                          </h6>
                          <p>$2000</p>
                        </div>
                      </div>

                      <div className="qty-item text-center">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip id="tooltip-minus">Minus</Tooltip>}
                        >
                          <Link
                            to="#"
                            className="dec d-flex justify-content-center align-items-center"
                            onClick={handleDecrement3}
                          >
                            <MinusCircle className="feather-14" />
                          </Link>
                        </OverlayTrigger>

                        <input
                          type="text"
                          className="form-control text-center"
                          name="qty"
                          value={quantity3}
                          readOnly
                        />

                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip id="tooltip-plus">Plus</Tooltip>}
                        >
                          <Link
                            to="#"
                            className="inc d-flex justify-content-center align-items-center"
                            onClick={handleIncrement3}
                          >
                            <PlusCircle className="feather-14" />
                          </Link>
                        </OverlayTrigger>
                      </div>

                      <div className="d-flex align-items-center action">
                        <Link
                          className="btn-icon edit-icon me-2"
                          to="#"
                          data-bs-toggle="modal"
                          data-bs-target="#edit-product"
                        >
                          <i data-feather="edit" className="feather-14" />
                          <Edit className="feather-14" />
                        </Link>
                        <Link className="btn-icon delete-icon confirm-text" to="#" onClick={showConfirmationAlert}>
                          <Trash2 className='feather-14' />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="block-section">
                  <div className="selling-info">
                    <div className="row">
                      <div className="col-12 col-sm-4">
                        <div className="input-block">
                          <label>Order Tax</label>
                          <Select
                            classNamePrefix="react-select"
                            options={gst}
                            placeholder="GST 5%"
                          />

                        </div>
                      </div>
                      <div className="col-12 col-sm-4">
                        <div className="input-block">
                          <label>Shipping</label>
                          <Select
                            classNamePrefix="react-select"
                            options={shipping}
                            placeholder="15"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-sm-4">
                        <div className="input-block">
                          <label>Discount</label>
                          <Select
                            classNamePrefix="react-select"
                            options={discount}
                            placeholder="10%"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="order-total">
                    <table className="table table-responsive table-borderless">
                      <tbody>
                        <tr>
                          <td>Sub Total</td>
                          <td className="text-end">$60,454</td>
                        </tr>
                        <tr>
                          <td>Tax (GST 5%)</td>
                          <td className="text-end">$40.21</td>
                        </tr>
                        <tr>
                          <td>Shipping</td>
                          <td className="text-end">$40.21</td>
                        </tr>
                        <tr>
                          <td>Sub Total</td>
                          <td className="text-end">$60,454</td>
                        </tr>
                        <tr>
                          <td className="danger">Discount (10%)</td>
                          <td className="danger text-end">$15.21</td>
                        </tr>
                        <tr>
                          <td>Total</td>
                          <td className="text-end">$64,024.5</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="block-section payment-method">
                  <h6>Payment Method</h6>
                  <div className="row d-flex align-items-center justify-content-center methods">
                    <div className="col-md-6 col-lg-4 item">
                      <div className="default-cover">
                        <Link to="#">
                          <ImageWithBasePath
                            src="assets/img/icons/cash-pay.svg"
                            alt="Payment Method"
                          />
                          <span>Cash</span>
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 item">
                      <div className="default-cover">
                        <Link to="#">
                          <ImageWithBasePath
                            src="assets/img/icons/credit-card.svg"
                            alt="Payment Method"
                          />
                          <span>Debit Card</span>
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 item">
                      <div className="default-cover">
                        <Link to="#">
                          <ImageWithBasePath
                            src="assets/img/icons/qr-scan.svg"
                            alt="Payment Method"
                          />
                          <span>Scan</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-grid btn-block">
                  <Link className="btn btn-secondary" to="#">
                    Grand Total : $64,024.5
                  </Link>
                </div>
                <div className="btn-row d-sm-flex align-items-center justify-content-between">
                  <Link
                    to="#"
                    className="btn btn-info btn-icon flex-fill"
                    data-bs-toggle="modal"
                    data-bs-target="#hold-order"
                  >
                    <span className="me-1 d-flex align-items-center">
                      <i data-feather="pause" className="feather-16" />
                    </span>
                    Hold
                  </Link>
                  <Link
                    to="#"
                    className="btn btn-danger btn-icon flex-fill"
                  >
                    <span className="me-1 d-flex align-items-center">
                      <i data-feather="trash-2" className="feather-16" />
                    </span>
                    Void
                  </Link>
                  <Link
                    to="#"
                    className="btn btn-success btn-icon flex-fill"
                    data-bs-toggle="modal"
                    data-bs-target="#payment-completed"
                  >
                    <span className="me-1 d-flex align-items-center">
                      <i data-feather="credit-card" className="feather-16" />
                    </span>
                    Payment
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Completed */}
      <div
        className="modal fade modal-default"
        id="payment-completed"
        aria-labelledby="payment-completed"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body text-center">
              <form>
                <div className="icon-head">
                  <Link to="#">
                    <CheckCircle className="feather-40" />
                  </Link>
                </div>
                <h4>Payment Completed</h4>
                <p className="mb-0">
                  Do you want to Print Receipt for the Completed Order
                </p>
                <div className="modal-footer d-sm-flex justify-content-between">
                  <button
                    type="button"
                    className="btn btn-primary flex-fill me-1"
                    data-bs-toggle="modal"
                    data-bs-target="#print-receipt"
                  >
                    Print Receipt
                  </button>
                  <Link to="#" className="btn btn-secondary flex-fill">
                    Next Order
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Payment Completed */}
      {/* Print Receipt */}
      <div
        className="modal fade modal-default"
        id="print-receipt"
        aria-labelledby="print-receipt"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="d-flex justify-content-end">
              <button
                type="button"
                className="close p-0"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="icon-head text-center">
                <Link to="#">
                  <ImageWithBasePath
                    src="assets/img/logo.png"
                    width={100}
                    height={30}
                    alt="Receipt Logo"
                  />
                </Link>
              </div>
              <div className="text-center info text-center">
                <h6>Dreamguys Technologies Pvt Ltd.,</h6>
                <p className="mb-0">Phone Number: +1 5656665656</p>
                <p className="mb-0">
                  Email: <Link to="mailto:example@gmail.com">example@gmail.com</Link>
                </p>
              </div>
              <div className="tax-invoice">
                <h6 className="text-center">Tax Invoice</h6>
                <div className="row">
                  <div className="col-sm-12 col-md-6">
                    <div className="invoice-user-name">
                      <span>Name: </span>
                      <span>John Doe</span>
                    </div>
                    <div className="invoice-user-name">
                      <span>Invoice No: </span>
                      <span>CS132453</span>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div className="invoice-user-name">
                      <span>Customer Id: </span>
                      <span>#LL93784</span>
                    </div>
                    <div className="invoice-user-name">
                      <span>Date: </span>
                      <span>01.07.2022</span>
                    </div>
                  </div>
                </div>
              </div>
              <table className="table-borderless w-100 table-fit">
                <thead>
                  <tr>
                    <th># Item</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th className="text-end">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1. Red Nike Laser</td>
                    <td>$50</td>
                    <td>3</td>
                    <td className="text-end">$150</td>
                  </tr>
                  <tr>
                    <td>2. Iphone 14</td>
                    <td>$50</td>
                    <td>2</td>
                    <td className="text-end">$100</td>
                  </tr>
                  <tr>
                    <td>3. Apple Series 8</td>
                    <td>$50</td>
                    <td>3</td>
                    <td className="text-end">$150</td>
                  </tr>
                  <tr>
                    <td colSpan={4}>
                      <table className="table-borderless w-100 table-fit">
                        <tbody>
                          <tr>
                            <td>Sub Total :</td>
                            <td className="text-end">$700.00</td>
                          </tr>
                          <tr>
                            <td>Discount :</td>
                            <td className="text-end">-$50.00</td>
                          </tr>
                          <tr>
                            <td>Shipping :</td>
                            <td className="text-end">0.00</td>
                          </tr>
                          <tr>
                            <td>Tax (5%) :</td>
                            <td className="text-end">$5.00</td>
                          </tr>
                          <tr>
                            <td>Total Bill :</td>
                            <td className="text-end">$655.00</td>
                          </tr>
                          <tr>
                            <td>Due :</td>
                            <td className="text-end">$0.00</td>
                          </tr>
                          <tr>
                            <td>Total Payable :</td>
                            <td className="text-end">$655.00</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="text-center invoice-bar">
                <p>
                  **VAT against this challan is payable through central
                  registration. Thank you for your business!
                </p>
                <Link to="#">
                  <ImageWithBasePath src="assets/img/barcode/barcode-03.jpg" alt="Barcode" />
                </Link>
                <p>Sale 31</p>
                <p>Thank You For Shopping With Us. Please Come Again</p>
                <Link to="#" className="btn btn-primary">
                  Print Receipt
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Print Receipt */}
      {/* Products */}
      <div
        className="modal fade modal-default pos-modal"
        id="products"
        aria-labelledby="products"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header p-4 d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <h5 className="me-4">Products</h5>
                <span className="badge bg-info d-inline-block mb-0">
                  Order ID : #666614
                </span>
              </div>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body p-4">
              <form>
                <div className="product-wrap">
                  <div className="product-list d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center flex-fill">
                      <Link to="#" className="img-bg me-2">
                        <ImageWithBasePath
                          src="assets/img/products/pos-product-16.png"
                          alt="Products"
                        />
                      </Link>
                      <div className="info d-flex align-items-center justify-content-between flex-fill">
                        <div>
                          <span>PT0005</span>
                          <h6>
                            <Link to="#">Red Nike Laser</Link>
                          </h6>
                        </div>
                        <p>$2000</p>
                      </div>
                    </div>
                  </div>
                  <div className="product-list d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center flex-fill">
                      <Link to="#" className="img-bg me-2">
                        <ImageWithBasePath
                          src="assets/img/products/pos-product-17.png"
                          alt="Products"
                        />
                      </Link>
                      <div className="info d-flex align-items-center justify-content-between flex-fill">
                        <div>
                          <span>PT0235</span>
                          <h6>
                            <Link to="#">Iphone 14</Link>
                          </h6>
                        </div>
                        <p>$3000</p>
                      </div>
                    </div>
                  </div>
                  <div className="product-list d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center flex-fill">
                      <Link to="#" className="img-bg me-2">
                        <ImageWithBasePath
                          src="assets/img/products/pos-product-16.png"
                          alt="Products"
                        />
                      </Link>
                      <div className="info d-flex align-items-center justify-content-between flex-fill">
                        <div>
                          <span>PT0005</span>
                          <h6>
                            <Link to="#">Red Nike Laser</Link>
                          </h6>
                        </div>
                        <p>$2000</p>
                      </div>
                    </div>
                  </div>
                  <div className="product-list d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center flex-fill">
                      <Link to="#" className="img-bg me-2">
                        <ImageWithBasePath
                          src="assets/img/products/pos-product-17.png"
                          alt="Products"
                        />
                      </Link>
                      <div className="info d-flex align-items-center justify-content-between flex-fill">
                        <div>
                          <span>PT0005</span>
                          <h6>
                            <Link to="#">Red Nike Laser</Link>
                          </h6>
                        </div>
                        <p>$2000</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer d-sm-flex justify-content-end">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <Link to="#" className="btn btn-primary">
                    Submit
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Products */}
      <div
        className="modal fade"
        id="create"
        tabIndex={-1}
        aria-labelledby="create"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Create</h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="row">
                  <div className="col-lg-6 col-sm-12 col-12">
                    <div className="input-blocks">
                      <label>Customer Name</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-12 col-12">
                    <div className="input-blocks">
                      <label>Email</label>
                      <input type="email" className="form-control" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-12 col-12">
                    <div className="input-blocks">
                      <label>Phone</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-12 col-12">
                    <div className="input-blocks">
                      <label>Country</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-12 col-12">
                    <div className="input-blocks">
                      <label>City</label>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-12 col-12">
                    <div className="input-blocks">
                      <label>Address</label>
                      <input type="text" />
                    </div>
                  </div>
                </div>
                <div className="modal-footer d-sm-flex justify-content-end">
                  <button
                    type="button"
                    className="btn btn-cancel"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <Link to="#" className="btn btn-submit me-2">
                    Submit
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Hold */}
      <div
        className="modal fade modal-default pos-modal"
        id="hold-order"
        aria-labelledby="hold-order"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header p-4">
              <h5>Hold order</h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body p-4">
              <form>
                <h2 className="text-center p-4">4500.00</h2>
                <div className="input-block">
                  <label>Order Reference</label>
                  <input
                    className="form-control"
                    type="text"
                    defaultValue=""
                    placeholder=""
                  />
                </div>
                <p>
                  The current order will be set on hold. You can retreive this order
                  from the pending order button. Providing a reference to it might
                  help you to identify the order more quickly.
                </p>
                <div className="modal-footer d-sm-flex justify-content-end">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <Link to="#" className="btn btn-primary">
                    Confirm
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Hold */}
      {/* Edit Product */}
      <div
        className="modal fade modal-default pos-modal"
        id="edit-product"
        aria-labelledby="edit-product"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header p-4">
              <h5>Red Nike Laser</h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body p-4">
              <form>
                <div className="row">
                  <div className="col-lg-6 col-sm-12 col-12">
                    <div className="input-blocks add-product">
                      <label>
                        Product Name <span>*</span>
                      </label>
                      <input type="text" placeholder={45} />
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-12 col-12">
                    <div className="input-blocks add-product">
                      <label>
                        Tax Type <span>*</span>
                      </label>
                      <Select
                        classNamePrefix="react-select"
                        options={tax}
                        placeholder="Select Option"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-12 col-12">
                    <div className="input-blocks add-product">
                      <label>
                        Tax <span>*</span>
                      </label>
                      <input type="text" placeholder="% 15" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-12 col-12">
                    <div className="input-blocks add-product">
                      <label>
                        Discount Type <span>*</span>
                      </label>
                      <Select
                        classNamePrefix="react-select"
                        options={discounttype}
                        placeholder="Select Option"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-12 col-12">
                    <div className="input-blocks add-product">
                      <label>
                        Discount <span>*</span>
                      </label>
                      <input type="text" placeholder={15} />
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-12 col-12">
                    <div className="input-blocks add-product">
                      <label>
                        Sale Unit <span>*</span>
                      </label>
                      <Select
                        classNamePrefix="react-select"
                        options={units}
                        placeholder="Select Option"
                      />
                    </div>
                  </div>
                </div>
                <div className="modal-footer d-sm-flex justify-content-end">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <Link to="#" className="btn btn-primary">
                    Submit
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Edit Product */}
      {/* Recent Transactions */}
      <div
        className="modal fade pos-modal"
        id="recents"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header p-4">
              <h5 className="modal-title">Recent Transactions</h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body p-4">
              <div className="tabs-sets">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="purchase-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#purchase"
                      type="button"
                      aria-controls="purchase"
                      aria-selected="true"
                      role="tab"
                    >
                      Purchase
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="payment-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#payment"
                      type="button"
                      aria-controls="payment"
                      aria-selected="false"
                      role="tab"
                    >
                      Payment
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="return-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#return"
                      type="button"
                      aria-controls="return"
                      aria-selected="false"
                      role="tab"
                    >
                      Return
                    </button>
                  </li>
                </ul>
                <div className="tab-content">
                  <div
                    className="tab-pane fade show active"
                    id="purchase"
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
                          />
                          <Link to className="btn btn-searchset">
                            <i data-feather="search" className="feather-search" />
                          </Link>
                        </div>
                      </div>
                      <div className="wordset">
                        <ul>
                          <li>
                            <OverlayTrigger placement="top" overlay={renderTooltip}>
                              <Link>
                                <ImageWithBasePath src="assets/img/icons/pdf.svg" alt="img" />
                              </Link>
                            </OverlayTrigger>
                          </li>
                          <li>
                            <OverlayTrigger placement="top" overlay={renderExcelTooltip}>
                              <Link data-bs-toggle="tooltip" data-bs-placement="top">
                                <ImageWithBasePath src="assets/img/icons/excel.svg" alt="img" />
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
                        </ul>
                      </div>
                    </div>
                    <div className="table-responsive">
                      <table className="table datanew">
                        <thead>
                          <tr>
                            <th>Date</th>
                            <th>Reference</th>
                            <th>Customer</th>
                            <th>Amount </th>
                            <th className="no-sort">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>19 Jan 2023</td>
                            <td>INV/SL0101</td>
                            <td>Walk-in Customer</td>
                            <td>$1500.00</td>
                            <td className="action-table-data">
                              <div className="edit-delete-action">
                                <Link className="me-2 p-2" to="#">
                                  <i data-feather="eye" className="feather-eye" />
                                </Link>
                                <Link className="me-2 p-2" to="#">
                                  <i data-feather="edit" className="feather-edit" />
                                </Link>
                                <Link onClick={showConfirmationAlert}
                                  className="p-2 confirm-text"
                                  to="#"
                                >
                                  <i
                                    data-feather="trash-2"
                                    className="feather-trash-2"
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
                            <td className="action-table-data">
                              <div className="edit-delete-action">
                                <Link className="me-2 p-2" to="#">
                                  <i data-feather="eye" className="feather-eye" />
                                </Link>
                                <Link className="me-2 p-2" to="#">
                                  <i data-feather="edit" className="feather-edit" />
                                </Link>
                                <Link onClick={showConfirmationAlert}
                                  className="p-2 confirm-text"
                                  to="#"
                                >
                                  <i
                                    data-feather="trash-2"
                                    className="feather-trash-2"
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
                            <td className="action-table-data">
                              <div className="edit-delete-action">
                                <Link className="me-2 p-2" to="#">
                                  <i data-feather="eye" className="feather-eye" />
                                </Link>
                                <Link className="me-2 p-2" to="#">
                                  <i data-feather="edit" className="feather-edit" />
                                </Link>
                                <Link onClick={showConfirmationAlert}
                                  className="p-2 confirm-text"
                                  to="#"
                                >
                                  <i
                                    data-feather="trash-2"
                                    className="feather-trash-2"
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
                            <td className="action-table-data">
                              <div className="edit-delete-action">
                                <Link className="me-2 p-2" to="#">
                                  <i data-feather="eye" className="feather-eye" />
                                </Link>
                                <Link className="me-2 p-2" to="#">
                                  <i data-feather="edit" className="feather-edit" />
                                </Link>
                                <Link onClick={showConfirmationAlert}
                                  className="p-2 confirm-text"
                                  to="#"
                                >
                                  <i
                                    data-feather="trash-2"
                                    className="feather-trash-2"
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
                            <td className="action-table-data">
                              <div className="edit-delete-action">
                                <Link className="me-2 p-2" to="#">
                                  <i data-feather="eye" className="feather-eye" />
                                </Link>
                                <Link className="me-2 p-2" to="#">
                                  <i data-feather="edit" className="feather-edit" />
                                </Link>
                                <Link onClick={showConfirmationAlert}
                                  className="p-2 confirm-text"
                                  to="#"
                                >
                                  <i
                                    data-feather="trash-2"
                                    className="feather-trash-2"
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
                            <td className="action-table-data">
                              <div className="edit-delete-action">
                                <Link className="me-2 p-2" to="#">
                                  <i data-feather="eye" className="feather-eye" />
                                </Link>
                                <Link className="me-2 p-2" to="#">
                                  <i data-feather="edit" className="feather-edit" />
                                </Link>
                                <Link onClick={showConfirmationAlert}
                                  className="p-2 confirm-text"
                                  to="#"
                                >
                                  <i
                                    data-feather="trash-2"
                                    className="feather-trash-2"
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
                            <td className="action-table-data">
                              <div className="edit-delete-action">
                                <Link className="me-2 p-2" to="#">
                                  <i data-feather="eye" className="feather-eye" />
                                </Link>
                                <Link className="me-2 p-2" to="#">
                                  <i data-feather="edit" className="feather-edit" />
                                </Link>
                                <Link onClick={showConfirmationAlert}
                                  className="p-2 confirm-text"
                                  to="#"
                                >
                                  <i
                                    data-feather="trash-2"
                                    className="feather-trash-2"
                                  />
                                </Link>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="payment" role="tabpanel">
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
                      <div className="wordset">
                        <ul>
                          <li>
                            <OverlayTrigger placement="top" overlay={renderTooltip}>
                              <Link>
                                <ImageWithBasePath src="assets/img/icons/pdf.svg" alt="img" />
                              </Link>
                            </OverlayTrigger>
                          </li>
                          <li>
                            <OverlayTrigger placement="top" overlay={renderExcelTooltip}>
                              <Link data-bs-toggle="tooltip" data-bs-placement="top">
                                <ImageWithBasePath src="assets/img/icons/excel.svg" alt="img" />
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
                        </ul>
                      </div>
                    </div>
                    <div className="table-responsive">
                      <table className="table datanew">
                        <thead>
                          <tr>
                            <th>Date</th>
                            <th>Reference</th>
                            <th>Customer</th>
                            <th>Amount </th>
                            <th className="no-sort">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>19 Jan 2023</td>
                            <td>INV/SL0101</td>
                            <td>Walk-in Customer</td>
                            <td>$1500.00</td>
                            <td className="action-table-data">
                              <div className="edit-delete-action">
                                <Link className="me-2 p-2" to="#">
                                  <i data-feather="eye" className="feather-eye" />
                                </Link>
                                <Link className="me-2 p-2" to="#">
                                  <i data-feather="edit" className="feather-edit" />
                                </Link>
                                <Link onClick={showConfirmationAlert}
                                  className="p-2 confirm-text"
                                  to="#"
                                >
                                  <i
                                    data-feather="trash-2"
                                    className="feather-trash-2"
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
                            <td className="action-table-data">
                              <div className="edit-delete-action">
                                <Link className="me-2 p-2" to="#">
                                  <i data-feather="eye" className="feather-eye" />
                                </Link>
                                <Link className="me-2 p-2" to="#">
                                  <i data-feather="edit" className="feather-edit" />
                                </Link>
                                <Link onClick={showConfirmationAlert}
                                  className="p-2 confirm-text"
                                  to="#"
                                >
                                  <i
                                    data-feather="trash-2"
                                    className="feather-trash-2"
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
                            <td className="action-table-data">
                              <div className="edit-delete-action">
                                <Link className="me-2 p-2" to="#">
                                  <i data-feather="eye" className="feather-eye" />
                                </Link>
                                <Link className="me-2 p-2" to="#">
                                  <i data-feather="edit" className="feather-edit" />
                                </Link>
                                <Link onClick={showConfirmationAlert}
                                  className="p-2 confirm-text"
                                  to="#"
                                >
                                  <i
                                    data-feather="trash-2"
                                    className="feather-trash-2"
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
                            <td className="action-table-data">
                              <div className="edit-delete-action">
                                <Link className="me-2 p-2" to="#">
                                  <i data-feather="eye" className="feather-eye" />
                                </Link>
                                <Link className="me-2 p-2" to="#">
                                  <i data-feather="edit" className="feather-edit" />
                                </Link>
                                <Link onClick={showConfirmationAlert}
                                  className="p-2 confirm-text"
                                  to="#"
                                >
                                  <i
                                    data-feather="trash-2"
                                    className="feather-trash-2"
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
                            <td className="action-table-data">
                              <div className="edit-delete-action">
                                <Link className="me-2 p-2" to="#">
                                  <i data-feather="eye" className="feather-eye" />
                                </Link>
                                <Link className="me-2 p-2" to="#">
                                  <i data-feather="edit" className="feather-edit" />
                                </Link>
                                <Link onClick={showConfirmationAlert}
                                  className="p-2 confirm-text"
                                  to="#"
                                >
                                  <i
                                    data-feather="trash-2"
                                    className="feather-trash-2"
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
                            <td className="action-table-data">
                              <div className="edit-delete-action">
                                <Link className="me-2 p-2" to="#">
                                  <i data-feather="eye" className="feather-eye" />
                                </Link>
                                <Link className="me-2 p-2" to="#">
                                  <i data-feather="edit" className="feather-edit" />
                                </Link>
                                <Link onClick={showConfirmationAlert}
                                  className="p-2 confirm-text"
                                  to="#"
                                >
                                  <i
                                    data-feather="trash-2"
                                    className="feather-trash-2"
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
                            <td className="action-table-data">
                              <div className="edit-delete-action">
                                <Link className="me-2 p-2" to="#">
                                  <i data-feather="eye" className="feather-eye" />
                                </Link>
                                <Link className="me-2 p-2" to="#">
                                  <i data-feather="edit" className="feather-edit" />
                                </Link>
                                <Link onClick={showConfirmationAlert}
                                  className="p-2 confirm-text"
                                  to="#"
                                >
                                  <i
                                    data-feather="trash-2"
                                    className="feather-trash-2"
                                  />
                                </Link>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="return" role="tabpanel">
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
                      <div className="wordset">
                        <ul>
                          <li>
                            <OverlayTrigger placement="top" overlay={renderTooltip}>
                              <Link>
                                <ImageWithBasePath src="assets/img/icons/pdf.svg" alt="img" />
                              </Link>
                            </OverlayTrigger>
                          </li>
                          <li>
                            <OverlayTrigger placement="top" overlay={renderExcelTooltip}>
                              <Link data-bs-toggle="tooltip" data-bs-placement="top">
                                <ImageWithBasePath src="assets/img/icons/excel.svg" alt="img" />
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
                        </ul>
                      </div>
                    </div>
                    <div className="table-responsive">
                      <table className="table datanew">
                        <thead>
                          <tr>
                            <th>Date</th>
                            <th>Reference</th>
                            <th>Customer</th>
                            <th>Amount </th>
                            <th className="no-sort">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>19 Jan 2023</td>
                            <td>INV/SL0101</td>
                            <td>Walk-in Customer</td>
                            <td>$1500.00</td>
                            <td className="action-table-data">
                              <div className="edit-delete-action">
                                <Link className="me-2 p-2" to="#">
                                  <i data-feather="eye" className="feather-eye" />
                                </Link>
                                <Link className="me-2 p-2" to="#">
                                  <i data-feather="edit" className="feather-edit" />
                                </Link>
                                <Link onClick={showConfirmationAlert}
                                  className="p-2 confirm-text"
                                  to="#"
                                >
                                  <i
                                    data-feather="trash-2"
                                    className="feather-trash-2"
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
                            <td className="action-table-data">
                              <div className="edit-delete-action">
                                <Link className="me-2 p-2" to="#">
                                  <i data-feather="eye" className="feather-eye" />
                                </Link>
                                <Link className="me-2 p-2" to="#">
                                  <i data-feather="edit" className="feather-edit" />
                                </Link>
                                <Link onClick={showConfirmationAlert}
                                  className="p-2 confirm-text"
                                  to="#"
                                >
                                  <i
                                    data-feather="trash-2"
                                    className="feather-trash-2"
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
                            <td className="action-table-data">
                              <div className="edit-delete-action">
                                <Link className="me-2 p-2" to="#">
                                  <i data-feather="eye" className="feather-eye" />
                                </Link>
                                <Link className="me-2 p-2" to="#">
                                  <i data-feather="edit" className="feather-edit" />
                                </Link>
                                <Link onClick={showConfirmationAlert}
                                  className="p-2 confirm-text"
                                  to="#"
                                >
                                  <i
                                    data-feather="trash-2"
                                    className="feather-trash-2"
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
                            <td className="action-table-data">
                              <div className="edit-delete-action">
                                <Link className="me-2 p-2" to="#">
                                  <i data-feather="eye" className="feather-eye" />
                                </Link>
                                <Link className="me-2 p-2" to="#">
                                  <i data-feather="edit" className="feather-edit" />
                                </Link>
                                <Link onClick={showConfirmationAlert}
                                  className="p-2 confirm-text"
                                  to="#"
                                >
                                  <i
                                    data-feather="trash-2"
                                    className="feather-trash-2"
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
                            <td className="action-table-data">
                              <div className="edit-delete-action">
                                <Link className="me-2 p-2" to="#">
                                  <i data-feather="eye" className="feather-eye" />
                                </Link>
                                <Link className="me-2 p-2" to="#">
                                  <i data-feather="edit" className="feather-edit" />
                                </Link>
                                <Link onClick={showConfirmationAlert}
                                  className="p-2 confirm-text"
                                  to="#"
                                >
                                  <i
                                    data-feather="trash-2"
                                    className="feather-trash-2"
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
                            <td className="action-table-data">
                              <div className="edit-delete-action">
                                <Link className="me-2 p-2" to="#">
                                  <i data-feather="eye" className="feather-eye" />
                                </Link>
                                <Link className="me-2 p-2" to="#">
                                  <i data-feather="edit" className="feather-edit" />
                                </Link>
                                <Link onClick={showConfirmationAlert}
                                  className="p-2 confirm-text"
                                  to="#"
                                >
                                  <i
                                    data-feather="trash-2"
                                    className="feather-trash-2"
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
                            <td className="action-table-data">
                              <div className="edit-delete-action">
                                <Link className="me-2 p-2" to="#">
                                  <i data-feather="eye" className="feather-eye" />
                                </Link>
                                <Link className="me-2 p-2" to="#">
                                  <i data-feather="edit" className="feather-edit" />
                                </Link>
                                <Link onClick={showConfirmationAlert}
                                  className="p-2 confirm-text"
                                  to="#"
                                >
                                  <i
                                    data-feather="trash-2"
                                    className="feather-trash-2"
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
      {/* /Recent Transactions */}


      {/* Recent Transactions */}
      <div
        className="modal fade pos-modal"
        id="orders"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-md modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header p-4">
              <h5 className="modal-title">Orders</h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body p-4">
              <div className="tabs-sets">
                <ul className="nav nav-tabs" id="myTabs" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="onhold-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#onhold"
                      type="button"
                      aria-controls="onhold"
                      aria-selected="true"
                      role="tab"
                    >
                      Onhold
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="unpaid-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#unpaid"
                      type="button"
                      aria-controls="unpaid"
                      aria-selected="false"
                      role="tab"
                    >
                      Unpaid
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="paid-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#paid"
                      type="button"
                      aria-controls="paid"
                      aria-selected="false"
                      role="tab"
                    >
                      Paid
                    </button>
                  </li>
                </ul>
                <div className="tab-content">
                  <div
                    className="tab-pane fade show active"
                    id="onhold"
                    role="tabpanel"
                    aria-labelledby="onhold-tab"
                  >
                    <div className="table-top">
                      <div className="search-set w-100 search-order">
                        <div className="search-input w-100">
                          <input
                            type="text"
                            placeholder="Search"
                            className="form-control form-control-sm formsearch w-100"
                          />
                          <Link to className="btn btn-searchset">
                            <i data-feather="search" className="feather-search" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="order-body">
                      <div className="default-cover p-4 mb-4">
                        <span className="badge bg-secondary d-inline-block mb-4">
                          Order ID : #666659
                        </span>
                        <div className="row">
                          <div className="col-sm-12 col-md-6 record mb-3">
                            <table>
                              <tbody>
                                <tr className="mb-3">
                                  <td>Cashier</td>
                                  <td className="colon">:</td>
                                  <td className="text">admin</td>
                                </tr>
                                <tr>
                                  <td>Customer</td>
                                  <td className="colon">:</td>
                                  <td className="text">Botsford</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="col-sm-12 col-md-6 record mb-3">
                            <table>
                              <tbody>
                                <tr>
                                  <td>Total</td>
                                  <td className="colon">:</td>
                                  <td className="text">$900</td>
                                </tr>
                                <tr>
                                  <td>Date</td>
                                  <td className="colon">:</td>
                                  <td className="text">29-08-2023 13:39:11</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <p className="p-4">
                          Customer need to recheck the product once
                        </p>
                        <div className="btn-row d-sm-flex align-items-center justify-content-between">
                          <Link
                            to="#"
                            className="btn btn-info btn-icon flex-fill"
                          >
                            Open
                          </Link>
                          <Link
                            to="#"
                            className="btn btn-danger btn-icon flex-fill"
                          >
                            Products
                          </Link>
                          <Link
                            to="#"
                            className="btn btn-success btn-icon flex-fill"
                          >
                            Print
                          </Link>
                        </div>
                      </div>
                      <div className="default-cover p-4 mb-4">
                        <span className="badge bg-secondary d-inline-block mb-4">
                          Order ID : #666660
                        </span>
                        <div className="row">
                          <div className="col-sm-12 col-md-6 record mb-3">
                            <table>
                              <tbody>
                                <tr className="mb-3">
                                  <td>Cashier</td>
                                  <td className="colon">:</td>
                                  <td className="text">admin</td>
                                </tr>
                                <tr>
                                  <td>Customer</td>
                                  <td className="colon">:</td>
                                  <td className="text">Smith</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="col-sm-12 col-md-6 record mb-3">
                            <table>
                              <tbody>
                                <tr>
                                  <td>Total</td>
                                  <td className="colon">:</td>
                                  <td className="text">$15000</td>
                                </tr>
                                <tr>
                                  <td>Date</td>
                                  <td className="colon">:</td>
                                  <td className="text">30-08-2023 15:59:11</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <p className="p-4">
                          Customer need to recheck the product once
                        </p>
                        <div className="btn-row d-flex align-items-center justify-content-between">
                          <Link
                            to="#"
                            className="btn btn-info btn-icon flex-fill"
                          >
                            Open
                          </Link>
                          <Link
                            to="#"
                            className="btn btn-danger btn-icon flex-fill"
                          >
                            Products
                          </Link>
                          <Link
                            to="#"
                            className="btn btn-success btn-icon flex-fill"
                          >
                            Print
                          </Link>
                        </div>
                      </div>
                      <div className="default-cover p-4">
                        <span className="badge bg-secondary d-inline-block mb-4">
                          Order ID : #666661
                        </span>
                        <div className="row">
                          <div className="col-sm-12 col-md-6 record mb-3">
                            <table>
                              <tbody>
                                <tr className="mb-3">
                                  <td>Cashier</td>
                                  <td className="colon">:</td>
                                  <td className="text">admin</td>
                                </tr>
                                <tr>
                                  <td>Customer</td>
                                  <td className="colon">:</td>
                                  <td className="text">John David</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="col-sm-12 col-md-6 record mb-3">
                            <table>
                              <tbody>
                                <tr>
                                  <td>Total</td>
                                  <td className="colon">:</td>
                                  <td className="text">$2000</td>
                                </tr>
                                <tr>
                                  <td>Date</td>
                                  <td className="colon">:</td>
                                  <td className="text">01-09-2023 13:15:00</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <p className="p-4 mb-4">
                          Customer need to recheck the product once
                        </p>
                        <div className="btn-row d-flex align-items-center justify-content-between">
                          <Link
                            to="#"
                            className="btn btn-info btn-icon flex-fill"
                          >
                            Open
                          </Link>
                          <Link
                            to="#"
                            className="btn btn-danger btn-icon flex-fill"
                          >
                            Products
                          </Link>
                          <Link
                            to="#"
                            className="btn btn-success btn-icon flex-fill"
                          >
                            Print
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="unpaid" role="tabpanel">
                    <div className="table-top">
                      <div className="search-set w-100 search-order">
                        <div className="search-input w-100">
                          <input
                            type="text"
                            placeholder="Search"
                            className="form-control form-control-sm formsearch w-100"
                          />
                          <Link to className="btn btn-searchset">
                            <i data-feather="search" className="feather-search" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="order-body">
                      <div className="default-cover p-4 mb-4">
                        <span className="badge bg-info d-inline-block mb-4">
                          Order ID : #666662
                        </span>
                        <div className="row">
                          <div className="col-sm-12 col-md-6 record mb-3">
                            <table>
                              <tbody>
                                <tr className="mb-3">
                                  <td>Cashier</td>
                                  <td className="colon">:</td>
                                  <td className="text">admin</td>
                                </tr>
                                <tr>
                                  <td>Customer</td>
                                  <td className="colon">:</td>
                                  <td className="text">Anastasia</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="col-sm-12 col-md-6 record mb-3">
                            <table>
                              <tbody>
                                <tr>
                                  <td>Total</td>
                                  <td className="colon">:</td>
                                  <td className="text">$2500</td>
                                </tr>
                                <tr>
                                  <td>Date</td>
                                  <td className="colon">:</td>
                                  <td className="text">10-09-2023 17:15:11</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <p className="p-4">
                          Customer need to recheck the product once
                        </p>
                        <div className="btn-row d-flex align-items-center justify-content-between">
                          <Link
                            to="#"
                            className="btn btn-info btn-icon flex-fill"
                          >
                            Open
                          </Link>
                          <Link
                            to="#"
                            className="btn btn-danger btn-icon flex-fill"
                          >
                            Products
                          </Link>
                          <Link
                            to="#"
                            className="btn btn-success btn-icon flex-fill"
                          >
                            Print
                          </Link>
                        </div>
                      </div>
                      <div className="default-cover p-4 mb-4">
                        <span className="badge bg-info d-inline-block mb-4">
                          Order ID : #666663
                        </span>
                        <div className="row">
                          <div className="col-sm-12 col-md-6 record mb-3">
                            <table>
                              <tbody>
                                <tr className="mb-3">
                                  <td>Cashier</td>
                                  <td className="colon">:</td>
                                  <td className="text">admin</td>
                                </tr>
                                <tr>
                                  <td>Customer</td>
                                  <td className="colon">:</td>
                                  <td className="text">Lucia</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="col-sm-12 col-md-6 record mb-3">
                            <table>
                              <tbody>
                                <tr>
                                  <td>Total</td>
                                  <td className="colon">:</td>
                                  <td className="text">$1500</td>
                                </tr>
                                <tr>
                                  <td>Date</td>
                                  <td className="colon">:</td>
                                  <td className="text">11-09-2023 14:50:11</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <p className="p-4">
                          Customer need to recheck the product once
                        </p>
                        <div className="btn-row d-flex align-items-center justify-content-between">
                          <Link
                            to="#"
                            className="btn btn-info btn-icon flex-fill"
                          >
                            Open
                          </Link>
                          <Link
                            to="#"
                            className="btn btn-danger btn-icon flex-fill"
                          >
                            Products
                          </Link>
                          <Link
                            to="#"
                            className="btn btn-success btn-icon flex-fill"
                          >
                            Print
                          </Link>
                        </div>
                      </div>
                      <div className="default-cover p-4 mb-4">
                        <span className="badge bg-info d-inline-block mb-4">
                          Order ID : #666664
                        </span>
                        <div className="row">
                          <div className="col-sm-12 col-md-6 record mb-3">
                            <table>
                              <tbody>
                                <tr className="mb-3">
                                  <td>Cashier</td>
                                  <td className="colon">:</td>
                                  <td className="text">admin</td>
                                </tr>
                                <tr>
                                  <td>Customer</td>
                                  <td className="colon">:</td>
                                  <td className="text">Diego</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="col-sm-12 col-md-6 record mb-3">
                            <table>
                              <tbody>
                                <tr>
                                  <td>Total</td>
                                  <td className="colon">:</td>
                                  <td className="text">$30000</td>
                                </tr>
                                <tr>
                                  <td>Date</td>
                                  <td className="colon">:</td>
                                  <td className="text">12-09-2023 17:22:11</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <p className="p-4 mb-4">
                          Customer need to recheck the product once
                        </p>
                        <div className="btn-row d-flex align-items-center justify-content-between">
                          <Link
                            to="#"
                            className="btn btn-info btn-icon flex-fill"
                          >
                            Open
                          </Link>
                          <Link
                            to="#"
                            className="btn btn-danger btn-icon flex-fill"
                          >
                            Products
                          </Link>
                          <Link
                            to="#"
                            className="btn btn-success btn-icon flex-fill"
                          >
                            Print
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="paid" role="tabpanel">
                    <div className="table-top">
                      <div className="search-set w-100 search-order">
                        <div className="search-input w-100">
                          <input
                            type="text"
                            placeholder="Search"
                            className="form-control form-control-sm formsearch w-100"
                          />
                          <Link to className="btn btn-searchset">
                            <i data-feather="search" className="feather-search" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="order-body">
                      <div className="default-cover p-4 mb-4">
                        <span className="badge bg-primary d-inline-block mb-4">
                          Order ID : #666665
                        </span>
                        <div className="row">
                          <div className="col-sm-12 col-md-6 record mb-3">
                            <table>
                              <tbody>
                                <tr className="mb-3">
                                  <td>Cashier</td>
                                  <td className="colon">:</td>
                                  <td className="text">admin</td>
                                </tr>
                                <tr>
                                  <td>Customer</td>
                                  <td className="colon">:</td>
                                  <td className="text">Hugo</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="col-sm-12 col-md-6 record mb-3">
                            <table>
                              <tbody>
                                <tr>
                                  <td>Total</td>
                                  <td className="colon">:</td>
                                  <td className="text">$5000</td>
                                </tr>
                                <tr>
                                  <td>Date</td>
                                  <td className="colon">:</td>
                                  <td className="text">13-09-2023 19:39:11</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <p className="p-4">
                          Customer need to recheck the product once
                        </p>
                        <div className="btn-row d-flex align-items-center justify-content-between">
                          <Link
                            to="#"
                            className="btn btn-info btn-icon flex-fill"
                          >
                            Open
                          </Link>
                          <Link
                            to="#"
                            className="btn btn-danger btn-icon flex-fill"
                          >
                            Products
                          </Link>
                          <Link
                            to="#"
                            className="btn btn-success btn-icon flex-fill"
                          >
                            Print
                          </Link>
                        </div>
                      </div>
                      <div className="default-cover p-4 mb-4">
                        <span className="badge bg-primary d-inline-block mb-4">
                          Order ID : #666666
                        </span>
                        <div className="row">
                          <div className="col-sm-12 col-md-6 record mb-3">
                            <table>
                              <tbody>
                                <tr className="mb-3">
                                  <td>Cashier</td>
                                  <td className="colon">:</td>
                                  <td className="text">admin</td>
                                </tr>
                                <tr>
                                  <td>Customer</td>
                                  <td className="colon">:</td>
                                  <td className="text">Antonio</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="col-sm-12 col-md-6 record mb-3">
                            <table>
                              <tbody>
                                <tr>
                                  <td>Total</td>
                                  <td className="colon">:</td>
                                  <td className="text">$7000</td>
                                </tr>
                                <tr>
                                  <td>Date</td>
                                  <td className="colon">:</td>
                                  <td className="text">15-09-2023 18:39:11</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <p className="p-4">
                          Customer need to recheck the product once
                        </p>
                        <div className="btn-row d-flex align-items-center justify-content-between">
                          <Link
                            to="#"
                            className="btn btn-info btn-icon flex-fill"
                          >
                            Open
                          </Link>
                          <Link
                            to="#"
                            className="btn btn-danger btn-icon flex-fill"
                          >
                            Products
                          </Link>
                          <Link
                            to="#"
                            className="btn btn-success btn-icon flex-fill"
                          >
                            Print
                          </Link>
                        </div>
                      </div>
                      <div className="default-cover p-4 mb-4">
                        <span className="badge bg-primary d-inline-block mb-4">
                          Order ID : #666667
                        </span>
                        <div className="row">
                          <div className="col-sm-12 col-md-6 record mb-3">
                            <table>
                              <tbody>
                                <tr className="mb-3">
                                  <td>Cashier</td>
                                  <td className="colon">:</td>
                                  <td className="text">admin</td>
                                </tr>
                                <tr>
                                  <td>Customer</td>
                                  <td className="colon">:</td>
                                  <td className="text">MacQuoid</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="col-sm-12 col-md-6 record mb-3">
                            <table>
                              <tbody>
                                <tr>
                                  <td>Total</td>
                                  <td className="colon">:</td>
                                  <td className="text">$7050</td>
                                </tr>
                                <tr>
                                  <td>Date</td>
                                  <td className="colon">:</td>
                                  <td className="text">17-09-2023 19:39:11</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <p className="p-4 mb-4">
                          Customer need to recheck the product once
                        </p>
                        <div className="btn-row d-flex align-items-center justify-content-between">
                          <Link
                            to="#"
                            className="btn btn-info btn-icon flex-fill"
                          >
                            Open
                          </Link>
                          <Link
                            to="#"
                            className="btn btn-danger btn-icon flex-fill"
                          >
                            Products
                          </Link>
                          <Link
                            to="#"
                            className="btn btn-success btn-icon flex-fill"
                          >
                            Print
                          </Link>
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
      {/* /Recent Transactions */}


    </div>
  )
}

export default Pos