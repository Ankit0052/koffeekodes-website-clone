import React from "react";
import tea from '../Assets/tea.svg'
import line from '../Assets/line.svg'

export const IntrestedInWorking = () => {
  return (
    <div>
      <section className="interest-work position-relative float-start w-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-xl-12 col-xxl-12 col-sm-12">
              <div className="work-interst w-100 position-relative float-start">
                <div className="chay-icon">
                  <img
                    alt=""
                    loading="lazy"
                    width="100"
                    height="100"
                    decoding="async"
                    data-nimg="1"
                    className="zoom"
                    style={{color:"transparent"}}
                    src={tea}
                  />
                </div>
                <div className="working-text position-relative float-start w-100">
                  Interested in Working
                  <br />
                  With Us?
                </div>
                <div className="contact-line  w-100 position-relative float-start">
                  <a
                    href="/"
                    type="button"
                    className="green-btn"
                  >
                    LAUNCH IT
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="line">
          <img
            alt=""
            loading="lazy"
            width="500"
            height="120"
            decoding="async"
            data-nimg="1"
            className="zoom"
            style={{color:"transparent"}}
            src={line}
          />
        </div>
      </section>
    </div>
  );
};
