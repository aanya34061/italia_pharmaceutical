// Footer.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import logo from "../../assets/logo.png"; // logo path
import { NavLink } from "react-router-dom"; // optional if internal links needed


const Footer = () => {
  return (
    <footer className="blue text-white py-5">
      <Container>
        <Row className="mb-4 align-items-center">
          {/* Logo */}
          <Col md={4} sm={12} className="mb-3 text-center text-md-start">
            <NavLink to="/">
              <img src={logo} alt="Italia Pharmaceuticals Logo" className="logo-img mb-2" />
            </NavLink>
            <p className="mb-0">
              Office 57-58-A, Sector E,<br />
              Industrial Area, Sanwer Road,<br />
              Indore 452015
            </p>
          </Col>

          {/* Contact Info */}
          <Col md={4} sm={12} className="mb-3 text-center text-md-start">
            <h5>Contact Us</h5>
            <p className="mb-0">
              Phone: <a href="tel:+919669441222" className="text-white text-decoration-none">+91 9669441222</a><br />
              Email: <a href="mailto:info@italiapharmaceuticals.com" className="text-white text-decoration-none">info@italiapharmaceuticals.com</a>
            </p>
          </Col>

          {/* Social Media */}
          <Col md={4} sm={12} className="mb-3 text-center text-md-start">
            <h5>Follow Us</h5>
            <div className="d-flex gap-3 mt-2 justify-content-center justify-content-md-start">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-white fs-5 social-icon"><FaFacebookF /></a>
              <a href="https://www.linkedin.com/company/italia-pharmaceuticals-pvt-ltd/" target="_blank" rel="noopener noreferrer" className="text-white fs-5 social-icon"><FaLinkedinIn /></a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-white fs-5 social-icon"><FaTwitter /></a>
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="text-center mt-3">
            &copy; 2025 Italia Pharmaceuticals Pvt Ltd. All Rights Reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
