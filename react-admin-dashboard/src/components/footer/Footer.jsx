import React from "react";
import logo from "./dark.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="containers">
        {/* <div className="footer-cta pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <div className="cta-text">
                  <h4>Find us</h4>
                  <span>MIT-World Peace University, Paud Road, Pune</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <div className="cta-text">
                  <h4>Call us</h4>
                  <span>+91 2134567891</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <div className="cta-text">
                  <h4>Mail us</h4>
                  <span>konnect@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="footer-content pt-5 pb-5">
          <div className="row">
            {" "}
            <div className="row">
              <div className="col-xl-4 col-lg-4 mb-50">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <a href="/">
                      <img src={logo} className="img-fluid" alt="logo" />
                    </a>
                  </div>
                  <div className="footer-social-icon">
                    <span>Follow us</span>
                    <a href="#">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">about</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                    <li>
                      <a href="#">About us</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Subscribe</h3>
                  </div>
                  <div className="footer-text mb-25">
                    <p>
                      Don’t miss to subscribe to our new feeds, kindly fill the
                      form below.
                    </p>
                  </div>
                  <div className="subscribe-form">
                    <form action="#">
                      <input type="text" placeholder="Email Address" />
                      <button>
                        <FontAwesomeIcon icon={faPaperPlane} />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright-area">
        <div className="footerlastdiv">
          <div className="copyright-text" style={{ marginLeft: "25px" }}>
            <p>
              &copy; 2023, All Rights Reserved <a href="home.html">Konnect</a>
            </p>
          </div>
          <div className="footer-menu" style={{ marginRight: "25px" }}>
            <ul className="d-flex list-unstyled mb-0">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Policy</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
