// CompanyOverview.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import companyImg from "../../assets/medicine.png"; // add a relevant image of the company

const CompanyOverview = () => {
  return (
    <section className="company-intro py-5">
      <Container>
        <Row className="align-items-center">
          {/* Left Side - Text */}
          <Col md={7} sm={12} className="mb-4">
            <h2 className="intro-heading mb-3">Overview Italia Pharmaceuticals Pvt Ltd</h2>
            <p className="text-justify">
              Italia Pharmaceuticals Private Limited is an active, private company based in Indore, Madhya Pradesh, involved in manufacturing metals, chemicals, and related products for nearly three decades. Incorporated on <strong>15 May 1996</strong>, the company is registered as a non-government, company limited by shares.
            </p>
           
          </Col>

          {/* Right Side - Image */}
          <Col>
            <img
              src={companyImg}
              alt="Italia Pharmaceuticals"
              className="img-fluid "
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CompanyOverview;
