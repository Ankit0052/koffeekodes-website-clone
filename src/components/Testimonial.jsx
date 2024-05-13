import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import discard from "../Assets/discard.svg";
import heattea from "../Assets/heat-tea.svg";
import dice from "../Assets/dice.svg";

export const Testimonial = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  

  return (
    <div>
      <section className="testimonial w-100 position-relative float-start">
        <div className="heat-tea">
          <img
            alt=""
            loading="lazy"
            width="100"
            height="100"
            decoding="async"
            data-nimg="1"
            className="zoom"
            style={{ color: "transparent" }}
            src={heattea}
          />
        </div>
        <div className="container">
          <div
            className="row position-relative"
            style={{ justifyContent: "center" }}
          >
            <div className="col-lg-10 col-md-12 col-xl-10 col-xxl-10 col-sm-12">
              <div className="testimonial-title float-start mb-5 position-relative">
                <h2>Testimonial_ _ _</h2>
              </div>
            </div>
            <Slider {...settings}>
              <div className="owl-item cloned" style={{ width: "428px", marginRight: "70px" }}>
                <div className="item position-relative float-start" style={{marginRight:"30px",marginLeft:"10px"}}>
                  <div className="testi-box position-relative float-start w-100">
                    <div className="d-flex testi-box-header">
                      <div className="test-iocn">
                        <img
                          alt=""
                          loading="lazy"
                          width="100"
                          height="100"
                          decoding="async"
                          data-nimg="1"
                          src={discard}
                          style={{ color: "transparent" }}
                        />
                      </div>
                      <p className="name home-tech-text"> Mehmet KÖSEOĞLU</p>
                    </div>
                    <div className="inner-box position-relative float-start w-100">
                      <div className="shadowback"></div>
                      <div className="d-block">
                        <div className="mb-3">
                          <i className="fa fa-quote-left quot "></i>
                        </div>
                        <div className="test-info w-100">
                          They have a huge team that provides reliable, high
                          service quality and fast solutions, we have worked
                          with them for many developments and we continue to
                          work with them. The right address for
                          success&nbsp;KoffeKodes!
                        </div>
                        <div className="mt-3">
                          <i className="fa fa-quote-right quot float-end"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-item cloned" style={{ width: "428px", marginRight: "70px" }}>
                <div className="item position-relative float-start" style={{marginRight:"30px",marginLeft:"10px"}}>
                  <div className="testi-box position-relative float-start w-100">
                    <div className="d-flex testi-box-header">
                      <div className="test-iocn">
                        <img
                          alt=""
                          loading="lazy"
                          width="100"
                          height="100"
                          decoding="async"
                          data-nimg="1"
                          src={discard}
                          style={{ color: "transparent" }}
                        />
                      </div>
                      <p className="name home-tech-text">
                        Sumiet - Govardhan Institute
                      </p>
                    </div>
                    <div className="inner-box position-relative float-start w-100">
                      <div className="shadowback"></div>
                      <div className="d-block">
                        <div className="mb-3">
                          <i className="fa fa-quote-left quot "></i>
                        </div>
                        <div className="test-info w-100">
                          KoffeeKodes is the firm to work with if you want to
                          keep up to high standards. The professional worklfows
                          they stick to result in exceptional&nbsp;quality.
                        </div>
                        <div className="mt-3">
                          <i className="fa fa-quote-right quot float-end"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-item active" style={{ width: "428px", marginRight: "70px" }}>
                <div className="item position-relative float-start" style={{marginRight:"30px",marginLeft:"10px"}}>
                  <div className="testi-box position-relative float-start w-100">
                    <div className="d-flex testi-box-header">
                      <div className="test-iocn">
                        <img
                          alt=""
                          loading="lazy"
                          width="100"
                          height="100"
                          decoding="async"
                          data-nimg="1"
                          src={discard}
                          style={{ color: "transparent" }}
                        />
                      </div>
                      <p className="name home-tech-text">Pratik Gada</p>
                    </div>
                    <div className="inner-box position-relative float-start w-100">
                      <div className="shadowback"></div>
                      <div className="d-block">
                        <div className="mb-3">
                          <i className="fa fa-quote-left quot "></i>
                        </div>
                        <div className="test-info w-100">
                          It’s been 3 years since we are working with
                          Koffeekodes. Never felt so homely with any other
                          team.Very hardworking,supportive and calm people,
                          always available with innovative solutions to most
                          complex issues. Overall great experience.{" "}
                        </div>
                        <div className="mt-3">
                          <i className="fa fa-quote-right quot float-end"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-item active" style={{ width: "428px", marginRight: "70px" }}>
                <div className="item position-relative float-start" style={{marginRight:"30px",marginLeft:"10px"}}>
                  <div className="testi-box position-relative float-start w-100">
                    <div className="d-flex testi-box-header">
                      <div className="test-iocn">
                        <img
                          alt=""
                          loading="lazy"
                          width="100"
                          height="100"
                          decoding="async"
                          data-nimg="1"
                          src={discard}
                          style={{ color: "transparent" }}
                        />
                      </div>
                      <p className="name home-tech-text">Mehmet KÖSEOĞLU</p>
                    </div>
                    <div className="inner-box position-relative float-start w-100">
                      <div className="shadowback"></div>
                      <div className="d-block">
                        <div className="mb-3">
                          <i className="fa fa-quote-left quot "></i>
                        </div>
                        <div className="test-info w-100">
                          They have a huge team that provides reliable, high
                          service quality and fast solutions, we have worked
                          with them for many developments and we continue to
                          work with them. The right address for
                          success&nbsp;KoffeKodes!
                        </div>
                        <div className="mt-3">
                          <i className="fa fa-quote-right quot float-end"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-item" style={{ width: "428px", marginRight: "70px" }}>
                <div className="item position-relative float-start" style={{marginRight:"30px",marginLeft:"10px"}}>
                  <div className="testi-box position-relative float-start w-100">
                    <div className="d-flex testi-box-header">
                      <div className="test-iocn">
                        <img
                          alt=""
                          loading="lazy"
                          width="100"
                          height="100"
                          decoding="async"
                          data-nimg="1"
                          src={discard}
                          style={{ color: "transparent" }}
                        />
                      </div>
                      <p className="name home-tech-text">
                        Sumiet - Govardhan Institute
                      </p>
                    </div>
                    <div className="inner-box position-relative float-start w-100">
                      <div className="shadowback"></div>
                      <div className="d-block">
                        <div className="mb-3">
                          <i className="fa fa-quote-left quot "></i>
                        </div>
                        <div className="test-info w-100">
                          KoffeeKodes is the firm to work with if you want to
                          keep up to high standards. The professional worklfows
                          they stick to result in exceptional&nbsp;quality.
                        </div>
                        <div className="mt-3">
                          <i className="fa fa-quote-right quot float-end"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-item cloned" style={{ width: "428px", marginRight: "70px" }} >
                <div className="item position-relative float-start" style={{marginRight:"50px"}}>
                  <div className="testi-box position-relative float-start w-100">
                    <div className="d-flex testi-box-header">
                      <div className="test-iocn">
                        <img
                          alt=""
                          loading="lazy"
                          width="100"
                          height="100"
                          decoding="async"
                          data-nimg="1"
                          src={discard}
                          style={{ color: "transparent" }}
                        />
                      </div>
                      <p className="name home-tech-text">Pratik Gada</p>
                    </div>
                    <div className="inner-box position-relative float-start w-100">
                      <div className="shadowback"></div>
                      <div className="d-block">
                        <div className="mb-3">
                          <i className="fa fa-quote-left quot "></i>
                        </div>
                        <div className="test-info w-100">
                          It’s been 3 years since we are working with
                          Koffeekodes. Never felt so homely with any other
                          team.Very hardworking,supportive and calm people,
                          always available with innovative solutions to most
                          complex issues. Overall great experience.{" "}
                        </div>
                        <div className="mt-3">
                          <i className="fa fa-quote-right quot float-end"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-item cloned" style={{ width: "428px", marginRight: "70px" }}>
                <div className="item position-relative float-start" style={{marginRight:"50px"}}>
                  <div className="testi-box position-relative float-start w-100">
                    <div className="d-flex testi-box-header">
                      <div className="test-iocn">
                        <img
                          alt=""
                          loading="lazy"
                          width="100"
                          height="100"
                          decoding="async"
                          data-nimg="1"
                          src={discard}
                          style={{ color: "transparent" }}
                        />
                      </div>
                      <p className="name home-tech-text"> Mehmet KÖSEOĞLU</p>
                    </div>
                    <div className="inner-box position-relative float-start w-100">
                      <div className="shadowback"></div>
                      <div className="d-block">
                        <div className="mb-3">
                          <i className="fa fa-quote-left quot "></i>
                        </div>
                        <div className="test-info w-100">
                          They have a huge team that provides reliable, high
                          service quality and fast solutions, we have worked
                          with them for many developments and we continue to
                          work with them. The right address for
                          success&nbsp;KoffeKodes!
                        </div>
                        <div className="mt-3">
                          <i className="fa fa-quote-right quot float-end"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
        <div className="dice">
              <img
                alt=""
                loading="lazy"
                width="100"
                height="100"
                decoding="async"
                data-nimg="1"
                className="zoom"
                style={{ color: "transparent" }}
                src={dice}
              />
            </div>
        {/* <div className="owl-nav disabled">
          <button type="button" role="presentation" className="owl-prev">
            <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
          </button>
          <button type="button" role="presentation" className="owl-next">
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </button>
        </div>
        <div className="owl-dots disabled"></div> */}
      </section>
    </div>
  );
};
