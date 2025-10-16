import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import label from"../../assets/slder3.png"
import pic2 from"../../assets/slider4.png"
import pic3 from"../../assets/slider5.png"
import pic4 from"../../assets/slider6.png"
import RnD from "../../assets/Research.png"

const ResearchAndDevelopment = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <main>
      {/* R&D Introduction Section */}
      <section className="company-intro " data-aos="fade-up">
        <div className="slider-container">
                      <img
                        className="d-block w-100 slider-img"
                        src={RnD}
                        alt="Banner"
                      />
                    </div>
        <Container>
          <br />
          <br />
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="intro-heading">Research & Development</h1>
              <p className="text-justify">
                At Italia Pharmaceutical Pvt. Ltd., our Research & Development division focuses on
                innovation, quality, and patient well-being. Our state-of-the-art facilities and dedicated
                scientists continuously work towards developing advanced pharmaceutical formulations that
                meet global standards.
              </p>
              <ul>
                <li>Innovative Drug Formulation and Development</li>
                <li>Advanced Analytical Testing and Method Validation</li>
                <li>Regulatory and Quality Compliance Research</li>
              </ul>
              <Button className="btn-easternblue mt-3">Explore Research</Button>
            </Col>
            <Col md={6} data-aos="zoom-in">
              <img
                src={label}
                alt="R&D Laboratory"
                className="slider-img img-fluid rounded"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Research Areas Section */}
      <section className="services-section py-5" data-aos="fade-up">
        <Container>
          <h2 className="services-heading mb-4">Our Key Research Areas</h2>
          <Row>
            <Col md={3} sm={6} className="mb-4">
              <Card className="service-card h-100">
                <Card.Body>
                  <Card.Title>Formulation Innovation</Card.Title>
                  <Card.Text className="text-justify">
                    Developing novel formulations to enhance drug efficacy, safety, and bioavailability.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3} sm={6} className="mb-4">
              <Card className="service-card h-100">
                <Card.Body>
                  <Card.Title>Analytical Research</Card.Title>
                  <Card.Text className="text-justify">
                    Utilizing advanced analytical techniques to ensure product consistency and reliability.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3} sm={6} className="mb-4">
              <Card className="service-card h-100">
                <Card.Body>
                  <Card.Title>Process Optimization</Card.Title>
                  <Card.Text className="text-justify">
                    Improving manufacturing processes to achieve efficiency and maintain high standards.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3} sm={6} className="mb-4">
              <Card className="service-card h-100">
                <Card.Body>
                  <Card.Title>Regulatory Science</Card.Title>
                  <Card.Text className="text-justify">
                    Ensuring compliance with international regulatory norms and standards in R&D.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Laboratory & Facilities Section */}
      <section className="popular-products py-5" data-aos="fade-up">
        <Container>
          <h2 className="popular-heading mb-4">Our Facilities</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="product-card contact-card h-100">
                <img
                  src={pic2}
                  alt="Analytical Lab"
                  className="product-img"
                />
                <Card.Body>
                  <h5>Analytical Laboratory</h5>
                  <p className="text-justify">
                    Equipped with advanced analytical instruments for precise and accurate testing.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-4">
              <Card className="product-card contact-card h-100">
                <img
                  src={pic3}
                  alt="Formulation Lab"
                  className="product-img"
                />
                <Card.Body>
                  <h5>Formulation Lab</h5>
                  <p className="text-justify">
                    Dedicated space for the development and testing of new drug delivery systems.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-4">
              <Card className="product-card contact-card h-100">
                <img
                  src={pic4}
                  alt="Research Team"
                  className="product-img"
                />
                <Card.Body>
                  <h5>R&D Collaboration</h5>
                  <p className="text-justify">
                    Collaborative initiatives with global partners to accelerate innovation and delivery.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Collaboration Section */}
      <section className="company-intro py-5" data-aos="fade-up">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h3 className="intro-heading">Partner With Us</h3>
              <p className="text-justify">
                Italia Pharmaceutical Pvt. Ltd. welcomes partnerships with research institutes and global
                pharmaceutical companies. Together, we aim to accelerate discoveries and transform healthcare.
              </p>
              <ul>
                <li>Joint development and innovation programs</li>
                <li>Technology transfer and licensing</li>
                <li>Clinical research collaborations</li>
              </ul>
              {/* <Button className="btn-easternblue mt-3">Contact R&D</Button> */}
            </Col>
            <Col md={6}>
              {/* <Card className="contact-form p-4"> */}
                {/* <form>
                  <Row>
                    <Col md={6} className="mb-3">
                      <input type="text" className="form-control" placeholder="Name" />
                    </Col>
                    <Col md={6} className="mb-3">
                      <input type="email" className="form-control" placeholder="Email" />
                    </Col>
                    <Col md={12} className="mb-3">
                      <input type="text" className="form-control" placeholder="Organization" />
                    </Col>
                    <Col md={12} className="mb-3">
                      <textarea className="form-control" rows="4" placeholder="Message"></textarea>
                    </Col>
                    <Col md={12} className="text-end">
                      <Button className="btn-easternblue">Send Message</Button>
                    </Col>
                  </Row>
                </form> */}
              {/* </Card> */}
            </Col>
          </Row>
        </Container>
      </section>

      
    </main>
  );
};

export default ResearchAndDevelopment;