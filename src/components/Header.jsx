import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useNavigate } from "react-router-dom";
import logo from "../Assets/logo.svg";


function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="end" {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="side-menu">11111</div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Header() {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div>
        <div className="main-nav">
          <nav className="navbar navbar-expand-lg navbar-light bg-light p-0">
            <div className="container-fluid">
              <a className="navbar-brand">
                <img src={logo} style={{ maxWidth: "150px" }} alt="" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul
                  className="navbar-nav me-auto mb-2 mb-lg-0"
                  style={{ marginLeft: "40%" }}
                >
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      HOME
                    </a>
                    <div className="vertical"></div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      WORK
                    </a>
                    <div className="vertical"></div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      ABOUT
                    </a>
                    <div className="vertical"></div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      CAREER
                    </a>
                    <div className="vertical"></div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      DEDICATE
                    </a>
                  </li>
                </ul>
                <div className="login">
                  <a className="green-btn" style={{ margin: "0px 5px" }}>
                    CONTACT
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div>
       
      </div>
      <div>
      
      </div>
    </React.Fragment>
  );
}

export default Header;
