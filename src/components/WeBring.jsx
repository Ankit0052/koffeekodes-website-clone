import React from "react";
import services from "../Assets/service-box.svg";
import dice from "../Assets/dice.svg";
import servicemore from "../Assets/service-more.svg";
import blockchain from "../Assets/blockchain.svg";
import web from "../Assets/web-development.svg";
import app from "../Assets/app-development.svg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const WeBring = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 702,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <section className="we-are position-relative float-start w-100">
        <div className="we-are-tea" style={{ left: "-25px" }}>
          <img
            alt=""
            loading="lazy"
            width="70"
            height="70"
            decoding="async"
            data-nimg="1"
            className="zoom"
            style={{ color: "transparent" }}
            src={services}
          />
        </div>
        <div className="tech-icon-bottom" style={{ bottom: "55px" }}>
          <img
            alt=""
            loading="lazy"
            width="70"
            height="70"
            decoding="async"
            data-nimg="1"
            className="zoom"
            style={{ color: "transparent" }}
            src={dice}
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-xl-12 col-xxl-12 col-sm-12">
              <div className="section-main-title">
                <h1>&lt;What We Bring&gt;</h1>
              </div>
              <div className="mt-2 position-relative float-start">
                <p className="text-para txt-justify">
                  We're committed to providing innovative, tailored solutions
                  that meet your unique needs. With expertise, reliability, and
                  creativity, we draw on our experience to ensure your success
                  in the ever-changing digital landscape. Consider us your
                  partner in excellence.
                </p>
              </div>
            </div>
          </div>

          <div className="services position-relative float-start w-100">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-xl-12 col-xxl-12 col-sm-12">
                <Slider {...settings}>
                  <div style={{ width: "352px",}}>
                    <div style={{marginRight:"40px"}}>
                      <div className="service-box posi-relative">
                        <div className="service-header">
                          <div
                            className="title-service text-para"
                            style={{ fontWeight: "600" }}
                          >
                            Blockchain Development
                          </div>
                          <div className="dotted">
                            <ul>
                              <li></li>
                              <li></li>
                              <li></li>
                            </ul>
                          </div>
                        </div>
                        <div className="service-img">
                          <img
                            alt=""
                            loading="lazy"
                            width="100"
                            height="100"
                            decoding="async"
                            data-nimg="1"
                            className="zoom"
                            src={blockchain}
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="service-footer posi-relative">
                          <div className="row" style={{ alignItems: "center" }}>
                            <div className="col-lg-9 col-9 col-xl-9 col-xxl-9">
                              <div className="posi-relative">
                                <p
                                  className="text-para"
                                  style={{
                                    textAlign: "left",
                                    fontSize: "15px",
                                    lineHeight: "24px",
                                  }}
                                >
                                  Blockchain development services refer to the
                                  range of services offered by...{" "}
                                </p>
                              </div>
                            </div>
                            <div className="col-lg-3 col-3 col-xl-3 col-xxl-3">
                              <a
                                className="service-more posi-relative"
                                href="/work"
                              >
                                <div className="more-box">
                                  <img
                                    alt=""
                                    loading="lazy"
                                    width="100"
                                    height="100"
                                    decoding="async"
                                    data-nimg="1"
                                    src={servicemore}
                                    style={{ color: "transparent" }}
                                  />
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item cloned" style={{ width: "352px", marginRight: "30px" }}>
                    <div className="item" style={{marginRight:"40px"}}>
                      <div className="service-box posi-relative">
                        <div className="service-header">
                          <div
                            className="title-service text-para"
                            style={{ fontWeight: "600" }}
                          >
                            Web Development
                          </div>
                          <div className="dotted">
                            <ul>
                              <li></li>
                              <li></li>
                              <li></li>
                            </ul>
                          </div>
                        </div>
                        <div className="service-img">
                          <img
                            alt=""
                            loading="lazy"
                            width="100"
                            height="100"
                            decoding="async"
                            data-nimg="1"
                            className="zoom"
                            src={web}
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="service-footer posi-relative">
                          <div className="row" style={{ alignItems: "center" }}>
                            <div className="col-lg-9 col-9 col-xl-9 col-xxl-9">
                              <div className="posi-relative">
                                <p
                                  className="text-para"
                                  style={{
                                    textAlign: "left",
                                    fontSize: "15px",
                                    lineHeight: "24px",
                                  }}
                                >
                                  Web development services encompass a wide
                                  range of offerings provided by...
                                </p>
                              </div>
                            </div>
                            <div className="col-lg-3 col-3 col-xl-3 col-xxl-3">
                              <a
                                className="service-more posi-relative"
                                href="/work"
                              >
                                <div className="more-box">
                                  <img
                                    alt=""
                                    loading="lazy"
                                    width="100"
                                    height="100"
                                    decoding="async"
                                    data-nimg="1"
                                    src={servicemore}
                                    style={{ color: "transparent" }}
                                  />
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item cloned" style={{ width: "352px", marginRight: "30px" }}>
                    <div className="item" style={{marginRight:"40px"}}>
                      <div className="service-box posi-relative">
                        <div className="service-header">
                          <div
                            className="title-service text-para"
                            style={{ fontWeight: "600" }}
                          >
                            Mobile App Development
                          </div>
                          <div className="dotted">
                            <ul>
                              <li></li>
                              <li></li>
                              <li></li>
                            </ul>
                          </div>
                        </div>
                        <div className="service-img">
                          <img
                            alt=""
                            loading="lazy"
                            width="100"
                            height="100"
                            decoding="async"
                            data-nimg="1"
                            className="zoom"
                            src={app}
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="service-footer posi-relative">
                          <div className="row" style={{ alignItems: "center" }}>
                            <div className="col-lg-9 col-9 col-xl-9 col-xxl-9">
                              <div className="posi-relative">
                                <p
                                  className="text-para"
                                  style={{
                                    textAlign: "left",
                                    fontSize: "15px",
                                    lineHeight: "24px",
                                  }}
                                >
                                  Mobile app development services encompass a
                                  comprehensive range of...{" "}
                                </p>
                              </div>
                            </div>
                            <div className="col-lg-3 col-3 col-xl-3 col-xxl-3">
                              <a
                                className="service-more posi-relative"
                                href="/work"
                              >
                                <div className="more-box">
                                  <img
                                    alt=""
                                    loading="lazy"
                                    width="100"
                                    height="100"
                                    decoding="async"
                                    data-nimg="1"
                                    src={servicemore}
                                    style={{ color: "transparent" }}
                                  />
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item" style={{ width: "352px", marginRight: "30px" }}>
                    <div className="item" style={{marginRight:"40px"}}>
                      <div className="service-box posi-relative">
                        <div className="service-header">
                          <div
                            className="title-service text-para"
                            style={{ fontWeight: "600" }}
                          >
                            Blockchain Development
                          </div>
                          <div className="dotted">
                            <ul>
                              <li></li>
                              <li></li>
                              <li></li>
                            </ul>
                          </div>
                        </div>
                        <div className="service-img">
                          <img
                            alt=""
                            loading="lazy"
                            width="100"
                            height="100"
                            decoding="async"
                            data-nimg="1"
                            className="zoom"
                            src={blockchain}
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="service-footer posi-relative">
                          <div className="row" style={{ alignItems: "center" }}>
                            <div className="col-lg-9 col-9 col-xl-9 col-xxl-9">
                              <div className="posi-relative">
                                <p
                                  className="text-para"
                                  style={{
                                    textAlign: "left",
                                    fontSize: "15px",
                                    lineHeight: "24px",
                                  }}
                                >
                                  Blockchain development services refer to the
                                  range of services offered by...{" "}
                                </p>
                              </div>
                            </div>
                            <div className="col-lg-3 col-3 col-xl-3 col-xxl-3">
                              <a
                                className="service-more posi-relative"
                                href="/work"
                              >
                                <div className="more-box">
                                  <img
                                    alt=""
                                    loading="lazy"
                                    width="100"
                                    height="100"
                                    decoding="async"
                                    data-nimg="1"
                                    src={servicemore}
                                    style={{ color: "transparent" }}
                                  />
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item" style={{ width: "352px", marginRight: "30px" }} >
                    <div className="item" style={{marginRight:"40px"}}>
                      <div className="service-box posi-relative">
                        <div className="service-header">
                          <div
                            className="title-service text-para"
                            style={{ fontWeight: "600" }}
                          >
                            Web Development
                          </div>
                          <div className="dotted">
                            <ul>
                              <li></li>
                              <li></li>
                              <li></li>
                            </ul>
                          </div>
                        </div>
                        <div className="service-img">
                          <img
                            alt=""
                            loading="lazy"
                            width="100"
                            height="100"
                            decoding="async"
                            data-nimg="1"
                            className="zoom"
                            src={web}
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="service-footer posi-relative">
                          <div className="row" style={{ alignItems: "center" }}>
                            <div className="col-lg-9 col-9 col-xl-9 col-xxl-9">
                              <div className="posi-relative">
                                <p
                                  className="text-para"
                                  style={{
                                    textAlign: "left",
                                    fontSize: "15px",
                                    lineHeight: "24px",
                                  }}
                                >
                                  Web development services encompass a wide
                                  range of offerings provided by...
                                </p>
                              </div>
                            </div>
                            <div className="col-lg-3 col-3 col-xl-3 col-xxl-3">
                              <a
                                className="service-more posi-relative"
                                href="/work"
                              >
                                <div className="more-box">
                                  <img
                                    alt=""
                                    loading="lazy"
                                    width="100"
                                    height="100"
                                    decoding="async"
                                    data-nimg="1"
                                    src={servicemore}
                                    style={{ color: "transparent" }}
                                  />
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item" style={{ width: "352px", marginRight: "30px" }}>
                    <div className="item" style={{marginRight:"40px"}}>
                      <div className="service-box posi-relative">
                        <div className="service-header">
                          <div
                            className="title-service text-para"
                            style={{ fontWeight: "600" }}
                          >
                            Mobile App Development
                          </div>
                          <div className="dotted">
                            <ul>
                              <li></li>
                              <li></li>
                              <li></li>
                            </ul>
                          </div>
                        </div>
                        <div className="service-img">
                          <img
                            alt=""
                            loading="lazy"
                            width="100"
                            height="100"
                            decoding="async"
                            data-nimg="1"
                            className="zoom"
                            src={app}
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="service-footer posi-relative">
                          <div className="row" style={{ alignItems: "center" }}>
                            <div className="col-lg-9 col-9 col-xl-9 col-xxl-9">
                              <div className="posi-relative">
                                <p
                                  className="text-para"
                                  style={{
                                    textAlign: "left",
                                    fontSize: "15px",
                                    lineHeight: "24px",
                                  }}
                                >
                                  Mobile app development services encompass a
                                  comprehensive range of...{" "}
                                </p>
                              </div>
                            </div>
                            <div className="col-lg-3 col-3 col-xl-3 col-xxl-3">
                              <a
                                className="service-more posi-relative"
                                href="/work"
                              >
                                <div className="more-box">
                                  <img
                                    alt=""
                                    loading="lazy"
                                    width="100"
                                    height="100"
                                    decoding="async"
                                    data-nimg="1"
                                    src={servicemore}
                                    style={{ color: "transparent" }}
                                  />
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item cloned active" style={{ width: "352px", marginRight: "30px" }}>
                    <div className="item" style={{marginRight:"40px"}}>
                      <div className="service-box posi-relative">
                        <div className="service-header">
                          <div
                            className="title-service text-para"
                            style={{ fontWeight: "600" }}
                          >
                            Blockchain Development
                          </div>
                          <div className="dotted">
                            <ul>
                              <li></li>
                              <li></li>
                              <li></li>
                            </ul>
                          </div>
                        </div>
                        <div className="service-img">
                          <img
                            alt=""
                            loading="lazy"
                            width="100"
                            height="100"
                            decoding="async"
                            data-nimg="1"
                            className="zoom"
                            src={blockchain}
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="service-footer posi-relative">
                          <div className="row" style={{ alignItems: "center" }}>
                            <div className="col-lg-9 col-9 col-xl-9 col-xxl-9">
                              <div className="posi-relative">
                                <p
                                  className="text-para"
                                  style={{
                                    textAlign: "left",
                                    fontSize: "15px",
                                    lineHeight: "24px",
                                  }}
                                >
                                  Blockchain development services refer to the
                                  range of services offered by...{" "}
                                </p>
                              </div>
                            </div>
                            <div className="col-lg-3 col-3 col-xl-3 col-xxl-3">
                              <a
                                className="service-more posi-relative"
                                href="/work"
                              >
                                <div className="more-box">
                                  <img
                                    alt=""
                                    loading="lazy"
                                    width="100"
                                    height="100"
                                    decoding="async"
                                    data-nimg="1"
                                    src={servicemore}
                                    style={{ color: "transparent" }}
                                  />
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item cloned active" style={{ width: "352px", marginRight: "30px" }}>
                    <div className="item" style={{marginRight:"40px"}}>
                      <div className="service-box posi-relative">
                        <div className="service-header">
                          <div
                            className="title-service text-para"
                            style={{ fontWeight: "600" }}
                          >
                            Web Development
                          </div>
                          <div className="dotted">
                            <ul>
                              <li></li>
                              <li></li>
                              <li></li>
                            </ul>
                          </div>
                        </div>
                        <div className="service-img">
                          <img
                            alt=""
                            loading="lazy"
                            width="100"
                            height="100"
                            decoding="async"
                            data-nimg="1"
                            className="zoom"
                            src={web}
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="service-footer posi-relative">
                          <div className="row" style={{ alignItems: "center" }}>
                            <div className="col-lg-9 col-9 col-xl-9 col-xxl-9">
                              <div className="posi-relative">
                                <p
                                  className="text-para"
                                  style={{
                                    textAlign: "left",
                                    fontSize: "15px",
                                    lineHeight: "24px",
                                  }}
                                >
                                  Web development services encompass a wide
                                  range of offerings provided by...
                                </p>
                              </div>
                            </div>
                            <div className="col-lg-3 col-3 col-xl-3 col-xxl-3">
                              <a
                                className="service-more posi-relative"
                                href="/work"
                              >
                                <div className="more-box">
                                  <img
                                    alt=""
                                    loading="lazy"
                                    width="100"
                                    height="100"
                                    decoding="async"
                                    data-nimg="1"
                                    src={servicemore}
                                    style={{ color: "transparent" }}
                                  />
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item cloned active" style={{ width: "352px", marginRight: "30px" }}>
                    <div className="item" style={{marginRight:"40px"}}>
                      <div className="service-box posi-relative">
                        <div className="service-header">
                          <div
                            className="title-service text-para"
                            style={{ fontWeight: "600" }}
                          >
                            Mobile App Development
                          </div>
                          <div className="dotted">
                            <ul>
                              <li></li>
                              <li></li>
                              <li></li>
                            </ul>
                          </div>
                        </div>
                        <div className="service-img">
                          <img
                            alt=""
                            loading="lazy"
                            width="100"
                            height="100"
                            decoding="async"
                            data-nimg="1"
                            className="zoom"
                            src={app}
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="service-footer posi-relative">
                          <div className="row" style={{ alignItems: "center" }}>
                            <div className="col-lg-9 col-9 col-xl-9 col-xxl-9">
                              <div className="posi-relative">
                                <p
                                  className="text-para"
                                  style={{
                                    textAlign: "left",
                                    fontSize: "15px",
                                    lineHeight: "24px;",
                                  }}
                                >
                                  Mobile app development services encompass a
                                  comprehensive range of...{" "}
                                </p>
                              </div>
                            </div>
                            <div className="col-lg-3 col-3 col-xl-3 col-xxl-3">
                              <a
                                className="service-more posi-relative"
                                href="/work"
                              >
                                <div className="more-box">
                                  <img
                                    alt=""
                                    loading="lazy"
                                    width="100"
                                    height="100"
                                    decoding="async"
                                    data-nimg="1"
                                    src={servicemore}
                                    style={{ color: "transparent" }}
                                  />
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
