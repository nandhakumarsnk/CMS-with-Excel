"use client";
import React, { useEffect, useState } from "react";
import img1 from "../../../public/FoodImages/customer.jpg";
import Image from "next/image";
import "../Food/food.css";
import Isotope from "isotope-layout";
import { FaFacebook, FaTwitter } from "react-icons/fa6";
import { TiSocialInstagram } from "react-icons/ti";
import { Carousel } from "react-bootstrap";

const Food = ({ products, headers, footers }) => {
  console.log("Product", products);
  console.log("Product", headers);
  console.log("Product", headers?.header[0]?.name);
  console.log("Product", footers);
  const [activeFilter, setActiveFilter] = useState("");

  useEffect(() => {
    // Your isotope initialization
    const $grid = document.querySelector(".grid");
    const isotope = new Isotope($grid, {
      itemSelector: ".all",
      percentPosition: false,
      masonry: {
        columnWidth: ".all",
      },
    });

    // Function to handle filter click
    const handleFilterClick = (event) => {
      const filterValue = event.target.getAttribute("data-filter");
      setActiveFilter(filterValue);
      isotope.arrange({ filter: filterValue });
    };

    // Add click event listener to filter buttons
    const filterButtons = document.querySelectorAll(".filters_menu li");
    filterButtons.forEach((button) => {
      button.addEventListener("click", handleFilterClick);
    });

    // Cleanup function
    return () => {
      filterButtons.forEach((button) => {
        button.removeEventListener("click", handleFilterClick);
      });
    };
  }, []);

  return (
    <>
      <div className="hero_area">
        <div className="bg-box">
          {/* <Image src={BannerImg} alt="Img" /> */}
          <img src={headers?.header[0]?.bannerImage} alt="Img" />
        </div>

        <div className="container">
          <nav className="navbar navbar-expand-lg custom_nav-container d-flex justify-content-between align-items-center">
            <div className="container-fluid">
              <a className="navbar-brand" href="#" style={{ fontSize: "30px" }}>
                {headers?.header[0]?.name}
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item ">
                    <a className="nav-link ">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#menu">
                      Menu
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="slider_section">
            <div className="row">
              <div className="col-md-5">
                <div className="detail-box">
                  <h1>Fast Food Restaurant</h1>
                  <p>{headers?.header[0]?.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- end header section --> */}
      </div>

      <section id="menu" className="food_section layout_padding-bottom">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Our Menu</h2>
          </div>

          <ul className="filters_menu">
            <li className="active" data-filter="*">
              All
            </li>
            <li data-filter=".burger">Burger</li>
            <li data-filter=".pizza">Pizza</li>
            <li data-filter=".pasta">Pasta</li>
            <li data-filter=".fries">Fries</li>
          </ul>

          <div className="filters-content">
            <div className="row grid">
              {products?.product?.map((product, index) => (
                <>
                  <div className={`col-sm-6 col-lg-4 all ${product?.category}`}>
                    <div className="box">
                      <div>
                        <div className="img-box">
                          <img
                            // src="/FoodImages/banner_Img1.jpg"
                            src={product?.image}
                            alt="cu logo"
                            style={{ width: "100%", height: "auto" }}
                          />
                        </div>
                        <div className="detail-box">
                          <h5>{product.product}</h5>
                          <p>{product.discription}</p>
                          <div className="options">
                            <h6>${product.price}</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
          <div className="btn-box">
            <a href="">View More</a>
          </div>
        </div>
      </section>

      {/* <!-- client section --> */}

      <section className="client_section layout_padding-bottom">
        <div className="container">
          <div className="heading_container heading_center psudo_white_primary mb_45">
            <h2>What Says Our Customers</h2>
          </div>
          <div className="carousel-wrap row ">
            <div className="owl-carousel client_owl-carousel">
              <Carousel controls={false} indicators={false} interval={1000}>
                <Carousel.Item>
                  <div className="d-flex justify-content-around">
                    <div className="item">
                      <div className="box">
                        <div className="detail-box">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam
                          </p>
                          <div className="d-flex">
                            <div className="img-box">
                              <Image
                                src={img1}
                                alt="cu logo"
                                width={70}
                                height={70}
                              />
                            </div>
                            <span className="ms-3">
                              <h6>Nandha</h6>
                              <p>Bangalore</p>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="box">
                        <div className="detail-box">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam
                          </p>
                          <div className="d-flex">
                            <div className="img-box">
                              <Image
                                src={img1}
                                alt="cu logo"
                                width={70}
                                height={70}
                              />
                            </div>
                            <span className="ms-3">
                              <h6>Surya</h6>
                              <p>Chennai</p>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="d-flex justify-content-around">
                    <div className="item">
                      <div className="box">
                        <div className="detail-box">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam
                          </p>

                          <div className="d-flex">
                            <div className="img-box">
                              <Image
                                src={img1}
                                alt="cu logo"
                                width={70}
                                height={70}
                              />
                            </div>
                            <span className="ms-3">
                              <h6>Vijay</h6>
                              <p>Chennai</p>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="box">
                        <div className="detail-box">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam
                          </p>

                          <div className="d-flex">
                            <div className="img-box">
                              <Image
                                src={img1}
                                alt="cu logo"
                                width={70}
                                height={70}
                              />
                            </div>
                            <span className="ms-3">
                              <h6>Ajith</h6>
                              <p>Chennai</p>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- end client section --> */}

      {/* <!-- footer section --> */}
      <footer id="contact" className="footer_section">
        <div className="container">
          <div className="row">
            <div className="col-md-4 footer-col">
              <div className="footer_contact">
                <h4>Contact Us</h4>
                <div className="contact_link_box">
                  <a href="">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <span>{footers?.footer[0]?.location}</span>
                  </a>
                  <a href="">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <span>Call +91{footers?.footer[0]?.phone}</span>
                  </a>
                  <a href="">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <span>{footers?.footer[0]?.email}</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 footer-col">
              <div className="footer_detail">
                <a href="" className="footer-logo">
                  Nandha
                </a>
                <p>{footers?.footer[0]?.description}</p>
                <div className="footer_social">
                  <a
                    href={footers?.footer[0]?.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href={footers?.footer[0]?.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TiSocialInstagram />
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                  <a
                    href={footers?.footer[0]?.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter />
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 footer-col">
              <h4>Opening Hours</h4>
              <p>Everyday</p>
              <p>{footers?.footer[0]?.openingTime}</p>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- footer section --> */}
    </>
  );
};

export default Food;
