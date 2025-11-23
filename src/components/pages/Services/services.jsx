import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaCapsules,
  FaTruck,
  FaFlask,
  FaHospital,
  FaShieldAlt,
  FaUserMd,
} from "react-icons/fa";
import Servicesslider from "../../assets/serviceslider.png";

const Service = () => {
  const coreServices = [
    {
      icon: <FaCapsules />,
      title: "Manufacturing",
      text: "We produce a wide range of dosage forms including tablets, capsules, syrups, ointments, and powders. All our products are manufactured under strict GMP compliance and undergo rigorous quality testing.",
    },
    // {
    //   icon: <FaTruck />,
    //   title: "Distribution & Supply",
    //   text: "Our robust logistics and distribution network ensures timely delivery to clients both domestically and internationally, maintaining product integrity throughout the supply chain.",
    // },
    {
      icon: <FaFlask />,
      title: "Research & Development",
      text: "Our R&D team collaborates with international partners to develop patented molecules and innovative formulations. Clinical studies, stability testing, and research ensure product efficacy and safety.",
    },
    {
      icon: <FaHospital />,
      title: "Contract Manufacturing",
      text: "We partner with brands to provide scalable manufacturing solutions under strict confidentiality (NDA) and high-quality standards. From small batches to large-scale production, we cater to all requirements efficiently.",
    },
  ];

  const additionalServices = [
    {
      icon: <FaShieldAlt />,
      title: "Regulatory Compliance",
      text: "We handle FSSAI, GMP, and other regulatory requirements to ensure your products meet all legal and safety standards in every market.",
    },
    {
      icon: <FaUserMd />,
      title: "Consultation & Support",
      text: "Our experts provide end-to-end guidance on product development, quality assurance, and regulatory documentation, ensuring smooth business operations for our partners.",
    },
  ];

  return (
    <section className="services-section">
      {/* ---------- Top Banner ---------- */}
      <div className="position-relative">
        <img
          src={Servicesslider}
          alt="Banner"
          className="img-fluid w-100 slider-img"
        />
        <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
          <h1 className="fw-bold display-5" data-aos="zoom-in" data-aos-duration="1000">
            {/* Our Expertise in Every Dose */}
          </h1>
        </div>
      </div>

      {/* ---------- Main Section ---------- */}
      <Container className="py-5" data-aos="fade-up" data-aos-duration="1000">
        {/* ---------- Heading ---------- */}
        <div className="text-center mb-5">
          <h2 className="services-heading mb-3">Our Services</h2>
          <p className="text-muted mx-auto w-75 text-justify">
            At <strong>Italia Pharmaceuticals Pvt. Ltd.</strong>, we provide
            end-to-end pharmaceutical solutions combining innovation, quality,
            and compliance. From research to large-scale manufacturing, our
            services meet domestic and international market demands efficiently
            and safely.
          </p>
        </div>

        {/* ---------- Core Services ---------- */}
        <Row className="g-4 mb-5">
          {coreServices.map((service, index) => (
            <Col md={6} lg={3} key={index}>
              <Card
                className="service-card h-100 text-center p-4 border-0 rounded-4 shadow-sm"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div className="service-icon mb-3">{service.icon}</div>
                <Card.Title className="fw-bold text-easternblue mb-2">
                  {service.title}
                </Card.Title>
                <Card.Text className="text-muted text-justify small">
                  {service.text}
                </Card.Text>
              </Card>
            </Col>
          ))}
        </Row>

        {/* ---------- Additional Services ---------- */}
        <div data-aos="fade-up" className="text-center mb-4">
          <h3 className="services-heading">Additional Services</h3>
        </div>

        <Row className="g-4 mb-5 justify-content-center">
          {additionalServices.map((service, index) => (
            <Col md={6} lg={4} key={index}>
              <Card
                className="service-card h-100 text-center p-4 border-0 rounded-4 shadow-sm"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div className="service-icon mb-3">{service.icon}</div>
                <Card.Title className="fw-bold text-easternblue mb-2">
                  {service.title}
                </Card.Title>
                <Card.Text className="text-muted text-justify small">
                  {service.text}
                </Card.Text>
              </Card>
            </Col>
          ))}
        </Row>

        {/* ---------- Why Choose Us ---------- */}
        {/* <div className="why-choose-us text-center p-5 rounded-4" data-aos="fade-up">
          <h3 className="services-heading mb-4">
            Why Choose Italia Pharmaceuticals?
          </h3>
          <ul className="list-unstyled text-muted text-start mx-auto max-w-700">
            <li className="mb-2">✔ Eight GMP-compliant production sections ensuring top-quality output.</li>
            <li className="mb-2">✔ Patented molecules and international collaborations for innovation.</li>
            <li className="mb-2">✔ Large-scale production: tablets, capsules, liquids, ointments & more.</li>
            <li className="mb-2">✔ Reliable distribution network for domestic & international clients.</li>
            <li className="mb-2">✔ Dedicated R&D and regulatory support for every partnership.</li>
          </ul>
        </div> */}
        <div className="why-choose-us-section p-5 rounded-4" data-aos="fade-up">
  <h3 className="why-heading mb-4 fw-bold">
    Why Choose <span className="highlight-text">Italia Pharmaceuticals?</span>
  </h3>

  <ul className="why-list list-unstyled mx-auto max-w-700 fs-6">
    <li className="why-item d-flex justify-content-center align-items-center">
      <span className="tick">✔</span>
      Eight GMP-compliant production sections ensuring top-quality output.
    </li>

    <li className="why-item d-flex justify-content-center align-items-center">
      <span className="tick">✔</span>
      Patented molecules and international collaborations driving innovation.
    </li>

    <li className="why-item d-flex justify-content-center align-items-center">
      <span className="tick">✔</span>
      Large-scale production: tablets, capsules, liquids, ointments & more.
    </li>

    <li className="why-item d-flex justify-content-center align-items-center">
      <span className="tick">✔</span>
      Reliable domestic & international distribution network.
    </li>

    <li className="why-item d-flex justify-content-center align-items-center">
      <span className="tick">✔</span>
      Dedicated R&D and regulatory support for every partnership.
    </li>
  </ul>
</div>

      </Container>
    </section>
  );
};

export default Service;
