import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import dice from "../Assets/dice.svg";
import node from "../Assets/nodejs.svg";
import polygon from "../Assets/polygon.svg";
import next from "../Assets/nextjs.svg";
import digango from "../Assets/digango.svg";
import flutter from "../Assets/flutter.svg";
import kubernrtes from "../Assets/kubernrtes.svg";
import unreal from "../Assets/unreal.svg";
import yes from "../Assets/yes.svg";

export const Ourtech = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      {" "}
      <section
        className="we-are position-relative float-start w-100"
        style={{ paddingTop: "60px" }}
      >
        <div className="tech-icon">
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
        <div className="tech-icon-bottom">
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
        <div className="row">
          <div className="col-lg-12 col-md-12 col-xl-12 col-xxl-12 col-sm-12">
            <div className="section-main-title">
              <h1>&lt;Our Tech Stack&gt;</h1>
            </div>
          </div>

          <div className="col-lg-12 col-md-12 col-xl-12 col-xxl-12 col-sm-12">
            <div
              className="language"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Slider {...settings} style={{ width: "99%" }}>
                <div
                  class="owl-item cloned"
                  style={{ width: "140.857px", marginRight: "30px" }}
                >
                  <div class="item" style={{ marginRight: "30px" }}>
                    <div class="language-box">
                      <img
                        alt=""
                        loading="lazy"
                        width="100"
                        height="100"
                        decoding="async"
                        data-nimg="1"
                        src={polygon}
                        style={{ color: "transparent" }}
                      />
                    </div>
                  </div>
                </div>
                <div
                  class="owl-item cloned"
                  style={{ width: "140.857px", marginRight: "30px" }}
                >
                  <div class="item" style={{ marginRight: "30px" }}>
                    <div className="language-box language-box-shadow">
                      <img
                        alt=""
                        loading="lazy"
                        width="100"
                        height="100"
                        decoding="async"
                        data-nimg="1"
                        src={node}
                        style={{ color: "transparent" }}
                      />
                    </div>
                  </div>
                </div>
                <div
                  class="owl-item cloned"
                  style={{ width: "140.857px", marginRight: "30px" }}
                >
                  <div class="item" style={{ marginRight: "30px" }}>
                    <div className="language-box">
                      <img
                        alt=""
                        loading="lazy"
                        width="100"
                        height="100"
                        decoding="async"
                        data-nimg="1"
                        src={next}
                        style={{ color: "transparent" }}
                      />
                    </div>
                  </div>
                </div>

                <div
                  class="owl-item cloned"
                  style={{ width: "140.857px", marginRight: "30px" }}
                >
                  <div class="item" style={{ marginRight: "30px" }}>
                    <div className="language-box language-box-shadow">
                      <img
                        alt=""
                        loading="lazy"
                        width="100"
                        height="100"
                        decoding="async"
                        data-nimg="1"
                        src={kubernrtes}
                        style={{ color: "transparent" }}
                      />
                    </div>
                  </div>
                </div>
                <div
                  class="owl-item cloned"
                  style={{ width: "140.857px", marginRight: "30px" }}
                >
                  <div class="item" style={{ marginRight: "30px" }}>
                    <div className="language-box ">
                      <img
                        alt=""
                        loading="lazy"
                        width="100"
                        height="100"
                        decoding="async"
                        data-nimg="1"
                        src={digango}
                        style={{ color: "transparent" }}
                      />
                    </div>
                  </div>
                </div>
                <div
                  class="owl-item cloned"
                  style={{ width: "140.857px", marginRight: "30px" }}
                >
                  <div class="item" style={{ marginRight: "30px" }}>
                    <div className="language-box language-box-shadow">
                      <img
                        alt=""
                        loading="lazy"
                        width="100"
                        height="100"
                        decoding="async"
                        data-nimg="1"
                        src={unreal}
                        style={{ color: "transparent" }}
                      />
                    </div>
                  </div>
                </div>
                <div
                  class="owl-item cloned"
                  style={{ width: "140.857px", marginRight: "30px" }}
                >
                  <div class="item" style={{ marginRight: "30px" }}>
                    <div className="language-box">
                      <img
                        alt=""
                        loading="lazy"
                        width="100"
                        height="100"
                        decoding="async"
                        data-nimg="1"
                        src={polygon}
                        style={{ color: "transparent" }}
                      />
                    </div>
                  </div>
                </div>
                <div
                  class="owl-item cloned"
                  style={{ width: "140.857px", marginRight: "30px" }}
                >
                  <div class="item" style={{ marginRight: "30px" }}>
                    <div className="language-box language-box-shadow">
                      <img
                        alt=""
                        loading="lazy"
                        width="100"
                        height="100"
                        decoding="async"
                        data-nimg="1"
                        src={yes}
                        style={{ color: "transparent" }}
                      />
                    </div>
                  </div>
                </div>
                <div
                  class="owl-item cloned"
                  style={{ width: "140.857px", marginRight: "30px" }}
                >
                  <div class="item" style={{ marginRight: "30px" }}>
                    <div className="language-box">
                      <img
                        alt=""
                        loading="lazy"
                        width="100"
                        height="100"
                        decoding="async"
                        data-nimg="1"
                        src={flutter}
                        style={{ color: "transparent" }}
                      />
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
