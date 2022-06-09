import React from "react";
import "./Footer.css";
import {
  AiTwotoneMail,
  AiFillGithub,
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlinePhone,
} from "react-icons/ai";
import { FaAddressBook } from "react-icons/fa";

function Footer() {
  return (
    <React.Fragment>
      <div className="mainFooter">
        <div className="upperSocial">
          <div className="leftupperName">
            <h4>
              {" "}
              Explore our all articles and projects by clicking on links down
              below
            </h4>
          </div>
          <div className="rightupperName">
            <a href="/" className="me-4 text-reset">
              <AiFillFacebook />
            </a>
            <a href="/" className="me-4 text-reset">
              <AiFillTwitterCircle />
            </a>
            <a href="/" className="me-4 text-reset">
              <AiFillInstagram />
            </a>
            <a href="/" className="me-4 text-reset">
              <AiFillLinkedin />
            </a>
            <a href="/" className="me-4 text-reset">
              <AiFillGithub />
            </a>
          </div>
        </div>

        <div className="downFooter">
          <div className="left">
            <img
              className="Footerlogo"
              src={`${require("../../resources/logo.png")}`}
              alt="logo"
            />
          </div>
          <div className="middle">
            <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
            <p>
              <a href="https://triplegemsbilders.ca" className="text-reset">
                Home
              </a>
            </p>
            <p>
              <a
                href="https://triplegemsbilders.ca/services"
                className="text-reset"
              >
                Services
              </a>
            </p>
            <p>
              <a
                href="https://triplegemsbilders.ca/contact"
                className="text-reset"
              >
                Contact
              </a>
            </p>
            <p>
              <a
                href="https://triplegemsbilders.ca/about"
                className="text-reset"
              >
                About
              </a>
            </p>
          </div>
          <div className="right">
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p>
              <FaAddressBook /> Vancouver, Canada
            </p>
            <p>
              <a href="mailto:info@triplegemsbuilders.com">
                <AiTwotoneMail />
                info@triplegemsbuilders.com
              </a>
            </p>
            <p>
              <a href="tel: +1 (778)-996-3721">
                <AiOutlinePhone /> +1 (778)-996-3721
              </a>
            </p>
            <p>
              <a href="tel: +1 (778)-709-9007">
                <AiOutlinePhone /> +1 (778)-709-9007
              </a>
            </p>
          </div>
        </div>

        <div className="Copyright_div">
          {/* Copyright block */}
          <div className="copyright">
            <strong>© 2022 Copyright:</strong>
            <a
              className="text-reset fw-bold"
              href="https://triplegemsbuilders.ca/"
            >
              Triplegemsbuilders.ca
            </a>
          </div>

          {/* Designed and Hosted by */}
          <div className="copyright">
            <strong>2022 Copyright:</strong>
            <a className="text-reset fw-bold" href="https://sliwebbuilder.ca/">
              sliwebbuilder.ca
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Footer;
