import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';


const ServicesSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="services-section py-5">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="services-heading">Our Services</h2>
          <p>We provide a complete range of manufacturing and compliance solutions</p>
        </div>

        <div className="row">
          <div className="col-md-6 mb-4" data-aos="fade-right">
            <div className="service-card p-4 shadow rounded">
              <h5>Contract Manufacturing & Business Models</h5>
              <p>
                We offer our products on Loan License (LL), P2P, Contract Manufacturing, and Neutral Code basis.
              </p>
            </div>
          </div>

          <div className="col-md-6 mb-4" data-aos="fade-left">
            <div className="service-card p-4 shadow rounded">
              <h5>FSSAI Compliance Services</h5>
              <p>
                We provide complete FSSAI compliances for both companies and products ensuring regulatory adherence.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-4" data-aos="fade-up">
          <Link to="/services" className="btn btn-easternblue  btn-lg">
            See More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
