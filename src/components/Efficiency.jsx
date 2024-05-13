import React from "react";

export const Efficiency = () => {
  return (
    <div>
      <section>
        <div className="journey-content posi-relative">
          <section className="journey posi-relative">
            <div className="container">
              <div className="row" style={{ justifyContent: "center" }}>
                <div className="col-lg-8 col-md-12 col-xl-8 col-xxl-8 col-sm-12">
                  <div className="journey-content posi-relative">
                    <div
                      className="section-main-title"
                      style={{ maxWidth: "600px", margin: "0 auto" }}
                    >
                      <h1 className="animated-txt">
                        Efficiency in{" "}
                        <span style={{ color: "#C46060" }}>Every </span> Byte.
                      </h1>
                    </div>
                    <div className="connect-title posi-relative contact-title-height">
                      <div className="title-bg"></div>
                      <div
                        className="text-para txt-justify"
                        style={{
                          color: "#192533!important",
                          position: "relative",
                          zIndex: "999",
                        }}
                      >
                        <div
                          className="Typewriter"
                          data-testid="typewriter-wrapper"
                        >
                          <span className="Typewriter__wrapper">
                            Employing a streamlined and cohesive strategy, we
                            meticulously manage our projects, guaranteeing
                            impeccable deliverables within designated timelines.
                            Our approach focuses on maintaining seamless
                            processes to achieve flawless outcomes consistently.
                          </span>
                          <span className="Typewriter__cursor">|</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};
