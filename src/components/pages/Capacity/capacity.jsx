import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import picture1 from "../../assets/slider1 2.png"
import picture2 from "../../assets/Nutraceuticals.png"
import capacity from "../../assets/CAPACITYBANNER.png"

const Capacity = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="capacity-section">
      <div className="position-relative">
  {/* Image */}
  <img
    src={capacity}
    alt="Banner"
    className="img-fluid w-100 slider-img"
  />

  {/* Dark Overlay */}
  <div className="overlay-dark"></div>

  {/* Centered Text */}
  <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
    <h1
      className="fw-bold display-5"
      data-aos="zoom-in"
      data-aos-duration="1000"
    >
      OUR CAPACITY
    </h1>
  </div>
</div>
<br />
<br />
      <Container>
        {/* ---------- INTRO ---------- */}
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="intro-heading mb-3">Our Manufacturing Capacity</h2>
          <p className="text-muted mx-auto w-75 text-justify">
            Italia Pharma’s manufacturing facilities are designed to meet
            international standards with scalable production capacity for a wide
            range of pharmaceutical dosage forms. Our commitment to precision,
            quality, and technological excellence allows us to meet global
            healthcare demands efficiently.
          </p>
        </div>

        {/* ---------- FACILITY OVERVIEW ---------- */}
        <Row className="align-items-center mb-5" data-aos="fade-up">
          <Col md={6}>
            <img
              src={picture1}
              alt="Manufacturing Facility"
              className="img-fluid rounded shadow-sm"
            />
          </Col>
          <Col md={6}>
            <h4 className="intro-heading mb-3">State-of-the-Art Facilities</h4>
            <p className="text-justify">
              Our plants are equipped with modern machinery and automated
              systems that ensure consistent production quality. Each facility
              adheres to GMP and WHO guidelines, providing a controlled
              environment for manufacturing tablets, capsules, syrups, ointments,
              and more.
            </p>
            <ul>
              <li>Compliant with WHO-GMP and ISO standards</li>
              {/* <li>Dedicated zones for sterile and non-sterile manufacturing</li> */}
              <li>In-house quality control and microbiology labs</li>
              <li>Robust HVAC and water purification systems</li>
            </ul>
          </Col>
        </Row>

        {/* ---------- CAPACITY OVERVIEW ---------- */}
        <div className="text-center mb-4" data-aos="fade-up">
          <h3 className="services-heading">Production Capacity Overview</h3>
        </div>

        <Row data-aos="fade-up" className="g-4">
          <Col md={4}>
            <Card className="service-card h-100 p-3 text-center">
              <Card.Body>
                <h5 className="text-easternblue fw-bold">Tablets</h5>
                <p className="text-muted mb-0">
                  Capacity: <strong>60 million tablets/month</strong>
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="service-card h-100 p-3 text-center">
              <Card.Body>
                <h5 className="text-easternblue fw-bold">Capsules</h5>
                <p className="text-muted mb-0">
                  Capacity: <strong>40 million capsules/month</strong>
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="service-card h-100 p-3 text-center">
              <Card.Body>
                <h5 className="text-easternblue fw-bold">Liquids & Syrups</h5>
                <p className="text-muted mb-0">
                  Capacity: <strong>2 million bottles/month</strong>
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="service-card h-100 p-3 text-center">
              <Card.Body>
                <h5 className="text-easternblue fw-bold">Ointments & Creams</h5>
                <p className="text-muted mb-0">
                  Capacity: <strong>1 million tubes/month</strong>
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="service-card h-100 p-3 text-center">
              <Card.Body>
                <h5 className="text-easternblue fw-bold">Powder/Granuls</h5>
                <p className="text-muted mb-0">
                  Capacity: <strong>800,000 bottles/month</strong>
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="service-card h-100 p-3 text-center">
              <Card.Body>
                <h5 className="text-easternblue fw-bold">Sachets</h5>
                <p className="text-muted mb-0">
                  Capacity: <strong>500,000 Sachets/month</strong>
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* ---------- QUALITY & TECH ---------- */}
        <Row className="align-items-center mt-5" data-aos="fade-up">
          <Col md={6}>
            <h4 className="intro-heading mb-3">Quality & Technology</h4>
            <p className="text-justify">
              Italia Pharma’s success stems from our rigorous quality assurance
              and modern technological integration. Automated filling, precise
              granulation systems, and validated cleaning processes ensure the
              highest product standards. Every stage of production is monitored
              and validated by experienced professionals.
            </p>
            <ul>
              <li>Integrated ERP for batch traceability</li>
              {/* <li>Validated equipment with 21 CFR Part 11 compliance</li>
              <li>Real-time monitoring and data integrity systems</li> */}
            </ul>
          </Col>
          <Col md={6}>
            <img
              src={picture2}
              alt="Quality Control"
              className="img-fluid rounded shadow-sm"
            />
          </Col>
        </Row>

        {/* ---------- CTA SECTION ---------- */}
        <div className="text-center mt-5" data-aos="fade-up">
          <h4 className="intro-heading mb-3">
            Expanding with Excellence
          </h4>
          <p className="text-muted mx-auto w-75">
            With scalable infrastructure and a skilled workforce, Italia Pharma
            continues to expand its global reach while maintaining the highest
            quality benchmarks. We welcome new collaborations and contract
            manufacturing opportunities.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Capacity;
