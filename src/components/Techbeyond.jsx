import React from 'react'
import plane from "../Assets/plane-tea.svg";

export const Techbeyond = () => {
  return (
    <div> <section className="higher-plane posi-relative" style={{ zIndex: 0 }}>
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-xl-12 col-sm-12 col-xxl-12">
          <div className="plane-details posi-relative">
            <h1 className="plane-title">Tech Beyond Limits</h1>
            <div className="plane-tea">
              <img
                alt=""
                loading="lazy"
                width="100"
                height="100"
                decoding="async"
                data-nimg="1"
                className="zoom"
                src={plane}
              />
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-8 col-xl-6 col-sm-12 col-xxl-6 offset-md-4 offset-lg-6">
          <div className="plane-details posi-relative mb-0">
            <p className="home-tech-text">
              We are dedicated to pushing boundaries and exploring the
              boundless possibilities of technology. Join us on a journey
              where innovation knows no limits. With us, you'll enter a
              realm of endless innovation, where your imagination is the
              only constraint. Embrace a future without boundaries –that's
              our promise.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section></div>
  )
}
