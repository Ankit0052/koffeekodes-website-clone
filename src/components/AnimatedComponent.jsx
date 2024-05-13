import React,{createRef} from "react";
import dice from "../Assets/dice.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const AnimatedComponent = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
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
  var slider = createRef();

  function handleLeftClick() {
    slider.current.slickNext();
  }
  function handleRightClick() {
    slider.current.slickPrev();
  }

  return (
    <div>
      <section className="process posi-relative">
        <div
          id="carouselExampleIndicators"
          className="carousel slide pointer-event"
          data-bs-ride="carousel"
          data-bs-interval="10000"
        >
          <div className="carousel-indicators indicators">
            <button className="btn-left" onClick={handleLeftClick}>&lt;/</button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className=""
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              className=""
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
              className=""
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
              className="active"
              aria-current="true"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="4"
              aria-label="Slide 5"
              className=""
            ></button>
            <button className="btn-left" onClick={handleRightClick}>/&gt;</button>
          </div>
          <div className="carousel-inner">
            <Slider ref={slider} {...settings}>
              <div>
                <div className="col-lg-7 col-md-8 col-xl-7 col-xxl-7 col-sm-12">
                  <div className="process-details posi-relative" id="section2">
                    <div className="digit">1.01</div>
                    <div className="process-title">Conceptualization</div>
                    <div className="posi-relative">
                      <div className="text-white type-writer-text">
                        <div
                          className="Typewriter"
                          data-testid="typewriter-wrapper"
                        >
                          <span className="Typewriter__wrapper">
                            A:/ Idea Generation: Creating or formulating new
                            concepts.
                            <br />
                            B:/ Project Start: Conceptualization phase begins
                            during the initial design stage.
                            <br />
                            C:/ Scope Definition: Outlining the project's
                            boundaries and objectives.
                          </span>
                          <span className="Typewriter__cursor">|</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-4 col-xl-5 col-xxl-5 col-sm-12">
                  <div className="process-img posi-relative">
                    <div className="process-dice">
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
                    <video autoplay="" muted="" loop="" id="video-background-1">
                      <source
                        src="/images/gears_rotate.webm"
                        type="video/webm"
                      />
                    </video>
                    <div className="process-dice-botton">
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
                  </div>
                </div>
              </div>
              <div>
                <div className="col-lg-7 col-md-8 col-xl-7 col-xxl-7 col-sm-12">
                  <div className="process-details posi-relative">
                    <div className="digit">2.01</div>
                    <div className="process-title">Brainstorming</div>
                    <div className="posi-relative">
                      <div className="text-white type-writer-text">
                        <div
                          className="Typewriter"
                          data-testid="typewriter-wrapper"
                        >
                          <span className="Typewriter__wrapper">
                            A:/ Brainstorming Method: Used by design teams to
                            tackle specific design challenges.
                            <br />
                            B:/ Idea Generation: Aims to create solutions for
                            well - defined design problems.
                            <br />
                            C:/ Controlled Environment: Conducted in a
                            structured setting. <br />
                            D:/ Free-Thinking: Encourages open and creative
                            thinking.
                            <br /> E:/ Approach: Utilizes techniques like "How
                            Might We" questions to address the problem
                          </span>
                          <span className="Typewriter__cursor">|</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-5 col-md-4 col-xl-5 col-xxl-5 col-sm-12">
                  <div className="process-img posi-relative">
                    <div className="process-dice">
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
                    <video autoplay="" muted="" loop="" id="video-background-1">
                      <source src="/images/idea_bulb.webm" type="video/webm" />
                    </video>
                    <div className="process-dice-botton">
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
                  </div>
                </div>
              </div>
              <div>
                <div className="col-lg-7 col-md-8 col-xl-7 col-xxl-7 col-sm-12">
                  <div className="process-details posi-relative">
                    <div className="digit">3.01</div>
                    <div className="process-title">Execution</div>
                    <div className="posi-relative">
                      <div className="text-white type-writer-text">
                        <div
                          className="Typewriter"
                          data-testid="typewriter-wrapper"
                        >
                          <span className="Typewriter__wrapper">
                            A:/ Execution Definition: Carrying out a plan or
                            action.
                            <br />
                            B:/ Multiple Contexts: Refers to putting someone to
                            death or implementing a plan.
                            <br />
                            C:/ Lethal Injection Example: Executing a convicted
                            criminal via lethal injection.
                            <br />
                            D:/ Project Completion Example: Refers to the manner
                            in which a project will be finalized.
                            <br />
                          </span>
                          <span className="Typewriter__cursor">|</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-4 col-xl-5 col-xxl-5 col-sm-12">
                  <div className="process-img posi-relative">
                    <div className="process-dice">
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
                    <video autoplay="" muted="" loop="" id="video-background-1">
                      <source
                        src="/images/rotate_slide.webm"
                        type="video/webm"
                      />
                    </video>
                    <div className="process-dice-botton">
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
                  </div>
                </div>
              </div>
              <div>
                <div className="col-lg-7 col-md-8 col-xl-7 col-xxl-7 col-sm-12">
                  <div className="process-details posi-relative">
                    <div className="digit">4.01</div>
                    <div className="process-title">Refining</div>
                    <div className="posi-relative">
                      <div className="text-white type-writer-text">
                        {" "}
                        <div
                          className="Typewriter"
                          data-testid="typewriter-wrapper"
                        >
                          <span className="Typewriter__wrapper">
                            A:/ Execution & Completion: Followed by the refining
                            process.
                            <br />
                            B:/Testing Phase: Evaluating projects with varied
                            parameters for desired outcomes.
                            <br />
                            C:/ Workflow Enhancement: Workflow management
                            solutions facilitate easy refinement.
                            <br />
                            D: /Adaptation to Change: Solutions allow adjustment
                            to evolving work environments.
                            <br />
                            E: /User-Friendly Interface: Involves simple drag -
                            and - drop functionality
                          </span>
                          <span className="Typewriter__cursor">|</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-4 col-xl-5 col-xxl-5 col-sm-12">
                  <div className="process-img posi-relative">
                    <div className="process-dice">
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
                    <video autoplay="" muted="" loop="" id="video-background-1">
                      <source
                        src="/images/laptop_coding.webm"
                        type="video/webm"
                      />
                    </video>
                    <div className="process-dice-botton">
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
                  </div>
                </div>
              </div>
              <div>
                <div className="col-lg-7 col-md-8 col-xl-7 col-xxl-7 col-sm-12">
                  <div className="process-details posi-relative">
                    <div className="digit">5.01</div>
                    <div className="process-title">Finalization</div>
                    <div className="posi-relative">
                      <div className="text-white type-writer-text">
                        {" "}
                        <div
                          className="Typewriter"
                          data-testid="typewriter-wrapper"
                        >
                          <span className="Typewriter__wrapper">
                            A:/ Finalization Process: Prepares product for
                            delivery.
                            <br />
                            B:/ Demo & Testing: Includes client - side testing
                            and demo.
                            <br />
                            C:/ Product Delivery: Occurs after successful demo
                            and testing.
                            <br />
                            D:/ Client Support: Ongoing assistance is provided
                            post - delivery.
                            <br />
                            E:/ Future Assistance: Ensures help and support for
                            present and future needs
                          </span>
                          <span className="Typewriter__cursor">|</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-4 col-xl-5 col-xxl-5 col-sm-12">
                  <div className="process-img posi-relative">
                    <div className="process-dice text-light">
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
                    <video autoplay="" muted="" loop="" id="video-background-1">
                      <source src="/images/coffee_cup.webm" type="video/webm" />
                    </video>
                    <div className="process-dice-botton">
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
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
};
